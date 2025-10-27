import Image from 'next/image'
import CTAbackground from "../../../assets/images/download-section-bg.png"
import { Urbanist } from 'next/font/google'
import { Button } from '@/components/ui/button'

const urbanist = Urbanist({
    subsets: ["latin"],
})

function CTASection() {
    return (
        <section className='max-w-7xl mx-auto py-14 sm:py-20 lg:py-30'>
            <div className='mx-4 md:mx-6 2xl:mx-0'>
                <div className='relative rounded-2xl overflow-hidden '>
                    <Image src={CTAbackground.src} alt='Illustration representing money transfers' width={CTAbackground.width} height={CTAbackground.height} priority className="w-full h-auto object-cover min-h-[350px]"></Image>
                    <div className='absolute top-0 bg-[#000000B2] h-full w-full'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center text-white max-w-[580px] mx-auto'>
                        <div className='text-center space-y-3 px-4 sm:px-0'>
                            <h2 className={`text-2xl sm:text-4xl font-bold ${urbanist.className}`}>Ready to experience seamless secure payments globally</h2>
                            <p className='text-xs sm:text-base'>Ready for hassle-free, secure payments anywhere in the world? Start using Monks Pay today it's fast, free, and focused on keeping your transactions secure!</p>
                        </div>
                        <div className='flex flex-col sm:flex-row mt-5 lg:mt-10 gap-2 sm:gap-4'>
                            <Button>Download the App</Button>
                            <Button className='bg-transparent border hover:bg-white hover:text-black'>Get Started Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTASection