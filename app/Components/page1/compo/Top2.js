"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Top2() {
	const [coords, setCoords] = useState([]);
	const [client, setClient] = useState([]);
	const handlemouse = (e) => {
		setCoords([e.clientX, e.clientY]);
		console.log(e.clientY);
	};

	useEffect(() => {
		window.addEventListener("mousemove", () => {
			const bound = document.getElementById("top2-original").getBoundingClientRect();
			setClient([bound.x, bound.y]);
			// console.log(client);
		});
	}, []);

	useEffect(() => {
		console.log(client);
	}, [client]);

	return (
		<div id="top2-original" onMouseMove={(e) => handlemouse(e)}>
			<div
				id="masti2"
				style={{
					transform: `translate(${coords[0] - client[0] - 50}px,${coords[1] - client[1] - 50}px)`,
				}}
			></div>
			<motion.div id="top2">
				<div id="header-content">
					<div id="header">Deal of the Day</div>
					<div id="semi-header">
						50% off on <span id="glow">premium</span> laptops
					</div>
				</div>
				<div id="pic">
					<img alt="lappy" src="/Assets/laptop2.png" />
				</div>
				<div id="footer">Shop Now</div>
			</motion.div>
		</div>
	);
}
