import { Button } from "@/components/ui/button"
import { Urbanist } from "next/font/google"
import Image from "next/image";
import { ReactElement } from "react";

import workingManFigure from "../../../assets/images/working-man-figure.jpg"

const urbanist = Urbanist({
    subsets: ["latin"],
})

type workStep = {
    title: string;
    description: string;
    icon: ReactElement;
}

function HowItWorks() {
    const workingSteps: workStep[] = [
        {
            title: "Download Easy Pay",
            description: "Get the Easy Pay app today from the App Store or Google Play hassle free.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M43.136 26.514L40.274 16.478C39.6 14.136 37.426 12.5 34.988 12.5H31.998C31.17 12.5 30.498 13.172 30.498 14C30.498 14.828 31.17 15.5 31.998 15.5H34.988C36.096 15.5 37.084 16.244 37.39 17.304L39.442 24.5H34C32.07 24.5 30.5 26.07 30.5 28C30.5 29.378 29.378 30.5 28 30.5H20C18.622 30.5 17.5 29.378 17.5 28C17.5 26.07 15.93 24.5 14 24.5H8.558L10.608 17.308C10.914 16.242 11.902 15.5 13.01 15.5H16C16.828 15.5 17.5 14.828 17.5 14C17.5 13.172 16.828 12.5 16 12.5H13.01C10.572 12.5 8.398 14.136 7.724 16.482L4.864 26.514C4.622 27.362 4.5 28.238 4.5 29.118V38C4.5 41.034 6.966 43.5 10 43.5H38C41.034 43.5 43.5 41.034 43.5 38V29.118C43.5 28.238 43.378 27.362 43.136 26.514ZM40.5 38C40.5 39.378 39.378 40.5 38 40.5H10C8.622 40.5 7.5 39.378 7.5 38V29.118C7.5 28.616 7.572 28.118 7.686 27.63C7.772 27.556 7.878 27.5 8 27.5H14C14.276 27.5 14.5 27.724 14.5 28C14.5 31.034 16.966 33.5 20 33.5H28C31.034 33.5 33.5 31.034 33.5 28C33.5 27.724 33.724 27.5 34 27.5H40C40.122 27.5 40.226 27.556 40.314 27.63C40.428 28.118 40.5 28.616 40.5 29.118V38Z" fill="#01081B" />
                    <path d="M29.0521 18.872C28.4621 18.288 27.5101 18.298 26.9301 18.888L25.4981 20.342V6C25.4981 5.172 24.8261 4.5 23.9981 4.5C23.1701 4.5 22.4981 5.172 22.4981 6V20.398L21.0541 18.966C20.4681 18.382 19.5161 18.384 18.9321 18.974C18.3481 19.562 18.3521 20.512 18.9401 21.096L22.9401 25.066C23.2221 25.346 23.6021 25.502 23.9961 25.502H24.0041C24.4041 25.502 24.7861 25.338 25.0641 25.054L29.0641 20.994C29.6461 20.404 29.6381 19.454 29.0481 18.872H29.0521Z" fill="#2E68FD" />
                </svg>
            )
        },
        {
            title: "Link your bank or card",
            description: "Easily connect your account in seconds with advanced security for peace of mind.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38 8.5H10C6.966 8.5 4.5 10.966 4.5 14V34C4.5 37.034 6.966 39.5 10 39.5H38C41.034 39.5 43.5 37.034 43.5 34V14C43.5 10.966 41.034 8.5 38 8.5ZM10 11.5H38C39.378 11.5 40.5 12.622 40.5 14V18.5H7.5V14C7.5 12.622 8.622 11.5 10 11.5ZM38 36.5H10C8.622 36.5 7.5 35.378 7.5 34V21.5H40.5V34C40.5 35.378 39.378 36.5 38 36.5Z" fill="#01081B" />
                    <path d="M17.5 32C17.5 32.828 16.828 33.5 16 33.5H12C11.172 33.5 10.5 32.828 10.5 32C10.5 31.172 11.172 30.5 12 30.5H16C16.828 30.5 17.5 31.172 17.5 32ZM26 30.5H22C21.172 30.5 20.5 31.172 20.5 32C20.5 32.828 21.172 33.5 22 33.5H26C26.828 33.5 27.5 32.828 27.5 32C27.5 31.172 26.828 30.5 26 30.5Z" fill="#2E68FD" />
                </svg>
            )
        },
        {
            title: "Start paying",
            description: "Easily split bills, send money to friends, and make smooth online payments instantly.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.386 35.426C41.154 34.866 40.606 34.5 40 34.5H8C7.172 34.5 6.5 35.172 6.5 36C6.5 36.828 7.172 37.5 8 37.5H36.378L32.938 40.94C32.352 41.526 32.352 42.476 32.938 43.062C33.23 43.354 33.614 43.502 33.998 43.502C34.382 43.502 34.766 43.356 35.058 43.062L41.058 37.062C41.486 36.632 41.616 35.988 41.384 35.428L41.386 35.426Z" fill="#2E68FD" />
                    <path d="M38 4.5H10C6.966 4.5 4.5 6.966 4.5 10V26C4.5 29.034 6.966 31.5 10 31.5H38C41.034 31.5 43.5 29.034 43.5 26V10C43.5 6.966 41.034 4.5 38 4.5ZM40.5 26C40.5 27.378 39.378 28.5 38 28.5H10C8.622 28.5 7.5 27.378 7.5 26V10C7.5 8.622 8.622 7.5 10 7.5H38C39.378 7.5 40.5 8.622 40.5 10V26ZM15.5 12C15.5 12.828 14.828 13.5 14 13.5H12C11.172 13.5 10.5 12.828 10.5 12C10.5 11.172 11.172 10.5 12 10.5H14C14.828 10.5 15.5 11.172 15.5 12ZM37.5 24C37.5 24.828 36.828 25.5 36 25.5H34C33.172 25.5 32.5 24.828 32.5 24C32.5 23.172 33.172 22.5 34 22.5H36C36.828 22.5 37.5 23.172 37.5 24ZM24 10.5C19.864 10.5 16.5 13.864 16.5 18C16.5 22.136 19.864 25.5 24 25.5C28.136 25.5 31.5 22.136 31.5 18C31.5 13.864 28.136 10.5 24 10.5ZM24 22.5C21.518 22.5 19.5 20.482 19.5 18C19.5 15.518 21.518 13.5 24 13.5C26.482 13.5 28.5 15.518 28.5 18C28.5 20.482 26.482 22.5 24 22.5Z" fill="#01081B" />
                </svg>
            )
        }
    ]

    return (
        <section className='bg-[#F6F6F6]'>
            <div className='max-w-7xl mx-auto py-16 sm:py-24'>
                <div className="mx-4 md:mx-6 2xl:mx-0">
                    <div className="flex flex-col sm:flex-row items-center gap-2 justify-between sm:items-end">
                        <div className="text-center sm:text-left">
                            <h1 className='text-lg font-semibold text-[#932EFA]'>How It Works</h1>
                            <h2 className={`${urbanist.className} text-2xl md:text-4xl font-bold`}>Make payments, transfers, and <br /> more in 3 simple steps</h2>
                        </div>
                        <Button className="rounded-full px-4 sm:px-6 h-10 sm:h-14 bg-[#2E68FD] hover:opacity-95 hover:shadow-lg transition duration-300">Get Started Now</Button>
                    </div>

                    {/* work process cards */}
                    <div className="flex flex-col gap-6 md:gap-10 lg:flex-row bg-white rounded-2xl pt-12 pb-6 sm:py-12 px-4 md:px-8 mt-12">
                        {
                            workingSteps.map((steps, index) =>
                                <div key={index} className="relative flex">
                                    <div className={`p-4 lg:p-6 flex-1`}>
                                        <div>
                                            {steps.icon}
                                        </div>
                                        <div className="mt-2 lg:mt-8 space-y-1 sm:space-y-2">
                                            <h3 className={`text-xl font-bold ${urbanist.className}`}>{steps.title}</h3>
                                            <p className="text-sm text-[#4D525F]">{steps.description}</p>
                                        </div>
                                    </div>
                                    {
                                        index !== workingSteps.length - 1 && <div className="hidden sm:flex w-px xl:mx-12 h-10/12 bg-linear-to-b from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5]"></div>
                                    }
                                    <div className={`absolute -top-6 lg:-top-3 left-0 font-bold text-7xl opacity-5 ${urbanist.className}`}>
                                        0{index + 1}
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <div className="mt-6">
                        <Image src={workingManFigure.src} alt="Working man figure" priority height={workingManFigure.height} width={workingManFigure.width} className="rounded-2xl"/>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HowItWorks