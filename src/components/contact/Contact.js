import React from 'react'
import LeftContact from './LeftContact'
import RightContact from './RightContact';

export default function Contact() {
  return (

    <section id="Contact" className='w-full h-auto pb-10 border-b-[1px] border-b-gray-400 my-10 mt-20'>

        <div>
         <h3 className='text-6xl font-titleFont lgl:text-5xl text-white-300 font-bold capitalize flex justify-center items-center text-center pt-10'>
            Contact With Me
         </h3>
         </div>

         <div className='w-full mt-10'>
            <div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>
                <LeftContact/>

                <RightContact/>
            </div>

         </div>
    </section>
  )
}
