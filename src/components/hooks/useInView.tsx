"use client";

import { useEffect, useRef, useState } from "react";

export function useInView(threshold: number = 0.51) {
	const ref = useRef<HTMLDivElement>(null);
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsInView(entry.isIntersecting);
			},
			{ threshold }
		);

		const element = ref.current;
		if (element) {
			observer.observe(element);
		}

		return () => {
			if (element) observer.unobserve(element);
		};
	}, [threshold]);

	return { ref, isInView };
}
