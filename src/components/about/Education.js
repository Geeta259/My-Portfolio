import React from 'react'
import EducationCard from './EducationCard'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'

export default function Education() {
  return (
   
    <div className='w-full lgl:flex lgl:flex-col pb-10 mt-10'>
                <EducationCard
              
                College="National Institute Of Technology, Raipur"
                Title="Master In Computer Application"
                Year="2022-2025"
                />
       <span className='mx-20 md:px-10 text-3xl text-designColor'><BsFillArrowDownCircleFill/></span>  
       
              <EducationCard 
                College="Indira Gandhi National Open University"
                Title="Bachelor Of Science"
              Year="2017-2020"
          />
          <span className='mx-20 px-10 text-3xl text-designColor'><BsFillArrowDownCircleFill/></span>

            <EducationCard 
              
                College="Indian Institute Of Computer Science"
                Title="Diploma In Software Engineering"
                Year="2017-2020"
                />
         
   </div>
  )
}
