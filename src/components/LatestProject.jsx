import React, { useEffect } from "react";
import weather from "../assets/project/weather.png";
import bookme from "../assets/project/bookme.png";
import recipe from "../assets/project/recipe.png";
import todolist from "../assets/project/todolist.png";
import Image from "next/image";
import { AiFillProject } from "react-icons/ai";
import { FaGithub, FaEye } from "react-icons/fa";
import react from "../assets/react.png";
import vite from "../assets/vite.png";
import chakra from "../assets/chakra.png";
import tailwind from "../assets/tailwind.png";
import Aos from "aos";
import 'aos/dist/aos.css';


const LatestProject = () => {

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
  ];

  return (
    <div className="mt-6">
      <div className="flex items-center gap-2">
        <AiFillProject size={20} className="text-indigo-500" />
        <h1 className="font-bold">Latest Projects</h1>
      </div>
      <div className="flex items-center justify-center mt-6">
        <div className="grid md:grid-cols-2 md:gap-20 gap-10">
          {dataProject.map((item) => (
            <div
              className="w-[20rem] border border-gray-500 rounded-xl shadow-xl"
              key={item.id} data-aos="zoom-in"
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

export default LatestProject;
