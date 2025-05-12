"use client";

import { useEffect, useState } from "react";
import { useKeyPressContext } from "@/components/contexts/KeyPressContext";

export function useKeyPress(
	targetKeys: string[],
	setParentState?: React.Dispatch<React.SetStateAction<boolean>>
) {
	const { pressedKeys } = useKeyPressContext();
	const [isPressed, setIsPressed] = useState(false);

	useEffect(() => {
		const targetedKeyIsPressed = targetKeys.some((tKey) => pressedKeys.has(tKey))
		setIsPressed(targetedKeyIsPressed)

		if (setParentState) {
			setParentState(targetedKeyIsPressed)
		}
	}, [pressedKeys]);

	return isPressed;
}
