import Image from "next/image";
import Wrapper from "../layout/Wrapper";
import HeaderImage from "@/components/assests/photos/doctorsTeam1.png";
import Button from "@/components/shared/Button";

const Header = () => {
  return (
    <div className="-z-[100]">
      <Wrapper>
        <div>
          <div className="bg-di flex flex-col md:flex-row justify-between rounded-br-[200px] overflow-hidden">
            {/* Left Side */}

            <div className="pt-20 pl-5 md:mx-0 mx-auto  flex-1 pb-10 md:pl-20 justify-center">
              <h4 className="md:text-lg text-base font-Inria_Sans text-mono">
                COVID 19 Awerness
              </h4>
              <h2 className="md:text-5xl text-4xl font-medium text-mono font-fontRopa ">
                Stay Safe. Stay Home
              </h2>
              <p className="md:text-lg text-tri md:mx-0 text-sm md:max-w-xl max-w-sm mx-auto pt-5 text-balance">
                Stay informed and safe with our up-to-date information on
                COVID-19. Here, you will find the latest news, health guidelines,
                and vaccination details to help you navigate through the
                pandemic. Together, we can overcome this crisis.
              </p>
              <div className="mt-10">
                <Button text="How To Prevent" />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex  flex-1 items-end ">
              <Image
                alt="Doctors png"
                src={HeaderImage}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
