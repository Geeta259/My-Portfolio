import React from 'react'
import { BsLinkedin, BsGithub, BsFacebook, BsInstagram} from 'react-icons/bs'
import {FaPhone} from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'

export default function LeftContact() {
  return (
    <div className='w-full lgl:w-[35%] h-full p-4 lgl:p-8 rounded-lg  flex flex-col justify-center lgl:mt-20'>
      
       <div className='flex flex-col gap-3 lgl:mt-20 mb-10'  style={{'font-family':'sans-serif'}}>
          <div>
            <h3 className='text-4xl font-bold text-white'>GEETA</h3>
             </div>
        
            <div className='flex flex-col gap-1'>
            <span className='text-base text-gray-400  text-xl  text-lightText'>Master in Computer Application</span>
            <span className='text-base text-gray-400  text-md text-lightText'>National Institute of Technology, Raipur</span>
            </div>
          
            <p className='text-base text-gray-400 flex items-center mt-3 gap-3'>
                <span className='text-3xl text-sky-400'><FaPhone/></span> <span className='text-xl text-white'>9272817128</span>
            </p>
            <p className='text-base text-gray-400 flex items-center gap-3'>
            <span className='text-3xl text-sky-400'> <AiFillMail/></span><span className='text-xl text-white'>geetkiroula1999@gmail.com</span>
            </p>                
        </div>


            <div className='flex flex-col lgl:h-60'>
                <h2 className='text-base uppercase  mb-2'>Social Links</h2>
                     <div className='flex gap-4'>

                     <a href="#" className='rounded-md text-3xl hover:-translate-y-1 transition-all hover:text-blue-300 duration-200'><span><BsFacebook/></span></a>
                     <a href="#" className='rounded-md text-3xl hover:-translate-y-1 transition-all hover:text-gray-400 duration-200'><span><BsGithub/></span></a>
                     <a href="#" className='rounded-md text-3xl hover:-translate-y-1 transition-all hover:text-blue-600 duration-200'><span><BsLinkedin/></span></a>
                     <a href="#" className='rounded-md text-3xl hover:-translate-y-1 transition-all hover:text-red-600 duration-200'><span><BsInstagram/></span></a>
                    </div>
                    
            </div>

          
    </div>

  )
}
