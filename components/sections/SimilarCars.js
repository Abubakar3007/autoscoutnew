"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Card from "../ui/Card";
import Heading from "../ui/Heading";

export default function SimilarCars() {
    const cars = [1, 2, 3, 4, 5];
    return (
        <div class="mt-10">
            <Heading as="h2" className="text-[28px] w-fit pb-2 border-b border-blue-500 mb-10 font-semibold">Similar cars</Heading>
            {/* similar car container */}
            <Swiper
                modules={[Navigation,Autoplay]}
                spaceBetween={24}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                navigation={true}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-10"
            >
                {cars.map((car, index) => (
                    <SwiperSlide key={index}>
                        <Card />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}