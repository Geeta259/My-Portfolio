import React from 'react'

export default function AchieveCard({Title,Desc,Link}) {
  return (
    <div className='w-full h-full group flex'>    
    
     
      <div className='w-full p-3 bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg flex  shadow-md shadow-sky-400'>
           
        <div className='flex flex-col lgl:flex group-hover:text-sky-400 w-43 ml-2'>
                 <h3 className='text-m md:text-xl pt-3 font-semibold w-80 h-20'>{Title}</h3>
                 <p className='text-m text-white'>{Desc}</p>
                 <a href={Link} download target="_blank" rel="noreferrer" className='rounded-lg h-10 mx-5 mt-3 w-30 pl-10 pt-1 text-white text-lg my-2 cursor-pointer border-[1px] border-sky-400 hover:bg-sky-600 hover:bg-opacity-70'>Show Credential</a>

        </div>
    </div>
   </div>


  )
}
