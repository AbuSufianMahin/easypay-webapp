"use client"
import { RefObject } from 'react';

// swiper imports 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Swiper as SwiperType } from "swiper";
import { Pagination } from 'swiper/modules';
// ============

type Review = {
    userName: string;
    userPhoto: string;
    occupation: string;
    rating: 0 | 1 | 2 | 3 | 4 | 5;
    details: string;
};

type ReviewSliderProps = {
    userReviews: Review[];
    swiperRef: RefObject<SwiperType>; // type-safe ref
};

function ReviewSlider({ userReviews, swiperRef }: ReviewSliderProps) {

    return (
        <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
                320: { slidesPerView: 1 },   // sm
                1024: { slidesPerView: 2 },   // lg
            }}
            spaceBetween={10}
            centeredSlides={true}
            loop={true} 
            pagination={{
                clickable: true,
                renderBullet: (index, className) =>
                    `<span class="${className}" style="background-color:#932efa;"></span>`
            }}
            modules={[Pagination]}
            className="mySwiper min-h-84"
        >
            {
                userReviews.map((review, index) =>
                    <SwiperSlide key={index}>
                        <div className="px-6 py-8 border rounded-2xl bg-white min-h-84 flex flex-col justify-between">
                            {/* rating */}
                            <div>
                                {/* star ratings */}
                                <div className="flex">
                                    {
                                        [...Array(5)].map((_, index) => <Star key={index} size={16} className={`text-yellow-400 ${index < review.rating ? "fill-yellow-400" : ""}`} />)
                                    }
                                </div>

                                <p className='mt-4 text-sm '>{review.details}</p>
                            </div>
                            {/* avatar */}
                            <div className="flex items-center gap-2 mt-6 border-t pt-4">
                                {/* <Image src={""} alt={`Profile Picture of ${review.userName}`} fill/> */}
                                <Avatar className='w-12 h-12 md:w-14 md:h-14'>
                                    <AvatarImage src={review.userPhoto} alt={`Profile Picture of ${review.userName}`} className="border rounded-full" />
                                    <AvatarFallback className="border"></AvatarFallback>
                                </Avatar>

                                <div>
                                    <p className="text-sm sm:text-base text-[#01081B] font-semibold">{review.userName}</p>
                                    <p className="text-xs sm:text-sm text-[#4D525F]">{review.occupation}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            }
        </Swiper>
    )
}

export default ReviewSlider