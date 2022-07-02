import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zy7te2a', 'template_eqffviw', form.current, '3SIY15pXzO8NwTgMM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }



    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[1000px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>// Submit the form below</p>
                </div>
                <input type="text" placeholder='Name' name='name' className='bg-[#ccd6f6] p-2' />
                <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6]' />
                <textarea name='message' rows="10" className='bg-[#ccd6f6] p-2' placeholder='Message'></textarea>

                <button type='submit' className='text-white border-2 hover:bg-gray-600 px-4 py-3 mx-auto mt-5 flex items-center '>Send Message</button>
            </form>


        </div>
    );
};

export default Contact;