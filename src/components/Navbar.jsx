import logo from "../assets/profile.jpeg"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";





const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6 ">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10 h-10 rounded-full " src={logo} alt="logo"  />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="www.linkedin.com/in/jatesh-jha-2859112b0"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin className="text-blue-600" />
        </a>
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/Jatesh_jha"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700"
          
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://leetcode.com/u/Harry_jha/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700"
        >
          <SiLeetcode className="text-orange-400" />
        </a>
        </div>
    </nav>

  );
}

export default Navbar;