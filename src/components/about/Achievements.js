import React from 'react'
import AchievementsCard from './AchievementsCard'
import { coderushlogo,hackerranklogo } from '../../assets/image'

export default function Experience() {
  return (
   
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-20 mt-10'>
                <AchievementsCard
                  Logo={hackerranklogo}
                  Title="JAVA(Basic)"
                  Desc="Hackerrank Certificate"
                  Year="Issued May 2023"
                  Link="https://www.hackerrank.com/certificates/55b556279291"
                />   

                <AchievementsCard
                  Logo={coderushlogo}
                  Title="CodeRush Coding Challenge"
                  Desc="Algo University Certificate"
                  Year="Issued April 2023"
                  Link="https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/30/Geeta.png"
                /> 

                  <AchievementsCard
                  Logo={hackerranklogo}
                  Title="Problem Solving (Basic) Certificate"
                  Desc="Hackerrank Certificate"
                  Year="Issued Oct 2022"
                  Link="https://www.hackerrank.com/certificates/a2dcbe55ccd9"
                />     
           
   </div>
  )
}
