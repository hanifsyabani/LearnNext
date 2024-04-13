import React, { useEffect } from "react";
import weather from "../assets/project/weather.png";
import bookme from "../assets/project/bookme.png";
import recipe from "../assets/project/recipe.png";
import todolist from "../assets/project/todolist.png";
import plugshop from "@/assets/project/plugshop.png";
import adatku from "@/assets/project/adatku.png";
import edunif from "@/assets/project/edunif.png";
import escooter from "@/assets/project/e-scooter.png";
import songsing from '@/assets/project/songsing.png'
import react from "../assets/react.png";
import vite from "../assets/vite.png";
import chakra from "../assets/chakra.png";
import tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import { FaGithub, FaEye } from "react-icons/fa";
import Image from "next/image";
import Aos from "aos";
import 'aos/dist/aos.css';

const Project = () => {
  useEffect(() =>{
    Aos.init();
  })
  const dataProject = [
    {
      id: 1,
      title: "Weather App",
      detail:
        "A weather app is an online platform that provides information about current weather conditions, forecasts, and various other weather parameters.",
      image: weather,
      link: "https://weather-app-kappa-livid-52.vercel.app/",
      github: "https://github.com/hanifsyabani/WeatherApp",
      tech: [react, vite, tailwind, chakra],
    },
    {
      id: 2,
      title: "Lidah Suka",
      detail:
        "This food recipe website provides a complete user experience with features such as an attractive homepage, intuitive search and filters to find the desired recipe.",
      image: recipe,
      link: "https://recipe-eight-flame.vercel.app/",
      github: "https://github.com/hanifsyabani/Recipe",
      tech: [react, vite, tailwind, chakra],
    },
    {
      id: 3,
      title: "bookMe",
      detail:
        "A book search website using the Google Books API can provide users with an efficient way to find and explore various book titles.",
      image: bookme,
      link: "https://bookme-jade.vercel.app/",
      github: "https://github.com/hanifsyabani/bookme",
      tech: [react, vite, tailwind, chakra],
    },
    {
      id: 4,
      title: "To Do List App",
      detail:
        "A To-Do List website is designed to help users manage their tasks efficiently.",
      image: todolist,
      link: "https://to-do-list-app-pi-topaz.vercel.app/",
      github: "https://github.com/hanifsyabani/To-do-List-app",
      tech: [react, vite, tailwind],
    },
    {
      id: 5,
      title: "Plugshop",
      detail:
        "PlugShop is an e-commerce platform offering a wide range of cutting-edge technology products, gadgets, and accessories. ",
      image: plugshop,
      link: "https://plugshop.vercel.app/",
      github: "https://github.com/hanifsyabani/Plugshop",
      tech: [html, css, js],
    },
    {
      id: 6,
      title: "Edunif Course",
      detail:
        "Edunif is an online course platform dedicated to providing a diverse range of educational courses. ",
      image: edunif,
      link: "https://edunif.vercel.app/",
      github: "https://github.com/hanifsyabani/Edunif",
      tech: [html, css, js],
    },
    {
      id: 7,
      title: "E-Scooter",
      detail:
        "E-ScootHub is your go-to online destination for electric scooters, offering a diverse range of stylish and efficient models for eco-friendly urban commuting.",
      image: escooter,
      github: "https://github.com/hanifsyabani/E-Scooter",
      tech: [html, css, js],
    },
    {
      id: 8,
      title: "Adatku House",
      detail:
        "Adatku House is the ultimate online platform for comprehensive information on traditional homes, offering insights into various cultural architectural styles and historical backgrounds.",
      image: adatku,
      link: "https://adat-ku.vercel.app/",
      github: "https://github.com/hanifsyabani/Adatku",
      tech: [html, css, js],
    },
    {
      id: 9,
      title: "SongSing",
      detail:
        "Songsing is a cutting-edge web platform dedicated to seamlessly curating and slicing music, providing users with a unique and immersive digital audio experience.",
      image: songsing,
      link: "https://songsing.vercel.app/",
      github: "https://github.com/hanifsyabani/SongSing",
      tech: [html, css, js],
    },
  ];

  return (
    <div className="py-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-clip-text text-transparent">
          My Project
        </h1>
        <p className="text-sm lg:text-base">
          Showcasting several project that I created while i was studying in the
          field of web developtment
        </p>
      </div>
      <hr className="border border-black my-5" />
      <div className="flex items-center justify-center mt-10">
        <div className="grid lg:grid-cols-2 gap-10">
          {dataProject.map((item) => (
            <div
              className="w-[20rem] border border-gray-500 rounded-xl shadow-xl"
              key={item.id} data-aos="fade-up" 
            >
              <Image
                src={item.image}
                width={300}
                height={300}
                className="mx-auto w-full rounded-t-xl p-2 bg-black"
              />
              <div className="p-3 mt-3">
                <div className="flex items-center gap-3 mb-4">
                  {item.tech?.map((item, i) => (
                    <Image
                      src={item}
                      key={i}
                      width={40}
                      height={40}
                      className="bg-gray-100 p-2 rounded-full"
                    />
                  ))}
                </div>
                <h1 className="font-bold text-lg text-purple-700">
                  {item.title}
                </h1>
                <p className="text-gray-600 text-sm ">{item.detail}</p>
              </div>
              <div className="flex items-center gap-5 p-3">
                <a href={item.link}>
                  <div className="flex items-center gap-2 bg-pink-600 p-2 rounded-md text-white font-semibold text-sm cursor-pointer hover:bg-pink-800">
                    <FaEye size={20} />
                    <button>View</button>
                  </div>
                </a>
                <a href={item.github}>
                  <div className="flex items-center gap-2 p-2 bg-gray-500 text-white rounded-md font-semibold text-sm cursor-pointer hover:bg-gray-700">
                    <FaGithub size={20} />
                    <button>Source</button>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
