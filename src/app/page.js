import Banner from "@/Components/Banner";
import SunscreenGuide from "@/Components/ProductGuide/SunscreenGuide";
import Tips from "@/Components/Tips";
import TopBrands from "@/Components/TopBrands";
import TopSix from "@/Components/TopSix";
import Image from "next/image";

export default function Home() {
  return (

    <div className="w-[90%] mx-auto rounded-5xl">

          <Banner></Banner>
          <TopSix></TopSix>
          <Tips></Tips>
          <TopBrands></TopBrands>
          <SunscreenGuide></SunscreenGuide>

          
    </div>
  );
}
