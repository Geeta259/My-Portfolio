import React from 'react'
import { AiFillHeart } from 'react-icons/ai'

export default function Footer() {
  return (
    <div className='flex w-full h-4 text-xl  justify-center items-center text-center pb-4' style={{'font-family':'sans-serif'}}>
        <p>Copyright © Geeta. Made with </p>
         <span className='text-2xl text-red-700 mx-1'><AiFillHeart/></span>
         <p>by Geeta</p>
    </div>
  )
}
