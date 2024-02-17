import React from "react";
import { Tooltip } from "@mui/material";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const Medsos = ({darkmode}) => {
  return (
    <ul className="flex gap-4 mt-2 items-center">
      <Tooltip title="github">
        <a href="https://github.com/hanifsyabani">
          <li>
            <FaGithub
              size={18}
              className={`${darkmode ? 'text-white' : 'text-gray-600'} hover:text-indigo-600 cursor-pointer`}
            />
          </li>
        </a>
      </Tooltip>
      <Tooltip title="linked in">
        <li>
          <FaLinkedin
            size={18}
            className={`${darkmode ? 'text-white' : 'text-gray-600'} hover:text-indigo-600 cursor-pointer`}
          />
        </li>
      </Tooltip>
      <Tooltip title="twitter">
        <li>
          <FaTwitter
            size={18}
            className={`${darkmode ? 'text-white' : 'text-gray-600'} hover:text-indigo-600 cursor-pointer`}
          />
        </li>
      </Tooltip>
      <Tooltip title="instagram">
        <li>
          <FaInstagram
            size={18}
            className={`${darkmode ? 'text-white' : 'text-gray-600'} hover:text-indigo-600 cursor-pointer`}
          />
        </li>
      </Tooltip>
      <Tooltip title='facebook'>
        <li>
          <FaFacebook
            size={18}
            className={`${darkmode ? 'text-white' : 'text-gray-600'} hover:text-indigo-600 cursor-pointer`}
          />
        </li>
      </Tooltip>
    </ul>
  );
};

export default Medsos;
