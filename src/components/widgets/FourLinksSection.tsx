import Link from "next/link"
import Wrapper from "../layout/Wrapper"
import Image from "next/image"
import symptoms from "@/components/assests/photos/symptoms.png"
import protection from "@/components/assests/photos/protection.png"
import security from "@/components/assests/photos/security.png"
import recover from "@/components/assests/photos/recover.png"


const FourLinksSection = () => {
  return (
    <div className="md:mt-32 mt-14 pl-10 bg-di pt-10 pb-10 rounded-xl">
        <Wrapper>


                <div className="md:pl-10 grid md:grid-cols-4 grid-cols-1  md:gap-x-7 gap-x-4 gap-y-5">


                        <Link href={""} className="flex items-center gap-x-4 hover:scale-105 duration-300 overflow-hidden">
                            <Image src={symptoms} alt="Symptoms Icon"
                            className="md:w-[63px] md:h-[70px] w-[50px] h-auto"
                            />
                            <div>
                            <h6 className="text-xl font-Inria_Sans text-mono font-bold">Symptoms</h6>
                            <p className="text-tri">Fever, cough, breathlessness</p>
                            </div>
                        </Link>


                        <Link href={""} className="flex items-center gap-x-4 hover:scale-105 duration-300">
                            <Image src={protection} alt="Symptoms Icon"
                            className="md:w-[63px] md:h-[70px] w-[50px] h-auto"
                            />
                            <div>
                            <h6 className="text-xl font-Inria_Sans text-mono font-bold">Protection</h6>
                            <p className="text-tri">Practice distancing, Wear Mask</p>
                            </div>
                        </Link>


                        <Link href={""} className="flex items-center gap-x-4 hover:scale-105 duration-300">
                            <Image src={security} alt="Symptoms Icon"
                            className="md:w-[63px] md:h-[70px] w-[50px] h-auto"
                            />
                            <div>
                            <h6 className="text-xl font-Inria_Sans text-mono font-bold">Security</h6>
                            <p className="text-tri">Maintain distance, Wash Hands</p>
                            </div>
                        </Link>


                        <Link href={""} className="flex items-center gap-x-4 hover:scale-105 duration-300">
                            <Image src={recover} alt="Symptoms Icon"
                            className="md:w-[63px] md:h-[70px] w-[50px] h-auto"
                            />
                            <div>
                            <h6 className="text-xl font-Inria_Sans text-mono font-bold">Recover</h6>
                            <p className="text-tri">FIsolate yourself, medical advice</p>
                            </div>
                        </Link>
















                </div>


        </Wrapper>
    </div>
  )
}

export default FourLinksSection