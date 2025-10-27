import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import { Urbanist } from "next/font/google"

const urbanist = Urbanist({
    subsets: ["latin"],
})

type SubscriptionPlan = {
    title: string;
    brief: string;
    price: number;
    subscriptionType: "month" | "year";
    default: boolean;
    features: string[];
};


function PricingSection() {

    const subscriptionPlanList: SubscriptionPlan[] = [{
        title: "Free Plan",
        brief: "Free for personal Payments",
        price: 0,
        subscriptionType: "month", //monthly or yearly
        default: false,
        features: [
            "Up to 100 transections per month",
            "Basic proud protection",
            "Email support"
        ]
    },
    {
        title: "Advanced",
        brief: "Minimal fees for advanced transactions",
        price: 19,
        subscriptionType: "month",
        default: true,
        features: [
            "Up to 1000 transections per month",
            "Advanced proud protection",
            "Detailed transaction reports",
            "Priority email & chat support"
        ]
    },
    {
        title: "Business",
        brief: "Premium business transactions",
        price: 29,
        subscriptionType: "month",
        default: false,
        features: [
            "Unlimited transections per month",
            "Premium proud protection",
            "Detailed transaction reports",
            "Priority email & chat support"
        ]
    }
    ]

    return (
        <section className="bg-radial-[at_50%_65%] lg:bg-radial-[at_50%_75%] from-[#CD9BFF70] to-white to-70% lg:to-30%">
            <div className="max-w-7xl mx-auto pb-6 lg:pb-20">
                <div className="text-center">
                    <h1 className="text-lg font-semibold text-[#932EFA]">Pricing</h1>
                    <h2 className={`${urbanist.className} text-2xl md:text-4xl font-bold`}>Simple transparent pricing <br /> no hidden fees </h2>
                </div>

                <div className="m-4 md:m-6 2xl:mx-0">
                    <div className="mt-6 md:mt-12 grid lg:grid-cols-3 gap-2 xl:gap-5">
                        {
                            subscriptionPlanList.map((plan, index) =>
                                <div key={index} className={`border shadow-md py-10 px-6 rounded-2xl hover:scale-101 hover:shadow-2xl transition duration-200 ${plan.default ? "bg-black text-[#B1B2B2]" : "bg-white text-[#4D525F]"}`}>
                                    <div>
                                        <h3 className={`text-2xl font-bold ${plan.default ? "text-white" : "text-black"}`}>{plan.title}</h3>
                                        <p className={``}>{plan.brief}</p>
                                        <p className="mt-6">
                                            <span className={`text-5xl font-bold ${urbanist.className} ${plan.default ? "text-white" : "text-black"}`}>${plan.price}</span>
                                            <span>/{plan.subscriptionType}</span>
                                        </p>
                                    </div>

                                    {/* horizontal seperator */}
                                    <div className={`w-full my-6 h-px bg-linear-to-r ${plan.default ? "from-[#272727B2] via-[#505050] to-[#272727B2]" : "from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5]"}`}></div>

                                    <ul className="text-sm md:text-base space-y-2">
                                        {
                                            plan.features.map((feat, index) =>
                                                <li key={index} className="flex gap-2">
                                                    <Check size={24} className={`rounded-full p-1 ${plan.default ? "bg-[#26272C] text-white" : "bg-[#ECF0FB] text-[#2E68FD]"}`} />
                                                    {feat}
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingSection