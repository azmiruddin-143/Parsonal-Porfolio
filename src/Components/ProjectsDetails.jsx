import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const ProjectsDetails = () => {
    const detailsProjects = useLoaderData()
    const { image, name, technogie, description, liveLink,struggles } = detailsProjects
    return (
        <div className='2xl:mx-64 mx-5 sm:my-20 my-5 gap-8 grid lg:grid-cols-2 xl:mx-32'>
            <div className=''>
                <h1 className='mb-4'>Technogie : {technogie}</h1>
                <img src={image} alt="" />
            </div>
            <div>
                <div className='my-3 flex items-center gap-5'>
                    <Link
                        to={`${liveLink}`}
                        className='flex items-center gap-2'>
                        <FaLink className='text-2xl sm:text-3xl' />
                        <h1 className='border-b'>Live Preview</h1>
                    </Link>
                    <Link
                        to={`https://github.com/azmiruddin-143`}
                        className='flex items-center gap-2'>
                        <FaGithub className='text-2xl sm:text-3xl'/>
                        <h1 className='border-b'>Github Link</h1>
                    </Link>
                </div>
                <h1 className='sm:text-3xl text-xl pb-4'>{name}</h1>
                <p className='sm:leading-loose'>{description}</p>
                 <h1 className='sm:text-3xl text-xl py-4'>Web Dev Struggles</h1>
                <p className='sm:leading-loose'>{struggles}</p>
            </div>
        </div>
    );
};

export default ProjectsDetails;