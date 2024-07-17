import { CONTACT } from "../constants";
import { GrPhone } from "react-icons/gr";
import { CgMail } from "react-icons/cg";
import {  motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className="my-10 text-center text-4xl">Contact</motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p 
             whileInView={{opacity: 1, x: 0}}
             initial={{opacity: 0, x: -100}}
             transition={{duration: 1}}
            className="my-4">{CONTACT.address}</motion.p>
            <motion.p 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1}}
            className="my-4 flex items-center justify-center"> 
            <GrPhone 
            
            className="mr-2" />
            {CONTACT.phoneNo }</motion.p>
            <motion.p
            className="my-4 flex items-center justify-center">
          <CgMail className="mr-2" />
            <a href={`mailto:${CONTACT.email}`} className="text-blue-500 hover:underline">
            
          {CONTACT.email}
        </a>
        </motion.p>
        </div>
        </div>
  );
};

export default Contact