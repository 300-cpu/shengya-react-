import React from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import shenk from '../assets/shenk.png'

const Navbar = () => {
  return (
    <nav className="bg-yellow-600 p-4 sticky top-0 px-4 py-6 space-x-3 z-20 backdrop-blur-lg">
      <div className="flex justify-between items-center">
        <a className="" href="#" target="_blank" rel="">
          <img src={shenk} className="w-42 h-20 border-x-white" />
        </a>

        {/* Logo */}
        <div className="flex flex-col justify-start   ">
          <h2 className="text-white text-xl p- font-bold ">SHENGYA<span className='italic text-slate-900 pl-2'>MECHINERY</span></h2><p1 className="uppercase text-white ">Nigeria</p1></div>


        {/* Navigation Links */}
        <ul className="flex space-x-10 text-white text-lg items-end ">
          <li>
            <a href="#" className="hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#About" className="hover:text-gray-300">About Us</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



