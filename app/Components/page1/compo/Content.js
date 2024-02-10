"use client";

import TopLeft from "./Top";
import { motion } from "framer-motion";
import TopRight from "./Top2";
export default function Content() {
	return (
		<div id="content-container">
			<motion.div
				id="top-container"
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
				<TopLeft></TopLeft>
				<TopRight></TopRight>
			</motion.div>
		</div>
	);
}
