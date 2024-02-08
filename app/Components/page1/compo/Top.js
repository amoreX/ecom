"use client";

import { motion } from "framer-motion";

export default function Top() {
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
	const headers = ["Diversify", "Dope tech", "Big sale"];
	const sideheaders = [
		"Diversifying world",
		"Get the best dope tech Now!",
		"Starting soon at your nearest stores",
	];
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
				<motion.div id="header">{headers[2]}</motion.div>
				<motion.div id="side-header">{sideheaders[1]}</motion.div>
			</div>
			<motion.div id="item">
				<div id="arrowback">{arrow}</div>
				<div id="pic">work in progress</div>
				<div id="arrowforward">{arrow}</div>
			</motion.div>
		</motion.div>
	);
}
