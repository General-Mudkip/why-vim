"use client";

import {
	createContext,
	useContext,
	useState,
	type ReactNode,
} from "react";

interface SectionContextProps {
	currentSection: string;
	setCurrentSection: (section: string) => void;
}

const SectionContext = createContext<SectionContextProps | undefined>(undefined);

export const SectionProvider = ({ children, }: { children: ReactNode; }) => {
	const [currentSection, setCurrentSection] = useState("01 - Intro");

	return (
		<SectionContext.Provider value={{ currentSection, setCurrentSection }}>
			{children}
		</SectionContext.Provider>
	);
};

export const useSection = () => {
	const context = useContext(SectionContext);
	if (!context) {
		throw new Error(
			"useSection must be used within a SectionProvider"
		);
	}
	return context;
};
