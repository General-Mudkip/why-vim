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
				"flex font-fira transition-all duration-100 rounded-sm h-13 w-13 items-center justify-center border-2 border-neutral-800 shadow-[inset_0_-3px_0_0_rgba(0,0,0,0.2)]",
				keyIsActive &&
				"shadow-[inset_0_0px_0_0_rgba(0,0,0,0.2)] bg-neutral-100 transform translate-y-0.5"
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
				"flex transition-all duration-100 rounded-sm h-13 w-13 items-center justify-center border-2 border-neutral-800 shadow-[inset_0_-3px_0_0_rgba(0,0,0,0.2)]",
				keyIsActive &&
				"shadow-[inset_0_0px_0_0_rgba(0,0,0,0.2)] bg-neutral-100 transform translate-y-0.5"
			)}
		>
			{displayIcon}
		</div>
	);
};
