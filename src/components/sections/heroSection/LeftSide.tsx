import { Button } from '@/components/ui/button'
import Image from 'next/image'

import googlePlayLogo from "../../../assets/icons/google-play-icon.svg"
import appStoreLogo from "../../../assets/icons/apple-icon.svg"
import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({
  subsets: ["latin"],
})

function LeftSide() {
    return (
        <div className='max-w-2xl pb-4'>
            <p className='text-[#787878] font-semibold text-lg ml-0.5 -mb-2'>Easy Payment</p>
            <h1 className={`text-3xl sm:text-4xl xl:text-6xl font-bold text-[#01081B] ${urbanist.className}`}>
                Pay fast and smarter from anywhere
            </h1>
            <p className='mt-2 md:mt-5 text-[#4D525F] text-sm lg:text-lg'>
                Experience the future of payments: fast, secure, and tailored for the next generation's convenience and trust.
            </p>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-4 lg:mt-12'>
                <Button
                    className="w-full flex gap-2 bg-black px-3 py-6 rounded-lg hover:opacity-98 transition"
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
                    className="w-full flex gap-2 bg-black px-3 py-6 rounded-lg hover:opacity-98 transition"
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
    )
}

export default LeftSide