import React from 'react';
import Link from 'next/link';
import {BsInstagram} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';

export default function Header(props) {
  const links = [['/', 'HOME'], ['/about', 'ABOUT'], ['/portfolio', 'PORTFOLIO'], ['/contact', 'CONTACT']];
  return (
    <header className="flex justify-center items-center w-screen h-[80px] shadow-sm shadow-gray-300">
      <div className="relative h-[70px] w-[70px] ml-10">
        <img src='/logo_es.png'alt='evan storm image' className='h-[100%] w-[100%] object-cover'/>
      </div>
      <div className="flex justify-center items-center flex-1">
        {links.map((link, i) => (
          <button 
            className= {(props.path === link[0] ? 'border-2 ' : 'border-0 ') + 'text-sm 2xl:px-5 py-1 2xl:mx-5 lg:px-2 lg:mx-2 md:px-1 md:mx-1 px-1 mx-1 border-black hover:border-gray-500 hover:text-gray-500 border-solid'} 
            key={i}>
            <Link href={link[0]}>
              {link[1]}
            </Link>
          </button>)
        )}
      </div>
      <a href='https://www.instagram.com/_evan_storm_/?hl=en' target="_blank" rel="noopener noreferrer">
        <BsInstagram size='20px' className="mr-10 hover:opacity-70"/></a>
      <BsFacebook size='20px' className="mr-10 hover:opacity-70"/>
    </header>
  );
}