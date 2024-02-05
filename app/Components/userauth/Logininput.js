"use client"
import {motion} from 'framer-motion';
export default function logininput(){
    return(
        <motion.div 
        id="user-input"
        initial={{x:-700}}
        transition={{ delay: 0.1,
			type:'spring',
            stiffness:100,
            damping:10 }}
        animate={{x:0}}>
            <input type="text" id="username" placeholder="Username"></input>
            
            <input type="text" id ="password" placeholder="Password"></input>
           
            <div id="login-but"> Login</div>
        </motion.div>
    )
}