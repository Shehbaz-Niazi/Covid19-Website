import Image from "next/image"
import Wrapper from "../layout/Wrapper"
import Image1 from"@/components/assests/photos/serious-attentive-young-male-doctor-260nw-1845309475 1.png"
import Image2 from"@/components/assests/photos/serious-attentive-young-male-doctor-260nw-1845309475 2.png"
import Image3 from"@/components/assests/photos/serious-attentive-young-male-doctor-260nw-1845309475 3.png"


const NewsAndArticle = () => {
  return (
    <div className="mt-20 mb-20">
        <Wrapper>

                <div>

                      <div className="flex flex-col items-center justify-center">
                            <h1 className="flex-col  font-medium  font-fontRopa text-3xl md:text-4xl text-mono">News And Articles</h1>
                            <p className=" text-base text-tri mt-4 text-center">Stay informed with the latest news and articles about COVID-19. Our curated selection of updates and expert insights will help you stay up-to-date</p>
                      </div>


                        <div className="mt-20 md:pl-0 pl-10 flex  justify-evenly flex-wrap gap-y-5  md:pr-0 pr-10">

                                <div className="relative ">
                                    <Image src={Image1} alt="Man Image"
                                    className="md:max-w-sm h-auto object-cover w-full"
                                    />
                                    <div className="max-w-44 max-h-10 bg-mono absolute bottom-0 left-1/2 transform -translate-x-1/2">
                                        <p className="p-2  text-white ">10 Feb 2022</p>
                                    </div>
                                </div>
                                

                                <div className="relative ">
                                    <Image src={Image2} alt="Man Image"
                                    className="md:max-w-sm h-auto object-cover w-full"
                                    />
                                    <div className="max-w-44 max-h-10 bg-mono absolute bottom-0 left-1/2 transform -translate-x-1/2">
                                        <p className="p-2 text-white">05 Jan 2021</p>
                                    </div>
                                </div>

                                <div className="relative ">
                                    <Image src={Image3} alt="Man Image"
                                    className="md:max-w-sm h-auto object-cover w-full"
                                    />
                                    <div className="max-w-44 max-h-10 bg-mono absolute bottom-0 left-1/2 transform -translate-x-1/2">
                                        <p className="p-2 text-white">14 Aug 2020</p>
                                    </div>
                                </div>
                               
                             

                        </div>

                </div>

        </Wrapper>
    </div>
  )
}

export default NewsAndArticle