import React, { useState } from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdCall, MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // Loading state

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage(''); // Clear previous messages
        setErrorMessage('');
        setIsSubmitting(true); // Set loading state to true

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    access_key: "ab114c23-5e20-4f54-81ae-2812da3142eb", // Replace with your actual Web3Forms Access Key
                    ...formData,
                }),
                timeout: 5000, // Set timeout of 5 seconds
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();

            if (result.success) {
                setSuccessMessage("Your message has been sent successfully!");
                setFormData({ from_name: '', from_email: '', message: '' }); // Clear form fields
            } else {
                setErrorMessage(result.message || "Failed to send the message. Please try again.");
            }
        } catch (error) {
            setErrorMessage(error.message || "An error occurred while sending your message. Please try again later.");
        } finally {
            setIsSubmitting(false); // Set loading state to false
        }
    };

    return (
        <div id='contact'>
            <h1 className='sm:text-4xl md:text-5xl text-3xl text-center my-4'>Get in touch</h1>
            <div className='lg:flex justify-center gap-10 2xl:mx-64 sm:my-20 my-5 xl:mx-32'>

                {/* Form Section */}
                <div className="shadow-2xl lg:w-[40%]">
                    <form onSubmit={handleSubmit} className="card-body w-full">
                        <div className="form-control">
                            <input
                                type="text"
                                name="from_name"
                                placeholder="Full Name"
                                className="input input-bordered"
                                value={formData.from_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <input
                                name="from_email"
                                type="email"
                                placeholder="Email Address"
                                className="input input-bordered"
                                value={formData.from_email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-[#72b626] hover:bg-green-700 text-white" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                    {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
                    {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
                </div>

                {/* Contact Details Section */}
                <div className='shadow-2xl flex flex-col justify-center p-4 sm:p-10 lg:w-[40%]'>
                    <div className='flex items-center gap-2 mb-2'>
                        <MdCall className='text-2xl text-black' />
                        <h1 className='text-lg text-black'>+8801933646077</h1>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <MdEmail className='text-2xl  text-black' />
                        <h1 className='text-lg text-black'>freelancerazmir143@gmail.com</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaLocationDot className='text-2xl text-black' />
                        <h1 className='text-lg text-black'>Narayanganj, Bangladesh</h1>
                    </div>
                    <div className='my-4 flex gap-4 items-center'>
                        <Link to={'https://www.facebook.com/azmiruddin143/'} className="hover:text-blue-500">
                            <FaFacebook className='text-2xl text-black' />
                        </Link>
                        <Link to={'https://github.com/azmiruddin-143'} className="hover:text-gray-700">
                            <FaGithub className='text-2xl text-black' />
                        </Link>
                        <Link to={'mailto:freelancerazmir@gmail.com'} className="hover:text-red-500">
                            <MdEmail className='text-2xl text-black' />
                        </Link>
                        <Link to={'http://wa.me/8801933946077'} className="hover:text-green-500">
                            <IoLogoWhatsapp className='text-2xl text-black' />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
