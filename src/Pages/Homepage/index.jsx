import React, { useState, useRef } from 'react'
import backgroundContent1Video from '../../asset/img/bg.mp4'
import Heart from '../../components/Icon/Heart'
import emailjs from '@emailjs/browser';


function Homepage() {
    const form = useRef();
    const textMessage = "Love you more !!!"
    const emailMessage = "tongducquanghung1711@gmail.com"

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_hnvdhdn', 'template_zaczbze', form.current, {
                publicKey: 'rNJvxmZz_qOTzmIzL',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const [colorStroke, setcolorStroke] = useState('#AAC8A7');

    const handleClick = () => {
        // Thay đổi màu qua lại mỗi lần click
        if (colorStroke === '#FFDDCC') {
            setcolorStroke('#FEBBCC');
        } else {
            setcolorStroke('#FFDDCC');
        }
    };

    return (
        <div className='h-screen w-screen bg-[#F5F0BB] flex justify-center items-center'>
            <div className='w-2/5 h-5/6 bg-[#F3F8FF] m-2 rounded-[13px] relative'>
                <video src={backgroundContent1Video} className='w-full h-full object-cover rounded-[13px]' autoPlay loop muted />
                <form ref={form} onSubmit={sendEmail}>
                    <label className='invisible'>Name</label>
                    <input className='invisible' type="text" name="user_name" />
                    <label className='invisible'>Email</label>
                    <input className='invisible' type="email" name="user_email" value={emailMessage} />
                    <label className='invisible'>Message</label>
                    <textarea className='invisible' name="message" value={textMessage} />
                    <input className='invisible' type="submit" value="Send" />
                    <button
                        onSubmit={sendEmail}
                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 animation-pulse'
                        onClick={handleClick}
                    >
                        <Heart colorStroke={colorStroke} />
                    </button>
                </form>
            </div>
            <div className='w-6/12 h-[300px] '>

            </div>
        </div>
    );
}

export default Homepage