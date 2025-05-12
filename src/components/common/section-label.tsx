"use client"

import { useEffect } from "react"
import { useSection } from "../contexts/SectionContext"
import { motion, useAnimationControls } from "motion/react"

export const SectionLabel = () => {
	const { currentSection, setCurrentSection } = useSection()
	const headerControls = useAnimationControls();

	useEffect(() => {
		headerControls.start({
			opacity: [0.7, 1],
			y: [-5, 0],
			transition: {
				duration: 0.5,
				type: "spring"
			}
		})
	}, [currentSection]);

	return (
		<motion.h1
			className="fixed left-1/2 -translate-x-28 text-center px-4 py-2 top-5 font-mono z-50 rounded-3xl backdrop-blur-2xl"
			animate={headerControls}
		>
			{currentSection}
		</motion.h1>
	)
}
