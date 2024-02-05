"use client"

import {motion} from 'framer-motion'
export default function createinput(){
    return(
        <motion.div 
        id="user-input"
        initial={{x:700}}
        transition={{ delay:0.1,
			type:'spring',
            stiffness:100,
            damping:15 }}
        animate={{x:0}}>
            <input type="text" id="username" placeholder="Username"></input>
            
            <input type="text" id ="password" placeholder="Password"></input>
            
            <input type="text" id ="confirmpass" placeholder="Confirm Password"></input>
            <div id="login-but"> Create Account </div>
        </motion.div>
    )
}