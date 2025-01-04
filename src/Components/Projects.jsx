import React, { useEffect, useState } from 'react';
import { FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch("/projects.json")
            .then(res => res.json())
            .then(data => {
                setProjects(data);
            })
    })


    return (
        <div className='2xl:mx-64 my-20 xl:mx-32'>
            <div class="relative text-center">
                <h1 class="text-5xl font-bold text-gray-200 uppercase">
                    Our Recent All Projects
                </h1>
                <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-pink-500 text-2xl font-bold">
                    Latest Works ({projects.length})
                </span>
            </div>

            <div className='grid my-20 grid-cols-3 gap-5 place-items-center'>
                {
                    projects.map(project =>
                        <div className='border h-96 p-6 rounded-md'>
                            <img src={project.image} alt="" />
                            <div className='my-3 '>
                                <h1>{project.name}</h1>
                                <p>{project.sortDetails}</p>
                            </div>
                            <div className='flex items-center my-3 justify-between'>
                                <Link className='flex items-center gap-2'>
                                    <FaLink />
                                    <h1 className='border-b'>Live Preview</h1>
                                </Link>
                                <Link to={`/details/${project._id}`} ><button className='bg-[#72b626] text-white py-2 px-5 rounded-md'>View more</button></Link>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Projects;