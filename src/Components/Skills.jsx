import React from 'react';
import reactimage from '.././/assets/react-original.svg'
import nodejsimage from '.././/assets/nodejs-original.svg'
import mongodbimage from '.././/assets/mongodb-plain-wordmark.svg'
import wordpressimage from '.././/assets/wordpress-logo.png'

const Skills = () => {
    return (
        <div id='skills' className='bg-[#00000006] py-4 my-16'>
            <div className='2xl:mx-64 my-20 mx-10 xl:mx-32'>
                <h1 className='lg:text-5xl sm:text-3xl md:text-4xl text-2xl text-center'>Skills & Services</h1>
                <p className='py-3 text-center text-lg'>These are my working Skills & Services I have done.</p>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 my-10 gap-8' >
                    <div className='shadow-2xl bg-[white] border py-5 px-5 space-y-3 transform transition-transform duration-700 hover:translate-y-[-10px]'>
                        <img className='w-20 mx-auto' src={reactimage} alt="" />
                        <h1 className='text-center'>React.js</h1>
                        <p className='text-center mx-auto'>React.js for Frontend and User-Interface Development.</p>
                    </div>
                    <div className='shadow-2xl bg-[white] border py-5 px-5 space-y-3 transform transition-transform duration-700 hover:translate-y-[-10px]'>
                        <img className='w-20 mx-auto' src={nodejsimage} alt="" />
                        <h1 className='text-center'>Node.JS & Express.js</h1>
                        <p className=' text-center mx-auto '>Node.JS & Express.js for Backend API's Development.</p>
                    </div>
                    <div className='shadow-2xl bg-[white] border py-5 px-5 space-y-3 transform transition-transform duration-700 hover:translate-y-[-10px]'>
                        <img className='w-28 mx-auto' src={mongodbimage} alt="" />
                        <h1 className='text-center'>MongoDB Database</h1>
                        <p className=' text-center mx-auto '>MongoDB for Backend API's Database Management.</p>
                    </div>
                    <div className='shadow-2xl bg-[white] border py-5 px-5 space-y-3 transform transition-transform duration-700 hover:translate-y-[-10px]'>
                        <img className='w-20 mx-auto' src={wordpressimage} alt="" />
                        <h1 className='text-center'>Wordpress</h1>
                        <p className='text-center mx-auto '>WordPress (CMS): A flexible, open-source platform for building websites.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;