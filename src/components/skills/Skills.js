import React from 'react'
import Skillscard from './Skillscard'
import { html,css,c,java,php,js,bootstrap,tailwind,github,react, spring} from '../../assets/image'
export default function Features() {
  return (
    <section id="Skills" className='w-full mt-20 pb-20'>
      <div>
         <h3 className='text-5xl text-white-300 font-textFont font-bold capitalize flex justify-center items-center'>
           My Skills
         </h3>
      </div>
              
        <div className='grid grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-5 xl:gap-5 mt-5 text-center mx-4 pt-4'>
          <Skillscard Logo={c} Title="C" style={`shadow-blue-800`} />
           <Skillscard Logo={html} Title="HTML" style={`shadow-orange-500`} />
           <Skillscard Logo={css} Title="CSS" style={`shadow-blue-500`}/>
           <Skillscard Logo={js} Title="JavaScript" style={`shadow-yellow-500`}/>
           <Skillscard Logo={java} Title="JAVA" style={`shadow-red-600`}/>
           <Skillscard Logo={php} Title="PHP" style={`shadow-blue-300`}/>
           <Skillscard Logo={bootstrap} Title="Bootstrap" style={`shadow-purple-400`}/>
           <Skillscard Logo={github} Title="GitHub" style={`shadow-gray-400`}/>
           <Skillscard Logo={tailwind} Title="Tailwind" style={`shadow-sky-400`}/>
           <Skillscard Logo={react} Title="React" style={`shadow-sky-700`}/>
           <Skillscard Logo={spring} Title="Spring Boot" style={`shadow-green-700`}/>
        </div>
   </section>
  )
}
