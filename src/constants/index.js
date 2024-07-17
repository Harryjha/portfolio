import project1 from "../assets/projects/project1.jpeg";
import project2 from "../assets/projects/Chathouse.png";
import project3 from "../assets/projects/pot.jpeg";
import project4 from "../assets/projects/Deep.jpeg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Software Developer And Testing (OWASP) Intern ",
    company: " MECON",
    description: ` Developed security software and conducted comprehensive testing on the existing website in adherence to OWASP (Open Web Application Security Project) standards.`,
    technologies: ["Typescript","Tailwindcss","Vite","Restful-Api ", "React.js", "Node.js", "Express.js", "MongoDb","Docker"],
    
  },
  {
    year: "2023",
    role: "Full Stack Developer",
    company: "Rollick",
    description: ` Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript","Tailwindcss","Restful-Api ","threejs", "React.js", "Node.js", "Express.js", "MongoDb","Docker"],
  },
  
  
];

export const PROJECTS = [
  {
    title: "AI Chatbot",
    image: project1,
    description:
      "ChatAibot is an advanced AI-driven chatbot designed for seamless, intelligent conversations, providing users with accurate information, personalized assistance, and natural interaction across various platforms and applications.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Expressjs", "OpenAi-Api"],
    url: "https://github.com/Harryjha/ChatHarryAi.git",
  },
  {
    title: "Voice ChatRoom House",
    image: project2,
    description:
      "It is a platform where maximum of 25 people can connect and chat through voice, creating a seamless and personal communication experience.",
    technologies: ["Typescript", "CSS", "Reactjs", "Nodejs", "Expressjs"],
    url:"https://github.com/Harryjha/Voicechathouse.git",
  },
  
  {
    title: "Breast_Cancer_Classification",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["Colabo","neural networks","classification","pandas"],
    url:"https://github.com/Harryjha/deeplearning-proj/blob/main/Breast_Cancer_Classification.ipynb ",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Javascript","Tailwindcss", "React.js" ],
  },
];

export const CONTACT = {
  address: "Bariatu, Ranchi, Jharkhand, 834009 ",
  phoneNo: "9905631805 ",
  email: "jateshjha13@gmail.com",
};
