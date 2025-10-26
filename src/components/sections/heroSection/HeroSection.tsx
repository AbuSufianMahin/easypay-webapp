import Image from "next/image";
import heroSectionBG from "../../../assets/images/header-bg.jpg"
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function HeroSection() {
  return (
    <section className='2xl:max-w-[1440px] mx-auto'>

      <div className='relative overflow-hidden m-4 md:m-6 2xl:mx-0 rounded-2xl shadow-md'>
        <div className='flex flex-col md:flex-row md:gap-5 items-center justify-between px-3 pt-8 md:px-8 xl:px-24'>

          {/* hero section - left side (text) */}
          <LeftSide/>
          
          {/* Hero section - right side (image) */}
          <RightSide/>
        </div>

        {/* Background image */}
        <Image src={heroSectionBG.src} alt="header gradient background" fill className='absolute -z-1' priority />
      </div>
    </section>
  )
}

export default HeroSection;