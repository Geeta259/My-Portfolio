import React from 'react'
import RightBanner from './RightBanner'
import { mypics } from '../../assets/image'




export default function Banner() {

  return (
   <section id="Home" className='w-full flex flex-col lgl:flex-row items-center  font-textFont my-20 pb-20'>
       <div className='w-full lgl:w-1/2 flex'>
        <img className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10" src={mypics} style={{height:"680px",width:"550px"}} alt="bannerimg"/>
     </div>

       <RightBanner/>

    
   </section>
  )
}
