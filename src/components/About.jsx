import React from "react";
import img from "../assets/img/img.jpg";
import fb from '../assets/img/facebook.svg'
import wa from '../assets/img/whatsapp.svg'
import mail from '../assets/img/mail.svg'
import x from '../assets/img/x.svg'
import ig from '../assets/img/insta.svg'
const About = () => {
  return (
    <div id="about" className="bg-dark lg:flex lg:px-48 py-10 ">
      <div>
        <img src={img} className="rounded-full mx-auto h-64 w-64" alt="" />
      </div>
      <div className="py-3 px-10 text-center">
        <h3 className="text-main text-xl font-semibold">About Me</h3>
        <p className="max-w-[50rem] text-light py-2 text-sm lg:text-md leading-6">
          I’m Ariyo Eyitayo Emmanuel, a creative web developer and designer with
          4 years of experience in development and 1 year in design. My passion
          lies in building visually captivating and functional digital
          experiences that merge creativity with technical precision. I’m
          committed to delivering innovative solutions that not only look great
          but also provide seamless usability. When I’m not coding or designing,
          I’m exploring new ideas to push the boundaries of web development and
          design. Let’s connect and create something extraordinary!
        </p>
        <div className="flex mx-auto w-52">
            <a className="m-2" target="_blank" href="https://web.facebook.com/profile.php?id=61566776733802"><img className="h-7" src={fb} alt="" /></a>
            <a className="m-2" target="_blank" href="http://bit.ly/3Bxvg5l"><img className="h-7" src={wa} alt="" /></a>
            <a className="m-2" target="_blank" href="mailto:therealteejay25@gmail.com"><img className="h-7" src={mail} alt="" /></a>
            <a className="m-2" target="_blank" href="https://x.com/therealteejay25"><img className="h-7" src={x} alt="" /></a>
            <a className="m-2" target="_blank" href="https://www.instagram.com/therealteejay25/"><img className="h-7" src={ig} alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default About;
