import { useTranslations } from "next-intl";
import { Apple, Carrot, Grape, Leaf } from "lucide-react";

export default function NutrioProgramme() {
  const t = useTranslations("Organic");

  return (
    <section className="bg-primary py-16 relative">
      {/* Leaf decoration */}
      <div className="absolute top-0 right-1/3 opacity-20">
        <svg
          width="150"
          height="150"
          viewBox="0 0 150 150"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M75 15C50 40 15 50 15 75C15 100 50 110 75 135C100 110 135 100 135 75C135 50 100 40 75 15Z" />
        </svg>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">{t("Title")}</h2>
        <p className="text-blue-100 text-sm">{t("Subtitle")}</p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Left column */}
          <div className="space-y-16">
            {/* Item 1 */}
            <div className="flex flex-row-reverse items-start pr-12 md:pr-16 gap-4 text-right">
              <div className="bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center shrink-0">
                <Apple className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t("Items.FruitTitle")}
                </h3>
                <p className="text-blue-100 text-sm">{t("Items.FruitDesc")}</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-row-reverse items-start pr-12 md:pr-16 gap-4 text-right">
              <div className="bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center shrink-0">
                <Grape className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t("Items.GrapeTitle")}
                </h3>
                <p className="text-blue-100 text-sm">{t("Items.GrapeDesc")}</p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-16">
            {/* Item 2 */}
            <div className="flex items-start pl-12 md:pl-16 gap-4 text-left">
              <div className="bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center shrink-0">
                <Carrot className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t("Items.CarrotTitle")}
                </h3>
                <p className="text-blue-100 text-sm">{t("Items.CarrotDesc")}</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start pl-12 md:pl-16 gap-4 text-left">
              <div className="bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center shrink-0">
                <Leaf className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t("Items.LeafTitle")}
                </h3>
                <p className="text-blue-100 text-sm">{t("Items.LeafDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
