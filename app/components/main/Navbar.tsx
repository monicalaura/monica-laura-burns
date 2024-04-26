import { SocialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navBar w-full h-[75px] fixed top-0 shadow-lg shadow-darkBlue/50 bg-[#29225117] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] mobile-logo-container">
        <Link
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo Monica Laura Burns, web developer"
            width={40}
            height={47}
            className="nav-logo cursor-pointer hover:animate-slowspin mt-2"
          />

          <span className="font-semibold ml-[10px] text-md hidden md:block text-white logo-name">
            Monica Laura{" "}
            <span className="text-lightBlue text-lg font-semibold">Burns</span>
          </span>
        </Link>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20 menu-container">
          <div className="menu-item flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer menuLink">
              About me
            </a>
            <a href="#skills" className="cursor-pointer menuLink">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer menuLink">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer menuLink">
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 social-icons">
          {SocialMedia.map((social) => (
            <Link href={social.urlLink} key={social.name} target="_blank">
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="social-item"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
