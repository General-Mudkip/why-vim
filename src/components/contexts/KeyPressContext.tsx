"use client";

import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from "react";

interface KeyPressContextProps {
	pressedKeys: Set<string>;
}

const KeyPressContext = createContext<KeyPressContextProps | undefined>(undefined);

export const KeyPressProvider = ({ children }: { children: ReactNode }) => {
	const [pressedKeys, setPressedKeys] = useState(new Set<string>());

	const handleKeyDown = useCallback((keyEvent: KeyboardEvent) => {
		if (keyEvent.key === " " || keyEvent.key === "ArrowDown" || keyEvent.key === "ArrowUp") {
			keyEvent.preventDefault();
		}

		setPressedKeys((prevKeys) =>
			new Set([...prevKeys, keyEvent.key])
		);
	}, []);

	const handleKeyUp = useCallback((event: KeyboardEvent) => {
		setPressedKeys((prevKeys) =>
			new Set([...prevKeys].filter((key) => key !== event.key))
		);
	}, []);

	// Add event listeners
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);

		// Clean up event listeners
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, []);

	return (
		<KeyPressContext.Provider value={{ pressedKeys }}>
			{children}
		</KeyPressContext.Provider>
	);
}

export const useKeyPressContext = () => {
	const context = useContext(KeyPressContext);
	if (!context) {
		throw new Error(
			"useKeyPressContext must be used within a KeyPressProvider"
		);
	}
	return context;
};
