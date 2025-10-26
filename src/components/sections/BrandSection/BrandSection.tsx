import {
    Marquee,
    MarqueeContent,
    MarqueeFade,
} from '@/components/ui/shadcn-io/marquee';

import applePayLogo from "../../../assets/images/brands/apple-pay.png"
import googlePayLogo from "../../../assets/images/brands/google-pay.png"
import mastercardLogo from "../../../assets/images/brands/mastercard.png"
import paypalLogo from "../../../assets/images/brands/paypal.png"
import stripeLogo from "../../../assets/images/brands/stripe.png"
import visaLogo from "../../../assets/images/brands/visa.png"
import Image from 'next/image';

interface BrandDetail {
    brandName: string
    logo: string
}

function BrandSection() {
    const brandDetails: BrandDetail[] = [
        { brandName: "Apple Pay", logo: applePayLogo.src },
        { brandName: "Google Pay", logo: googlePayLogo.src },
        { brandName: "Mastercard", logo: mastercardLogo.src },
        { brandName: "PayPal", logo: paypalLogo.src },
        { brandName: "Stripe", logo: stripeLogo.src },
        { brandName: "Visa", logo: visaLogo.src },
    ]

    return (
        <section className='2xl:max-w-[1440px] mx-auto mt-16'>
            <Marquee>
                <MarqueeFade side="left" />
                <MarqueeFade side="right" />
                <MarqueeContent >
                    {brandDetails.map((brand) => (
                        <Image
                            key={brand.brandName}
                            src={brand.logo}
                            alt={brand.brandName}
                            width={60}
                            height={20}
                            className="object-contain mr-10 md:mr-40 h-auto w-auto"
                        />
                    ))}
                </MarqueeContent>
            </Marquee>
        </section>
    )
}

export default BrandSection;