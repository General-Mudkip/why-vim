"use client"
import { PressableKeyButton, PressableIconButton, PressableSpaceButton } from "@/components/button/pressable-button"
import { useKeyPressContext } from "@/components/contexts/KeyPressContext";
import { useSection } from "@/components/contexts/SectionContext";
import { useInView } from "@/components/hooks/useInView";
import { ArrowBigDown, ArrowBigLeft, ArrowBigRight, ArrowBigUp } from "lucide-react"
import { motion, useAnimationControls } from "motion/react";
import { useEffect, useMemo, useState } from "react";

export const HJKLSection = () => {
	const sectionName = "02 - HJKL"

	const { ref, isInView } = useInView(0.5);
	const { currentSection, setCurrentSection } = useSection()
	const { pressedKeys } = useKeyPressContext();
	const [sectionGoalKeys, setSectionGoalKeys] = useState(new Set<string>)
	const continueButtonControls = useAnimationControls();

	const [hasPassedGoal, setHasPassedGoal] = useState(false)
	const [hasContinued, setHasContinued] = useState(false)
	const [continueButtonPressed, setContinueButtonPressed] = useState(false)

	const targetKeys = useMemo(() => new Set(["h", "j", "k", "l"]), []);

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
				}
				return updatedKeys;
			});
		}
	}, [pressedKeys, currentSection, hasPassedGoal, sectionName, targetKeys]);

	useEffect(() => {
		if (hasPassedGoal) {
			continueButtonControls.start({
				opacity: [0, 1],
				y: [-5, 0],
				transition: {
					duration: 0.5,
					type: "spring"
				}
			})
		}
	}, [hasPassedGoal, continueButtonControls]);

	useEffect(() => {
		if (hasPassedGoal && !hasContinued && continueButtonPressed) {
			const nextSection = document.getElementById("03-time-game")
			if (nextSection) {
				nextSection.scrollIntoView({ behavior: "smooth" })
				setHasContinued(true)
			}
		}
	}, [continueButtonPressed, hasPassedGoal, hasContinued]);

	return (
		<section ref={ref} id="02-hjkl" className="flex font-share h-screen w-full gap-y-12 flex-col justify-center items-center">
			<p>
				One of the primary goals of Vim is to reduce <a href="https://en.wikipedia.org/wiki/Touch_typing" target="_blank">finger travel distance</a>.
				<br />
				Instead of using arrow keys, which are very far from the home row,
				<br />
				We use the <PressableKeyButton activatorKeys={["h"]} displayKey="H" size={"key"} />, <PressableKeyButton activatorKeys={["j"]} displayKey="J" size={"key"} />, <PressableKeyButton activatorKeys={["k"]} displayKey="K" size={"key"} />, and <PressableKeyButton activatorKeys={["l"]} displayKey="L" size={"key"} />,
				keys.
			</p>

			<div className="flex flex-col gap-y-4 items-center">
				<div className="flex flex-row gap-x-4">
					<PressableKeyButton activatorKeys={["h", "ArrowLeft"]} displayKey="H" activatedVariant="success" live={isInView} />
					<PressableKeyButton activatorKeys={["j", "ArrowDown"]} displayKey="J" activatedVariant="success" live={isInView} />
					<PressableKeyButton activatorKeys={["k", "ArrowUp"]} displayKey="K" activatedVariant="success" live={isInView} />
					<PressableKeyButton activatorKeys={["l", "ArrowRight"]} displayKey="L" activatedVariant="success" live={isInView} />
				</div>

				<span className="text-4xl">=</span>

				<div className="flex flex-row gap-x-4">
					<PressableIconButton activatorKeys={["h", "ArrowLeft"]} displayIcon={<ArrowBigLeft strokeWidth={1.5} />} activatedVariant="success" live={isInView} />
					<PressableIconButton activatorKeys={["j", "ArrowDown"]} displayIcon={<ArrowBigDown strokeWidth={1.5} />} activatedVariant="success" live={isInView} />
					<PressableIconButton activatorKeys={["k", "ArrowUp"]} displayIcon={<ArrowBigUp strokeWidth={1.5} />} activatedVariant="success" live={isInView} />
					<PressableIconButton activatorKeys={["l", "ArrowRight"]} displayIcon={<ArrowBigRight strokeWidth={1.5} />} activatedVariant="success" live={isInView} />
				</div>
			</div>

			<p>
				Try mock typing something, and then moving your hand to the arrow keys.
				<br />
				Contrast that with using the <PressableKeyButton activatorKeys={["h"]} displayKey="H" size={"key"} />, <PressableKeyButton activatorKeys={["j"]} displayKey="J" size={"key"} />, <PressableKeyButton activatorKeys={["k"]} displayKey="K" size={"key"} />, and <PressableKeyButton activatorKeys={["l"]} displayKey="L" size={"key"} /> keys.
			</p>

			<motion.div
				initial={{ opacity: 0 }}
				animate={continueButtonControls}
			>
				<PressableSpaceButton variant={"success"} activatorKeys={[" ", "Enter"]} stateController={setContinueButtonPressed} />
			</motion.div>
		</section>
	)
}
