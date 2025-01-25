import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
   
    weatherDesc:"A weather app that shows the weather of any city in the world. This project was made to understand API integration, environment variables and vercel deployment.",
    weatherGithub:"https://github.com/Ankit99731/weahter_app_githun.io",
    weatherWebsite:"https://weahter-app-githun-io.vercel.app/",

  
   BlogDesc:"A blog website where you can write and display your blogs. This project was made to understand API integration, environment variables and vercel deployment.",
    BlogGithub:"https://github.com/Ankit99731/Blog-Platform",
    BlogWebsite:"https://blog-platform-ten-sooty.vercel.app/",

    BackgroundColorDesc:"A website that changes the background color on clicking the button. This project was made to understand the basics of React.",
    BackgroundColorGithub:"https://github.com/Ankit99731/Background_changer.github.io",
    BackgroundColorWebsite:"https://background-changer-github-io.vercel.app/",
   
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox