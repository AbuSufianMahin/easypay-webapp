import { Urbanist } from "next/font/google";

import bgImage from "../../../assets/images/header-bg.jpg"

const urbanist = Urbanist({
    subsets: ["latin"],
})

type securityFeature = {
    title: string;
    description: string;
    bgColor: string;
};

function SecuritySection() {
    const securityFeatures: securityFeature[] = [
        {
            title: "Two-factor authentication",
            description: "Two-factor authentication ensures added protection by using verification steps.",
            bgColor: "#2E68FD"
        },
        {
            title: "Fraud detection and alerts",
            description: "Fraud detection safeguards your money, sending instant alerts for any activity.",
            bgColor: "#FC4343"
        },
        {
            title: "Transaction notifications",
            description: "Instant notifications for transaction keep you informed to manage your finances.",
            bgColor: "#08A965"
        },
        {
            title: "Biometric access",
            description: "Easily and securely log in with biometric features, and facial recognition.",
            bgColor: "#3B7793"
        },
        {
            title: "End-to-end encryption",
            description: "By encryption, protecting your data from unauthorized access.",
            bgColor: "#D77E1B"
        },
        {
            title: "24/7 Protection support",
            description: "Our dedicated team is available around the clock to help you.",
            bgColor: "#932EFA"
        },

    ]

    const hexToRgba = (hex: string, opacity: number) => {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    return (
        <section className="max-w-7xl mx-auto my-16 md:my-20 lg:my-28">
            <div className="m-4 md:m-6 2xl:mx-0">
                <h1 className="text-lg font-semibold text-[#932EFA]">Features</h1>

                <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
                    <h2 className={`${urbanist.className} text-2xl md:text-4xl font-bold flex-2`}>We protect your money at <br /> every step with Easy Pay</h2>
                    <p className="flex-1 text-xs md:text-sm text-[#4D525F]">Easy Pay ensures your money is protected at every step with advanced encryption, real-time monitoring, and multi-factor authentication.</p>
                </div>

                <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-2 rounded-2xl p-4 md:pt-10 md:pb-6 md:px-8 mt-12 bg-no-repeat bg-size-[150%_200%] bg-position-[top_left] shadow-md border`}
                    style={{
                        backgroundImage: `url(${bgImage.src})`,
                    }}>
                    {
                        securityFeatures.map((feature, index) =>
                            <div key={index} className="relative flex">
                                <div className={`p-4 lg:p-6 flex-1`}>
                                    <div className="h-7 w-7 rounded-full flex items-center justify-center" style={{ backgroundColor: hexToRgba(feature.bgColor, 0.2) }}>
                                        <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: feature.bgColor }}></div>
                                    </div>
                                    <div className="mt-2 lg:mt-8 space-y-1 sm:space-y-2">
                                        <h3 className={`text-xl font-bold ${urbanist.className}`}>{feature.title}</h3>
                                        <p className="text-sm text-[#4D525F]">{feature.description}</p>
                                    </div>
                                </div>
                                {

                                    <div
                                        className={`hidden w-px xl:mx-12 h-10/12 bg-linear-to-b from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5] ${(index + 1) % 2 == 0 ? "sm:hidden" : "sm:flex"} ${(index + 1) % 3 == 0 ? "lg:hidden" : "lg:flex"}`}>

                                    </div>
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default SecuritySection