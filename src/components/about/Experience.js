import React from 'react'
import ExperienceCard from './ExperienceCard'

export default function Experience() {
  return (
   
    <div className='w-full lgl:flex lgl:flex-col pb-10 mt-10'>
                <ExperienceCard
                  Title="GirlScript Summer of Code GSSOC'23"
                  Desc="
                  In my role, I played a pivotal part in the development and maintenance of web applications, ensuring their alignment with project specifications. Utilizing GitHub for version control, I adeptly managed changes, collaborating seamlessly with project mentors to implement updates efficiently. With a focus on enhancing user experience, 
                  I optimized websites for mobile compatibility, guaranteeing seamless functionality across diverse devices and screen sizes. Moreover, I prioritized website security by implementing robust form validation protocols, mitigating the risk of erroneous data submissions. My contributions extended beyond individual projects, 
                  with active involvement in over 17 distinct GitHub repositories, where I engaged in rigorous code reviews and successfully merged 34 pull requests.
                  "
                  Tech="Technologies Used : HTML, CSS, JavaScript, ReactJS, Tailwind CSS."
                  Year="May-2023 - Present"
                />   

              <ExperienceCard
                  Title="Intern as a PHP Developer"
                  Desc=" I undertook comprehensive responsibilities encompassing the definition, maintenance, and retrieval of data from databases. 
                  Central to my role was the validation of form data, ensuring its accuracy and integrity throughout various user interactions. 
                  I led the creation of a more efficient way to manage projects in the application.
                  This experience provided me with invaluable insights into the inner workings of web applications, including intricate aspects such as security measures and session management protocols. 
                  "
                  Tech="Technologies Used : PHP , JAVASCRIPT , SQL , BOOTSTRAP , XAMPP"
                  Year="Jan-2021 - Dec-2021"
                />   
   </div>
  )
}
