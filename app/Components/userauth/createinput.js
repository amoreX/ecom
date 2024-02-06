"use client";

import { motion } from "framer-motion";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
export default function Createinput() {
	const router = useRouter();
	const [valc, setValc] = useState("");
	const [valcp, setValcp] = useState("y");
	const [user, setUser] = useState("");
	const handlepass = (e) => setValc(e);
	const handleconfirm = (e) => setValcp(e);
	const handleuser = (e) => setUser(e);
	const [exist, setExist] = useState(0);
	const handlecreate = async () => {
		console.log("works");
		const result = await axios.post("/api/create", { password: valc, username: user });
		const data = await result.data;
		if (data.result == 1) {
			setExist(1);
		} else {
			router.push("Components/page1");
			setExist(0);
		}
		console.log(data);
	};

	return (
		<motion.div
			id="user-input"
			initial={{ x: 700 }}
			transition={{ delay: 0.1, type: "spring", stiffness: 100, damping: 20 }}
			animate={{ x: 0 }}
		>
			<input
				type="text"
				id="username"
				onChange={(e) => handleuser(e.target.value)}
				placeholder="Username"
			></input>

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
			{valc.length < 9 ? (
				<div style={{ color: "grey" }}>Password should have atleast 8 characters</div>
			) : (
				<div></div>
			)}
			{valc.length >= 9 ? (
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
				<div id="login-but" onClick={() => handlecreate()}>
					{" "}
					Create Account{" "}
				</div>
			) : valcp.length > 1 ? (
				<div style={{ color: "#EBA977" }}>Passwords do not match</div>
			) : (
				<div></div>
			)}
			{exist == 0 ? (
				<div></div>
			) : (
				<div style={{ color: "red", textAlign: "center" }}>User already Exists</div>
			)}
		</motion.div>
	);
}
