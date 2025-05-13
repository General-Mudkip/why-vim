"use client"

import { useSection } from "@/components/contexts/SectionContext";
import { useInView } from "@/components/hooks/useInView";
import { PressableKeyButton } from "@/components/button/pressable-button";
import { useEffect } from "react";
import { EnterGameSelector } from "./game-selector";

export const TimeGame = () => {
	const sectionName = "03 - HJKL Game"

	const { ref, isInView } = useInView(0.5);
	const { currentSection, setCurrentSection } = useSection()

	useEffect(() => {
		if (isInView) {
			setCurrentSection(sectionName);
		}
	}, [isInView]);

	return (
		<section ref={ref} id="03-time-game" className="flex font-share h-screen w-full gap-y-12 flex-col justify-center items-center">
			<p>
				But first, a quick game. Rest your
				<span title="Your second finger." className="font-bold underline decoration-dotted cursor-help inline px-1.5">index finger</span>
				on the <PressableKeyButton activatorKeys={["h"]} displayKey="H" size={"key"} /> key. <br />
				I'll highlight a random key, and you need to enter it.
			</p>

			<EnterGameSelector live={isInView} />
		</section>
	)
}
