"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import OurMission from "@/components/OurMission";
import Properties from "@/components/Properties";
import AreasWeServe from "@/components/AreasWeServe";
import WhyChooseUs from "@/components/WhyChooseUs";
import PropertyProcess from "@/components/PropertyProcess";
import DubaiNeighborhoods from "@/components/DubaiNeighborhoods";
import FAQ from "@/components/FAQ";
import InvestmentOpportunities from "@/components/InvestmentOpportunities";
import MarketInsights from "@/components/MarketInsights";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import lottie from "@lottie/loading.json";

export default function Home({
  params,
}: Readonly<{
  params: { locale: string };
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
      <Navbar />

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

          <section id="services" className="scroll-mt-20">
            <ServicesSection />
          </section>

          <section id="about" className="scroll-mt-20 container-main">
            <OurMission />
          </section>

          <section className="scroll-mt-20">
            <PropertyProcess />
          </section>

          <section id="properties" className="scroll-mt-20">
            <Properties locale={params.locale} />
          </section>

          <section className="scroll-mt-20">
            <DubaiNeighborhoods />
          </section>

          <section id="areas" className="scroll-mt-20">
            <AreasWeServe />
          </section>

          <section className="scroll-mt-20">
            <InvestmentOpportunities />
          </section>

          <section className="scroll-mt-20">
            <WhyChooseUs />
          </section>

          <section className="scroll-mt-20">
            <MarketInsights />
          </section>

          <section className="scroll-mt-20">
            <FAQ />
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
