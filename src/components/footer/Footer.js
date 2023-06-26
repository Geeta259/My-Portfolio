import React from 'react'
import { AiFillHeart } from 'react-icons/ai'

export default function Footer() {
  return (
    <div className='flex w-full h-4 justify-center items-center text-center pb-4 font-textFont'>
        <p>Copyright © Geeta. Made with </p>
         <span className='text-xl text-red-700 mx-1'><AiFillHeart/></span>
         <p>by Geeta</p>
    </div>
  )
}
