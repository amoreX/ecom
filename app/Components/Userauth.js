"use client"

import {motion} from "framer-motion";
import Nav from "./Navbar";

export default function auth(){
	return(
		<motion.div 
		initial={{
			width:'0.01vw'
		}}
		transition={{
			delay:.2,
			type:'spring',
            stiffness:100,
            damping:10
		}}
		animate={{
            width:'40vw'
        }}
		id="auth-container">
			<Nav></Nav>
		</motion.div>
	)
}