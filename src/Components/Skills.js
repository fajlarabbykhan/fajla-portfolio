import React from 'react';
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import Reacticon from '../assets/react.png'
import Node from '../assets/node.png'
import Mongo from '../assets/mongo.png'
import Tailwind from '../assets/tailwind.png'
import Git from '../assets/github.png'
import Firebase from '../assets/firebase.png'
import b from '../assets/b.png'
const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 ' >
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
                <div>
                    <p className='text-4xl  font-bold inline border-b-4 border-gray-600 '>Skills</p>
                    <p className='py-4'>// These are the technologies that I have used.</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={HTML} alt="HTML" className='w-20 mx-auto my-1' />
                        <p className='my-3'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={CSS} alt="CSS" className='w-20 mx-auto my-1' />
                        <p className='my-3'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Tailwind} alt="Tailwind" className='w-20 mx-auto my-1' />
                        <p className='my-3'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={JavaScript} alt="JavaScript" className='w-20 mx-auto my-1' />
                        <p className='my-3'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Reacticon} alt="React icon" className='w-20 mx-auto my-1' />
                        <p className='my-3'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Node} alt="Node" className='w-20 mx-auto my-1' />
                        <p className='my-3'>NODE JS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Mongo} alt="Mongo" className='w-20 mx-auto my-1' />
                        <p className='my-3'>MONGO DB</p>
                    </div>

                    {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={b} alt="Tailwind" className='w-20 mx-auto my-1' />
                        <p className='my-3'>BOOTSTRAP</p>
                    </div> */}
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Git} alt="Git" className='w-20 mx-auto my-1' />
                        <p className='my-3'>GITHUB</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;