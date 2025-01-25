import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Ankit </h4>
      <h4>Copyright &copy; 2025 Ak</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Ankit99731" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/ankitkr63/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:ankitkumarakb002@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/Ankit63_kr/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer