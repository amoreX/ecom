"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
export default function Top() {
	const [item, setItem] = useState(0);
	const [direction, setDirection] = useState(1);
	const arrow = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="30px"
			height="30px"
			viewBox="0 0 24 24"
			fill="white"
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0" />

			<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

			<g id="SVGRepo_iconCarrier">
				{" "}
				<path
					d="M6 12H18M18 12L13 7M18 12L13 17"
					stroke="#1c1c1c"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>{" "}
			</g>
		</svg>
	);
	const headers = ["Biggest sale of the year", "Dope tech", "Big sale"];
	const sideheaders = [
		"Coming soon!!",
		"Get the best dope tech Now!",
		"Starting soon at your nearest stores",
	];
	const pictures = ["/Assets/laptop.png", "/Assets/headphones.png", "/Assets/gamepad.png"];
	// const picturedim=
	const handleForward = () => {
		setDirection(1);
		setItem((prev) => {
			return prev + 1 > headers.length - 1 ? 0 : prev + 1;
		});
	};
	const handleBackward = () => {
		setDirection(-1);
		setItem((prev) => {
			return prev - 1 < 0 ? headers.length - 1 : prev - 1;
		});
	};

	return (
		<motion.div
			id="top"
			initial={{
				scale: 0.01,
			}}
			transition={{
				delay: 1.4,
				duration: 0.38,
				type: "tween",
				animation: "easeInOut",
			}}
			animate={{
				scale: 1,
			}}
		>
			<div id="header-content">
				<motion.div id="header">{headers[item]}</motion.div>
				<motion.div id="side-header">{sideheaders[item]}</motion.div>
			</div>
			<motion.div id="item">
				<div id="arrowback" onClick={handleBackward}>
					{arrow}
				</div>
				<AnimatePresence custom={direction}>
					<motion.div
						key={item}
						id="pic"
						initial={{ opacity: 1, x: direction * 100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: direction * 100 }}
						transition={{
							opacity: { duration: 0 },
							x: { duration: 0.01, ease: "easeInOut" },
						}}
					>
						<img id="item-image" src={pictures[item]} alt="laptop" key={item} />
					</motion.div>
				</AnimatePresence>
				<div id="arrowforward" onClick={handleForward}>
					{arrow}
				</div>
			</motion.div>
		</motion.div>
	);
}
