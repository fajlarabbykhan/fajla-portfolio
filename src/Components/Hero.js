import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
const Hero = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#ccd6f6]'>Hi, my name is</p>
                <h1 className='text-xl sm:text-4xl font-bold text-[#ccd6f6]'>
                    Fajla Rabby Khan
                </h1>
                <h2 className='text-xl sm:text-4xl font-bold text-[#8892b0]'>
                    I'm a Full Stack Developer.
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    A competent information technology professional with a focus
                    on full-stack development wants to join a reputable
                    organization as a Full-Stack Developer with experience in the
                    ReactJs Library to provide an excellent experience to the
                    company's technical audience. Want to continue a long-term
                    career in web development with opportunity for improvement.
                </p>
                <div>
                    <button className='text-white group w-fit border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-600 hover:border-cyan-600'>
                        View Projects
                        <span className='group-hover:rotate-90 duration-300 ml-2'>
                            <MdOutlineKeyboardArrowRight className='' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;