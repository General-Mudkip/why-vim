"use client"

import { useState } from "react"
import { EasyEnterGame } from "./easy-game";
import { MediumEnterGame } from "./medium-game";
import { HardEnterGame } from "./hard-game";

type Difficulties = "Easy" | "Medium" | "Hard";

export const EnterGameSelector = ({ live }: { live: boolean }) => {
	const [currentDifficulty, setCurrentDifficulty] = useState<Difficulties>("Easy")

	return (
		<div className="flex flex-col text-center">
			{currentDifficulty === "Easy" && <EasyEnterGame live />}
			{currentDifficulty === "Medium" && <MediumEnterGame live />}
			{currentDifficulty === "Hard" && <HardEnterGame live />}
			<div className="pt-4">
				<button
					className={`cursor-pointer pr-2 ${currentDifficulty === "Easy" ? "underline" : ""}`}
					onClick={() => live && setCurrentDifficulty("Easy")}
				>
					Easy
				</button>
				|
				<button
					className={`cursor-pointer px-2 ${currentDifficulty === "Medium" ? "underline" : ""}`}
					onClick={() => live && setCurrentDifficulty("Medium")}
				>
					Medium
				</button>
				|
				<button
					className={`cursor-pointer pl-2 ${currentDifficulty === "Hard" ? "underline" : ""}`}
					onClick={() => live && setCurrentDifficulty("Hard")}
				>
					Hard
				</button>
			</div>
		</div>
	)
}
