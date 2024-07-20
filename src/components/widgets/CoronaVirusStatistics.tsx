import Wrapper from "../layout/Wrapper";
import activecase from "@/components/assests/photos/activecase.png"
import deathcase from "@/components/assests/photos/death.png"
import recovercase from "@/components/assests/photos/Recoveredcase.png"
import Image from "next/image";

const CoronaVirusStatistics = () => {
  return (
    <div>
      <Wrapper>



<div className="mt-20">
<div className="flex items-center justify-center ">
  <div className="md:max-w-2xl max-w-md flex flex-col items-center">
    <h2 className="font-medium font-fontRopa text-3xl md:text-4xl text-mono">
      Coronavirus Statistics
    </h2>
    <p className="text-base text-tri mt-4 text-center">
      Stay updated with the latest COVID-19 statistics to understand the
      impact of the virus in your community and globally.
    </p>
  </div>
</div>

          <div className=" flex md:flex-row flex-col md:gap-y-0 gap-y-4  justify-evenly  mt-12">
                    <div className="flex flex-col items-center">
                            <Image src={activecase} alt="Active Case Image"
                            className="h-12 w-12"
                            />
                            <h3 className="text-3xl font-bold mt-2">98,856,25</h3>
                            <p className="text-tri">Active Case</p>
                    </div>
                    <div className="flex flex-col items-center">
                            <Image src={deathcase} alt="Active Case Image"
                            className="h-12 w-12"
                            />
                            <h3 className="text-3xl font-bold mt-2">98,856,25</h3>
                            <p className="text-tri">Death Case</p>
                    </div>
                    <div className="flex flex-col items-center">
                            <Image src={recovercase} alt="Active Case Image"
                            className="h-12 w-14"
                            />
                            <h3 className="text-3xl font-bold mt-2">98,856,25</h3>
                            <p className="text-tri">Recovery Case</p>
                    </div>

</div>



        </div>



      </Wrapper>
    </div>
  );
};

export default CoronaVirusStatistics;
