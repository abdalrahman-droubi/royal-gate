"use client";
import React from "react";
import "../app/globals.css";
import hero from "@assets/a1.svg";
import heroAr from "@assets/HeroAr.svg";
import { useTranslations } from "next-intl";

import peach from "@assets/peach.svg";
import pomegranate from "@assets/pomegranates.svg";
import strawberry from "@assets/strawberry.svg";
import orange from "@assets/orange.svg";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import "../app/globals.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Slider data
const sliderData = [
  {
    id: 1,
    title: "Fresh Veggie",
    subtitle: "Organic Food",
    description:
      "We believe that healthy eating, clean air, and gentle choices are the best start to genuine wellbeing.",
    image: orange,
    buttonText: "Shop Now",
  },
  {
    id: 2,
    title: "Natural Fruits",
    subtitle: "Farm Fresh",
    description:
      "Discover our selection of locally sourced, pesticide-free fruits for a healthier lifestyle.",
    image: "/images/slide-2.png",
    buttonText: "Explore",
  },
  {
    id: 3,
    title: "Organic Greens",
    subtitle: "Pure & Healthy",
    description:
      "Our organic vegetables are grown with care to provide the best nutrition for your family.",
    image: "/images/slide-3.png",
    buttonText: "Learn More",
  },
];

const Hero = ({ locale }: { locale: string }) => {
  const translation = useTranslations("Hero");
  const [swiperRef, setSwiperRef] = useState<any>(null);
  return (
    <div className="relative">
      <Swiper
        onSwiper={setSwiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        className="relative"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-screen bg-[#6eca7f]">
              <div className="container-main space-y-main  h-full flex items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
                  <div className="relative z-10 order-2 md:order-1 text-center md:text-left px-4 md:px-0">
                    <h3 className="text-white font-cursive text-3xl md:text-4xl mb-2">
                      {slide.subtitle}
                    </h3>
                    <h2 className="text-white font-bold text-5xl md:text-7xl mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-white max-w-md mx-auto md:mx-0 mb-6">
                      {slide.description}
                    </p>
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-full px-6">
                      {slide.buttonText}
                    </Button>
                  </div>
                  <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      width={500}
                      height={500}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <button
        onClick={() => swiperRef?.slidePrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => swiperRef?.slideNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Custom pagination */}
      <div className="swiper-pagination absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2"></div>
      <svg
        className=" absolute top-[-44px] left-0 right-0 mx-auto w-[240px] h-[45px] z-[2]"
        x="0px"
        y="0px"
        viewBox="0 0 147.7 35.2"
        style={{ enableBackground: "new 0 0 147.7 35.2" }}
        xmlSpace="preserve"
      >
        <path
          d="M147.7,35.2c-49.2,0-98.5,0-147.7,0c10.4-3.6,18.7-10.6,27.5-16.9c7.7-5.6,16.1-10,24.9-13.8c14.5-6.2,28.8-6.1,43.2,0.1c9.9,4.2,19.2,9.4,27.8,15.9C130.9,26.4,138.6,31.9,147.7,35.2z"
          fill="#fbfbf3"
        />
      </svg>
    </div>
  );
};

export default Hero;
