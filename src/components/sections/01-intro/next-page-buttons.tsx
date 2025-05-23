"use client"
import { PressableIconButton, PressableKeyButton } from "@/components/button/pressable-button"
import { ArrowBigDown } from "lucide-react"
import { useEffect, useState } from "react";

export const HeroNextPageButtons = ({ live }: { live: boolean }) => {
	const [hasPressedJButton, setHasPressedJButton] = useState(false);
	const [hasPressedDownButton, setHasPressedDownButton] = useState(false);

	useEffect(() => {
		if ((hasPressedJButton || hasPressedDownButton) && live) {
			const nextSection = document.getElementById("02-hjkl")
			if (nextSection) {
				nextSection.scrollIntoView({ behavior: "smooth" })
			}
		}
	}, [hasPressedJButton, hasPressedDownButton])

	return (
		<div className="flex w-full flex-col items-center justify-center pt-8">
			<div className="flex items-center flex-row gap-4">
				<PressableKeyButton
					activatorKeys={["j"]}
					displayKey="J"
					stateController={setHasPressedJButton}
				/>
				<span>or</span>
				<PressableIconButton
					activatorKeys={["ArrowDown"]}
					displayIcon={<ArrowBigDown strokeWidth={1.5} />}
					stateController={setHasPressedDownButton}
				/>
			</div>
		</div>
	)
}
