import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import {BsFacebook, BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

export default function RightBanner() {
    
    const [text] = useTypewriter({
        words: ['Passionate Learner.', 'Java Developer.', 'Web Developer.','Problem Solver.'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });

  return (
    <div className='w-full lgl:w-1/2 flex flex-col gap-20 mt-5'>

             <div className='flex flex-col gap-3'>
             
                <h1 className='text-4xl font-bold pt-10 text-white font-textFont'>
                    Hi There, I'm  
                    <span className='text-6xl text-sky-400 capitalize font-headingFont tracking-wide'> Geeta</span>
                </h1>

                <h2 className='text-4xl font-bold font-textFont'>a <span className='text-sky-500'>{text}</span>
                <Cursor
                    cursorBlinking="false"
                    cursorStyle="|"
                    cursorColor='#ff014f'
                />
                </h2>
                
                <p className='text-md font-textFont pr-10' style={{fontFamily:"sans-serif"}}>
                    Let me first give you a brief introduction of myself !!<br/> Hello , My name is Geeta. I am from Delhi. Currently I'm pursuing a Master's degree in Computer Application at  <span className='text-sky-400 font-bold text-1xl'>NATIONAL INSTITUTE OF TECHNOLOGY, RAIPUR (NITRR)</span>. Throughout my academic journey, I've maintained an CPI of 9.7 up to the fourth semester.
                    I completed my Bachelor's degree in Science with First Division at Indira Gandhi National Open University. Additionally, I pursued a diploma in Software Engineering from the Indian Institute of Computer Science, achieving an 'A' grade.
                    Presently, I am dedicated to enhancing my problem-solving skills by engaging in daily DSA practice on platforms like LeetCode and GeeksforGeeks.
                    One of my key strengths is my adaptability and quick learning. Throughout my educational journey and experiences, I've had the opportunity to work on a diverse range of projects and technologies. I'm proactive in learning and am always eager to acquire new skills.
                    
                </p>
            </div>

                <div>
                    <h2 className='text-2xl font-textFont pb-3'> Connect me on</h2>
                    <div className='flex gap-4'>

                        <span className='rounded-md text-3xl hover:-translate-y-2 transition-all hover:text-sky-400 duration-200'><BsFacebook/></span>
                        <span className='rounded-md text-3xl hover:-translate-y-2 transition-all hover:text-gray-600 duration-200'><BsGithub/></span>
                        <span className='rounded-md text-3xl hover:-translate-y-2 transition-all hover:text-blue-600 duration-200'><BsLinkedin/></span>
                        <span className='rounded-md text-3xl hover:-translate-y-2 transition-all hover:text-red-600 duration-200'><BsInstagram/></span>

                       <a href="images/Geeta_Resume.html" download className='rounded-lg  w-30 h-10 ml-10 text-white text-xl p-2 cursor-pointer border-[1px] border-sky-400 hover:bg-sky-600 bg-opacity-60'>Download CV</a>

                    </div>
                </div>

    </div>
   
  )
}
