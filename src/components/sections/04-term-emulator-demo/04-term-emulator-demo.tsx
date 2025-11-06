"use client";
import { useInView } from "@/components/hooks/useInView";
import { useEffect } from "react";
import {
    SectionName,
    useSection,
} from "@/components/hooks/contexts/SectionContext";
import { TerminalEmulator } from "@/components/common/terminal-emulator";

export const TermDemoSection = () => {
    const { ref, isInView } = useInView(0.5);
    const { setCurrentSection } = useSection();

    const code = `const enforceCoordBounds = (newCoords: CursorCoords) => {
    if (newCoords.x < 0) newCoords.x = 0;
    if (newCoords.y < 0) newCoords.y = 0;

    const currentLineLength = (chars[newCoords.y] ?? chars[chars.length - 1]).length;

    const hasChangedY = (newCoords.y - cursorCoords.y) != 0;

    if (hasChangedY) {
        newCoords.x = furthestX;
    }

    if (newCoords.x > furthestX) setFurthestX(newCoords.x);

    if (newCoords.x > currentLineLength - 1) newCoords.x = currentLineLength - 1;
    if (newCoords.y > chars.length - 1) newCoords.y = chars.length - 1;

    return newCoords;
};`;

    useEffect(() => {
        if (isInView) {
            setCurrentSection(SectionName.TerminalEmulatorDemo);
        }
    }, [isInView, setCurrentSection]);

    return (
        <section
            ref={ref}
            id="04-term-emulator-demo"
            className="flex h-screen w-full flex-row items-center justify-between"
        >
            <TerminalEmulator content={code} />
        </section>
    );
};
