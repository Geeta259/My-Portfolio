import React from 'react'
import EducationCard from './EducationCard'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'

export default function Education() {
  return (
   
    <div className='w-full lgl:flex lgl:flex-col pb-10 mt-10 justify-center text-center'>
                <EducationCard
              
                College="National Institute Of Technology, Raipur"
                Title="Master In Computer Application"
                Year="CPI : 9.7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2022-2025"
                
                />
             
                <span className='mx-20 mt-4 mb-3 px-10 text-4xl text-sky-400'  style={{"margin":"auto"}}><BsFillArrowDownCircleFill/></span>  

       
              <EducationCard 
                College="Indira Gandhi National Open University"
                Title="Bachelor Of Science"
              Year="Division : First&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2017-2020"
          />
          <span className='mx-20 px-10 mt-4  mb-3 text-4xl text-sky-400'  style={{"margin":"auto"}}><BsFillArrowDownCircleFill/></span>

            <EducationCard 
              
                College="Indian Institute Of Computer Science"
                Title="Diploma In Software Engineering"
                Year="Grade : A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2017-2020"
                />
         
   </div>
  )
}
