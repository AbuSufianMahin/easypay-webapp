"use client"

import { Urbanist } from "next/font/google"

import customer1Avatar from "../../../assets/images/avatars/customer1.png"
import customer2Avatar from "../../../assets/images/avatars/customer2.jpg"
import customer3Avatar from "../../../assets/images/avatars/customer3.jpg"
import customer4Avatar from "../../../assets/images/avatars/customer4.jpg"
import customer5Avatar from "../../../assets/images/avatars/customer5.jpg"
import ReviewSlider from "./ReviewSlider";
import NavigationButtons from "./NavigationButtons"
import { useRef } from "react"


const urbanist = Urbanist({
    subsets: ["latin"],
})

type Review = {
    userName: string;
    userPhoto: string;
    occupation: string;

    rating: 0 | 1 | 2 | 3 | 4 | 5;
    details: string;
}

function TestiMonialSection() {
    const swiperRef = useRef<any>(null);

    const userReviews: Review[] = [
        {
            userName: "Ethan Williams",
            userPhoto: customer1Avatar.src,
            occupation: "Digital Marketing Specialist",
            rating: 5,
            details: "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
        },
        {
            userName: "Daniel Thompson",
            userPhoto: customer2Avatar.src,
            occupation: "Product Designer",
            rating: 5,
            details: "Discover a payment app focused on simplicity and transparency. Enjoy a seamless experience with no hidden fees, providing clarity and ease in every transaction. It's designed to put you in control of your payments.",
        },
        {
            userName: "Sophia Johnson",
            occupation: "Software Engineer",
            userPhoto: customer3Avatar.src,
            rating: 4,
            details: "Using this payment app has completely simplified my finances. It's intuitive, fast, and secure — everything I need to manage my transactions effortlessly."
        },
        {
            userName: "Michael Brown",
            occupation: "Entrepreneur",
            userPhoto: customer4Avatar.src,
            rating: 5,
            details: "A reliable and user-friendly payment app that makes sending and receiving money effortless. The interface is clean, and the experience is smooth every time."
        },
        {
            userName: "Olivia Martinez",
            occupation: "Freelance Consultant",
            userPhoto: customer5Avatar.src,
            rating: 4,
            details: "Finally, a payment solution that prioritizes transparency and simplicity. I can complete transactions quickly without worrying about hidden fees or complicated steps."
        }
    ]


    return (
        <section className='bg-[#F6F6F6]'>
            <div className='max-w-7xl mx-auto'>
                <div className='mx-4 md:mx-6 2xl:mx-0 py-10 md:py-30 flex flex-col sm:flex-row gap-4'>
                    {/* section summary - left side */}
                    <div className="flex-2">
                        <h1 className="text-lg font-semibold text-[#932EFA]">TESTIMONIAL</h1>

                        <div className="flex flex-col gap-2">
                            <h2 className={`${urbanist.className} text-2xl md:text-4xl font-bold flex-2`}>We've build trust with reviews from real users</h2>
                            <p className="flex-1 text-xs md:text-sm text-[#4D525F]">Boost your credibility by featuring genuine testimonials from real users, showcasing their positive experiences and satisfaction with Monks Pay services.</p>
                        </div>
                        <div className="hidden sm:flex items-center gap-2 mt-4 sm:mt-6 md:mt-10">
                            <NavigationButtons swiperRef={swiperRef} />
                        </div>
                    </div>

                    {/* reviews - right side */}
                    <div className="overflow-hidden flex-3">
                        <ReviewSlider userReviews={userReviews} swiperRef={swiperRef} />
                    </div>
                    <div className="flex justify-center gap-2 sm:hidden">
                        <NavigationButtons swiperRef={swiperRef} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestiMonialSection