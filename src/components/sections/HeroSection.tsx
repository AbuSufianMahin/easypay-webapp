import { Urbanist } from 'next/font/google';
import Image from 'next/image';
import { Button } from '../ui/button';
import { TrendingUp } from 'lucide-react';
import NumberCountUp from '../shared/NumberCountUp';
import { Avatar, AvatarImage } from '../ui/avatar';

import heroFigure from "../../assets/images/hero-figure.png"

import googlePlayLogo from "../../assets/icons/google-play-icon.svg"
import appStoreLogo from "../../assets/icons/apple-icon.svg"

import user1Picture from "../../assets/images/avatars/user1.jpg"
import user2Picture from "../../assets/images/avatars/user2.png"
import user3Picture from "../../assets/images/avatars/user3.jpg"

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
})


function HeroSection() {
  return (
    <section className='2xl:max-w-[1440px] mx-auto'>

      <div className='relative overflow-hidden m-6 2xl:mx-0 rounded-3xl shadow-md'>
        <div className='flex items-center justify-between px-24'>
          <div className='max-w-2xl'>
            <p className='text-[#787878] font-semibold text-lg ml-0.5 -mb-2'>Easy Payment</p>
            <h1 className={`text-6xl font-bold text-[#01081B] ${urbanist.variable}`}>Pay fast and smarter from anywhere</h1>
            <p className='mt-5 text-[#4D525F]'>Experience the future of payments: fast, secure, and tailored for the next generation's convenience and trust.</p>

            <div className='flex gap-2 mt-12'>
              <Button
                className="flex gap-2 bg-black px-4 py-6 rounded-lg hover:opacity-98 transition"
                aria-label="Download on the App Store"
              >
                {/* apple Icon */}
                <Image
                  src={appStoreLogo}
                  alt="App Store"
                  width={28}
                  height={28}
                />

                {/* Text */}
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-sm text-white font-normal">Download on the</span>
                  <span className="text-lg -mt-1.5 font-bold text-white">App Store</span>
                </div>
              </Button>

              <Button
                className="flex gap-2 bg-black px-4 py-6 rounded-lg hover:opacity-98 transition"
                aria-label="Download on the App Store"
              >
                {/* playstore Icon */}
                <Image
                  src={googlePlayLogo}
                  alt="App Store"
                  width={28}
                  height={28}
                />

                {/* Text */}
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-sm text-white font-normal">Get it on</span>
                  <span className="text-lg -mt-1.5 font-bold text-white">Google Play</span>
                </div>
              </Button>
            </div>

          </div>

          <div className='relative'>
            <Image src={heroFigure} alt="Banner picture" width={640} height={650} className="scale-x-[-1]" />

            <div className='absolute -right-8 bottom-78 bg-white rounded-lg shadow-md flex gap-3 items-center p-4 border'>
              <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
                <Avatar className='w-10 h-10'>
                  <AvatarImage src={user1Picture.src} alt="@shadcn" />
                </Avatar>
                <Avatar className='w-10 h-10'>
                  <AvatarImage
                    src={user2Picture.src}
                    alt="@maxleiter"
                  />
                </Avatar>
                <Avatar className='w-10 h-10'>
                  <AvatarImage
                    src={user3Picture.src}
                    alt="@evilrabbit"
                  />
                </Avatar>
              </div>
              <div className='flex flex-col'>
                <span className='text-[16px] font-semibold'><NumberCountUp number={120} duration={2.5} suffix='K+'/></span>
                <span className='text-sm -mt-1'>Active users</span>
              </div>
            </div>

            <div className="absolute bottom-16 p-4 bg-white rounded-lg shadow-md">
              <h3 className="font-semibold">Payment Received</h3>
              <p className="font-bold text-[#2E68FD] text-xl">
                <NumberCountUp number={35890.0} duration={3.5} points={2} prefix="+" />
              </p>
              <div className="flex gap-5 justify-between items-center mt-1">
                <span className="text-sm text-[#4D525F]">1st Jan, 2024</span>
                <span className="flex items-center gap-1 text-green-500">
                  <NumberCountUp number={3.09} duration={2.5} points={2} suffix="%" />
                  <TrendingUp size={16} />
                </span>
              </div>
            </div>

            <div>

            </div>
          </div>
        </div>

        {/* Background image */}
        <Image src="/images/header-bg.jpg" alt="header gradient background" fill className='absolute -z-1' priority />
      </div>
    </section>
  )
}

export default HeroSection;