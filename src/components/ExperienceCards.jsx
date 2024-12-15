import React from 'react';
import html from '../assets/img/html.svg';
import css from '../assets/img/css.svg';
import js from '../assets/img/js.svg';
import react from '../assets/img/react.svg';
import next from '../assets/img/next.svg';
import tailwind from '../assets/img/tailwindcss.svg';
import figma from '../assets/img/figma.svg';
import photoshop from '../assets/img/photoshop.svg';
import canva from '../assets/img/canva.svg';

const ExperienceCards = () => {
  const data = [
    {
      id: 1,
      name: "HTML",
      image: html,
      description:
        "Mastered the art of structuring websites with clean, semantic HTML. Built accessible, SEO-friendly layouts for projects ranging from personal blogs to dynamic web apps.",
    },
    {
      id: 2,
      name: "CSS",
      image: css,
      description:
        "Crafted stunning, responsive designs using advanced CSS techniques. Proficient in Flexbox, Grid, and animations to create visually appealing user interfaces.",
    },
    {
      id: 3,
      name: "JS",
      image: js,
      description:
        "Experienced in building dynamic and interactive features for web applications. Skilled in DOM manipulation, API integration, and asynchronous programming.",
    },
    {
      id: 4,
      name: "React JS",
      image: react,
      description:
        "Built modern, component-based web apps with React, optimizing for scalability and performance. Integrated complex features such as state management and hooks to enhance user experience.",
    },
    {
      id: 5,
      name: "Next JS",
      image: next,
      description:
        "Developed high-performing, server-rendered web apps using Next.js. Leveraged its routing and API features to create seamless, scalable, and SEO-friendly applications.",
    },
    {
      id: 6,
      name: "Tailwind CSS",
      image: tailwind,
      description:
        "Created elegant, utility-first designs with Tailwind CSS for rapid development. Delivered responsive and consistent UI across projects while keeping codebase clean and maintainable.",
    },
    {
      id: 7,
      name: "Figma",
      image: figma,
      description:
        "Designed intuitive and user-friendly interfaces in Figma, collaborating on wireframes and prototypes. Translated client visions into pixel-perfect web experiences.",
    },
    {
      id: 8,
      name: "Adobe Photoshop",
      image: photoshop,
      description:
        "Enhanced and manipulated graphics for web and branding purposes. Utilized Photoshop for creating logos, banners, and marketing materials with precision and creativity.",
    },
    {
      id: 9,
      name: "Canva",
      image: canva,
      description:
        "Produced eye-catching social media posts, presentations, and quick designs using Canva. Balanced efficiency with creativity for personal branding and client needs.",
    },
  ];

  return (
    <div className='w-[90vw] mx-auto'>
      <div className="grid w-[80vw] mx-auto grid-cols-1 lg:px-20 lg:grid-cols-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative group cursor-pointer mx-auto max-w-60 overflow-hidden m-5 p-3 rounded-lg shadow-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-52 lg:h-56 object-cover"
            />
            <div className="absolute inset-0 bg-main/30 flex flex-col items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <h2 className="text-2xl font-semibold text-center text-light">{item.name}</h2>
              <p className="text-center text-light p-3">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCards;
