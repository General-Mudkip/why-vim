"use client"
import { useState, useEffect, useCallback } from "react";

// Custom hook for detecting key presses
export function useKeyPress(targetKey: string) {
	// State to track whether the key is pressed
	const [isPressed, setIsPressed] = useState(false);

	// Handler for key down events
	const handleKeyDown = useCallback((event: KeyboardEvent) => {
		if (event.key === targetKey) {
			setIsPressed(true);
		}
	}, [targetKey]);

	// Handler for key up events
	const handleKeyUp = useCallback((event: KeyboardEvent) => {
		if (event.key === targetKey) {
			setIsPressed(false);
		}
	}, [targetKey]);

	// Add event listeners
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);

		// Clean up event listeners
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [handleKeyDown, handleKeyUp]);

	return isPressed;
}

// If you want a version that accepts a callback
export function useKeyPressCallback(targetKey: string, callback: (event: KeyboardEvent) => void) {
	// Handler for key down events
	const handleKeyDown = useCallback((event: KeyboardEvent) => {
		if (event.key === targetKey) {
			callback(event);
		}
	}, [targetKey, callback]);

	// Add event listeners
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);

		// Clean up event listeners
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown]);
}
