import React from "react";
import Image from "next/image";
import logo from "../assets/person.jpg";
import { IoCall, IoHome, IoPerson } from "react-icons/io5";
import { AiOutlineProject } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Link from "next/link";
import Medsos from "./Medsos";
import { Modal, Tooltip } from "@mui/material";

const Sidebar = ({ handleDarkMode, darkmode}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className={`${darkmode ? 'bg-gray-800 text-white' : 'bg-white'} w-[20%] overflow-y-auto fixed h-screen shadow-xl hidden md:inline`}>
        <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-24 text-center pt-5 ">
          <h1 className="font-bold text-white text-lg">Welcome</h1>
          <Tooltip title='Dark'>
            <div className="bg-black p-1 rounded-full w-8 h-8 flex justify-center items-center ml-52 cursor-pointer hover:scale-110 transition-all" onClick={handleDarkMode}>
              <BsFillMoonStarsFill size={15} className="text-white " />
            </div>
          </Tooltip>
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
            <div className="flex items-center gap-1 justify-center">
              <h3 className="font-bold text-center">Muhammad Hanif Sya bani</h3>
              <RiVerifiedBadgeFill size={16} className="text-green-500" />
            </div>
            <p className={`${darkmode ? 'text-white' : 'text-gray-600'} text-center text-sm `}>@mhanifs_</p>
            <hr className="mt-4 border border-black" />
          </div>
          <div className="mt-2 px-2">
            <Link href="/" passHref>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-600 group transition-all rounded-md cursor-pointer">
                <IoHome
                  size={16}
                  className={`${darkmode ? 'text-white' : 'text-gray-600'} group-hover:text-white`}
                />
                <h5 className={`${darkmode ? 'text-white' : 'text-gray-600'} group-hover:text-white`}>
                  Home
                </h5>
              </div>
            </Link>
            <Link href="/about" passHref>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-600 group transition-all rounded-md cursor-pointer">
                <IoPerson
                  size={16}
                  className={`${darkmode ? 'text-white' : 'text-gray-600'} group-hover:text-white`}
                />
                <h5 className={`${darkmode ? 'text-white' : 'text-gray-600'} group-hover:text-white`}>
                  About
                </h5>
              </div>
            </Link>
            <Link href="/project">
              <div className="flex items-center gap-3 p-2 hover:bg-gray-600 group transition-all rounded-md cursor-pointer ">
                <AiOutlineProject
                  size={16}
                  className={`${darkmode ? 'text-white' : 'text-gray-600'} group-hover:text-white`}
                />
                <h5 className={`${darkmode ? 'text-white' : 'text-gray-600'} group-hover:text-white`}>
                  Project
                </h5>
              </div>
            </Link>
            <Link href="/contact" passHref>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-600 group transition-all rounded-md cursor-pointer">
                <IoCall
                  size={16}
                  className={`${darkmode ? 'text-white' : 'text-gray-600'} group-hover:text-white`}
                />
                <h5 className={`${darkmode ? 'text-white' : 'text-gray-600'} group-hover:text-white`}>
                  Contact
                </h5>
              </div>
            </Link>
            <div className="bg-purple-600 hover:bg-purple-700 cursor-pointer w-[5rem] text-sm mt-3 rounded-md p-2 text-center text-white">
              <button>Hire Me</button>
            </div>
          </div>
          <hr className="mt-6 border border-black" />
          <div className="mt-4 pl-4">
            <h5>Lets Connect</h5>
            <Medsos darkmode={darkmode} />
          </div>
          <hr className="mt-6 border border-black" />
          <div>
            <p className="text-center text-sm p-4 mt-3">
              ©️ 2024 Copyright By{" "}
              <a href="www.linkedin.com/in/muhammad-hanif-sya-bani">
                <span className="font-bold">Muhammad Hanif Sya bani</span>
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
    </>
  );
};

export default Sidebar;
