
import profilepic from "../assets/profile.jpeg";
import {  motion } from "framer-motion"

const container = (delay) =>({
    hidden: {x: 100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},

    },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-fll lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                   < motion.h1 
                   variants={container(0)}
                   initial="hidden"
                   animate="visible"
                    className="pb-16 text-6xl font-thin tracking-tighter lg:-mt-16 lg:text-8xl"> 
                     Jatesh jha</motion.h1>
                    <motion.span 
                     variants={container(0.5)}
                     initial="hidden"
                     animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500
                    to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack developer
                    </motion.span>
                    < motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tighter">
                    I am a dedicated and proficient Full Stack Developer with over two years of experience in the software development industry. My expertise spans across both front-end and back-end technologies, enabling me to build robust and scalable web applications. On the front end, I excel in using React to create dynamic and responsive user interfaces. On the back end, I am adept at leveraging Node.js, MongoDB, and MySQL to develop efficient server-side logic and manage databases effectively. As a MERN stack developer, I enjoy the seamless integration and powerful capabilities that this stack provides.
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-16 lg:pl-20">
                <div className="flex justify-center l-2 lg:pl-16">
                    <img className=" w-80 h-85 rounded-full " src={profilepic} alt="Jatesh Jha"/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Hero