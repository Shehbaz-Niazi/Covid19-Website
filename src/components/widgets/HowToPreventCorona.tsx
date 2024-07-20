import Wrapper from "../layout/Wrapper"
import { IoMdHome } from "react-icons/io";
import Button from "../shared/Button";
import { FaCheckCircle,FaHandsWash  } from "react-icons/fa"
import { FaHeadSideMask } from "react-icons/fa6";
import { MdSocialDistance } from "react-icons/md";


const HowToPreventCorona = () => {
  return (
    <div className="mt-32 mb-20 ">

        <Wrapper>

               <div className="flex md:flex-row flex-col gap-x-10 justify-evenly justify-self-auto pl-10  md:pl-10">
{/* Left Side */}
<div className="flex flex-wrap gap-y-4 md:gap-x-12 gap-x-2 pt-10">

                <div className="space-y-12 ">

                          <div className="md:w-44 md:h-56 w-36 h-48  shadow-lg shadow-di border border-di rounded-lg">
                                <div className="md:w-44 md:h-24 w-36 h-20 bg-di rounded-t-lg flex items-center justify-center">
                                    <IoMdHome className="md:w-[60px] w-[45px] h-auto text-mono"/>
                                </div>
                                    <h6 className="md:text-lg text-sm font-Inria_Sans text-mono font-bold pt-2 pl-3">Stay At Home</h6>
                                    <p className="text-tri pl-3 pt-2 leading-5 pr-2 text-md">Stay at home to protect yourself form Covid </p>
                                <div>

                                </div>
                        </div>
                        

                        <div className="md:w-44 md:h-56 w-36 h-48  shadow-lg shadow-di border border-di rounded-lg">
                                <div className="md:w-44 md:h-24 w-36 h-20 bg-di rounded-t-lg flex items-center justify-center">
                                    <IoMdHome className="md:w-[60px] w-[45px] h-auto text-mono"/>
                                </div>
                                    <h6 className="md:text-lg text-sm font-Inria_Sans text-mono font-bold pt-2 pl-3">Stay At Home</h6>
                                    <p className="text-tri pl-3 pt-2 leading-5 pr-2 text-md">Stay at home to protect yourself form Covid </p>
                                <div>

                                </div>
                        </div>

            </div>
            <div className="md:mt-12 space-y-12 mt-5">
                         
            <div className="md:w-44 md:h-56 w-36 h-48  shadow-lg shadow-di border border-di rounded-lg">
                                <div className="md:w-44 md:h-24 w-36 h-20 bg-di rounded-t-lg flex items-center justify-center">
                                    <IoMdHome className="md:w-[60px] w-[45px] h-auto text-mono"/>
                                </div>
                                    <h6 className="md:text-lg text-sm font-Inria_Sans text-mono font-bold pt-2 pl-3">Stay At Home</h6>
                                    <p className="text-tri pl-3 pt-2 leading-5 pr-2 text-md">Stay at home to protect yourself form Covid </p>
                                <div>

                                </div>
                        </div>

                        <div className="md:w-44 md:h-56 w-36 h-48  shadow-lg shadow-di border border-di rounded-lg">
                                <div className="md:w-44 md:h-24 w-36 h-20 bg-di rounded-t-lg flex items-center justify-center">
                                    <IoMdHome className="md:w-[60px] w-[45px] h-auto text-mono"/>
                                </div>
                                    <h6 className="md:text-lg text-sm font-Inria_Sans text-mono font-bold pt-2 pl-3">Stay At Home</h6>
                                    <p className="text-tri pl-3 pt-2 leading-5 pr-2 text-md">Stay at home to protect yourself form Covid </p>
                                <div>
                      

                                </div>
                        </div>

                        
            </div>

</div>
{/* Left Side */}


                            {/* Right Side */}
                            <div className="">

                                    <div className=" mt-10 ">
                                        <h2  className="font-fontRopa text-3xl md:text-4xl text-mono">How To Prevent Coronavirus</h2>
                                        <p  className="md:max-w-xl max-w-xs mt-5" >
                                            Preventing the spread of coronavirus involves adopting a few key practices to protect yourself and others. First, it's crucial to maintain good hygiene by washing your hands regularly with soap and water for at least 20 seconds. 
                                        </p>
                                        <p  className="md:max-w-xl max-w-xs mt-5 ">
                                            Social distancing is another effective measure to prevent the spread of COVID-19. Keeping a safe distance of at least 6 feet from others, particularly in public spaces, minimizes the risk of infection.
                                        </p>

                                        <ul className="mt-5 ">
                                            <li className="flex items-center gap-x-2 mt-2 text-base">
                                            <FaCheckCircle className="text-mono"/>
                                            High transmission
                                           </li>
                                            <li className="flex items-center gap-x-2 mt-2 text-base">
                                            <FaCheckCircle className="text-mono"/>
                                            Get vaccinated
                                           </li>
                                            <li className="flex items-center gap-x-2 mt-2 text-base">
                                            <FaCheckCircle className="text-mono"/>
                                            Social distance
                                           </li>
                                            <li className="flex items-center gap-x-2 mt-2 text-base">
                                            <FaCheckCircle className="text-mono"/>
                                            Wear masks
                                           </li>
                                        </ul>
                                        <div className="mt-10">
                                        <Button text="Read More About Preventataion"/>
                                        </div>
                                    </div>

                            </div>
                            {/* Right Side */}

               {/*  */}
               </div>         
        </Wrapper>

    </div>
  )
}

export default HowToPreventCorona







{/* <div className="w-44 h-56  shadow-lg shadow-di border border-di rounded-lg">
                            <div className="w-44 h-24 bg-di rounded-t-lg flex items-center justify-center">
                                <IoMdHome className="w-[60px] h-auto text-mono"/>
                            </div>
                                <h6 className="text-lg font-Inria_Sans text-mono font-bold pt-2 pl-3">Stay At Home</h6>
                                <p className="text-tri pl-3 pt-2 leading-5 pr-2">Stay at home to protect yourself form Covid </p>
                            <div>

                            </div>
                        </div> */}