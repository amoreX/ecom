"use client";

import { motion } from "framer-motion";

export default function nav() {
	return (
		<motion.div
			id="auth-nav"
			initial={{ opacity: 0, y: -100 }}
			transition={{ delay: 1,
			type:'spring',
            stiffness:100,
            damping:10 }}
			animate={{ opacity: 1, y: 0 }}
		>
			<div id="nav-options">
				Login
			</div>
			<div id="nav-options">
				Create Account
			</div>
		</motion.div>
	);
}
