import React ,{useState} from 'react'
import Education from './Education'
import Experience from './Experience'
import Achievements from './Achievements'


export default function About() {
    const [education,seteducation] = useState(true);
    const [experience,setexperience] = useState(false);
    const [achievement,setachievement] = useState(false);
    
  return (
    <section id="About" className='w-full h-[1000]  my-2 py-6'>
    <div>
     <h3 className='text-5xl text-white-300 font-bold capitalize font-textFont flex justify-center items-center text-center'>
      About Me
     </h3>
     </div>

     <div className='mt-5'>
        <ul className='w-full grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 flex justify-center items-center text-center'>
            <li onClick={()=>seteducation(true) &  setachievement(false) & setexperience(false)} 
            className={`aboutLinks ${education ? 'bg-sky-600 bg-opacity-70' : 'bg-none'}`}>Education</li>

            <li onClick={()=>seteducation(false) & setachievement(false) & setexperience(true)}    className={` aboutLinks ${experience ? 'bg-sky-600 bg-opacity-70' : 'bg-none'}`}>Experience</li>

            <li onClick={()=>seteducation(false) & setachievement(true) & setexperience(false)}    className={` aboutLinks ${achievement ? 'bg-sky-600 bg-opacity-70' : 'bg-none'}`}> Achievements</li>
        </ul>
     </div>

        {
            education && <Education/>
         }

         {
            experience && <Experience/>
         }

        {
            achievement && <Achievements/>
        }
    </section>
  )
}
