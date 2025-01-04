import React from 'react';
import aboutimage from '../../src/assets/all-skils.png'

const About = () => {
    return (
        <div id='about' className='2xl:mx-64 mx-10  lg:flex items-center gap-10 justify-between xl:mx-32'>

            <div className='hidden lg:block'>
                <img className='rounded-lg' src={aboutimage} alt="" />
            </div>
            <div className='flex-1 space-y-4'>
                <h1>About Me - </h1>
                <h1 className='sm:text-3xl text-xl'>Professional Web Developer & WordPress Specialist</h1>
                <p className='text-md'>Hello there! I'm Azmir Uddin, a Front-end web developer with extensive experience who is prepared to offer you outstanding online solutions. I firmly believe in professionalism and producing work of the highest calibre, and I'm committed to fulfilling all of your requirements in the fastest and most effective way possible. I have the Streamlined blending of several technologies like Html, Css, Tailwindcss, ReactJs, ExpressJs, NoteJs, Firebase, Bootstrap, WordPress, Mobile Aplication! I can design in many styles that you will like a lot. Thank you so much for seeing my profile and description.</p>
            </div>

            <div className='lg:hidden'>
                <img className='rounded-lg' src={aboutimage} alt="" />
            </div>


        </div>
    );
};

export default About;