import React from 'react';
import reactimage from '.././/assets/react-original.svg'
import nodejsimage from '.././/assets/nodejs-original.svg'
import mongodbimage from '.././/assets/mongodb-plain-wordmark.svg'
import wordpressimage from '.././/assets/wordpress-logo.png'

const Skills = () => {
    return (
        <div className='bg-base-300 py-4 my-16'>
            <div className='2xl:mx-64 my-20 xl:mx-32'>
                <h1 className='text-5xl text-center'>Skills & Services</h1>
                <p className='py-3 text-center text-lg'>These are my working Skills & Services I have done.</p>
                <div className='grid grid-cols-4 my-10 gap-8' >
                    <div className='shadow-lg bg-white border py-5 px-5 space-y-3'>
                        <img className='w-20 mx-auto' src={reactimage} alt="" />
                        <h1 className='text-center'>React.js</h1>
                        <p className='text-center mx-auto'>React.js for Frontend and User-Interface Development.</p>
                    </div>
                    <div className='bg-base-200 py-5 px-5 space-y-3'>
                        <img className='w-20 mx-auto' src={nodejsimage} alt="" />
                        <h1 className='text-center'>Node.JS & Express.js</h1>
                        <p className=' text-center mx-auto '>Node.JS & Express.js for Backend API's Development.</p>
                    </div>
                    <div className='bg-base-200 py-5 px-5 space-y-3'>
                        <img className='w-20 mx-auto' src={mongodbimage} alt="" />
                        <h1 className='text-center'>MongoDB Database</h1>
                        <p className=' text-center mx-auto '>MongoDB for Backend API's Database Management.</p>
                    </div>
                    <div className='bg-base-200 py-5 px-5 space-y-3'>
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