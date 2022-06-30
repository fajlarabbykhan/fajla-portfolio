import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'

const Navber = () => {
    const [nav, setNav] = useState(false)
    const handleHamMenu = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <a href="" className='font-logo text-2xl font-bold'>Fajla Rabby Khan</a>
            </div>
            <div className=''>
                <ul className='hidden md:flex '>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div onClick={handleHamMenu} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-3 text-2xl'>Home</li>
                <li className='py-3 text-2xl'>About</li>
                <li className='py-3 text-2xl'>Skills</li>
                <li className='py-3 text-2xl'>Projects</li>
                <li className='py-3 text-2xl'>Contact</li>
                {/* #0a192f */}
            </ul>
            <div className='hidden'>

            </div>

        </div>
    );
};

export default Navber;