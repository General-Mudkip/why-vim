"use client"
import { useState } from "react";
import { useKeyPressCallback } from "../hooks/useKeyPress";
import { cn } from "@/lib/utils";

export const SimpleButton = () => {
	const [activeKey, setActiveKey] = useState("");

	useKeyPressCallback("H", (e: KeyboardEvent) => {
		e.preventDefault();
		setActiveKey(e.key);
		setTimeout(() => {
			setActiveKey("");
		}, 600);
	});

	return (
		<div className={cn("flex h-16 w-16 items-center justify-center border-2 border-black")}>
			{activeKey || "H"}
		</div>
	);
};
