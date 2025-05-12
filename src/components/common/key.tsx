"use client"
import { useKeyPress } from "@/components/hooks/useKeyPress";
import { cn } from "@/lib/utils";

export const Key = ({ label }: { label: string }) => {
	const keyIsActive = useKeyPress([label.toLowerCase()]); // TODO: Change this to just accept an activator key
	console.log(label)

	return (
		<span
			className={cn(
				"border-2 border-black px-1.5 py-0.5",
				keyIsActive ? "bg-black text-white" : ""
			)}
		>
			{label}
		</span>
	)
}
