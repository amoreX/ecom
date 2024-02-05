import {motion} from 'framer-motion'
export default function Logo(){
    const list=["R","I","A","L"]
    return(
        <div id="logo">
            <motion.div initial={{y:-600}}transition={{delay:1,
			type:'spring',
            stiffness:100,
            damping:14}} animate={{y:0}}>R</motion.div>
            <motion.div initial={{y:600}}transition={{delay:1,
			type:'spring',
            stiffness:100,
            damping:14}} animate={{y:0}}>I</motion.div>
            <motion.div initial={{y:-600}}transition={{delay:1,
			type:'spring',
            stiffness:100,
            damping:14}} animate={{y:0}}>A</motion.div>
            <motion.div initial={{y:600}}transition={{delay:1,
			type:'spring',
            stiffness:100,
            damping:14}} animate={{y:0}}>L</motion.div>
        </div>
    )
}