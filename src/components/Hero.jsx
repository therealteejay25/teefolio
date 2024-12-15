import React from "react";
import dowloadIcon from '../assets/img/Download.svg'

const Hero = () => {
  return (
    <div className="hero lg:h-[60vh]">
      <div className="bg-dark/60 h-full p-2 w-full">
        <div className="text-center my-20 text-light">
          <h4 className="py-1 text-lg font-medium text-grey">HELLO I'M</h4>
          <h3 className="text-lg font-medium">ARIYO EYITAYO</h3>
          <h2 className="text-4xl font-semibold py-2 text-main">WEB DEVELOPER / DESIGNER</h2>
          <p className="max-w-[36rem] mx-auto py-3 px-5">
            Hi, I’m Ariyo Eyitayo Emmanuel, a web developer/designer with 4
            years of experience. I specialize in creating innovative and
            visually stunning digital experiences that blend creativity with
            functionality.
          </p>
          <button className="border-2 flex mx-auto my-5 border-main p-3 px-10 rounded-full hover:bg-main transition font-medium">
            Download CV
            <img src={dowloadIcon} className="pl-2" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
