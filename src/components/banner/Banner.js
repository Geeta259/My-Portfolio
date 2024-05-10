import React from 'react'
import RightBanner from './RightBanner'
import { mypics } from '../../assets/image'




export default function Banner() {

  return (
   <section id="Home" className='w-full flex flex-col lgl:flex-row items-center  font-textFont my-5 pb-20'>
       <div className='w-full lgl:w-1/2 flex'>
        <img className="w-[300px] h-[400px] lgl:w-[400px] lgl:h-[450px] lgl:-mt-20" src={mypics} style={{height:"450px",width:"450px", borderRadius:"50%",border:"none"}} alt="bannerimg"/>
     </div>

       <RightBanner/>

    
   </section>
  )
}
