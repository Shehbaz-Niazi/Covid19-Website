import Link from "next/link";
import Wrapper from "../layout/Wrapper"
import { FaLinkedin,FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiNpm } from "react-icons/si";

const Footer = () => {
  return (
    <div className="mt-20  bg-di rounded-xl">
        <Wrapper>

            <div className="flex md:flex-row flex-col   justify-evenly md:pt-8 mb-10 flex-wrap md:pl-0 pl-10 ">
                
                            <div className="">
                                <h2  className="font-fontRopa text-2xl md:text-3xl text-mono md:pl-0 md:mt-0 mt-10">About</h2>
                                <p className="max-w-md mt-5 text-tri text-balance md:pr-0 pr-4">
                                    Hi, I’m Shehbaz Niazi, a dedicated Frontend Developer at PIAIC in Pakistan. With a passion for creating engaging and user-friendly web experiences, I specialize in building responsive and dynamic websites. My work focuses on leveraging modern frontend technologies to deliver high-quality, impactful digital solutions. Whether it's crafting intuitive interfaces or optimizing user interactions, I am committed to bringing innovative ideas to life.
                                </p>
                                <ul className="flex mt-10 gap-x-5 mb-5  items-center">
                                    <Link href={"https://www.linkedin.com/in/shehbazniazi/"}>
                                        <FaLinkedin className="w-9 h-auto text-mono hover:scale-x-150 duration-300" />
                                    </Link>
                                    <Link href={"https://www.youtube.com/@shehbaz_niazi"}>
                                        <FaYoutube className="w-9 h-auto text-mono hover:scale-x-150 duration-300" />
                                    </Link>
                                    <Link href={"https://github.com/Shehbaz-Niazi"}>
                                        <FaGithub className="w-9 h-auto text-mono hover:scale-x-150 duration-300" />
                                    </Link>
                                    <Link href={"https://www.npmjs.com/~shehbaz-niazi"}>
                                        <SiNpm className="w-9 h-auto text-mono hover:scale-x-150 duration-300" />
                                    </Link>
                                    
                                </ul>
                            </div>

                            <div>
                                <h2 className="font-fontRopa text-2xl md:text-3xl text-mono md:pl-0 md:mt-0 mt-10">Quick Links</h2>
                                <ul className="mt-5 ">
                                    <li className="mt-4 text-tri font-medium">Symptoms</li>
                                    <li className="mt-4 text-tri font-medium">Prevention</li>
                                    <li className="mt-4 text-tri font-medium">FAQs</li>
                                    <li className="mt-4 text-tri font-medium">About</li>
                                    <li className="mt-4 text-tri font-medium">Contact Us</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="font-fontRopa text-2xl md:text-3xl text-mono md:pl-0 md:mt-0 mt-10">HelpFull Links</h2>
                                <ul className="mt-5">
                                    <li className="mt-4 text-tri font-medium">Healthcare Protection</li>
                                    <li className="mt-4 text-tri font-medium">LGU Facilities</li>
                                    <li className="mt-4 text-tri font-medium">Protect Your Family</li>
                                    <li className="mt-4 text-tri font-medium">World Health</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="font-fontRopa text-2xl md:text-3xl text-mono md:pl-0 md:mt-0 mt-10">Resources</h2>
                                <ul className="mt-5 pb-5">
                                    <li className="mt-4 text-tri font-medium"> WHO Websites</li>
                                    <li className="mt-4 text-tri font-medium">CDO Websites</li>
                                    <li className="mt-4 text-tri font-medium">Gov Websites</li>
                                    <li className="mt-4 text-tri font-medium">DOH Websites</li>
                                </ul>
                            </div>
                            
                           





            </div>

        </Wrapper>
    </div>
  )
}

export default Footer