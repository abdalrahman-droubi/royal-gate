"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Import image assets
import peach from "@assets/peachSlider.svg";
import Lemon from "@assets/LemonSlider.svg";
import strawberry from "@assets/StrawberrySlider.svg";
import Pomegranate from "@assets/PomegranateSlider.svg";
import Orange from "@assets/OrangeSlider.svg";
import Banan from "@assets/BananSlider.svg";
import Tomato from "@assets/tomato.svg";
import watermelon from "@assets/watermelon.svg";

// Define type for the slides
type Slide = {
  img: string; // Path to the image
  title: string; // Title or name of the image
};

const Gallery = () => {
  const t = useTranslations();

  const [modalImage, setModalImage] = useState<string | null>(null);

  const slides: Slide[] = [
    { img: peach, title: "Peach" },
    { img: Lemon, title: "Lemon" },
    { img: strawberry, title: "Strawberry" },
    { img: Pomegranate, title: "Pomegranate" },
    { img: Orange, title: "Orange" },
    { img: Banan, title: "Banana" },
    { img: Tomato, title: "Tomato" },
    { img: watermelon, title: "Watermelon" },
  ];

  const handleImageClick = (image: string) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section className="gallery-section py-8 spacing-y-main container-main">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 text-[#286485]">
          <div className="w-2 h-2 border border-[#286485] rounded-full"></div>
          <div className="w-2 h-2 border border-[#286485] rounded-full"></div>
          <div className="w-2 h-2 border border-[#286485] rounded-full"></div>
          <p className="text-sm text-[#286485] tracking-widest uppercase">
            {t("products.title")}
          </p>
          <div className="w-2 h-2 border border-[#286485] rounded-full"></div>
          <div className="w-2 h-2 border border-[#286485] rounded-full"></div>
          <div className="w-2 h-2 border border-[#286485] rounded-full"></div>
        </div>

        <h2 className="text-3xl font-bold text-gray-800">
          {t("Gallery.gallery")}
        </h2>
      </div>
      <div className="gallery-container relative overflow-hidden rounded-lg">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            1024: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          className="w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <div
                className="relative group cursor-pointer flex justify-center"
                onClick={() => handleImageClick(slide.img)}
              >
                <Image
                  src={slide.img}
                  alt={slide.title}
                  width={700}
                  height={700}
                  className="object-cover transition-transform group-hover:scale-105  h-[25 0px] "
                />
                <div className="absolute w-[300px]  inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity rounded-lg"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {modalImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white rounded-lg p-4">
            <button
              onClick={closeModal}
              className="absolute top-1 right-1 text-black text-lg font-bold"
            >
              ✕
            </button>
            <Image
              src={modalImage}
              alt="Selected image"
              width={500}
              height={500}
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
