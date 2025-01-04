import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdCall, MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from 'react-router-dom';
const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
                'template_dfvquwm', // Replace with your EmailJS Template ID
                form.current,
                'YOUR_PUBLIC_KEY' // Replace with your EmailJS Public Key
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert('Email sent successfully!');
                },
                (error) => {
                    console.error(error.text);
                    alert('Failed to send email. Please try again.');
                }
            );
    };


    return (
        <div id='contact'>
            <h1 className='sm:text-4xl md:text-5xl text-3xl text-center my-4'>Get in touch</h1>
            <div className='lg:flex justify-center gap-10 2xl:mx-64 sm:my-20 my-5  xl:mx-32'>

                <div className="shadow-2xl lg:w-[40%] ">
                    <form onSubmit={sendEmail} className="card-body w-full">
                        <div className="form-control">
                            <input type="text" name='from_name' placeholder="Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input name='from_email' type="email" placeholder="Email Address" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <textarea placeholder='Your Message' class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#72b626] text-white">Submit</button>
                        </div>
                    </form>
                </div>



                {/* .... */}


                <div className='shadow-2xl flex flex-col justify-center  p-10 lg:w-[40%]] '>
                    <div className='flex items-center gap-2 mb-2'>
                        <MdCall className='text-2xl text-black' />
                        <h1 className='text-lg text-black'>+8801933646077</h1>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <MdEmail className='text-2xl text-black' />
                        <h1 className='text-lg text-black'>freelancerazmir143@gmail.com</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaLocationDot className='text-2xl text-black' />
                        <h1 className='text-lg text-black'>Narayanganj, Bangladesh</h1>
                    </div>

                    <div className='my-4 flex gap-4 items-center'>
                        <Link to={'https://www.facebook.com/azmiruddin143/'} ><FaFacebook className='text-2xl text-black' /></Link>
                        <Link to={'https://github.com/azmiruddin-143'} ><FaGithub className='text-2xl text-black' /></Link>
                        <Link to={'meilto:freelancerazmir@gmail.com'} ><MdEmail className='text-2xl text-black' /></Link>
                        <Link to={'http://wa.me/8801933946077'} ><IoLogoWhatsapp className='text-2xl text-black' /></Link>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default Contact;