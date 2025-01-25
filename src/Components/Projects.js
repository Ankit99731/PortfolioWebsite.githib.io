import React from 'react';
import ProjectBox from './ProjectBox';

import Blog from '../images/Blog.png';

import weather from '../images/weather.png';
import BackgroundColor from '../images/BackgroundColor.png';
const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        {/* <ProjectBox projectPhoto={WigglesImage} projectName="Wiggles" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="Newsletter" /> */}
       <ProjectBox projectPhoto={BackgroundColor} projectName="BackgroundColor" />
        <ProjectBox projectPhoto={weather} projectName="weather" />
        <ProjectBox projectPhoto={Blog} projectName="Blog" />
      </div>

    </div>
  )
}

export default Projects