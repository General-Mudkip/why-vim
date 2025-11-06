"use client";
import { useKeyPressContext } from "@/components/hooks/contexts/KeyPressContext";
import {
    SectionName,
    useSection,
} from "@/components/hooks/contexts/SectionContext";
import { useInView } from "@/components/hooks/useInView";
import { useAnimationControls } from "motion/react";
import { useEffect, useMemo, useState } from "react";

export const useHJKLSection = () => {
    const sectionName = SectionName.HJKL;

    const { ref, isInView } = useInView(0.5);
    const { currentSection, setCurrentSection } = useSection();
    const { pressedKeys } = useKeyPressContext();
    const [_, setSectionGoalKeys] = useState(new Set<string>());
    const continueButtonControls = useAnimationControls();

    const [hasPassedGoal, setHasPassedGoal] = useState(false);
    const [continueButtonPressed, setContinueButtonPressed] = useState(false);

    const targetKeys = useMemo(() => new Set(["h", "j", "k", "l"]), []);

    const enableButtons = useMemo(
        () => isInView && currentSection === sectionName,
        [isInView, currentSection],
    );

    useEffect(() => {
        if (isInView) {
            setCurrentSection(sectionName);
        }
    }, [isInView]);

    useEffect(() => {
        if (currentSection === sectionName && !hasPassedGoal) {
            setSectionGoalKeys((prevKeys) => {
                const updatedKeys = new Set(prevKeys);

                for (const key of targetKeys) {
                    if (pressedKeys.has(key)) {
                        updatedKeys.add(key);
                    }
                }

                if (updatedKeys.isSupersetOf(targetKeys)) {
                    setHasPassedGoal(true);

                    continueButtonControls.start({
                        opacity: [0, 1],
                        y: [-5, 0],
                        transition: {
                            duration: 0.5,
                            type: "spring",
                        },
                    });
                }
                return updatedKeys;
            });
        }
    }, [pressedKeys, currentSection, hasPassedGoal, sectionName, targetKeys]);

    useEffect(() => {
        if (hasPassedGoal && isInView && continueButtonPressed) {
            const nextSection = document.getElementById("03-time-game");
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [continueButtonPressed, hasPassedGoal, isInView]);

    return {
        ref,
        enableButtons,
        continueButtonControls,
        setContinueButtonPressed,
    };
};
