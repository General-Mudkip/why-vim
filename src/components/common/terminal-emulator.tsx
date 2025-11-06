import { useEffect, useMemo, useState } from "react";
import { useKeyPressContext } from "../hooks/contexts/KeyPressContext";

export type TerminalCapability = "hjkl" | "ft" | "bwe";

interface TerminalEmulatorProps {
    content?: string;
    capabilities?: TerminalCapability[];
}

interface CursorCoords {
    x: number;
    y: number;
}

const LINE_HEIGHT = 20; // px

export const TerminalEmulator = ({
    content = "hello world",
    capabilities = [],
}: TerminalEmulatorProps) => {
    const { pressedKeys } = useKeyPressContext();
    const [keyCooldowns, setKeyCooldowns] = useState<Record<string, boolean>>(
        {},
    );
    const [latestKey, setLatestKey] = useState<string>();
    const [cursorCoords, setCursorCoords] = useState<CursorCoords>({
        x: 0,
        y: 0,
    });
    const [furthestX, setFurthestX] = useState(0);

    const lines = useMemo(() => content.split("\n"), [content]);
    const chars = useMemo(() => lines.map((line) => line.split("")), [content]);

    const enforceCoordBounds = (newCoords: CursorCoords) => {
        // need this check twice :P
        if (newCoords.x < 0) newCoords.x = 0;
        if (newCoords.y < 0) newCoords.y = 0;

        const currentLineLength = (
            chars[newCoords.y] ?? chars[chars.length - 1]
        ).length;

        const hasChangedY = newCoords.y - cursorCoords.y != 0;

        if (hasChangedY) {
            newCoords.x = furthestX;
        }

        if (newCoords.x > furthestX) setFurthestX(newCoords.x);

        if (newCoords.x > currentLineLength - 1)
            newCoords.x = currentLineLength - 1;
        if (newCoords.y > chars.length - 1) newCoords.y = chars.length - 1;

        if (newCoords.x < 0) newCoords.x = 0;
        if (newCoords.y < 0) newCoords.y = 0;

        return newCoords;
    };

    const pressKey = (key: string) => {
        let newCoords = cursorCoords;
        if (pressedKeys.has(key) && !keyCooldowns[key]) {
            switch (key) {
                case "h": {
                    newCoords = { ...newCoords, x: newCoords.x - 1 };
                    setFurthestX(newCoords.x - 1);
                    break;
                }
                case "j": {
                    newCoords = { ...newCoords, y: newCoords.y + 1 };
                    break;
                }
                case "k": {
                    newCoords = { ...newCoords, y: newCoords.y - 1 };
                    break;
                }
                case "l": {
                    newCoords = { ...newCoords, x: newCoords.x + 1 };
                    break;
                }
            }

            setKeyCooldowns((prev) => ({ ...prev, [key]: true }));
            if (latestKey === key) {
                setTimeout(() => {
                    setKeyCooldowns((prev) => ({ ...prev, [key]: false }));
                }, 50);
            } else {
                setLatestKey(key);
                setTimeout(() => {
                    setKeyCooldowns((prev) => ({ ...prev, [key]: false }));
                }, 500);
            }
        }

        setCursorCoords(enforceCoordBounds(newCoords));
    };

    useEffect(() => {
        if (!pressedKeys.has(latestKey ?? "")) {
            setLatestKey(undefined);
            setKeyCooldowns((prev) => ({ ...prev, [latestKey ?? ""]: false }));
        }
        pressKey(Array.from(pressedKeys).pop() ?? "");
    }, [cursorCoords, pressedKeys]);

    return (
        <div
            id="vim-term"
            className="font-fira bg-gray-100 relative text-start whitespace-pre-wrap"
            style={{
                lineHeight: `${LINE_HEIGHT}px`,
                fontSize: "16px",
            }}
        >
            <p className="relative z-10">{content}</p>
            <span
                id="cursor"
                className={`absolute w-[1ch] z-20 backdrop-invert`}
                style={{
                    height: `${LINE_HEIGHT}px`,
                    top: `${cursorCoords.y * LINE_HEIGHT}px`,
                    left: `${cursorCoords.x}ch`,
                }}
            />
            <span
                id="line-highlight"
                className={`absolute left-0 w-full bg-gray-200`}
                style={{
                    height: `${LINE_HEIGHT}px`,
                    top: `${cursorCoords.y * LINE_HEIGHT}px`,
                }}
            />
        </div>
    );
};
