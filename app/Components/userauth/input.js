import {motion} from 'framer-motion';
import Lgin from './Logininput';
import Crte from './createinput'
export default function Input({login,create}){
    return(
        <motion.div 
        id="container-input"
        initial={{opacity:0}}
        transition={{delay:1.91}}
        animate={{opacity:1}}>

            {login==true?
            <Lgin></Lgin>
            :
            <Crte></Crte>}

        </motion.div>
    )
}