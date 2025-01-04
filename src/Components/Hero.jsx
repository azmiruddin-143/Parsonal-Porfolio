import React from 'react';
import azmiruddin from '../../src/assets/azmir-uddin.png'
// import azmirbg from '../../src/assets/image-bg.jpg'
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Hero = () => {
    return (
        <div id='home' className='lg:flex sm:my-20 my-10 justify-between items-center mx-10 lg:mx-10 2xl:mx-64 xl:mx-32'>
            <div className='lg:flex-1'>
                <h1 className='xl:text-7xl text-2xl md:text-5xl'>I'm Azmir Uddin</h1>
                <h1 className='xl:text-4xl md:text-2xl py-4'>I am a Web Developer in Front End</h1>
                <p className='2xl:w-8/12 md:w-10/12'>Welcome to my Website! I am a Front-end developer . I am passionate about my work and I am always looking for new and innovative ways to improve my skills and knowledge. I am also a strong believer in communication and collaboration, and I always work closely with my clients to ensure that their needs are met and exceeded.</p>
                <div className=''>
                    <button className=' sm:py-3 py-1 px-3 sm:px-5 my-4 text-sm sm:text-md text-white bg-[#72b626] rounded-md azmir'>Download Resume </button>
                </div>
                <div className='flex gap-3 items-center my-3'>
                    <FaFacebook className='text-2xl sm:text-4xl' />
                    <FaGithub className='text-2xl sm:text-4xl' />
                    <FaXTwitter className='text-2xl sm:text-4xl' />
                </div>
            </div>

            <div className='border-4 w-fit border-[#72b626] rounded-full p-2'>
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