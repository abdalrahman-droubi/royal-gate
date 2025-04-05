// components/ServicesSection.tsx
import Image, { StaticImageData } from "next/image";
import SubTitle from "@assets/subTitle.svg";
import Back from "@assets/Background1.svg";
import OrangeFee from "@assets/OrangeFee.svg";
import FreeShip from "@assets/free shipping.svg";
import Bread from "@assets/Bread.svg";
import Mony from "@assets/money back.svg";
import Broccoli from "@assets/broccoli.svg";
import Policy from "@assets/return policy.svg";
import WaterMalon from "@assets/watermelon55.svg";
import ContactU from "@assets/contact us.svg";
import Food from "@assets/Food.svg";

// Define prop types for the ServiceCard
type ServiceCardProps = {
  iconSrc: StaticImageData;
  bgSrc: StaticImageData;
  title: string;
  description: string;
};

// ServiceCard component with types
const ServiceCard = ({
  iconSrc,
  bgSrc,
  title,
  description,
}: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-32 h-32 mb-4">
        {/* Background circle image */}
        <Image src={bgSrc} alt="background" fill className="object-contain" />
        {/* Icon image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={iconSrc}
            alt={title}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

// Define service item type
type Service = {
  iconSrc: StaticImageData;
  bgSrc: StaticImageData;
  title: string;
  description: string;
};

// ServicesSection component
const ServicesSection = () => {
  const services: Service[] = [
    {
      iconSrc: Bread,
      bgSrc: FreeShip,
      title: "Always Fresh",
      description: "We care about what you eatant to produce food which nshes.",
    },
    {
      iconSrc: Broccoli,
      bgSrc: Mony,
      title: "100% Natural",
      description: "We care about what you eatant to produce food which nshes.",
    },
    {
      iconSrc: WaterMalon,
      bgSrc: Policy,
      title: "Best Quality",
      description: "We care about what you eatant to produce food which nshes.",
    },
    {
      iconSrc: Food,
      bgSrc: ContactU,
      title: "Food Safety",
      description: "We care about what you eatant to produce food which nshes.",
    },
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Background pattern image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={Back}
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-green-600 text-2xl font-medium mb-2">Services</h2>
          <h1 className="text-3xl md:text-4xl font-bold">
            Welcome To Organici
          </h1>
          <div className="flex justify-center mt-4">
            <Image src={SubTitle} alt="divider" width={60} height={160} />
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              iconSrc={service.iconSrc}
              bgSrc={service.bgSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Citrus Image */}
        <div className="mt-20 flex justify-center">
          <Image
            src={OrangeFee}
            alt="Organic Citrus Fruits"
            width={600}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
