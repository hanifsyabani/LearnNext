"use client";

import React from "react";
import Sidebar from "../components/Sidebar";
import NextTopLoader from "nextjs-toploader";
import { AiOutlineMenu, AiOutlineProject } from "react-icons/ai";
import { Modal, Tooltip } from "@mui/material";
import Image from "next/image";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoCall, IoHome, IoPerson } from "react-icons/io5";
import Medsos from "@/components/Medsos";
import logo from "@/assets/person.jpg";
import Link from "next/link";

const Layout = ({ children }) => {
  const [nav, setNav] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [darkmode, setDarkMode] = React.useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkmode);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <React.Fragment>
      <NextTopLoader color="purple" />
      <div className="z-52 flex  justify-between items-center px-6 py-2 fixed bg-white w-full   lg:hidden">
        <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">
          MHS
        </h1>
        <AiOutlineMenu size={25} onClick={handleNav} />
      </div>

      {nav && (
        <div className=" w-[60%] z-20  bg-gray-300 overflow-y-auto fixed h-screen shadow-xl">
          <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-24 text-center pt-5 ">
            <h1 className="font-bold text-white text-lg">Welcome</h1>
            <div></div>
          </div>
          <div>
            <Tooltip title="Image Profile">
              <div className="rounded-full w-[4rem] flex justify-center mx-auto -mt-10 border border-white cursor-pointer hover:animate-pulse">
                <Image
                  src={logo}
                  alt="logo"
                  width={60}
                  height={60}
                  className="rounded-full w-full"
                  onClick={handleOpen}
                />
              </div>
            </Tooltip>
            <div className="mt-2">
              <div className="flex items-center  pl-2">
                <h3 className="font-bold text-base ">
                  Muhammad Hanif Sya'bani
                </h3>
                <RiVerifiedBadgeFill size={16} className="text-green-500" />
              </div>
              <p className="text-center text-sm text-gray-600">@mhanifs_</p>
              <hr className="mt-4 border border-black" />
            </div>
            <div className="mt-2 px-2">
              <Link href="/" passHref>
                <div className="flex items-center gap-3 p-2 hover:bg-gray-600 group transition-all rounded-md cursor-pointer">
                  <IoHome
                    size={16}
                    className="text-gray-600 group-hover:text-white"
                  />
                  <h5 className="text-gray-600 font-semibold group-hover:text-white">
                    Home
                  </h5>
                </div>
              </Link>
              <Link href="/about" passHref>
                <div className="flex items-center gap-3 p-2 hover:bg-gray-600 group transition-all rounded-md cursor-pointer">
                  <IoPerson
                    size={16}
                    className="text-gray-600 group-hover:text-white"
                  />
                  <h5 className="text-gray-600 font-semibold group-hover:text-white">
                    About
                  </h5>
                </div>
              </Link>
              <Link href="/project">
                <div className="flex items-center gap-3 p-2 hover:bg-gray-600 group transition-all rounded-md cursor-pointer ">
                  <AiOutlineProject
                    size={16}
                    className="text-gray-600 group-hover:text-white"
                  />
                  <h5 className="text-gray-600 font-semibold group-hover:text-white">
                    Project
                  </h5>
                </div>
              </Link>
              <Link href="/contact" passHref>
                <div className="flex items-center gap-3 p-2 hover:bg-gray-600 group transition-all rounded-md cursor-pointer">
                  <IoCall
                    size={16}
                    className="text-gray-600 group-hover:text-white"
                  />
                  <h5 className="text-gray-600 font-semibold group-hover:text-white">
                    Contact
                  </h5>
                </div>
              </Link>
              <a href="https://www.linkedin.com/in/muhammad-hanif-sya-bani-7325a7275/">
                <div className="bg-purple-600 hover:bg-purple-700 cursor-pointer w-[5rem] text-sm mt-3 rounded-md p-2 text-center text-white">
                  <button>Hire Me</button>
                </div>
              </a>
            </div>
            <hr className="mt-6 border border-black" />
            <div className="mt-4 pl-4">
              <h5>Let's Connect</h5>
              <Medsos />
            </div>
            <hr className="mt-6 border border-black" />
            <div>
              <p className="text-center text-sm p-4 mt-3">
                ©️ 2024 Copyright By{" "}
                <a href="www.linkedin.com/in/muhammad-hanif-sya-bani">
                  <span className="font-bold">Muhammad Hanif Sya'bani</span>
                </a>
              </p>
            </div>
          </div>

          <Modal open={open} onClose={handleClose}>
            <div className="flex justify-center items-center mx-auto w-1/2 p-10 rounded-md">
              <Image
                src={logo}
                alt="logo"
                width={300}
                height={300}
                className="w-full rounded-md"
              />
            </div>
          </Modal>
        </div>
      )}
      <div className="flex">
        <Sidebar handleDarkMode={handleDarkMode} darkmode={darkmode} />
        <main className={`${darkmode ? "bg-gray-900 text-white" : "bg-white"} md:overflow-y-auto md:w-[80%] md:ml-[16rem] pt-11 lg:pt-0 font-[poppins]`} darkmode= {darkmode}>
          {children}
        </main>
      </div>
    </React.Fragment>
  );
};

export default Layout;
