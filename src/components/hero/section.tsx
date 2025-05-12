import { SimpleButton } from "../button/simple-button"

export const HeroSection = () => {
	return (
		<section id="01-hero" className="flex h-screen w-full flex-row justify-between">
			<div className="pt-80 min-w-3xl">
				<h1 className="font-space text-9xl font-bold italic">Why Vim?</h1>
				<h3 className="pt-4 font-space text-3xl">
					Or more specifically, Vim Motions.
				</h3>
				<SimpleButton />
			</div>

			<div className="w-full flex items-center justify-center">
				<img src="/vim-logo.svg" className="w-[50%]" />
			</div>

		</section>
	)
}
