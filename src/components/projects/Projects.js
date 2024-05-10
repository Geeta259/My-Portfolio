import React from 'react'
import ProjectCard from './ProjectCard'

import { project1,project2,project3,project4, project5 } from '../../assets/image'

export default function Projects() {
  return (
   <section id="Projects" className='w-full h-auto my-3 pt-20'>

        <div>
         <h3 className='text-5xl text-white font-textFont font-bold capitalize flex justify-center items-center text-center'>
           My Projects
         </h3>

         <div  className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-5' style={{'font-family':'sans-serif'}}>
            <ProjectCard
            title="My Portfolio"
            desc="I upgraded the website with five wireframes for Education, Work, Skills, Projects, and Contact sections.
             Responsive design principles were applied for compatibility across devices. Implementation of useState Hook facilitated efficient state management and form validation, while map functions enabled smooth navigation within the single-page application."
            src={project3}
            git={"https://github.com/Geeta259/My-Portfolio"}
            />
             <ProjectCard
              title="Campus Event Navigation System"
              desc="
              A campus event management project involves developing a system or platform to organize and manage various events within a college campus
              It integrates event, user, category, and sponsor management into a unified platform.Users can register for events, while administrators provide user access and permissions.The project aims to providing a smooth experience.
               "
              src={project4}
              git={"https://github.com/Geeta259/Campus-Event-Navigator"}
            />
            <ProjectCard
              title="Smart Contact Management"
              desc="
              A smart contact manager offers a features to streamline contact organization and accessibility. Users can effortlessly add, delete, and update contact details, including names, phone numbers, emails, and addresses
              The system includes password protection for database's privacy. Additionally, a forgot password feature enables users to recover their password through email verification.
              "
              src={project5}
              git={"https://github.com/Geeta259/Smart-Contact-Manager"}
            />            
         </div>

         <div  className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-5' style={{'font-family':'sans-serif'}}>
           
             <ProjectCard
              title="Library Management System"
              desc="A library management project in core Java facilitates the efficient organization and operations of a library through a user-friendly interface.
               It includes features for managing books (addition, deletion, updating), users (registration, updating information), and borrowing/returning books, error-handling and validation.
               It serves as a centralized platform for librarians.
               "
              src={project2}
              git={"https://github.com/Geeta259/javalibpro"}
            />
            <ProjectCard
              title="Calculator App"
              desc="Build a simple calculator application that can perform basic arithmetic operations like addition, subtraction, multiplication, and division.
              The app typically consists of a display area to show input and output, along with buttons representing numbers and operators. Using React's calculator app efficiently manages state and updates the display dynamically as users interact with it
              "
              src={project1}
              git={"https://github.com/Geeta259/Mine-Calculator"}
            />            
         </div>
      </div>

   </section>
  )
}
