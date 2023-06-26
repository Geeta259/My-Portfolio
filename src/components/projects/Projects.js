import React from 'react'
import ProjectCard from './ProjectCard'

import { project1,project2,project3 } from '../../assets/image'

export default function Projects() {
  return (
   <section id="Projects" className='w-full h-auto my-6 pt-20'>

        <div>
         <h3 className='text-6xl text-white font-titleFont font-bold capitalize flex justify-center items-center text-center'>
           My Projects
         </h3>

         <div  className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 my-5 font-textFont'>
            <ProjectCard
            title="My Portfolio"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            src={project3}
            />
            <ProjectCard
              title="Calculator App"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              src={project2}
            />
            <ProjectCard
              title="Library Management System"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              src={project1}
            />
            
         </div>
      </div>

   </section>
  )
}
