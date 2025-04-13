import Image, { StaticImageData } from "next/image";
import SubTitle from "@assets/subTitle.svg";
import Back from "@assets/Background1.svg";
import { useTranslations } from "next-intl";
import FreeShip from "@assets/free shipping.svg";
import Bread from "@assets/Bread.svg";
import Mony from "@assets/money back.svg";
import Broccoli from "@assets/broccoli.svg";
import Policy from "@assets/return policy.svg";
import WaterMalon from "@assets/watermelon55.svg";
import ContactU from "@assets/contact us.svg";
import Food from "@assets/Food.svg";

type ServiceCardProps = {
  iconSrc: StaticImageData;
  bgSrc: StaticImageData;
  title: string;
  description: string;
};
type Service = {
  iconSrc: StaticImageData;
  bgSrc: StaticImageData;
  title: string;
  description: string;
};

const ServicesSection = () => {
  const t = useTranslations("Services");

  const services: Service[] = [
    {
      iconSrc: Bread,
      bgSrc: FreeShip,
      title: t("services.0.title"),
      description: t("services.0.description"),
    },
    {
      iconSrc: Broccoli,
      bgSrc: Mony,
      title: t("services.1.title"),
      description: t("services.1.description"),
    },
    {
      iconSrc: WaterMalon,
      bgSrc: Policy,
      title: t("services.2.title"),
      description: t("services.2.description"),
    },
    {
      iconSrc: Food,
      bgSrc: ContactU,
      title: t("services.3.title"),
      description: t("services.3.description"),
    },
  ];

  return (
    <section className="relative h-screen  overflow-hidden">
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
      <div className="relative container-main spacing-y-main">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-[#286485] text-2xl font-medium mb-2">
            {t("sectionSubtitle")}
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold">
            {t("sectionTitle")}
          </h1>
          <div className="flex justify-center mt-4">
            <Image src={SubTitle} alt="divider" width={800} height={800} />
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
      </div>
    </section>
  );
};
const ServiceCard = ({
  iconSrc,
  bgSrc,
  title,
  description,
}: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-32 h-32 mb-4">
        <Image src={bgSrc} alt="background" fill className="object-contain" />
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

export default ServicesSection;
