"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
export default function Top() {
	const [coords, setCoords] = useState([]);
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

	const handlemouse = (e) => {
		setCoords([e.clientX, e.clientY]);
	};

	return (
		<div id="top-original" onMouseMove={(e) => handlemouse(e)}>
			<div
				id="masti"
				style={{ transform: `translate(${coords[0] - 200}px,${coords[1] - 100}px)` }}
			></div>
			<motion.div id="top">
				<div id="header-content">
					<motion.div id="header">{headers[item]}</motion.div>
					<motion.div id="side-header">{sideheaders[item]}</motion.div>
				</div>
				<motion.div id="item">
					<div id="arrowback" onClick={handleBackward}>
						{arrow}
					</div>
					<motion.div
						key={item}
						id="pic"
						initial={{ x: direction * 10, visibility: "visible" }}
						animate={{ x: 0, visibility: "visible" }}
						exit={{ x: 0, visibility: "hidden" }}
						transition={{
							x: { duration: 0.1, ease: "easeIn", delay: 0.01 },
						}}
					>
						<img id="item-image" src={pictures[item]} alt="laptop" key={item} />
					</motion.div>
					<div id="arrowforward" onClick={handleForward}>
						{arrow}
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
}
