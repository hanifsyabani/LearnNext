import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() =>{
    Aos.init();
  })
  return (
    <div className="h-screen">
      <div className="text-center pt-10">
        <h1 className="text-3xl font-bold ">
          About{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-clip-text text-transparent">
            Me
          </span>
        </h1>
        <p>Short story about me</p>
      </div>
      <hr className="border border-black mt-4" />
      <div className="mt-4 p-3 text-gray-700">
        <p className="mb-4 leading-normal" data-aos='fade-up' data-aos-delay = '100'>
          Hello, I am Muhammad Hanif Sya bani, the wordsmith behind the screen on
          this site. I am thrilled to share stories, knowledge, and inspiration
          with you. Lets get to know each other a little better.
        </p>
        <p className="mb-4 leading-normal" data-aos='fade-up' data-aos-delay = '200'>
          I am 20 years old and hail from Sekayu, Musi Banyuasin. Since
          childhood, I have always been fascinated by the world of technology and,
          shaping the journey of my life and my current writings. My hobbies
          include Badminton, Learn Programming, and Sleep, adding color to each
          day.
        </p>
        <p className="mb-4 leading-normal" data-aos='fade-up' data-aos-delay = '300'>
          It all started when I started . This experience opened my eyes to web
          development, which has since become the primary inspiration for my
          writings and content. Along this journey, I have also learned valuable
          lessons about , guiding me at every step.
        </p>
        <p className="mb-4 leading-normal" data-aos='fade-up' data-aos-delay = '400'>
          This site aims to be a place where we can learn and grow together. I
          want to, and through my writings, I hope to
          inspire, entertain, and provide new insights for my dedicated readers.
        </p>
        
      </div>
    </div>
  );
};

export default About;
