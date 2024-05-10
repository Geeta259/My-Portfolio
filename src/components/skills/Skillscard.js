import React from 'react'

export default function Card({Logo,Title,style}) {
  return (
    <div  className={` ${style} shadow-md hover:scale-105 duration-500 py-2 rounded-lg`} style={{'font-family':'sans-serif'}}>
      <img src={Logo} alt="skills" className='w-12 h-12 mx-auto'/>
      <p className='mt-4 text-m'>{Title}</p>
    </div>
  )
}
