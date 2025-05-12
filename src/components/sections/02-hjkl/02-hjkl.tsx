import { PressableKeyButton, PressableIconButton } from "@/components/button/pressable-button"
import { ArrowBigDown, ArrowBigLeft, ArrowBigRight, ArrowBigUp } from "lucide-react"

export const HJKLSection = () => {
	return (
		<section id="02-hjkl" className="flex h-screen w-full gap-y-4 flex-col justify-center items-center">
			<div className="flex flex-row gap-x-4">
				<PressableKeyButton activatorKeys={["h", "ArrowLeft"]} displayKey="H" />
				<PressableKeyButton activatorKeys={["j", "ArrowDown"]} displayKey="J" />
				<PressableKeyButton activatorKeys={["k", "ArrowUp"]} displayKey="K" />
				<PressableKeyButton activatorKeys={["l", "ArrowRight"]} displayKey="L" />
			</div>

			=

			<div className="flex flex-row gap-x-4">
				<PressableIconButton activatorKeys={["h", "ArrowLeft"]} displayIcon={<ArrowBigLeft />} />
				<PressableIconButton activatorKeys={["j", "ArrowDown"]} displayIcon={<ArrowBigDown />} />
				<PressableIconButton activatorKeys={["k", "ArrowUp"]} displayIcon={<ArrowBigUp />} />
				<PressableIconButton activatorKeys={["l", "ArrowRight"]} displayIcon={<ArrowBigRight />} />
			</div>
		</section>
	)
}
