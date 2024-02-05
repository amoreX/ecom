"use client";
import { useState } from "react";
import { motion } from "framer-motion";
export default function logininput() {
	const [val, setVal] = useState("");
	const handlechange = (e) => {
		setVal(e);
	};
	return (
		<motion.div
			id="user-input"
			initial={{ x: -700 }}
			transition={{ delay: 0.1, type: "spring", stiffness: 100, damping: 20 }}
			animate={{ x: 0 }}
		>
			<input type="text" id="username" placeholder="Username"></input>

			<input
				type="text"
				id="password"
				onChange={(e) => handlechange(e.target.value)}
				placeholder="Password"
			></input>
			{val.length == 0 ? <div style={{ color: "#EBA977" }}>Password is required</div> : <div></div>}
			{val.length > 8 ? (
				<div id="login-but"> Login</div>
			) : (
				<div style={{ color: "grey" }}>Password should have atleast 8 characters</div>
			)}
		</motion.div>
	);
}
