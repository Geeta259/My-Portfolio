import React from 'react';
import Navbar from './components/navbar/Navbar';
import './index.css';
import Banner from './components/banner/Banner';
import About from './components/about/About';
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText'>
         <Navbar/>
        <div className='max-w-screen-xl mx-auto px-3'>
         <Banner/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
        </div>
       
    </div>
  );
}

export default App;
