import React from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

export default function ExperienceCard({Title,Desc,Tech,Year}) {
  return (
    <div className='w-full h-1/3 group flex my-2  shadow-md shadow-sky-400' style={{'margin':'auto'}}>     
      <div className='w-full p-3 bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg flex'>
            <div className='mx-5 w-30'><span className='text-3xl text-sky-400 px-3'><BsFillArrowRightCircleFill/></span></div>

        <div className='flex flex-col lgl:flex group-hover:text-sky-400 w-100' style={{'font-family':'sans-serif'}}>
                 <h3 className='text-xl md:text-2xl font-semibold'>{Title}</h3>
                 <p className='text-m mt-2 text-white'>{Desc}</p>
                 <p className='text-m mt-2 text-white'>{Tech}</p>
                <p className='text-m mt-2 text-sky-400'>{Year}</p>
        </div>
    </div>
   </div>
  )
}
