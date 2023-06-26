import React from 'react'

export default function EducationCard({Title,College,Year}) {
  return (
    <div className='w-full h-1/3 group flex'>     
      <div className='w-full p-3 bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg flex flex-col'>
        <div className='flex flex-col lgl:flex group-hover:text-pink-600 font-textFont'>
                 <h3 className='text-xl md:text-2xl font-semibold'>{Title}</h3>
                 <p className='text-m mt-2 text-white'>{College}</p>
                <p className='text-m mt-2 text-white'>{Year}</p>
        </div>
    </div>
   </div>
  )
}
