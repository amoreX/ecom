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
		try {
			const result = await axios.post(
				"/api/create",
				{ password: valc, username: user },
				{
					timeout: 60000, // Set the timeout to 60 seconds (adjust as needed)
				}
			);

			const data = await result.data;
			if (data.result == 1) {
				setExist(1);
			} else {
				setTimeout(() => {
					router.push("Components/page1");
				}, 3000);

				setExist(2);
			}
			console.log(data);
		} catch (error) {
			console.error("Error making the request:", error);
			// Handle error as needed
			// You can set an error state, display an error message, or log the error
		}
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
			{exist == 1 ? (
				<div style={{ color: "red", textAlign: "center" }}>User already Exists</div>
			) : (
				<div></div>
			)}
			{exist == 2 ? (
				<motion.div
					id="login-done2"
					initial={{ y: 300 }}
					transition={{ type: "tween", animation: "easeInOut", duration: 0.56 }}
					animate={{ y: 0 }}
				>
					Account Created
				</motion.div>
			) : (
				<div></div>
			)}
		</motion.div>
	);
}
