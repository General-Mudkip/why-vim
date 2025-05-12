"use client"
import { useKeyPress } from "@/components/hooks/useKeyPress";
import { cn } from "@/lib/utils";

export const Key = ({ label }: { label: string }) => {
	const keyIsActive = useKeyPress([label.toLowerCase()]); // TODO: Change this to just accept an activator key

	return (
		<span
			className={cn(
				"transition-all duration-100 rounded-sm px-1.5 py-0.5 border-2 border-neutral-800 shadow-[inset_0_-3px_0_0_rgba(0,0,0,0.2)]",
				keyIsActive &&
				"shadow-[inset_0_0px_0_0_rgba(0,0,0,0.2)] bg-neutral-200"
			)}
		>
			{label}
		</span >
	)
}
