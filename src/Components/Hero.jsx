import React from 'react';
import azmiruddin from '../../src/assets/azmir-uddin.png'
// import azmirbg from '../../src/assets/image-bg.jpg'
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <div id='home' className='lg:flex sm:my-20 my-10 justify-between items-center mx-5 lg:mx-10 2xl:mx-64 xl:mx-32'>
            <div className='lg:flex-1'>
                <h1 className='xl:text-7xl text-2xl md:text-5xl'>I'm Azmir Uddin</h1>
                <h1 className='xl:text-4xl md:text-2xl py-4'>I am a Web Developer in Front End</h1>
                <p className='2xl:w-8/12 md:w-10/12'>Welcome to my Website! I am a Front-end developer . I am passionate about my work and I am always looking for new and innovative ways to improve my skills and knowledge. I am also a strong believer in communication and collaboration, and I always work closely with my clients to ensure that their needs are met and exceeded.</p>
                <div className=''>
                    <a
                        href="https://docs.google.com/document/d/1uA3CXrgGby7PsdSiRbrYFTP5h69D8OTjTULvNx56E1g/export?format=pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="sm:py-3 py-1 px-3 sm:px-5 my-4 text-sm sm:text-md text-white bg-[#72b626] rounded-md azmir">
                            Download Resume
                        </button>
                    </a>



                </div>
                <div className='flex gap-3 items-center my-3'>
                    <Link to={'https://www.facebook.com/azmiruddin143/'}  ><FaFacebook className='text-2xl sm:text-4xl' /></Link>
                    <Link to={'https://github.com/azmiruddin-143'} ><FaGithub className='text-2xl sm:text-4xl' /></Link>
                    <Link to={'https://x.com/azmiruddin143_'}><FaXTwitter className='text-2xl sm:text-4xl' /></Link>
                </div>
            </div>

            <div className='border-4 w-fit border-[#72b626] rounded-full p-2 bouncing-image'>
                <img className='bg-gradient-to-b from-[#73b626c4]  via-[#d3c20574] to-[#121112be] lg:w-[400px] xl:w-full relative rounded-full'
                    src={azmiruddin} alt="" />
            </div>
        </div>
    );
};

export default Hero;


// style={{
//     backgroundImage: `url(${azmirbg})`, backgroundColor: "#00000087",
//     backgroundBlendMode: "multiply"
// }}