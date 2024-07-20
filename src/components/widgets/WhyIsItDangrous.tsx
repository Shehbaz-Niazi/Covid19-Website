import Image from "next/image" 
import whyisitdangrous from "@/components/assests/photos/whyisitdangrous.png"
import Wrapper from "../layout/Wrapper"
import { FaCheckCircle } from "react-icons/fa";
import Button from "@/components/shared/Button"
import { FaPlay } from "react-icons/fa";


const WhyIsItDangrous = () => {
  return (
    <div>

<div className=" md:pl-0 pl-10 md:mt-20 mt-8">
        <Wrapper>


                    <div className="md:pl-20  flex gap-x-52 md:flex-row flex-col-reverse md:mr-0 mr-10">

                    <div className="md:mt-0 mt-10">
                                <h2 className="font-fontRopa text-3xl md:text-4xl text-mono">Why Is It Dangrous ?</h2>
                                <p className="md:max-w-md mt-5 ">
                                COVID-19 is dangerous due to its high transmission rate and potential to cause severe respiratory illness and complications. It poses a significant risk, especially to vulnerable populations.
                                </p>
                                <ul className="mt-4 ">

                                    <li className="flex items-center gap-x-2 mt-1 text-base">
                                         <FaCheckCircle className="text-mono"/>
                                         High transmission
                                    </li>

                                    <li className="flex items-center gap-x-2 mt-1 text-base">
                                         <FaCheckCircle className="text-mono"/>
                                         Severe illness
                                    </li>

                                    <li className="flex items-center gap-x-2 mt-1 text-base">
                                         <FaCheckCircle className="text-mono"/>
                                         Respiratory complications
                                    </li>
                                    
                                    <li className="flex items-center gap-x-2 mt-1 text-base">
                                         <FaCheckCircle className="text-mono"/>
                                         Risk to vulnerable
                                    </li>
                                </ul>

                              <div className="mt-9">
                                <Button text="How To Learn"/>
                                </div>
                         </div>

                                             {/* Right Side */}

                            <div className="relative">
                                <Image src={whyisitdangrous} alt="whatisCoronaVirusImage"
                                className="md:max-w-lg  h-full w-full "
                                />
                               <div className="bg-mono absolute  bottom-0 left-0 md:h-12 md:w-24 h-8 w-16 flex items-center justify-center rounded-bl-[5px]">
                                   <FaPlay className="md:h-7 md:w-5 h-3 w-3 text-white "/>
                                </div>
                            </div>

                    </div>


        </Wrapper>
    </div>
    </div>
  )
}

export default WhyIsItDangrous