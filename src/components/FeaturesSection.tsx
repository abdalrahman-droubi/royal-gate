import { Recycle, Home, Tag, Tags } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FeaturesSection() {
  const translation = useTranslations("FeaturesSection");

  const features = [
    {
      name: translation("productForm"),
      description: translation("organicFarm"),
      icon: Recycle,
    },
    {
      name: translation("freeHome"),
      description: translation("delivery"),
      icon: Home,
    },
    {
      name: translation("promotionsOf"),
      description: translation("theWeek"),
      icon: Tag,
    },
    {
      name: translation("discount"),
      description: translation("onAllVegetables"),
      icon: Tags,
    },
  ];
  return (
    <div className="flex  flex-col sm:flex-row justify-between gap-y-5 ">
      {features.map((feature, index) => (
        <div
          key={feature.name}
          className="flex items-center gap-x-4 w-fit"
          data-aos="fade-up"
          data-aos-duration={500 * index}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f7f6f2]">
            <feature.icon className="h-8 w-8 text-primary" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-[#535353]">
              {feature.name}
            </h3>
            <p className="mt-1 text-sm text-gray-400">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
