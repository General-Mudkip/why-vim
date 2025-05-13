"use client"

import { useSection } from "@/components/contexts/SectionContext";
import { useInView } from "@/components/hooks/useInView";
import { EnterGame } from "./game";
import { PressableKeyButton } from "@/components/button/pressable-button";

export const TimeGame = () => {
	const { ref, isInView } = useInView(0.5);
	const { currentSection, setCurrentSection } = useSection()

	return (
		<section ref={ref} id="03-time-game" className="flex font-share h-screen w-full gap-y-12 flex-col justify-center items-center">
			<p>
				But first, a quick game. Rest your index finger on the <PressableKeyButton activatorKeys={["h"]} displayKey="H" size={"key"} /> key. <br />
				I'll highlight a random key, and you need to enter it.
			</p>

			<EnterGame live={isInView} />
		</section>
	)
}
