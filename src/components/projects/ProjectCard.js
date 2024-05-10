import React from 'react'
import {BsGithub} from 'react-icons/bs'
import { FaGlobe } from 'react-icons/fa'

export default function ProjectCard({title,desc,src,git}) {
  return (
  <div className='group relative items-center justify-center overflow-hidden cursor-pointer shadow-sky-400 shadow-md hover:scale-110'  style={{'height':'380px','fontFamily':'sans-serif'}}>
      <div className='w-full  overflow-hidden' style={{'height':'370px'}}>
          <img className='sm:h-60 w-full object-cover group-hover:scale-125  group-hover:invisible  transition-transform duration-500' alt="project" src={src} style={{'height':'80%'}}/>
      </div>

      <div className='absolute inset-0'>
          <div className='absolute inset-0 flex flex-col items-center justify-center px-3 text-center translate-y-[71%] group-hover:translate-y-0 transition-all duration-300'>
                
          <h2 className='text-m font-bold text-white-400 text-base uppercase'>{title}</h2>
          <p className='text-sm mt-3 mx-3 mb-3 text-white-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{desc}</p>

                <div className='flex gap-3 items-center justify-center text-center'>
                    <a href={git}  target="_blank"><span className='text-3xl w-10 h-10 rounded-full inline-flex justify-center items-center text-gray-400 hover:text-sky-400 duration-300 cursor-pointer'><BsGithub/></span></a>
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