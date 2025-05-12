import { PressableKeyButton, PressableIconButton } from "@/components/button/pressable-button"
import { Key } from "@/components/common/key"
import { ArrowBigDown, ArrowBigLeft, ArrowBigRight, ArrowBigUp } from "lucide-react"

export const HJKLSection = () => {
	return (
		<section id="02-hjkl" className="flex font-share h-screen w-full gap-y-12 flex-col justify-center items-center">
			<p>
				One of the primary goals of Vim is to reduce <a href="https://en.wikipedia.org/wiki/Touch_typing" target="_blank">finger travel distance</a>.
				<br />
				Instead of using arrow keys, which are very far from the home row,
				<br />
				We use the <Key label="H" />, <Key label="J" />, <Key label="K" />, and <Key label="L" /> keys.
			</p>

			<div className="flex flex-col gap-y-4 items-center">
				<div className="flex flex-row gap-x-4">
					<PressableKeyButton activatorKeys={["h", "ArrowLeft"]} displayKey="H" />
					<PressableKeyButton activatorKeys={["j", "ArrowDown"]} displayKey="J" />
					<PressableKeyButton activatorKeys={["k", "ArrowUp"]} displayKey="K" />
					<PressableKeyButton activatorKeys={["l", "ArrowRight"]} displayKey="L" />
				</div>

				<span className="text-4xl">=</span>

				<div className="flex flex-row gap-x-4">
					<PressableIconButton activatorKeys={["h", "ArrowLeft"]} displayIcon={<ArrowBigLeft />} />
					<PressableIconButton activatorKeys={["j", "ArrowDown"]} displayIcon={<ArrowBigDown />} />
					<PressableIconButton activatorKeys={["k", "ArrowUp"]} displayIcon={<ArrowBigUp />} />
					<PressableIconButton activatorKeys={["l", "ArrowRight"]} displayIcon={<ArrowBigRight />} />
				</div>
			</div>

			<p>
				Try mock typing something, and then moving your hand to the arrow keys.
				<br />
				Contrast that with using the <Key label="H" />, <Key label="J" />, <Key label="K" />, and <Key label="L" /> keys.
			</p>
		</section>
	)
}
