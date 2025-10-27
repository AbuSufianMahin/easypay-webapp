import { Menu } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button';
import Link from 'next/link';

type NavigationLink = {
    name: string;
    url: string;
};

type NavigationModalProps = {
    navLinks: NavigationLink[];
}

function NavigationModal({ navLinks }: NavigationModalProps) {
    return (
        <div className='md:hidden'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className='bg-[#8070FE] sm:h-10 w-10 rounded-lg shadow-md'>
                        <Menu size={32} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='z-500 mr-2'>
                    <ul className='grid'>
                        {
                            navLinks.map((navItem, index) =>
                                <li key={index} className={`hover:underline  px-4 py-2 ${index !== navLinks.length - 1 ? "border-b" : ""}`}>
                                    <Link href={navItem.url}>{navItem.name}</Link>
                                </li>
                            )
                        }
                    </ul>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default NavigationModal