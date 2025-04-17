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
import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { useState } from "react";
const images = [
  {
    id: 1,
    src: peach,
    alt: "Planting seedling",
    className:
      "sm:col-span-2 col-span-1 sm:h-[300px] h-[200px] w-full sm:w-auto",
    priority: true,
    width: 800,
    height: 600,
  },
  {
    id: 2,
    src: Lemon,
    alt: "Wheat and corn field",
    className: "col-span-1 sm:h-[300px] h-[200px] w-full sm:w-auto",
    priority: true,
    width: 800,
    height: 600,
  },
  {
    id: 3,
    src: strawberry,
    alt: "Tropical fruits",
    className: "col-span-1 sm:h-[300px] h-[200px] w-full sm:w-auto",
    priority: true,
    width: 800,
    height: 600,
  },
  {
    id: 4,
    src: Pomegranate,
    alt: "People in field",
    className: "col-span-1 sm:h-[300px] h-[200px] w-full sm:w-auto",
    width: 800,
    height: 600,
  },
  {
    id: 5,
    src: Orange,
    alt: "Harvesting vegetables",
    className:
      "col-span-1 sm:h-[600px] h-[200px] sm:row-span-2 w-full sm:w-auto",
    width: 800,
    height: 600,
  },
  {
    id: 6,
    src: Banan,
    alt: "Healthy breakfast bowl",
    className:
      "sm:col-span-2 col-span-1 sm:h-[300px] h-[200px] w-full sm:w-auto",
    width: 800,
    height: 600,
  },
  {
    id: 7,
    src: Tomato,
    alt: "Lettuce field",
    className: "col-span-1 sm:h-[300px] h-[200px] w-full sm:w-auto",
    width: 800,
    height: 600,
  },
  {
    id: 8,
    src: watermelon,
    alt: "Farmers market produce",
    className: "col-span-1 sm:h-[300px] h-[200px] w-full sm:w-auto",
    width: 800,
    height: 600,
  },
  {
    id: 9,
    src: Avocado,
    alt: "Strawberries and honey",
    className: "col-span-1 sm:h-[300px] h-[200px] w-full sm:w-auto",
    width: 800,
    height: 600,
  },
  {
    id: 10,
    src: Peach,
    alt: "Freshly picked apples",
    className: "col-span-1 sm:h-[300px] h-[200px] w-full sm:w-auto",
    width: 800,
    height: 600,
  },
  {
    id: 11,
    src: Onion,
    alt: "Fresh milk and cheese",
    className: "col-span-1 sm:h-[300px] h-[200px] w-full sm:w-auto",
    width: 800,
    height: 600,
  },
  {
    id: 12,
    src: Grapes,
    alt: "Local produce display",
    className: "col-span-1 sm:h-[300px] h-[200px] w-full sm:w-auto",
    width: 800,
    height: 600,
  },
  {
    id: 13,
    src: Cucumber,
    alt: "Local produce display",
    className: "col-span-1 sm:h-[300px] h-[200px] w-full sm:w-auto",
    width: 800,
    height: 600,
  },
];

const Gallery = () => {
  const translation = useTranslations("Gallery");
  const [selectedImage, setSelectedImage] = useState<(typeof images)[0] | null>(
    null
  );

  const openModal = (image: (typeof images)[0]) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "next" | "prev") => {
    if (!selectedImage) return;

    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    }

    setSelectedImage(images[newIndex]);
  };
  return (
    <div className="spacing-y-main">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8">
        {translation("gallery")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => openModal(image)}
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
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={closeModal}
          onNavigate={navigateImage}
        />
      )}
    </div>
  );
};

export default Gallery;

interface ImageModalProps {
  image: (typeof images)[0];
  onClose: () => void;
  onNavigate: (direction: "next" | "prev") => void;
}

export function ImageModal({ image, onClose, onNavigate }: ImageModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        onNavigate("next");
      } else if (e.key === "ArrowLeft") {
        onNavigate("prev");
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [onClose, onNavigate]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div ref={modalRef} className="relative max-w-[90vw] max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 p-2 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="relative h-[80vh] w-[90vw]">
          <Image
            src={image.src || "/placeholder.svg"}
            alt={"image.alt"}
            className="object-contain"
            fill
            sizes="90vw"
            priority
          />
        </div>

        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={() => onNavigate("prev")}
            className="p-2 bg-black/50 text-white rounded-l-lg hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={() => onNavigate("next")}
            className="p-2 bg-black/50 text-white rounded-r-lg hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
