"use client";

import { motion } from "framer-motion";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
export default function Createinput() {
	const router = useRouter();
	const loadsvg = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20px"
			height="20px"
			viewBox="0 0 24 24"
			fill="none"
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0" />

			<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

			<g id="SVGRepo_iconCarrier">
				{" "}
				<path
					d="M20.0001 12C20.0001 13.3811 19.6425 14.7386 18.9623 15.9405C18.282 17.1424 17.3022 18.1477 16.1182 18.8587C14.9341 19.5696 13.5862 19.9619 12.2056 19.9974C10.825 20.0328 9.45873 19.7103 8.23975 19.0612"
					stroke="#ffffff"
					stroke-width="3.55556"
					stroke-linecap="round"
				/>{" "}
			</g>
		</svg>
	);
	const [valc, setValc] = useState("");
	const [valcp, setValcp] = useState("y");
	const [user, setUser] = useState("");
	const handlepass = (e) => setValc(e);
	const handleconfirm = (e) => setValcp(e);
	const handleuser = (e) => setUser(e);
	const [loading, setLoading] = useState(false);
	const [exist, setExist] = useState(0);
	const handlecreate = async () => {
		console.log("works");
		setLoading(true);
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
				setLoading(false);
			} else {
				setTimeout(() => {
					router.push("Components/page1");
				}, 2000);
				setLoading(false);
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
					{loading == true ? <div id="loadingsvg">{loadsvg}</div> : <div>Create account</div>}
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
