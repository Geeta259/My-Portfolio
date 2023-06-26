import React from 'react'
import ExperienceCard from './ExperienceCard'

export default function Experience() {
  return (
   
    <div className='w-full lgl:flex lgl:flex-col pb-10 mt-10'>
                <ExperienceCard
                  Title="GirlScript Summer of Code GSSOC'23"
                  Desc="Got to know about the exposure of real world software development by contributed to many open source projects."
                  Tech="Technologies in which i worked :  HTML , CSS , REACT JS , JS"
                  Year="May-2023 - Present"
                />   

              <ExperienceCard
                  Title="Intern as a PHP Developer"
                  Desc="Worked in a web based application to define , maintain and fetch data from database, 
                  validate form data and developed a workflow for projects and got to understand 
                  how web applications actually work, including security and session management."
                  Tech="Technologies in which i worked :  PHP , JAVASCRIPT , SQL , BOOTSTRAP , XAMPP"
                  Year="Jan-2021 - Dec-2021"
                />   
   </div>
  )
}
