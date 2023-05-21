"use client"
import React from "react";
import Link from "next/link";
import { BsArrowRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardSoon, Title } from '@/components'
import 'swiper/css';

const breakpoints = {
    250: {
        slidesPerView: 1.5,
        spaceBetween: 10,
    },
    768: {
        slidesPerView: 2.5,
        spaceBetween: 10,
    },
    992: {
        slidesPerView: 4,
        spaceBetween: 10,
    }
};

function Carousel({ cardData, soonCardData, title, soon }) {
    return (
        <div className="w-full">
            <div className="w-full my-5 flex justify-between md:px-5  px-3 py-1 border-b border-[#00000015]">
                <div className="text-xl font-[Raleway] font-bold md:text-2xl">
                    {title}
                </div>
                <div className="flex items-center text-sm text-[#4f4cee] md:text-base ">
                    <Link href="/" className="mr-1">View All</Link>
                    <BsArrowRight />
                </div>
            </div>

            <div className="w-full mx-auto">

                {soon ?
                    <Swiper
                        spaceBetween={10}
                        centeredSlides={true}
                        slidesPerView={4}
                        loop={true}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={breakpoints}
                    >
                        {soonCardData.map((cardSoon) => (
                            <SwiperSlide key={cardSoon.id}>
                                <CardSoon
                                    image={cardSoon.image}
                                    title={cardSoon.title}
                                    date={cardSoon.date}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    :
                    <Swiper
                        spaceBetween={10}
                        centeredSlides={true}
                        slidesPerView={4}
                        loop={true}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={breakpoints}
                    >
                        {cardData.map((card) => (
                            <SwiperSlide key={card.id}>
                                <Card
                                    image={card.image}
                                    title={card.title}
                                    date={card.date}
                                    description={card.description}
                                    location={card.location}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                }

            </div>
        </div>
    );
}

export default Carousel;


