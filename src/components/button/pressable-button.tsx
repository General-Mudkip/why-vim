"use client"
import { useKeyPress } from "../hooks/useKeyPress";
import { cn } from "@/lib/utils";

type PressableButtonProps = {
	// Keys that highlight the button
	activatorKeys: string[]

	// A useState that's passed into the component, which the parent can use
	// to observe changes in the button's state.
	stateController?: React.Dispatch<React.SetStateAction<boolean>>
}

export type PressableKeyButtonProps = PressableButtonProps & {
	displayKey: string
}

export type PressableIconButtonProps = PressableButtonProps & {
	displayIcon: React.ReactNode
}

export const PressableKeyButton = ({ activatorKeys, displayKey, stateController, }: PressableKeyButtonProps) => {
	const keyIsActive = useKeyPress(activatorKeys, stateController);

	return (
		<div
			className={cn(
				"flex font-fira h-16 w-16 items-center justify-center border-2 border-black",
				keyIsActive ? "bg-black text-white" : ""
			)}
		>
			{displayKey}
		</div>
	);
};

export const PressableIconButton = ({ activatorKeys, displayIcon, stateController }: PressableIconButtonProps) => {
	const keyIsActive = useKeyPress(activatorKeys, stateController);

	return (
		<div
			className={cn(
				"flex h-16 w-16 items-center justify-center border-2 border-black",
				keyIsActive ? "bg-black text-white" : ""
			)}
		>
			{displayIcon}
		</div>
	);
};
