"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export enum SectionName {
    Intro = "01 - Intro",
    HJKL = "02 - HJKL",
    TimeGame = "03 - Time Game",
    TerminalEmulatorDemo = "04 - Terminal Emulator Demo",
}

interface SectionContextProps {
    currentSection: SectionName;
    setCurrentSection: (section: SectionName) => void;
}

const SectionContext = createContext<SectionContextProps | undefined>(
    undefined,
);

export const SectionProvider = ({ children }: { children: ReactNode }) => {
    const [currentSection, setCurrentSection] = useState(SectionName.Intro);

    return (
        <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
            {children}
        </SectionContext.Provider>
    );
};

export const useSection = () => {
    const context = useContext(SectionContext);
    if (!context) {
        throw new Error("useSection must be used within a SectionProvider");
    }
    return context;
};
