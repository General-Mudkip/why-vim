"use client"
import { PressableKeyButton } from "@/components/button/pressable-button"
import { useKeyPressContext } from "@/components/contexts/KeyPressContext"
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

export const EnterGame = ({ live }: { live: boolean }) => {
	const [score, setScore] = useState(0)
	const [maxScore, setMaxScore] = useState(0)

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
			await delay(getDelayTime(score + 1))

			// Ensure new key is different from old one
			let newKey = keysArray[Math.floor(Math.random() * keysArray.length)]
			while (newKey == toPressKey) {
				newKey = keysArray[Math.floor(Math.random() * keysArray.length)]
			}

			setToPressKey(newKey)
			setIsWaiting(false)
		}

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
			setScore(0)
		}
	}, [pressedKeys])

	return (
		<>
			<h3 className="-mb-8">
				Score: {score} | Max Score: {maxScore}
			</h3>
			<div className="flex flex-row gap-x-4">
				<PressableKeyButton
					variant={
						toPressKey == "h" ? (isWaiting ? "success" : "to_be_pressed") : "default_for_game"
					}
					activatorKeys={["h", "ArrowLeft"]}
					displayKey="H"
				/>

				<PressableKeyButton
					variant={
						toPressKey == "j" ? (isWaiting ? "success" : "to_be_pressed") : "default_for_game"
					}
					activatorKeys={["j", "ArrowDown"]}
					displayKey="J"
				/>

				<PressableKeyButton
					variant={
						toPressKey == "k" ? (isWaiting ? "success" : "to_be_pressed") : "default_for_game"
					}
					activatorKeys={["k", "ArrowUp"]}
					displayKey="K"
				/>

				<PressableKeyButton
					variant={
						toPressKey == "l" ? (isWaiting ? "success" : "to_be_pressed") : "default_for_game"
					}
					activatorKeys={["l", "ArrowRight"]}
					displayKey="L"
				/>
			</div>
		</>
	)
}
