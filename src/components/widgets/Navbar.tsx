"use client"
import Link from "next/link"
import Wrapper from "../layout/Wrapper"
import Logo from "@/components/assests/photos/logo.png"
import Image from "next/image"
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react"




const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        <Wrapper>
      <nav className="bg-di shadow-md ">
        <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
  {/* Left side of the navbar */}
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 focus:outline-none"
              >
                <RxHamburgerMenu className="h-6 w-6" />
              </button>
            </div>
  
  {/* Centered title for desktop */}
            <div className="flex-1 flex items-center   md:justify-start">
              <div className="flex-shrink-0 flex items-center ml-10 gap-x-2 ">
                <h1 className="text-black text-2xl font-Inria_Sans font-bold ">COVID. 19</h1>
                <div>
                <Image alt="Logo" src={Logo} className="h-10 w-10"/>
                </div>
              </div>
            </div>
  
  {/* Right side of the navbar */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 space-x-4 sm:flex sm:space-x-8">
              <div className="hidden sm:flex sm:items-center mr-10 ">
                <Link href="/" >
                  <li className="text-tri list-none hover:bg-mono hover:text-white hover:scale-105 duration-300 px-3 py-2 rounded-md text-base font-medium">
                    Home
                  </li>
                </Link>
                <Link href="/" >
                  <li className="text-tri list-none hover:bg-mono hover:text-white hover:scale-105 duration-300 px-3 py-2 rounded-md text-base font-medium">
                    Reports
                  </li>
                </Link>
                <Link href="/" >
                  <li className="text-tri list-none hover:bg-mono hover:text-white hover:scale-105 duration-300 px-3 py-2 rounded-md text-base font-medium">
                    Symptoms
                  </li>
                </Link>
                <Link href="/about">
                  <li className="text-tri list-none hover:bg-mono hover:text-white hover:scale-105 duration-300 px-3 py-2 rounded-md text-base font-medium">
                    About
                  </li>
                </Link>
                <Link href="/contact">
                  <li className="text-tri list-none hover:bg-mono hover:text-white hover:scale-105 duration-300 px-3 py-2 rounded-md text-base font-medium">
                    Contact
                  </li>
                </Link>
              </div>
            </div>
          </div>
        </div>
  
  {/* Mobile menu */}
        <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/">
              <li className="text-tri list-none hover:bg-mono hover:text-white hover:scale-105 duration-300 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="text-tri list-none hover:bg-mono hover:text-white hover:scale-105 duration-300 px-3 py-2 rounded-md text-sm font-medium">
                About
              </li>
            </Link>
            <Link href="/contact">
              <li className="text-tri list-none hover:bg-mono hover:text-white hover:scale-105 duration-300 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </li>
            </Link>
          </div>
        </div>
      </nav>
      </Wrapper>
    );
  };
  
  export default Navbar;
  
  
  