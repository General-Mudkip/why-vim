"use client"
import { PressableIconButton, PressableKeyButton } from "@/components/button/pressable-button"
import { useKeyPressContext } from "@/components/contexts/KeyPressContext"
import { ArrowBigDown, ArrowBigLeft, ArrowBigRight, ArrowBigUp } from "lucide-react";
import { useEffect, useState } from "react"

function getDelayTime(score: number): number {
	const initialDelay = 1000;  // Starting delay in ms
	const decayRate = 0.95;     // Each point multiplies delay by 0.95
	const minimumDelay = 300;   // Floor delay in ms
	return Math.max(initialDelay * Math.pow(decayRate, score), minimumDelay);
}

function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export const HardEnterGame = ({ live }: { live: boolean }) => {
	const [score, setScore] = useState(0)
	const [maxScore, setMaxScore] = useState(0)
	const [gotItWrong, setGotItWrong] = useState(false)

	// Whether or not we're waiting to set a new button to press
	const [isWaiting, setIsWaiting] = useState(false)

	// The key value to press
	const [toPressKey, setToPressKey] = useState("h")

	const { pressedKeys } = useKeyPressContext();

	const keysArray = ["h", "j", "k", "l"]

	useEffect(() => {
		const setNewKey = async () => {
			// isWaiting is required to prevent users from holding down the button
			// and triggering a *lot* of setNewKey calls.
			setIsWaiting(true)
			await delay(1000)

			// Ensure new key is different from old one
			let newKey = keysArray[Math.floor(Math.random() * keysArray.length)]
			while (newKey == toPressKey) {
				newKey = keysArray[Math.floor(Math.random() * keysArray.length)]
			}

			setToPressKey(newKey)
			setIsWaiting(false)
			setGotItWrong(false)
		}

		// Don't run the game if the game isn't live. In the 03 section,
		// it's if the section is inView.
		if (live) {
			// If the currently pressed keys has the the key to press, and given
			// we're not already waiting for a new key to be set, increment
			// the score and set a new key to be pressed.
			if (pressedKeys.has(toPressKey) && !isWaiting) {
				setScore((score) => score + 1)
				if (score + 1 > maxScore) {
					setMaxScore(score + 1)
				}
				setNewKey()
			} else if (pressedKeys.size > 0) {
				setGotItWrong(true)
				setScore(0)
				setNewKey()
			}
		}
	}, [pressedKeys])

	return (
		<div className="text-center flex flex-col items-center">
			<h3 className="pb-3">
				Score: {score} | Max Score: {maxScore}
			</h3>
			<div className="flex flex-row gap-x-4">
				{toPressKey === "h" &&
					<PressableIconButton
						variant={
							gotItWrong ? "wrong" : (isWaiting ? "success" : "to_be_pressed")
						}
						activatorKeys={["h"]}
						displayIcon={<ArrowBigLeft strokeWidth={1.5} />}
					/>
				}

				{toPressKey === "j" &&
					<PressableIconButton
						variant={
							gotItWrong ? "wrong" : (isWaiting ? "success" : "to_be_pressed")
						}
						activatorKeys={["j"]}
						displayIcon={<ArrowBigDown strokeWidth={1.5} />}
					/>
				}

				{toPressKey === "k" &&
					<PressableIconButton
						variant={
							gotItWrong ? "wrong" : (isWaiting ? "success" : "to_be_pressed")
						}
						activatorKeys={["k"]}
						displayIcon={<ArrowBigUp strokeWidth={1.5} />}
					/>
				}

				{toPressKey === "l" &&
					<PressableIconButton
						variant={
							gotItWrong ? "wrong" : (isWaiting ? "success" : "to_be_pressed")
						}
						activatorKeys={["l"]}
						displayIcon={<ArrowBigRight strokeWidth={1.5} />}
					/>
				}
			</div>
		</div>
	)
}
