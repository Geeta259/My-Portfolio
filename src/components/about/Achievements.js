import React from 'react'
import AchievementsCard from './AchievementsCard'
import { coderushlogo,hackerranklogo } from '../../assets/image'
import AchieveCard from './AchieveCard'

export default function Experience() {
  return (
   
    <section>

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

   <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-20 mt-10'>
                <AchieveCard
                  Title="Ranked in Top 100 Contributor"
                  Desc="Contributed to 25+ repositories and merged 30+ valid pull
                  requests in GirlsScript Summer of Code’23."
                  Link="https://drive.google.com/file/d/1KJn7xtf9HZL1iFSion59cvGiFswB3BTH/view?usp=sharing"
                />   

                <AchieveCard
                  Title="Winner of 30 Days of Code"
                  Desc="Competition hosted by the Turing Club of Programmers at
                  NITRR, showcasing exceptional problem-solving skills and
                  dedication to continuous learning"
                  Link="https://drive.google.com/file/d/1_Mq-TUgAfW3r0Sdz1Z4vfWzPuJtW8_or/view?usp=sharing"
                />   

                <AchieveCard
                  Title="GFG Ranking: Top 120 at NITRR"
                  Desc="Ranked within the top 120 among all students of NITRR on
                  GeeksforGeeks, highlighting a commitment to continuous
                  learning and skill development.."
                 Link="https://www.geeksforgeeks.org/user/geetkiroula/"
                />     
           
   </div>

    </section>
   
   
  )
}
