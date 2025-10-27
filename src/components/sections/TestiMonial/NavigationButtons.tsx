import { Button } from "@/components/ui/button";
import { Swiper as SwiperType } from "swiper";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationButtonsProps {
    swiperRef: React.RefObject<SwiperType>;
}

function NavigationButtons({ swiperRef }: NavigationButtonsProps) {
    return (
        <>
            <Button className="w-12 h-12 md:w-14 md:h-14 rounded-full hover:shadow-md" variant={"outline"} onClick={() => swiperRef.current?.slidePrev()}>
                <ChevronLeft className="w-8 h-8" />
            </Button>
            <Button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black text-white hover:shadow-md hover:bg-gray-800 hover:text-white" variant={"outline"}
                onClick={() => swiperRef.current?.slideNext()}
            >
                <ChevronRight className="w-8 h-8" />
            </Button>
        </>
    )
}

export default NavigationButtons