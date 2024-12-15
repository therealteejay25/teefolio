import React from "react";
import code from "../assets/img/code.svg";
import ui from "../assets/img/ui.svg";
import graphic from "../assets/img/graphic.svg";
import clean from "../assets/img/clean.svg";
import creative from "../assets/img/creative.svg";
import artistic from "../assets/img/artistic.svg";

const ServicesCards = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 justify-center max-w-[80vw] mx-auto items-center">
        <div className="h-64 hover:scale-110 transition shadow-md w-64 mx-auto m-5 bg-gray p-7 rounded-md">
          <img src={code} className="w-12" alt="" />
          <div className="py-3">
            <h3 className="text-lg text-light font-medium">Web Development</h3>
            <p className="text-white pr-3 text-sm py-2">
              I build responsive, high-performing websites tailored to your
              needs, ensuring functionality and a seamless user experience.
            </p>
          </div>
        </div>
        <div className="h-64 hover:scale-110 transition shadow-md w-64 mx-auto m-5 bg-gray p-7 rounded-md">
          <img src={ui} className="w-12" alt="" />
          <div className="py-3">
            <h3 className="text-lg text-light font-medium">UI / UX Design</h3>
            <p className="text-white pr-3 text-sm py-2">
            I craft intuitive and visually appealing interfaces that enhance user interaction and satisfaction.
            </p>
          </div>
        </div>
        <div className="h-64 hover:scale-110 transition shadow-md w-64 mx-auto m-5 bg-gray p-7 rounded-md">
          <img src={graphic} className="w-12" alt="" />
          <div className="py-3">
            <h3 className="text-lg text-light font-medium">Graphic Design</h3>
            <p className="text-white pr-3 text-sm py-2">
            I create impactful visuals and designs that effectively communicate your brand’s message.
            </p>
          </div>
        </div>
        <div className="h-64 hover:scale-110 transition shadow-md w-64 mx-auto m-5 bg-gray p-7 rounded-md">
          <img src={clean} className="w-12" alt="" />
          <div className="py-3">
            <h3 className="text-lg text-light font-medium">Clean Code</h3>
            <p className="text-white pr-3 text-sm py-2">
            I write maintainable, efficient code that ensures reliability and scalability for your projects.
            </p>
          </div>
        </div>
        <div className="h-64 hover:scale-110 transition shadow-md w-64 mx-auto m-5 bg-gray p-7 rounded-md">
          <img src={creative} className="w-12" alt="" />
          <div className="py-3">
            <h3 className="text-lg text-light font-medium">Creative design</h3>
            <p className="text-white pr-3 text-sm py-2">
            I bring fresh, innovative ideas to life, delivering designs that stand out and inspire.
            </p>
          </div>
        </div>
        <div className="h-64 hover:scale-110 transition shadow-md w-64 mx-auto m-5 bg-gray p-7 rounded-md">
          <img src={artistic} className="w-12" alt="" />
          <div className="py-3">
            <h3 className="text-lg text-light font-medium">Artistic Design</h3>
            <p className="text-white pr-3 text-sm py-2">
            I combine art and functionality to create designs that are visually stunning and deeply expressive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
