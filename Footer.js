import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {FaInstagram, FaYoutube} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaIYoutube} from "react-icons/fa"


const Footer = () => {
  return (
    <>
<div className='bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20'>
  <div className='p-5'>
    <ul>
      <p className='text-gray-800 font-bold text-3xl pb-6'>
        stream <span className='text-blue-600'>line</span>
      </p>
      <div className='flex gap-6 pb-5'>
        {/* icons section */}
        <FaInstagram className='text-2xl cursor-pointer hover:text-yellow-600'/>
        <FaTwitter className='text-2xl cursor-pointer hover:text-blue-600'/>
        <FaLinkedin className='text-2xl cursor-pointer hover:text-blue-600'/>
        <FaYoutube className='text-2xl cursor-pointer hover:text-red-600'/>
      </div>
    </ul>
  </div>
  <div className='p-5'>
    <ul>
      <p className='text-gray-800 font-bold text-2xl pb-4'>Product</p>
      <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>link1</li>
      <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>link2</li>
      <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>link3</li>
      <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>link4</li>
    </ul>
    </div>
    <div className='pb-5 mt-5'>
      <ul>
        <p className='text-gray-800 font-bold text-2xl pb-4'>Company</p>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>About</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>About</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>About</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>About</li>
      </ul>
  </div>
    <div className='pb-5 mt-5'>
      <ul>
        <p className='text-gray-800 font-bold text-2xl pb-4'>Company</p>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>About</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>About</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>About</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>About</li>
      </ul>
  </div>
</div>
<div className='flex flex-col justify-center items-center text-center p-5 bg-gray-50'>
  <h1 className='text-gray-800 font-semibold'> @ 2021-2024 All rights reversed | Build with ❤ by {""}
    <span className='hover:text-blue-600 font-semibold cursor-pointer'>streamline</span>
  </h1>
</div>
    </>
  );
};

export default Footer;