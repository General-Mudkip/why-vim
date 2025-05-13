"use client"
import { CornerDownLeft } from "lucide-react";
import { useKeyPress } from "../hooks/useKeyPress";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { useEffect, useState } from "react";

export type ButtonVariant =
	| "default"
	| "success";

type PressableButtonProps = {
	// Keys that highlight the button
	activatorKeys: string[]

	// A useState that's passed into the component, which the parent can use
	// to observe changes in the button's state.
	stateController?: React.Dispatch<React.SetStateAction<boolean>>

	activatedVariant?: ButtonVariant

	// Should the button be listening for inputs
	live?: boolean
}

export type PressableKeyButtonProps = PressableButtonProps & {
	displayKey: string
}

export type PressableIconButtonProps = PressableButtonProps & {
	displayIcon: React.ReactNode
}

const pressableButtonVariants = cva(
	"flex font-fira transition-all duration-100 rounded-sm items-center justify-center",
	{
		variants: {
			variant: {
				default: "border-2 border-neutral-800 shadow-[inset_0_-3px_0_0_rgba(0,0,0,0.2)]",
				success: "border-2 border-green-800 bg-green-200 shadow-[inset_0_-3px_0_0_rgba(0,100,0,0.2)]",
			},
			size: {
				default: "h-13 w-13 px-4 py-2 has-[>svg]:px-3",
				key: "px-1.5 py-0.5 inline",
				sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
				lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
				icon: "size-9",
			},
			active: {
				true: "",
				false: "",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
			active: false,
		},
		compoundVariants: [
			{
				active: true,
				variant: "default",
				size: "default",
				class: "shadow-[inset_0_0px_0_0_rgba(0,0,0,0.2)] bg-neutral-100 transform translate-y-0.5",
			},
			{
				active: true,
				variant: "default",
				size: "key",
				class: "shadow-[inset_0_0px_0_0_rgba(0,0,0,0.2)] bg-neutral-200",
			},
			{
				active: true,
				variant: "success",
				class: "shadow-[inset_0_0px_0_0_rgba(0,200,0,0.2)] bg-green-200"
			}
		],
	}
);

export const PressableKeyButton = ({
	variant,
	size,
	activatorKeys,
	stateController,
	displayKey,
	activatedVariant,
	live = true,
}:
	VariantProps<typeof pressableButtonVariants> &
	PressableKeyButtonProps
) => {
	const [hasBeenPressed, setHasBeenPressed] = useState(false);
	const keyIsActive = useKeyPress(activatorKeys, stateController);

	useEffect(() => {
		if (keyIsActive && !hasBeenPressed && live) {
			setHasBeenPressed(true);
		}
	}, [keyIsActive, hasBeenPressed, live]);

	const effectiveVariant =
		(hasBeenPressed && activatedVariant) ? activatedVariant : variant;


	return (
		<span
			className={cn(
				pressableButtonVariants({ variant: effectiveVariant, size, active: keyIsActive }
				))}
		>
			{displayKey}
		</span>
	);
};

export const PressableIconButton = ({
	variant,
	size,
	activatorKeys,
	stateController,
	displayIcon,
	activatedVariant,
	live = true,
}:
	VariantProps<typeof pressableButtonVariants> &
	PressableIconButtonProps
) => {
	const [hasBeenPressed, setHasBeenPressed] = useState(false);
	const keyIsActive = useKeyPress(activatorKeys, stateController);

	useEffect(() => {
		if (keyIsActive && !hasBeenPressed && live) {
			setHasBeenPressed(true);
		}
	}, [keyIsActive, hasBeenPressed]);

	const effectiveVariant =
		(hasBeenPressed && activatedVariant) ? activatedVariant : variant;

	return (
		<span
			className={cn(
				pressableButtonVariants({ variant: effectiveVariant, size, active: keyIsActive }
				))}
		>
			{displayIcon}
		</span>
	);
};

export const PressableSpaceButton = ({
	activatorKeys,
	stateController,
	variant,
	activatedVariant,
	live,
}:
	VariantProps<typeof pressableButtonVariants> &
	PressableButtonProps
) => {
	const [hasBeenPressed, setHasBeenPressed] = useState(false);
	const keyIsActive = useKeyPress(activatorKeys, stateController);

	useEffect(() => {
		if (keyIsActive && !hasBeenPressed && live) {
			setHasBeenPressed(true);
		}
	}, [keyIsActive, hasBeenPressed]);

	const effectiveVariant =
		(hasBeenPressed && activatedVariant) ? activatedVariant : variant;

	return (
		<span
			className={cn(
				pressableButtonVariants({ variant: effectiveVariant, active: keyIsActive, class: "h-13 w-40 justify-between px-4 border-2" }
				))}
		>
			Continue <CornerDownLeft size={20} strokeWidth={1.5} />
		</span>
	);
};
