"use client";
import {
    PressableKeyButton,
    PressableIconButton,
    PressableSpaceButton,
} from "@/components/common/pressable-button";
import {
    ArrowBigDown,
    ArrowBigLeft,
    ArrowBigRight,
    ArrowBigUp,
} from "lucide-react";
import { motion } from "motion/react";
import { useHJKLSection } from "./useHJKLSection";

export const HJKLSection = () => {
    const {
        ref,
        enableButtons,
        continueButtonControls,
        setContinueButtonPressed,
    } = useHJKLSection();

    return (
        <section
            ref={ref}
            id="02-hjkl"
            className="flex h-screen w-full flex-col items-center justify-center gap-y-12 font-share"
        >
            <p>
                One of the primary goals of Vim is to reduce{" "}
                <a
                    href="https://en.wikipedia.org/wiki/Touch_typing"
                    target="_blank"
                >
                    finger travel distance
                </a>
                .
                <br />
                Instead of using arrow keys, which are very far from the{" "}
                <span className="font-bold">home row</span>,
                <br />
                We use the{" "}
                <PressableKeyButton
                    activatorKeys={["h"]}
                    displayKey="H"
                    size={"key"}
                />
                ,{" "}
                <PressableKeyButton
                    activatorKeys={["j"]}
                    displayKey="J"
                    size={"key"}
                />
                ,{" "}
                <PressableKeyButton
                    activatorKeys={["k"]}
                    displayKey="K"
                    size={"key"}
                />
                , and{" "}
                <PressableKeyButton
                    activatorKeys={["l"]}
                    displayKey="L"
                    size={"key"}
                />
                , keys.
            </p>

            <div className="flex flex-col items-center gap-y-4">
                <div className="flex flex-row gap-x-4">
                    <PressableKeyButton
                        variant={"pulsing"}
                        activatorKeys={["h", "ArrowLeft"]}
                        displayKey="H"
                        activatedVariant="success"
                        enabled={enableButtons}
                    />
                    <PressableKeyButton
                        activatorKeys={["j", "ArrowDown"]}
                        displayKey="J"
                        activatedVariant="success"
                        enabled={enableButtons}
                    />
                    <PressableKeyButton
                        activatorKeys={["k", "ArrowUp"]}
                        displayKey="K"
                        activatedVariant="success"
                        enabled={enableButtons}
                    />
                    <PressableKeyButton
                        activatorKeys={["l", "ArrowRight"]}
                        displayKey="L"
                        activatedVariant="success"
                        enabled={enableButtons}
                    />
                </div>

                <span className="text-4xl">=</span>

                <div className="flex flex-row gap-x-4">
                    <PressableIconButton
                        activatorKeys={["h", "ArrowLeft"]}
                        displayIcon={<ArrowBigLeft strokeWidth={1.5} />}
                        activatedVariant="success"
                        enabled={enableButtons}
                    />
                    <PressableIconButton
                        activatorKeys={["j", "ArrowDown"]}
                        displayIcon={<ArrowBigDown strokeWidth={1.5} />}
                        activatedVariant="success"
                        enabled={enableButtons}
                    />
                    <PressableIconButton
                        activatorKeys={["k", "ArrowUp"]}
                        displayIcon={<ArrowBigUp strokeWidth={1.5} />}
                        activatedVariant="success"
                        enabled={enableButtons}
                    />
                    <PressableIconButton
                        activatorKeys={["l", "ArrowRight"]}
                        displayIcon={<ArrowBigRight strokeWidth={1.5} />}
                        activatedVariant="success"
                        enabled={enableButtons}
                    />
                </div>
            </div>

            <p>
                If you&apos;re confused about why that wouldn&apos;t just enter
                the letters
                <br />
                H, J, K, or L, we&apos;ll cover that soon!
            </p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={continueButtonControls}
            >
                <PressableSpaceButton
                    variant={"success"}
                    activatorKeys={[" ", "Enter"]}
                    stateController={setContinueButtonPressed}
                />
            </motion.div>
        </section>
    );
};
