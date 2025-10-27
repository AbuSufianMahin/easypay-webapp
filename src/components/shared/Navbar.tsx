import BrandLogo from './BrandLogo'
import Link from 'next/link';
import { Button } from '../ui/button';
import NavigationModal from './NavigationModal';

type navigationLink = {
    name: string;
    url: string
}

function Navbar() {
    const navLinks: navigationLink[] = [
        {
            name: "Features",
            url: "#features"
        },
        {
            name: "Pricing",
            url: "#pricing"
        },
        {
            name: "FAQ",
            url: "#faq"
        },
        {
            name: "Testimonials",
            url: "#testimonials"
        },
    ]


    return (
        <nav className='bg-linear-to-r from-[#E2EAFE] to-[#DFCAF5] border-b-2 border-[#ab96c2] sticky py-2 top-0 z-100'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center mx-4 md:mx-6 2xl:mx-0'>
                    <div>
                        <BrandLogo />
                    </div>
                    <div className='hidden md:flex'>
                        {
                            <ul className='flex gap-4 lg:text-lg md:gap-8 justify-between'>
                                {
                                    navLinks.map((navItem, index) =>
                                        <li key={index} className='hover:underline'>
                                            <Link href={navItem.url}>{navItem.name}</Link>
                                        </li>
                                    )
                                }
                            </ul>
                        }
                    </div>
                    <div className='hidden md:flex'>
                        <Button>Contact Us</Button>
                    </div>


                    <NavigationModal navLinks={navLinks}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar