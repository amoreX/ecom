"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function createinput() {
	const [valc, setValc] = useState("");
	const [valcp, setValcp] = useState("y");
	const handlepass = (e) => setValc(e);
	const handleconfirm = (e) => setValcp(e);

	return (
		<motion.div
			id="user-input"
			initial={{ x: 700 }}
			transition={{ delay: 0.1, type: "spring", stiffness: 100, damping: 20 }}
			animate={{ x: 0 }}
		>
			<input type="text" id="username" placeholder="Username"></input>

			<input
				type="text"
				id="password"
				onChange={(e) => handlepass(e.target.value)}
				placeholder="Password"
			></input>
			{valc.length == 0 ? (
				<div style={{ color: "#EBA977" }}>Password is required</div>
			) : (
				<div></div>
			)}
			{valc.length < 8 ? (
				<div style={{ color: "grey" }}>Password should have atleast 8 characters</div>
			) : (
				<div></div>
			)}
			{valc.length >= 8 ? (
				<input
					type="text"
					id="confirmpass"
					onChange={(e) => handleconfirm(e.target.value)}
					placeholder="Confirm Password"
				></input>
			) : (
				<div></div>
			)}
			{valc == valcp ? (
				<div id="login-but"> Create Account </div>
			) : valcp.length > 1 ? (
				<div style={{ color: "#EBA977" }}>Passwords do not match</div>
			) : (
				<div></div>
			)}
		</motion.div>
	);
}
