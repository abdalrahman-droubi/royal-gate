"use client";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import Trending from "./Trending";

import Banana from "@assets/p1.svg";
import P2 from "@assets/p2.svg";
import P3 from "@assets/p3.svg";
import P4 from "@assets/p4.svg";
import P16 from "@assets/orangeNew.svg";
import P9 from "@assets/cucumber.svg";
import P13 from "@assets/p13.svg";
import pp from "@assets/aa.svg";
import p7 from "@assets/p7.svg";
import p8 from "@assets/apricot.svg";
import p14 from "@assets/p14.svg";
import p5 from "@assets/Lettuce.svg";
import Avocado from "@assets/Avocado.svg";
import p9 from "@assets/p8.svg";
import pc from "@assets/p21.svg";
import p10 from "@assets/p10.svg";
import MM from "@assets/mm.svg";

function useStaggeredAnimation(totalItems: number, staggerDelay: number = 50) {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleItems((prev) => {
        if (prev.length < totalItems) {
          return [...prev, prev.length];
        }
        clearInterval(timer);
        return prev;
      });
    }, staggerDelay);

    return () => clearInterval(timer);
  }, [totalItems, staggerDelay]);

  return visibleItems;
}

type Product = {
  name: string;
  image: StaticImageData | string;
};

export default function Products({ locale }: { locale: string }) {
  const t = useTranslations();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<
    StaticImageData | string | null
  >(null);

  const handleImageClick = (image: StaticImageData | string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const products: Product[] = [
    { name: t("products.strawberry"), image: P2 },
    { name: t("products.mango"), image: P13 },
    { name: t("products.watermelon"), image: p9 },
    { name: t("products.orange"), image: P16 },
    { name: t("products.grapes"), image: pp },
    { name: t("products.pomegranate"), image: P4 },
    { name: t("products.garlic"), image: p5 },
    { name: t("products.eggplant"), image: Avocado },
    { name: t("products.banana"), image: Banana },
    { name: t("products.melon"), image: pc },
    { name: t("products.apricot"), image: p8 },
    { name: t("products.peach"), image: p7 },
    { name: t("products.lemon"), image: P9 },
    { name: t("products.tomato"), image: p14 },
    { name: t("products.guava"), image: p10 },
    { name: t("products.onion"), image: P3 },
    { name: t("products.tangerine"), image: MM },
  ];

  const visibleItems = useStaggeredAnimation(products.length);

  return (
    <>
      <Trending locale={locale} />

      <div
        className="spacing-y-main container-main relative z-10 "
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="  p-2 m-0 bg-white  mt-[-10rem] rounded-2xl shadow-custom-white ">
          {" "}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-[#6AA800]">
              <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
              <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
              <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
              <p className="text-sm text-[#6AA800] tracking-widest uppercase">
                {t("products.title")}
              </p>
              <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
              <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
              <div className="w-2 h-2 border border-[#6AA800] rounded-full"></div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800">
              {t("products.Productss")}
            </h2>
          </div>
          <div className="md:px-14 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-0 sm:mt-6 ">
            {products.map((product, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center ${
                    visibleItems.includes(index)
                      ? "animate-fade-in opacity-100"
                      : "opacity-0"
                  } transition-all duration-300 ease-in-out`}
                >
                  <div
                    className="bg-white p-4 rounded-lg border-2 hover:border-[#6AA800] transition-shadow duration-300 w-full aspect-square flex items-center justify-center overflow-hidden group"
                    onClick={() => handleImageClick(product.image)}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="max-w-full max-h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <p className="mt-2 text-center text-gray-800 font-medium">
                    {product.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="bg-white p-8 rounded-lg relative">
            <button
              className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              ✕
            </button>
            <Image
              src={selectedImage as StaticImageData | string}
              alt="Selected Product"
              width={500}
              height={500}
              className="object-contain rounded"
            />
          </div>
        </div>
      )}
    </>
  );
}
