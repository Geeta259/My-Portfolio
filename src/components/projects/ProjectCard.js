import React from 'react'
import {BsGithub} from 'react-icons/bs'
import { FaGlobe } from 'react-icons/fa'

export default function ProjectCard({title,desc,src}) {
  return (
  <div className='group h-auto relative items-center justify-center overflow-hidden cursor-pointer shadow-pink-600 shadow-md hover:scale-110'>
      <div className='w-full  h-80  overflow-hidden'>
          <img className='sm:h-60  h-70 w-full object-cover group-hover:scale-125  group-hover:invisible  transition-transform duration-500' alt="project" src={src}/>
      </div>

      <div className='absolute inset-0'>
          <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-300'>
                
          <h2 className='text-m font-bold text-pink-600 text-base uppercase pt-4'>{title}</h2>
          <p className='text-m mt-3 mx-3 mb-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{desc}</p>

                <div className='flex gap-3 items-center justify-center text-center'>
                    <span className='text-3xl w-10 h-10 rounded-full inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer'><BsGithub/></span>
                    <span className='text-3xl w-10 h-10 rounded-full inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer'><FaGlobe/></span>
                </div>

          </div>
      </div>
  </div>
 )
}


/*
 width: 100%;
    height: 0;
    background: linear-gradient(rgba(0,0,0,0.5), #ff004f);
    border-radius: 10px;
    position: absolute;
    left: 0; 
    bottom: 0;
    overflow: hidden;
    text-align: center;
    padding: 0 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 14px;
    transition: height 0.5s;
*/ 