"use client";
import Auth from "./Components/userauth/Userauth";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {

	return (
		<main>
			<motion.div
				id="main-container"
				
			>
				<Logo />
				<Auth></Auth>
			</motion.div>
		</main>
	);
}
