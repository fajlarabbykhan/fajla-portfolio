import React from 'react';
import p1 from '../assets/Project_1.PNG'
import p2 from '../assets/Project_2.PNG'
import p3 from '../assets/Project_3.PNG'
const Projects = () => {
    return (
        <div name='projects' className='w-full h-screen bg-[#0a192f] text-gray-300 '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
                <div className=''>
                    <p className='text-4xl  font-bold inline border-b-4 border-gray-600'>Projects</p>
                    <p className='py-4'> // View some of my most recent work.</p>
                </div>


                <div

                    className='grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div
                        style={{ backgroundImage: `url(${p1})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                E-Electronics
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="
                                https://electronic-a910e.web.app/
                                " target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Live</button>
                                </a>
                                <a href="https://github.com/fajlarabbykhan/warehouse-management-client-side" target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>



                    <div
                        style={{ backgroundImage: `url(${p2})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Auto Parts
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="
                                https://auto-tools-42f17.web.app/
                                " target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Live</button>
                                </a>
                                <a href="https://github.com/fajlarabbykhan/-manufacturer-website-client-side" target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>



                    <div
                        style={{ backgroundImage: `url(${p3})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                LAW House
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="
                                https://aita-law-llc.web.app/
                                " target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Live</button>
                                </a>
                                <a href="https://github.com/fajlarabbykhan/-independent-service-provider-assignment-10" target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Projects;