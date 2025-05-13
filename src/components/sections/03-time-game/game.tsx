"use client"
import { PressableKeyButton } from "@/components/button/pressable-button"
import { useKeyPressContext } from "@/components/contexts/KeyPressContext"
import { useEffect, useMemo, useState } from "react"

function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export const EnterGame = ({ live }: { live: boolean }) => {
	const [isWaiting, setIsWaiting] = useState(false)
	const [toPressKey, setToPressKey] = useState("h")
	const { pressedKeys } = useKeyPressContext();

	const keysArray = ["h", "j", "k", "l"]

	useEffect(() => {
		const setNewKey = async () => {
			// isWaiting is required to prevent users from holding down the button
			// and triggering a *lot* of setNewKey calls.
			setIsWaiting(true)
			await delay(500)

			// Ensure new key is different from old one
			let newKey = keysArray[Math.floor(Math.random() * keysArray.length)]
			while (newKey == toPressKey) {
				newKey = keysArray[Math.floor(Math.random() * keysArray.length)]
			}

			setToPressKey(newKey)
			setIsWaiting(false)
		}
		if (pressedKeys.has(toPressKey) && !isWaiting) {
			setNewKey()
		}
	}, [pressedKeys])

	return (
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
	)
}
