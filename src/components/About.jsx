import Mycraft from "../assets/craft.png"
import {  motion } from "framer-motion"

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl'>
            <span className='text-stone-300'>My Craft</span></h2>
            <div className='flex flex-wrap'>
                <motion.div 
                whileInView={{opacity: 1, x: 0}}
                 initial={{opacity: 0, x: -100}}
                 transition={{duration: 0.5}}
                className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <img className="mx-2 w-80 h-85" src={Mycraft} alt="craft" />
                    </div>
                   
                </motion.div  >
                <motion.div 
                 whileInView={{opacity: 1, x: 0}}
                 initial={{opacity: 0, x: 100}}
                 transition={{duration: 0.5}}
                className="w-full lg:w-1/2">
                        <div className="flex justify-center lg:justify-start">
                            <p className="my-2 max-w-xl py-12">
                            I am a Full Stack Developer with over two years of experience. My expertise includes front-end development with React and back-end development using Node.js, MongoDB, and MySQL. As a proficient MERN stack developer, I build robust and scalable web applications. I am also skilled in Deeplearning tech and security testing to ensure applications are secure. Looking ahead, my goal is to deepen my knowledge in advanced software engineering and DeepLearning can contribute to impactful projects. I am keen to explore new technologies and methodologies that enhance the development process and improve software quality, driving digital transformation in the industry.
                            </p>
                        </div>
                    </motion.div>
            </div>

    </div>
  )
}

export default About