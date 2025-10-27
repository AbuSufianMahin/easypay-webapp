import { Urbanist } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const urbanist = Urbanist({
    subsets: ["latin"],
})


function BrandLogo() {
    return (
        <Link href="/" className="flex gap-1 md:gap-2 items-center">
            <Image src={"/easypay-logo.png"} alt="Easy Pay brand Logo" width={52} height={52} className="object-contain w-10 sm:w-12 md:w-14 h-auto" priority />
            <h1 className={`text-2xl md:text-3xl font-bold ${urbanist.className}`}>Easy Pay</h1>
        </Link>
    )
}

export default BrandLogo