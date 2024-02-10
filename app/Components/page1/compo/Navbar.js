"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Navb() {
	const likesvg = (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<g id="SVGRepo_bgCarrier" stroke-width="0" />

			<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

			<g id="SVGRepo_iconCarrier">
				{" "}
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
					stroke="#ffffff"
					stroke-width="0"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>{" "}
			</g>
		</svg>
	);

	const cartsvg = (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<g id="SVGRepo_bgCarrier" stroke-width="0" />

			<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

			<g id="SVGRepo_iconCarrier">
				{" "}
				<path
					d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
					stroke="#ffffff"
					stroke-width="0"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>{" "}
			</g>
		</svg>
	);

	const [activeTab, setActiveTab] = useState("rial");

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	return (
		<motion.div
			id="navbar"
			initial={{
				y: -100,
			}}
			transition={{
				delay: 0.7,
				type: "tween",
				animation: "easeInOut",
				duration: 0.38,
			}}
			animate={{
				y: 0,
			}}
		>
			<div id="nav-items">
				<motion.div
					style={{ color: activeTab === "rial" ? "#EBA977" : "white" }}
					onClick={() => handleTabClick("rial")}
				>
					RIAL
				</motion.div>
				{/* <motion.div
					style={{ color: activeTab === "more" ? "#EBA977" : "white" }}
					onClick={() => handleTabClick("more")}
				>
					More
				</motion.div> */}
			</div>
			<div id="nav-items">
				<motion.div
					id="svg"
					style={{ fill: activeTab === "like" ? "#EBA977" : "white" }}
					onClick={() => {
						handleTabClick("like");
					}}
				>
					{likesvg}
				</motion.div>
				<motion.div
					id="svg"
					style={{ fill: activeTab === "cart" ? "#EBA977" : "white" }}
					onClick={() => {
						handleTabClick("cart");
					}}
				>
					{cartsvg}
				</motion.div>
			</div>
		</motion.div>
	);
}
