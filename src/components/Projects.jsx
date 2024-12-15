import React from "react";
import base from "../assets/img/base.png";
import zurvey from "../assets/img/zurvey.png";
import lixt from "../assets/img/lixt.png";

const Projects = () => {
  return (
    <div id="projects" className="bg-dark min-h-screen py-10">
      <h3 className="text-main text-xl font-semibold text-center">
        My Projects
      </h3>
      <div>
        <div className="lg:flex justify-between px-5 lg:px-32 my-10">
          <img src={base} className="w-72 lg:w-96 mx-auto rounded-2xl" alt="" />
          <div className="p-5">
            <h3 className="text-main text-2xl font-semibold">
              Base Wall of Fame
            </h3>
            <p className="text-light py-3">
              A showcase platform celebrating the best contributors in a
              community. Built with an elegant and responsive design, the app
              dynamically displays user achievements, fostering recognition and
              inspiration. It reflects a strong commitment to design aesthetics
              and user engagement.
            </p>
            <a
              href="https://basewalloffame.vercel.app"
              className="text-main font-bold"
            >
              https://basewalloffame.vercel.app
            </a>
          </div>
        </div>
        <div className="lg:flex flex-row-reverse justify-between px-5 lg:px-32 my-10">
          <img src={zurvey} className="w-72 lg:w-96 mx-auto rounded-2xl" alt="" />
          <div className="p-5">
            <h3 className="text-main text-2xl font-semibold">Zurvey</h3>
            <p className="text-light py-3">
              A modern and interactive survey tool for gathering feedback and
              insights. Features a sleek and intuitive UI that ensures a smooth
              user experience. Built to make data collection seamless and
              efficient for personal and professional use cases.
            </p>
            <a href="https://zurvey.vercel.app" className="text-main font-bold">
              https://zurvey.vercel.app
            </a>
          </div>
        </div>
        <div className="lg:flex justify-between px-5 lg:px-32 my-10">
          <img src={lixt} className="w-72 lg:w-96 mx-auto rounded-2xl" alt="" />
          <div className="p-5">
            <h3 className="text-main text-2xl font-semibold">Lixt</h3>
            <p className="text-light py-3">
              A powerful yet minimalistic to-do list app designed for
              productivity enthusiasts. Featuring category organization, Google
              authentication, and task filtering, it allows users to manage
              their tasks effortlessly. The app's intuitive interface and smooth
              animations enhance user engagement.
            </p>
            <a
              href="https://lixt-main.vercel.app"
              className="text-main font-bold"
            >
              https://lixt-main.vercel.app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
