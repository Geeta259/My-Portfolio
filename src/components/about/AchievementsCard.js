import React from 'react'

export default function ExperienceCard({Logo,Title,Desc,Year,Link}) {
  return (
    <div className='w-full h-full group flex'>    
    
     
      <div className='w-full p-3 bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg flex'>
             <div className='mx-2 py-3 w-13 h-full'><img className='w-full h-15' src={Logo} alt="achievements" /></div>

        <div className='flex flex-col lgl:flex group-hover:text-pink-600 w-43 ml-2 font-textFont'>
                 <h3 className='text-m md:text-xl pt-3 font-semibold w-60 h-20'>{Title}</h3>
                 <p className='text-m mt-2 text-white'>{Desc}</p>
                <p className='text-m mt-2 text-pink-600'>{Year}</p>

                  <a href={Link} download target="_blank" rel="noreferrer" className='rounded-lg h-10 mr-12 w-30 px-3 pt-1 pl-5 text-white text-lg my-2 cursor-pointer border-[1px] border-pink-800 hover:bg-pink-800'>Show Credential</a>

        </div>
    </div>
   </div>


  )
}
