"use client";

import { useEffect, useState } from "react";
import { useKeyPressContext } from "@/components/hooks/contexts/KeyPressContext";

export function useKeyPress({
    targetKeys,
    setParentState,
    enabled = true,
}: {
    targetKeys: string[];
    setParentState?: (newState: boolean) => void;
    enabled?: boolean;
}) {
    const { pressedKeys } = useKeyPressContext();
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        const targetedKeyIsPressed = targetKeys.some(
            (tKey) => pressedKeys.has(tKey) && enabled,
        );
        setIsPressed(targetedKeyIsPressed);

        if (setParentState) {
            setParentState(targetedKeyIsPressed);
        }
    }, [pressedKeys]);

    return isPressed;
}
