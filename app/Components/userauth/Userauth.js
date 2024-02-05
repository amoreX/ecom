"use client"
import {useState } from 'react'
import {motion} from "framer-motion";
import Nav from "./Navbar";
import Cont from "./input";

export default function Auth(){
	const [login,setIslogin]=useState(true);
	const [create,setCreate]=useState(false);

	const handleLoginclick=()=>{
		setIslogin(true);
		setCreate(false);
	}

	const handleCreateclick=()=>{
		setCreate(true);
		setIslogin(false);
	};

	return(
		<motion.div 
		initial={{
			width:'1vw'
		}}
		transition={{
			delay:1,
			type:'spring',
            stiffness:100,
            damping:10
		}}
		animate={{
            width:'40vw'
        }}
		id="auth-container">
			<Nav login={handleLoginclick} isclick={login} create={handleCreateclick}></Nav>
			<Cont login={login} create={create}  ></Cont>
		</motion.div>
	)
}