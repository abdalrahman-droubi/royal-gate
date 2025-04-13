import React from "react";
import peach from "@assets/peachSlider.svg";
import Lemon from "@assets/LemonSlider.svg";
import strawberry from "@assets/StrawberrySlider.svg";
import Pomegranate from "@assets/PomegranateSlider.svg";
import Orange from "@assets/OrangeSlider.svg";
import Banan from "@assets/BananSlider.svg";
import Tomato from "@assets/tomato.svg";
import watermelon from "@assets/watermelon.svg";
import Avocado from "@assets/avocadoFarm.svg";
import Peach from "@assets/PeachFarm.svg";
import Onion from "@assets/OnionFarm.svg";
import Grapes from "@assets/GrapesFarm.svg";
import Cucumber from "@assets/cucumberFarm.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const images = [
  {
    src: peach,
    alt: "Planting seedling",
    className:
      "sm:col-span-2 col-span-1 sm:h-[300px] h-[200px] w-full sm:w-auto",
    priority: true,
  },
  {
    src: Lemon,
    alt: "Wheat and corn field",
    className: "col-span-1 sm:h-[300px] h-[200px] w-full sm:w-auto",
    priority: true,
  },
  {
    src: strawberry,
    alt: "Tropical fruits",
    className: "col-span-1 sm:h-[300px] h-[200px] w-full sm:w-auto",
    priority: true,
  },
  {
    src: Pomegranate,
    alt: "People in field",
    className: "col-span-1 sm:h-[300px] h-[200px] w-full sm:w-auto",
  },
  {
    src: Orange,
    alt: "Harvesting vegetables",
    className:
      "col-span-1 sm:h-[600px] h-[200px] sm:row-span-2 w-full sm:w-auto",
  },
  {
    src: Banan,
    alt: "Healthy breakfast bowl",
    className:
      "sm:col-span-2 col-span-1 sm:h-[300px] h-[200px] w-full sm:w-auto",
  },
  {
    src: Tomato,
    alt: "Lettuce field",
    className: "col-span-1 sm:h-[300px] h-[200px] w-full sm:w-auto",
  },
  {
    src: watermelon,
    alt: "Farmers market produce",
    className: "col-span-1 sm:h-[300px] h-[200px] w-full sm:w-auto",
  },
  {
    src: Avocado,
    alt: "Strawberries and honey",
    className: "col-span-1 sm:h-[300px] h-[200px] w-full sm:w-auto",
  },
  {
    src: Peach,
    alt: "Freshly picked apples",
    className: "col-span-1 sm:h-[300px] h-[200px] w-full sm:w-auto",
  },
  {
    src: Onion,
    alt: "Fresh milk and cheese",
    className: "col-span-1 sm:h-[300px] h-[200px] w-full sm:w-auto",
  },
  {
    src: Grapes,
    alt: "Local produce display",
    className: "col-span-1 sm:h-[300px] h-[200px] w-full sm:w-auto",
  },
  {
    src: Cucumber,
    alt: "Local produce display",
    className: "col-span-1 sm:h-[300px] h-[200px] w-full sm:w-auto",
  },
];

const Gallery = () => {
  const translation = useTranslations("Gallery");

  return (
    <div className="spacing-y-main">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8">
        {translation("gallery")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${image.className} relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority={image.priority}
              className="object-cover"
              loading={image.priority ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
