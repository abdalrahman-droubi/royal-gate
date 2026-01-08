import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { Building2, Target, Users, Award } from "lucide-react";

export default function OurMission() {
  const t = useTranslations("Mission");
  const locale = useLocale();
  const isArabic = locale === "ar";
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    {
      id: "about",
      label: t("about"),
      content: t.raw("aboutContent"),
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      id: "mission",
      label: t("mission"),
      content: t.raw("missionContent"),
      icon: <Target className="w-6 h-6" />,
    },
    {
      id: "values",
      label: t("values"),
      content: t.raw("valuesContent"),
      icon: <Award className="w-6 h-6" />,
    },
  ];

  return (
    <div className="w-full py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center border-b border-gray-200 mb-8">
          <nav className="flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex items-center gap-2 pb-4 px-2 text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "border-b-2 border-[#286485] text-[#286485]"
                    : "text-gray-500 hover:text-gray-800"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {tabs
              .find((tab) => tab.id === activeTab)
              ?.content.split("\n")
              .filter((p: string) => p.trim().length > 0)
              .map((paragraph: string, i: number) => (
                <p key={i} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div className="bg-[#286485] text-white rounded-xl p-6 text-center">
            <div className="text-4xl font-bold mb-2">5+</div>
            <div className="text-sm">{t("yearsExperience")}</div>
          </div>
          <div className="bg-[#286485] text-white rounded-xl p-6 text-center">
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-sm">{t("happyClients")}</div>
          </div>
          <div className="bg-[#286485] text-white rounded-xl p-6 text-center">
            <div className="text-4xl font-bold mb-2">1000+</div>
            <div className="text-sm">{t("propertiesListed")}</div>
          </div>
          <div className="bg-[#286485] text-white rounded-xl p-6 text-center">
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-sm">{t("satisfaction")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
