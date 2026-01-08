import Image, { StaticImageData } from "next/image";
import SubTitle from "@assets/subTitle.svg";
import Back from "@assets/Background1.svg";
import { useTranslations } from "next-intl";
import { Home, Building2, Key, TrendingUp } from "lucide-react";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
};

const ServicesSection = () => {
  const t = useTranslations("Services");

  const services = [
    {
      icon: <Home className="w-12 h-12 text-[#286485]" />,
      title: t("services.0.title"),
      description: t("services.0.description"),
    },
    {
      icon: <Building2 className="w-12 h-12 text-[#286485]" />,
      title: t("services.1.title"),
      description: t("services.1.description"),
    },
    {
      icon: <Key className="w-12 h-12 text-[#286485]" />,
      title: t("services.2.title"),
      description: t("services.2.description"),
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-[#286485]" />,
      title: t("services.3.title"),
      description: t("services.3.description"),
    },
  ];

  return (
    <div className="relative ">
      <section className="relative ">
        {/* Content */}
        <div className="relative container-main pt-5">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-[#286485] text-2xl font-medium mb-2">
              {t("sectionSubtitle")}
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold">
              {t("sectionTitle")}
            </h1>
            <div className="flex justify-center mt-4">
              {/* <Image src={SubTitle} alt="divider" width={800} height={800} /> */}
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300">
      <div className="relative w-32 h-32 mb-4 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 group-hover:text-[#286485] transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default ServicesSection;
