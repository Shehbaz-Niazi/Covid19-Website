import Wrapper from "@/components/layout/Wrapper";
import CoronaVirusStatistics from "@/components/widgets/CoronaVirusStatistics";
import Footer from "@/components/widgets/Footer";
import FourLinksSection from "@/components/widgets/FourLinksSection";
import Header from "@/components/widgets/Header";
import HowToPreventCorona from "@/components/widgets/HowToPreventCorona";
import HowToProtectYourself from "@/components/widgets/HowToProtectYourself";
import NewsAndArticle from "@/components/widgets/NewsAndArticle";
import WhatIsCoronaVirusPage from "@/components/widgets/WhatIsCoronaVirusPage";
import WhyIsItDangrous from "@/components/widgets/WhyIsItDangrous";

export default function Home() {
  return (
    <Wrapper>
      <main>

        <Header/>
        <CoronaVirusStatistics/>
        <WhatIsCoronaVirusPage/>
        <WhyIsItDangrous/>
        <FourLinksSection/>
        <HowToPreventCorona/>
        <HowToProtectYourself/>
        <NewsAndArticle/>
        <Footer/>
        
      </main>
    </Wrapper>
  );
}
