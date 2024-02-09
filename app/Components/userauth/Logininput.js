"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Logininput() {
	const router = useRouter();
	const [val, setVal] = useState("");
	const [user, setUser] = useState("");
	const [exist, setExist] = useState(0);
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

	const [load, setLoad] = useState(false);
	const handlechange = (e) => {
		setVal(e);
	};
	const handleusername = (e) => {
		setUser(e);
	};
	const handlelogin = async () => {
		try {
			setLoad(true);
			console.log("worksnicw");
			const result = await axios.post(
				"/api/check",
				{ password: val, username: user },
				{
					timeout: 60000,
				}
			);
			const data = await result.data;
			if (data.result == 1) {
				console.log("Exist");
				setLoad(false);
				setExist(2);
				setTimeout(() => {
					sessionStorage.setItem('myVariable', 'myValue');
					router.push("/Components/page1");
				}, 2000);
			} else {
				console.log("Doesnt exist");
				setExist(1);
				setLoad(false);
			}
		} catch (error) {
			console.error("Error making the request:", error);
			// Handle error as needed
			// You can set an error state, display an error message, or log the error
		}
	};

	return (
		<motion.div
			id="user-input"
			initial={{ x: -700 }}
			transition={{ delay: 0.1, type: "spring", stiffness: 100, damping: 20 }}
			animate={{ x: 0 }}
		>
			<input
				type="text"
				id="username"
				placeholder="Username"
				onChange={(e) => handleusername(e.target.value)}
			></input>

			<input
				type="text"
				id="password"
				onChange={(e) => handlechange(e.target.value)}
				placeholder="Password"
			></input>
			{val.length == 0 ? <div style={{ color: "#EBA977" }}>Password is required</div> : <div></div>}
			{val.length > 8 ? (
				<div id="login-but" onClick={() => handlelogin()}>
					{load == true ? <div id="loadingsvg">{loadsvg}</div> : <div>Login</div>}
				</div>
			) : (
				<div style={{ color: "grey" }}>Password should have atleast 8 characters</div>
			)}
			{exist == 1 ? (
				<div style={{ color: "red", textAlign: "center" }}>User Doesnt Exist</div>
			) : (
				<div></div>
			)}

			{exist == 2 ? (
				<motion.div
					id="login-done"
					initial={{ y: 300 }}
					transition={{ type: "tween", animation: "easeInOut", duration: 0.56 }}
					animate={{ y: 0 }}
				>
					Login Successfull
				</motion.div>
			) : (
				<div></div>
			)}
		</motion.div>
	);
}
