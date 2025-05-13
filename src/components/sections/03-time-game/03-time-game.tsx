"use client"

import { PressableKeyButton } from "@/components/button/pressable-button";
import { useSection } from "@/components/contexts/SectionContext";
import { useInView } from "@/components/hooks/useInView";
import { useEffect } from "react";

export const TimeGame = () => {
	const { ref, isInView } = useInView(0.5);
	const { currentSection, setCurrentSection } = useSection()

	useEffect(() => {
		if (isInView) {
			setCurrentSection("03 - Game #1");
		}
	}, [isInView]);

	return (
		<section ref={ref} id="03-time-game" className="flex font-share h-screen w-full gap-y-12 flex-col justify-center items-center">
			<div className="flex flex-row gap-x-4">
				<PressableKeyButton activatorKeys={["h", "ArrowLeft"]} displayKey="H" />
				<PressableKeyButton activatorKeys={["j", "ArrowDown"]} displayKey="J" />
				<PressableKeyButton activatorKeys={["k", "ArrowUp"]} displayKey="K" />
				<PressableKeyButton activatorKeys={["l", "ArrowRight"]} displayKey="L" />
			</div>
		</section>
	)
}
