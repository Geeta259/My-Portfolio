import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import {BsFacebook, BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

export default function RightBanner() {
    
    const [text] = useTypewriter({
        words: ['Passionate Learner.', 'Competitive Programmer.', 'Full Stack Developer.'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });

  return (
    <div className='w-full lgl:w-1/2 flex flex-col gap-20'>

             <div className='flex flex-col gap-3 mt-20'>
             
                <h1 className='text-6xl font-bold text-white font-textFont'>
                    Hello! I'm  
                    <span className='text-pink-600 capitalize font-headingFont tracking-wide'> Geeta</span>
                </h1>

                <h2 className='text-4xl font-bold font-titleFont'>a <span className='text-pink-600'>{text}</span>
                <Cursor
                    cursorBlinking="false"
                    cursorStyle="|"
                    cursorColor='#ff014f'
                />
                </h2>
                
                <p className='text-md font-textFont leading-6 tracking-[1px] pr-10'>
                    Let me first give you a brief introduction of myself !!<br/> Hello , My name is Geeta. I am from Delhi. I am pursuing Master's degree in Computer Application (MCA)
                    from <span className='text-pink-400 font-bold text-1xl'>NATIONAL INSTITUTE OF TECHNOLOGY, RAIPUR (NITRR)</span>. Currently, I am working on my problem solving skills by solving DSA problems on 
                    a daily basis. I have decent knowledge of web development made some projects based on that.  I am eager to grasp new opportunities on my way. 
                    I am working hard to make my future better and bright !! <br/><br/>
                    To know more about my Education, Skills, Experience, Projects please scroll down ! 
                </p>
            </div>

                <div>
                    <h2 className='my-2 pb-2 text-4xl font-titleFont'> Connect me on</h2>
                    <div className='flex gap-4'>

                        <span className='rounded-md text-3xl hover:-translate-y-2 transition-all hover:text-blue-300 duration-200'><BsFacebook/></span>
                        <span className='rounded-md text-3xl hover:-translate-y-2 transition-all hover:text-gray-500 duration-200'><BsGithub/></span>
                        <span className='rounded-md text-3xl hover:-translate-y-2 transition-all hover:text-blue-600 duration-200'><BsLinkedin/></span>
                        <span className='rounded-md text-3xl hover:-translate-y-2 transition-all hover:text-red-600 duration-200'><BsInstagram/></span>

                       <a href="images/Resume.pdf" download className='rounded-lg  w-30 h-10 ml-10 text-white text-xl p-2 cursor-pointer border-[1px] border-pink-800 hover:bg-pink-800'>Download CV</a>

                    </div>
                </div>

    </div>
   
  )
}
