import Image from "next/image"
import Wrapper from "../layout/Wrapper"
import whatiscoronaimage from "@/components/assests/photos/whatiscoronavirus.png"
import { FaCheckCircle } from "react-icons/fa";
import Button from "@/components/shared/Button"
import { FaPlay } from "react-icons/fa";


const WhatIsCoronaVirusPage = () => {
  return (
    <div className="mt-20 ">
        <Wrapper>


                    <div className="md:pl-20 pl-10 flex gap-x-40 md:flex-row flex-col md:mr-0 mr-10">

                            {/* Left Side */}
                        <div className="relative">
                            <Image 
                                src={whatiscoronaimage} 
                                alt="whatisCoronaVirusImage"
                                className="md:max-w-lg  w-full h-full"
                            />
                            <div className="bg-mono absolute right-0 bottom-0  md:h-12 md:w-24 h-8 w-16 flex items-center justify-center rounded-br-[5px]">
                                <FaPlay className="md:h-7 md:w-5 h-3 w-3 text-white" />
                            </div>
                        </div>

                            {/* Right Side */}
                            <div className="md:pl-0 pr-10 ">
                                <h2 className="font-fontRopa text-3xl md:text-4xl text-mono md:pl-0 md:mt-0 mt-10">What Is Coronavirus ?</h2>
                                <p className="md:max-w-md max-w-lg mt-5 ">
                                    COVID-19, caused by the novel coronavirus SARS-CoV-2, is a highly contagious respiratory illness. It has led to a global pandemic, affecting millions of lives and challenging healthcare systems worldwide
                                </p>
                                <ul className="mt-4 ">

                                    <li className="flex items-center gap-x-2 mt-1 text-base">
                                         <FaCheckCircle className="text-mono"/>
                                        Caused by SARS-CoV-2
                                    </li>

                                    <li className="flex items-center gap-x-2 mt-1 text-base">
                                         <FaCheckCircle className="text-mono"/>
                                         Spreads via droplets
                                    </li>

                                    <li className="flex items-center gap-x-2 mt-1 text-base">
                                         <FaCheckCircle className="text-mono"/>
                                         Symptoms: fever, cough
                                    </li>
                                    
                                    <li className="flex items-center gap-x-2 mt-1 text-base">
                                         <FaCheckCircle className="text-mono"/>
                                         Global pandemic impact
                                    </li>
                                </ul>

                                <div className="mt-9">
                                <Button text="How To Learn"/>
                                </div>
                            </div>


                    </div>


        </Wrapper>
    </div>
  )
}

export default WhatIsCoronaVirusPage