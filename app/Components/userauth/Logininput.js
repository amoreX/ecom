"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Logininput() {
	const router = useRouter();
	const [val, setVal] = useState("");
	const [user, setUser] = useState("");
	const [exist, setExist] = useState(0);
	const handlechange = (e) => {
		setVal(e);
	};
	const handleusername = (e) => {
		setUser(e);
	};
	const handlelogin = async () => {
		try {
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
				router.push("/Components/page1");
				setExist(0);
			} else {
				console.log("Doesnt exist");
				setExist(1);
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
					{" "}
					Login
				</div>
			) : (
				<div style={{ color: "grey" }}>Password should have atleast 8 characters</div>
			)}
			{exist == 0 ? (
				<div></div>
			) : (
				<div style={{ color: "red", textAlign: "center" }}>User Doesnt Exist</div>
			)}
		</motion.div>
	);
}
