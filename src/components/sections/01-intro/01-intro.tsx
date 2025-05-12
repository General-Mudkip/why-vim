import { HeroNextPageButtons } from "./next-page-buttons"

export const IntroSection = () => {
	return (
		<section id="01-intro" className="flex h-screen w-full flex-row items-center justify-between">
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
