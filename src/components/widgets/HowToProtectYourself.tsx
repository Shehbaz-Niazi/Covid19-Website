import Image from "next/image"
import Wrapper from "../layout/Wrapper"
import TickSvg from "@/components/assests/photos/ticy.png"
import Cross from "@/components/assests/photos/cross.png"
import manImage from "@/components/assests/photos/manwithsafty.png"

const HowToProtectYourself = () => {
  return (
    <div className="mt-20 mb-20">

        <Wrapper>

                <div className="flex-col  font-medium  font-fontRopa text-3xl md:text-4xl text-mono">
                                <h2 className="flex items-center justify-center">How To Protect Yourself</h2>
                                <div>
                                <p  className="text-lg text-tri mt-6 text-center"> If you're feeling unwell or exhibiting symptoms of the virus, stay home and seek medical advice. </p>
                                </div>
                    
<div className="flex md:flex-row flex-col  justify-around flex-1">
                                    {/* left side */}
                                    <div className="md:pl-10 pl-5 mt-32 flex">
                                        <div className=" flex md:gap-x-10 gap-x-5">
                                           
                                                <ul className="flex flex-col">
                                                    <li className="flex items-center gap-x-5 mt-6">
                                                        <Image src={TickSvg} alt="Tick Svg" 
                                                        className="max-w-7 h-auto"
                                                        />
                                                        <p className="text-xl">Stay at Home</p>
                                                    </li>
                                                    <li className="flex items-center gap-x-5 md:mt-6 mt-4">
                                                        <Image src={TickSvg} alt="Tick Svg" 
                                                        className="max-w-7 h-auto"
                                                        />
                                                        <p className="text-xl">Stay at Home</p>
                                                    </li>
                                                    <li className="flex items-center gap-x-5 md:mt-6 mt-4">
                                                        <Image src={TickSvg} alt="Tick Svg" 
                                                        className="max-w-7 h-auto"
                                                        />
                                                        <p className="text-xl">Stay at Home</p>
                                                    </li>
                                                    <li className="flex items-center gap-x-5 md:mt-6 mt-4">
                                                        <Image src={TickSvg} alt="Tick Svg" 
                                                        className="max-w-7 h-auto"
                                                        />
                                                        <p className="text-xl">Stay at Home</p>
                                                    </li>
                                                    <li className="flex items-center gap-x-5 md:mt-6 mt-4">
                                                        <Image src={TickSvg} alt="Tick Svg" 
                                                        className="max-w-7 h-auto"
                                                        />
                                                        <p className="text-xl">Stay at Home</p>
                                                    </li>
                                                    <li className="flex items-center gap-x-5 md:mt-6 mt-4">
                                                        <Image src={TickSvg} alt="Tick Svg" 
                                                        className="max-w-7 h-auto"
                                                        />
                                                        <p className="text-xl">Stay at Home</p>
                                                    </li>
                                                 
                                                    
                                                </ul>




                                    <div>

                                            <ul className="flex flex-col flex-wrap">
                                                    <li className="flex items-center gap-x-3  md:gap-x-5 md:mt-6 mt-6">
                                                        <Image src={Cross} alt="Tick Svg" 
                                                        className="max-w-4 h-auto"
                                                        />
                                                        <p className="text-xl">Stay at Home</p>
                                                    </li>
                                                    <li className="flex items-center gap-x-3  md:gap-x-5 md:mt-6 mt-4">
                                                        <Image src={Cross} alt="Tick Svg" 
                                                        className="max-w-4 h-auto"
                                                        />
                                                        <p className="text-xl">Stay at Home</p>
                                                    </li>
                                                    <li className="flex items-center gap-x-3  md:gap-x-5 md:mt-6 mt-4">
                                                        <Image src={Cross} alt="Tick Svg" 
                                                        className="max-w-4 h-auto"
                                                        />
                                                        <p className="text-xl">Stay at Home</p>
                                                    </li>
                                                    <li className="flex items-center gap-x-3  md:gap-x-5 md:mt-6 mt-4">
                                                        <Image src={Cross} alt="Tick Svg" 
                                                        className="max-w-4 h-auto"
                                                        />
                                                        <p className="text-xl">Stay at Home</p>
                                                    </li>
                                                    <li className="flex items-center gap-x-3  md:gap-x-5 md:mt-6 mt-4">
                                                        <Image src={Cross} alt="Tick Svg" 
                                                        className="max-w-4 h-auto"
                                                        />
                                                        <p className="text-xl">Stay at Home</p>
                                                    </li>
                                                    <li className="flex items-center gap-x-3  md:gap-x-5 md:mt-6 mt-4">
                                                        <Image src={Cross} alt="Tick Svg" 
                                                        className="max-w-4 h-auto"
                                                        />
                                                        <p className="text-xl">Stay at Home</p>
                                                    </li>
                                                   
                                            </ul>
                                                
                                    </div>   
                                        </div>
                                    </div>






                                    {/* right side */}
                                    <div className="mt-20">
                                        <Image src={manImage} alt="man Iamge"
                                        className="md:max-w-xl max-w-sm h-auto pl-5"
                                        /> 
                                    </div>

 </div>
                </div>

        </Wrapper>

    </div>
  )
}

export default HowToProtectYourself