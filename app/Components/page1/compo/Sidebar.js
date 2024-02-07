"use client";
import { motion } from "framer-motion";
export default function Side() {
	return (
		<div id="sidebar">
			<motion.div
				id="left"
				initial={{
					x: -100,
				}}
				transition={{
					delay: 1,
					type: "tween",
					animation: "easeInOut",
					duration: 0.38,
				}}
				animate={{
					x: 0,
				}}
			>
				<div id="text">RIAL</div>
			</motion.div>

			<motion.div
				id="right"
				initial={{
					x: 100,
				}}
				transition={{
					delay: 1,
					type: "tween",
					animation: "easeInOut",
					duration: 0.38,
				}}
				animate={{
					x: 0,
				}}
			>
				<div id="text2">RIAL</div>
			</motion.div>
		</div>
	);
}
