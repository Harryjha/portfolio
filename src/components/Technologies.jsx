import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiSolidity } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiGooglecolab } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";

const iconVariants = {
  initial: { x: -100, opacity: 1,  },
  animate: {
    x: [0, 100],
    
    opacity: [1, 1],
    transition: {
      x: {
        repeat: Infinity,
        duration: 4,
        ease: "linear",
      },
    },
  },
  
  
};

const Technologies = () => {
  const icons = [
    <RiReactjsLine className="text-7xl text-cyan-400" />,
    <SiMongodb className="text-7xl text-green-500" />,
    <DiRedis className="text-7xl text-red-700" />,
    <FaNodeJs className="text-7xl text-green-500" />,
    <SiSolidity className="text-7xl text-purple-400" />,
    <FaDocker className="text-7xl text-blue-400" />,
    <SiGooglecolab className="text-7xl text-yellow-400" />,
    <SiMysql className="text-7xl" />,
    <RiTailwindCssFill className="text-7xl" />,
    <FaGitAlt  className="text-7xl"/>
    
    
    

  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex gap-4">
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            className="rounded-2xl border-4 border-neutral-800 p-4 inline-block"
            initial="initial"
            animate="animate"
            variants={iconVariants}
          >
            {icon}
          </motion.div>
        ))}
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            className="rounded-2xl border-4 border-neutral-800 p-4 inline-block"
            initial="initial"
            animate="animate"
            variants={iconVariants}
          >
            {icon}
          </motion.div>
        ))}
        
      
      </div>
    </div>
  );
};

export default Technologies;