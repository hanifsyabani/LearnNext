import React, { useEffect } from "react";
import Medsos from "./Medsos";
import { GiSkills } from "react-icons/gi";
import { IoMdDownload } from "react-icons/io";
import Image from "next/image";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import vite from "../assets/vite.png";
import next from "../assets/next.svg";
import mysql from "../assets/mysql.png";
import chakra from "../assets/chakra.png";
import material from "../assets/material.png";
import express from "../assets/express.svg";
import mongodb from "../assets/mongodb.svg";
import node from "../assets/node.png";
import LatestProject from "./LatestProject";
import { Tooltip } from "@mui/material";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import 'aos/dist/aos.css';


// darkmode
// responsif
// aos

const Home = ({darkmode}) => {

  useEffect(() =>{
    Aos.init();
  })
  return (
    <div className="lg:p-10 p-7">
      <div className="text-center">
        <h1 className="md:text-2xl text-lg font-bold ">
          {" "}
          Hy there <span className="animate-pulse">👋</span>
        </h1>
        <h1 className="md:text-3xl text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-clip-text text-transparent">
          <Typewriter
            options={{
              strings: [
                "I'm Muhammad Hanif Sya'bani",
                "Frontend Enthusiast",
                "Universitas Sriwijaya",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
      <div className="lg:mt-6 mt-10" data-aos = 'fade-right' >
        <h3 >Let's Connect</h3>
        <Medsos darkmode={darkmode}/>
        <p className={`${darkmode ? "text-white" : "text-gray-600"} lg:mt-3 mt-6 text-center md:text-left`}>
          I am a computer systems student with a deep interest in{" "}
          <span className="text-purple-600 font-semibold">
            Frontend development and Machine Learning.
          </span>{" "}
          Although I am still in the early stages of my journey in the tech
          world, my passion for programming and machine learning has driven me
          to continue learning and growing.
        </p>
        <a href="https://drive.google.com/drive/u/0/folders/1BYiK5GK2ceQX5Xfdj0i92zokmlbLEyJD">
          <div className="bg-purple-600 hover:bg-purple-700 cursor-pointer w-[6rem] text-sm lg:mt-3 mt-6 rounded-md p-2 text-center text-white flex items-center mx-auto lg:mx-0 gap-2">
            <IoMdDownload size={20} className="animate-bounce" />
            <button>My CV</button>
          </div>
        </a>
        <hr className="w-full border border-black mt-4" />
      </div>
      <div className="lg:mt-6 mt-8">
        <div className="flex items-center gap-2" data-aos = 'fade-right' data-aos-delay = '100'>
          <GiSkills size={20} className="text-indigo-600" />
          <h3 className="font-bold">Skills</h3>
        </div>
        <div className="flex items-center flex-wrap mt-2 gap-6">
          <Tooltip title="HTML" placement="bottom">
            <div className="bg-gray-100 shadow-2xl rounded-md p-2 cursor-pointer hover:bg-gray-200 hover:scale-110 transition-all" data-aos= 'fade-up'  data-aos-delay = '200'>
              <Image src={html} width={30} height={30} />
            </div>
          </Tooltip>
          <Tooltip title="CSS">
            <div className="bg-gray-100 shadow-2xl rounded-md p-2 cursor-pointer hover:bg-gray-200 hover:scale-110 transition-all" data-aos= 'fade-up'  data-aos-delay = '300'>
              <Image src={css} width={30} height={30} />
            </div>
          </Tooltip>
          <Tooltip title="Javascript">
            <div className="bg-gray-100 shadow-2xl rounded-md p-2 cursor-pointer hover:bg-gray-200 hover:scale-110 transition-all" data-aos= 'fade-up'  data-aos-delay = '400'>
              <Image src={js} width={30} height={30} />
            </div>
          </Tooltip>
          <Tooltip title="React Js">
            <div className="bg-gray-100 shadow-2xl rounded-md p-2 cursor-pointer hover:bg-gray-200 hover:scale-110 transition-all">
              <Image src={react} width={30} height={30} data-aos= 'fade-up'  data-aos-delay = '500' />
            </div>
          </Tooltip>
          <Tooltip title="Tailwind">
            <div className="bg-gray-100 shadow-2xl rounded-md p-2 cursor-pointer hover:bg-gray-200 hover:scale-110 transition-all" data-aos= 'fade-up'  data-aos-delay = '600'>
              <Image src={tailwind} width={30} height={30} />
            </div>
          </Tooltip>
          <Tooltip title="Vite">
            <div className="bg-gray-100 shadow-2xl rounded-md p-2 cursor-pointer hover:bg-gray-200 hover:scale-110 transition-all">
              <Image src={vite} width={30} height={30}data-aos= 'fade-up'  data-aos-delay = '700' />
            </div>
          </Tooltip>
          <Tooltip title="Next Js">
            <div className="bg-gray-100 shadow-2xl rounded-md p-2 cursor-pointer hover:bg-gray-200 hover:scale-110 transition-all" data-aos= 'fade-up'  data-aos-delay = '800'>
              <Image src={next} width={30} height={30} />
            </div>
          </Tooltip>
          <Tooltip title="Chakra UI">
            <div className="bg-gray-100 shadow-2xl rounded-md p-2 cursor-pointer hover:bg-gray-200 hover:scale-110 transition-all" data-aos= 'fade-up'  data-aos-delay = '900'>
              <Image src={chakra} width={30} height={30} />
            </div>
          </Tooltip>
          <Tooltip title="Material UI">
            <div className="bg-gray-100 shadow-2xl rounded-md p-2 cursor-pointer hover:bg-gray-200 hover:scale-110 transition-all" data-aos= 'fade-up'  data-aos-delay = '1000'>
              <Image src={material} width={30} height={30} />
            </div>
          </Tooltip>
          <Tooltip title="Node Js">
            <div className="bg-gray-100 shadow-2xl rounded-md p-2 cursor-pointer hover:bg-gray-200 hover:scale-110 transition-all" data-aos= 'fade-up'  data-aos-delay = '1100'>
              <Image src={node} width={30} height={30} />
            </div>
          </Tooltip>
          <Tooltip title="Express Js">
            <div className="bg-gray-100 shadow-2xl rounded-md p-2 cursor-pointer hover:bg-gray-200 hover:scale-110 transition-all" data-aos= 'fade-up'  data-aos-delay = '1200'>
              <Image src={express} width={30} height={30} />
            </div>
          </Tooltip>
          <Tooltip title="MongoDB">
            <div className="bg-gray-100 shadow-2xl rounded-md p-2 cursor-pointer hover:bg-gray-200 hover:scale-110 transition-all" data-aos= 'fade-up'  data-aos-delay = '1300'>
              <Image src={mongodb} width={30} height={30} />
            </div>
          </Tooltip>
          <Tooltip title="MySQL">
            <div className="bg-gray-100 shadow-2xl rounded-md p-2 cursor-pointer hover:bg-gray-200 hover:scale-110 transition-all" data-aos= 'fade-up'  data-aos-delay = '1400'>
              <Image src={mysql} width={30} height={30} />
            </div>
          </Tooltip>
        </div>
        <hr className="w-full border border-black mt-5" />
      </div>
      <div className="mt-6">
        <LatestProject />
      </div>
    </div>
  );
};

export default Home;
