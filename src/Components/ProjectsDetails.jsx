import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectsDetails = () => {
    const detailsProjects = useLoaderData()
    const { image, name,technogie,description } = detailsProjects
    return (
        <div className='2xl:mx-64 mx-10 sm:my-20 my-5 gap-8 grid lg:grid-cols-2 xl:mx-32'>
            <div className=''>
                <h1 className='mb-4'>Technogie : {technogie}</h1>
                <img  src={image} alt="" />
            </div>
            <div  >
                <h1 className='sm:text-3xl text-xl pb-4'>{name}</h1>
                <p className='sm:leading-loose'>{description}</p>
            </div>
        </div>
    );
};

export default ProjectsDetails;