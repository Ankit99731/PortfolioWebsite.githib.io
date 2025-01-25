import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaGitAlt, FaGithub, FaNpm, FaBootstrap} from "react-icons/fa";
import { DiJavascript1} from "react-icons/di";
import { SiTailwindcss, SiVercel} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        // Postman: <SiPostman/>,
        React: <FaReact/>,
        TailwindCSS: <SiTailwindcss /> ,
        Javascript: <DiJavascript1/>,
        // Node : <DiNodejs/>,
        // Express : <SiExpress/>,
        // MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,

        // Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
