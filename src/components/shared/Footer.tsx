import { Urbanist } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
type ShortLink = {
    name: string;
    path: string;
}

type OtherPage = {
    name: string;
    path: string;
}

const urbanist = Urbanist({
    subsets: ["latin"],
})


function Footer() {
    const shortLinks: ShortLink[] = [{
        name: "Features",
        path: "/features"
    },
    {
        name: "How It Works",
        path: "how-it-works"
    },
    {
        name: "Security",
        path: "security"
    },
    {
        name: "Testimonial",
        path: "testimonial"
    }
    ]

    const otherPages: OtherPage[] = [
        {
            name: "Privacy Policy",
            path: "/privacy-policy"
        },
        {
            name: "Terms & Conditions",
            path: "/terms-and-conditions"
        },
        {
            name: "404",
            path: "/404-not-found"
        },
    ]


    return (
        <footer className="pb-4 bg-radial-[at_50%_150%] md:bg-radial-[at_50%_100%] from-[#CD9BFF80] to-white to-70% md:to-50% lg:to-40%">
            <div className="max-w-7xl mx-auto">
                <div className="mx-4 md:mx-6 2xl:mx-0 flex flex-col md:flex-row gap-10 lg:gap-30 md:justify-between pb-4 border-b border-[#E7E7E8]">
                    {/* brand summary */}
                    <div className="max-w-96 md:max-w-80 space-y-6">
                        <Link href="/" className="flex gap-2 items-center">
                            <Image src={"/easypay-logo.png"} alt="Easy Pay brand Logo" width={52} height={52} className="object-contain" priority />
                            <h1 className={`text-3xl font-bold ${urbanist.className}`}>Easy Pay</h1>
                        </Link>

                        <p className="text-[#4D525F]">Easy Pay offers secure, seamless, and fee-free payments for effortless global transactions.</p>
                    </div>

                    {/* links */}
                    <div className="flex-1 flex flex-col md:flex-row gap-6 md:gap-20 lg:gap-40 md:justify-end">
                        {/* short Links */}
                        <div>
                            <h4 className={`text-xl font-bold ${urbanist.className}`}>Short Links</h4>
                            <ul className="space-y-3 mt-2 sm:mt-4 text-[#4D525F]">
                                {
                                    shortLinks.map((shortLink, index) =>
                                        <li key={index}>
                                            <Link href={shortLink.path} className="cursor-pointer hover:underline">{shortLink.name}</Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>

                        {/* other pages */}
                        <div>
                            <h4 className={`text-xl font-bold ${urbanist.className}`}>Other Pages</h4>
                            <ul className="space-y-3 mt-2 sm:mt-4 text-[#4D525F]">
                                {
                                    otherPages.map((otherPage, index) =>
                                        <li key={index}>
                                            <Link href={otherPage.path} className="cursor-pointer hover:underline">{otherPage.name}</Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-center py-4 text-[#878787] font-light">
                2024 © Easy Pay. All rights reserved.
            </p>

        </footer>
    )
}

export default Footer