import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import resume from '../assets/Resume-Fajla_Rabby_Khan.pdf'
import { Link } from 'react-scroll';
const Navber = () => {
    const [nav, setNav] = useState(false)
    const handleHamMenu = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <a href="" className='font-logo text-4xl font-bold'>Fajla</a>
            </div>
            <div className=''>
                <ul className='hidden md:flex '>
                    <li>
                        <Link to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    {/* <li>About</li> */}
                    <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                    <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                </ul>
            </div>
            <div onClick={handleHamMenu} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-3 text-2xl'><Link onClick={handleHamMenu} to="home" smooth={true} duration={500}>Home</Link></li>
                {/* <li className='py-3 text-2xl'>About</li> */}
                <li className='py-3 text-2xl'><a onClick={handleHamMenu} href={resume} download className=''>Resume</a></li>
                {/* <a href={resume} download className='btn'>Review CV</a> */}

                <li className='py-3 text-2xl'><Link onClick={handleHamMenu} to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li className='py-3 text-2xl'> <li><Link onClick={handleHamMenu} to="projects" smooth={true} duration={500}>Projects</Link></li></li>
                <li className='py-3 text-2xl'><Link onClick={handleHamMenu} to="contact" smooth={true} duration={500}>Contact</Link></li>
                {/* #0a192f */}
            </ul>
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]'><a target='_blank' href="https://www.linkedin.com/in/fajla-rabby-khan/" className='flex justify-between items-center w-full text-gray-300'>Linkedin <FaLinkedin size={30} /></a></li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515]'><a target='_blank' href="https://github.com/fajlarabbykhan" className='flex justify-between items-center w-full text-gray-300'>GitHub <FaGithub size={30} /></a></li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4285F4]'><a target='_blank' href="mailto:fajlarabbyk55@gmail.com" className='flex justify-between items-center w-full text-gray-300 
                    '>Email <HiOutlineMail size={30} /></a></li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#617d88]'><a href={resume} className='flex justify-between items-center w-full text-gray-300' download={true}>Resume <BsFillPersonLinesFill size={30} /></a></li>

                </ul>

            </div>

        </div>
    );
};

export default Navber;