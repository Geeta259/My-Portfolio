import React from 'react'

export default function EducationCard({Title,College,Year}) {
  return (
    <div className='w-1/2 h-1/3 group flex  shadow-md shadow-sky-400' style={{'margin':'auto'}}>   
      <div className='w-full p-3 bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg flex flex-col'>
        <div className='flex flex-col lgl:flex group-hover:text-sky-400' style={{'fontFamily':'sans-serif'}}>
                 <h3 className='text-3xl md:text-2xl font-semibold'>{Title}</h3>
                 <p className='text-xl mt-2 text-white'>{College}</p>
                <p className='text-xl mt-2 text-white'>{Year}</p>
        </div>
    </div>

 
   </div>
  )
}
