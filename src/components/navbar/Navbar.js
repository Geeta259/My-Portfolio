import React, { useState } from 'react'
import { Link } from "react-scroll";
import { navLinksdata } from '../../constants/navlinks';
import {FiMenu} from 'react-icons/fi';
import {MdClose} from 'react-icons/md';

export default function Navbar() {
  const[showMenu , setShowMenu] = useState(false);

  return (
   <div className='w-full h-20 mx-auto flex justify-between items-center sticky top-0 z-50 bg-bodyColor'>
                {/* <a className="navbar-brand" href="#">{props.title}</a>*/}
                <div>
                    <h1 className='mx-20 text-3xl font-sans font-semibold pb-1'><span className='text-6xl font-textFont  text-sky-400'>G</span>eeta.</h1>
                 </div>

              <div>
                    <ul className='hidden mdl:inline-flex items-center gap-7 lgl:gap-14 pr-20'>
                        {
                            //navlinks.js consist a navlinksdata constant array of objects through map navlink data traverse
                            navLinksdata.map(({id,title,link}) => (
                                <li className="font-bold font-textFont text-xl text-white-400 font-normal  tracking-wide cursor-pointer hover:text-sky-500 duration-100" key={id}>
                                  <Link activeClass='text-sky-500' to={link} spy={true} smooth={true} offset={-70} duration={300}>{title}</Link>
                              </li>
                            ))
                        }
                    </ul>

                      <span onClick={()=>setShowMenu(!showMenu)} className='text-3xl mdl:hidden bg-black w-10 h-10 mr-5 shadow-md shadow-sky-400 inline-flex items-center justify-center rounded-full text-white-600 cursor-pointer'><FiMenu/></span>
            
                      {
                        showMenu && (
                            <div className='w-[70%] h-screen overflow-scroll bg-bodyColor absolute top-0 left-0 bg- p-4 scrollbar-hide mdl:hidden'>
                                <div>
                                    <ul className='flex flex-col gap-5 mx-10 py-20'>
                                      {
                                        navLinksdata.map((item)=>(
                                          <li className="font-bold font-textFont text-xl shadow-sky-400 text-white-400 tracking-wide cursor-pointer hover:text-sky-400 duration-100 hover:border-b-[2px] hover:border-b-sky-400" key={item.id}>{item.title}</li>
                                        ))
                                      }
                                    </ul>
                                  </div>
                                  <span onClick={()=>setShowMenu(false)} className='absolute top-4 right-3 text-2xl  text-white hover:text-pink-600 duration-300 cursor-pointer'><MdClose/></span>
                            </div>
                          )
                         
                        }
                    
            
              </div>            
    </div>
  );
}
