import React from 'react'
import img from "../assets/img/img.jpg";
import fb from '../assets/img/facebook.svg'
import wa from '../assets/img/whatsapp.svg'
import mail from '../assets/img/mail.svg'
import x from '../assets/img/x.svg'
import ig from '../assets/img/insta.svg'

const Contact = () => {
  return (
    <div id='contact' className='bg-dark'>
        <h3 className='text-center leading-12 tracking-wide text-3xl lg:text-5xl py-3 font-semibold text-main'>
            Got a project? <br /> Let's hop on it!!!
        </h3>
        <div>
        <div className="flex mx-auto w-60 lg:w-72">
            <a className="m-2" target="_blank" href="https://web.facebook.com/profile.php?id=61566776733802"><img className="h-24" src={fb} alt="" /></a>
            <a className="m-2" target="_blank" href="http://bit.ly/3Bxvg5l"><img className="h-24" src={wa} alt="" /></a>
            <a className="m-2" target="_blank" href="mailto:therealteejay25@gmail.com"><img className="h-24" src={mail} alt="" /></a>
            <a className="m-2" target="_blank" href="https://x.com/therealteejay25"><img className="h-24" src={x} alt="" /></a>
            <a className="m-2" target="_blank" href="https://www.instagram.com/therealteejay25/"><img className="h-24" src={ig} alt="" /></a>
        </div>
        <div className='border-t mx-20 text-center py-5 text-light border-t-light'>
            2024 @ Ariyo Eyitayo. All rights reserved.
        </div>
        </div>
    </div>
  )
}

export default Contact