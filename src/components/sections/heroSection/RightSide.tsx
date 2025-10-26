import { TrendingUp } from 'lucide-react';
import NumberCountUp from '../../shared/NumberCountUp';
import { Avatar, AvatarImage } from '../../ui/avatar';

import heroFigure from "../../../assets/images/hero-figure.png"

import user1Picture from "../../../assets/images/avatars/user1.jpg"
import user2Picture from "../../../assets/images/avatars/user2.jpg"
import user3Picture from "../../../assets/images/avatars/user3.jpg"
import Image from 'next/image';


function RightSide() {
    return (
        <div className='relative'>
            <Image src={heroFigure.src} alt="Banner picture" width={640} height={650} className="scale-x-[-1] " priority />

            {/* hovering card 1 */}
            <div className='absolute right-0 md:-right-6 lg:-right-4 xl:-right-10 bottom-30 sm:bottom-40 lg:bottom-50 xl:bottom-74 flex flex-col xl:flex-row gap-1 lg:gap-3 items-center bg-white rounded-lg shadow-md p-2 xl:p-4 border'>
                <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
                    <Avatar className='md:w-10 md:h-10'>
                        <AvatarImage src={user1Picture.src} alt="@shadcn" />
                    </Avatar>
                    <Avatar className='md:w-10 md:h-10'>
                        <AvatarImage
                            src={user2Picture.src}
                            alt="@maxleiter"
                        />
                    </Avatar>
                    <Avatar className='md:w-10 md:h-10'>
                        <AvatarImage
                            src={user3Picture.src}
                            alt="@evilrabbit"
                        />
                    </Avatar>
                </div>
                <div className='flex flex-col text-center xl:text-left'>
                    <span className='text-sm md:text-[16px] font-semibold'><NumberCountUp number={120} duration={2.5} suffix='K+' /></span>
                    <span className='text-xs md:text-sm -mt-1'>Active users</span>
                </div>
            </div>

            {/* hovering card 2 */}
            <div className="absolute bottom-3 md:bottom-8 lg:bottom-16 p-2 md:p-3 lg:p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-sm font-semibold">Payment Received</h3>
                <p className="font-bold text-[#2E68FD] text-sm md:text-xl">
                    <NumberCountUp number={35890.0} duration={3.5} points={2} prefix="+" />
                </p>
                <div className="flex gap-5 justify-between items-center md:mt-1">
                    <span className="text-xs md:text-sm text-[#4D525F]">1st Jan, 2024</span>
                    <span className="flex items-center gap-1 text-xs text-green-500">
                        <NumberCountUp number={3.09} duration={2.5} points={2} suffix="%" />
                        <TrendingUp size={16} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default RightSide