"use client"
import { useInView } from "@/components/hooks/useInView";
import { HeroNextPageButtons } from "./next-page-buttons"
import { useEffect } from "react";
import { useSection } from "@/components/contexts/SectionContext";

export const IntroSection = () => {
	const { ref, isInView } = useInView(0.5);
	const { currentSection, setCurrentSection } = useSection()

	useEffect(() => {
		if (isInView) {
			setCurrentSection("01 - Intro");
		}
	}, [isInView]);

	return (
		<section ref={ref} id="01-intro" className="flex h-screen w-full flex-row items-center justify-between">
			<div className="max-w-fit">
				<h1 className="font-space text-9xl font-bold text-nowrap italic">Why Vim?</h1>
				<h3 className="pt-4 font-space text-3xl">
					Or more specifically, Vim Motions.
				</h3>

				<HeroNextPageButtons />
			</div>

			<div className="flex w-full items-center justify-center">
				<img src="/vim-logo.svg" className="w-[55%]" />
			</div>
		</section>
	)
}
