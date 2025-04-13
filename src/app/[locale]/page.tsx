"use client";
import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Navbar from "@/components/Navbar";
import { useTranslations } from "next-intl";
import Gallery from "@/components/Gallery";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Organic from "@/components/Organic";
import FeaturesSection from "@/components/FeaturesSection";
import Lottie from "react-lottie";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import lottie from "@lottie/loading.json";
export default function Home({
  params,
}: Readonly<{
  params: { locale: string };
}>) {
  const translation = useTranslations("Navbar");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    AOS.init();
  }, []);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {/* <section className="container-main"> */}
      <Navbar />
      {/* </section> */}

      {isLoading ? (
        <div className="mt-28 h-[600px]">
          <Lottie
            options={defaultOptions}
            height={400}
            width={300}
            isClickToPauseDisabled
          />
        </div>
      ) : (
        <main>
          <section id="home">
            <Hero locale={params.locale} />
          </section>
          <FeaturesSection />

          <section
            id="features"
            className="scroll-mt-20 container-main spacing-y-main"
          ></section>
          <section id="about" className="scroll-mt-20 container-main">
            <AboutUs />
          </section>
          <section id="products" className="scroll-mt-20 ">
            <Products locale={params.locale} />
          </section>
          <section className="scroll-mt-20">
            <Organic />
          </section>
          <section id="gallery" className="scroll-mt-20">
            <Gallery />
          </section>

          <section id="contact" className="scroll-mt-20 container-main">
            <ContactUs />
          </section>

          <Footer />
        </main>
      )}
    </>
  );
}
