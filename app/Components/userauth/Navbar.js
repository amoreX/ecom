"use client";

import { motion } from "framer-motion";

export default function Nav({ login, create, isclick }) {
	return (
		<motion.div
			id="auth-nav"
			initial={{ opacity: 0, y: -100 }}
			transition={{ delay: 1.91, type: "spring", stiffness: 100, damping: 10 }}
			animate={{ opacity: 1, y: 0 }}
		>
			<div
				id="nav-options"
				onClick={() => login()}
				style={{
					borderBottom: isclick === true ? "1px #EBA977 solid" : "1px solid transparent",
				}}
			>
				Login
			</div>
			<div
				id="nav-options"
				onClick={() => create()}
				style={{ borderBottom: isclick === false ? "1px #EBA977 solid" : "1px solid transparent" }}
			>
				Create Account
			</div>
		</motion.div>
	);
}
