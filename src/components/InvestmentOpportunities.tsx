"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  TrendingUp,
  DollarSign,
  BarChart3,
  PiggyBank,
  Phone,
} from "lucide-react";

const InvestmentOpportunities = () => {
  const t = useTranslations("Investment");

  const opportunities = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t("opportunity1.title"),
      description: t("opportunity1.description"),
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: t("opportunity2.title"),
      description: t("opportunity2.description"),
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: t("opportunity3.title"),
      description: t("opportunity3.description"),
    },
    {
      icon: <PiggyBank className="w-8 h-8" />,
      title: t("opportunity4.title"),
      description: t("opportunity4.description"),
    },
  ];

  return (
    <section className="spacing-y-main relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
          alt="Investment background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#286485]/95 to-[#1e4d5f]/95" />
      </div>

      <div className="container-main relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-200 text-2xl font-medium mb-2">
            {t("subtitle")}
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h1>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
            >
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-[#286485]">
                {opportunity.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {opportunity.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {opportunity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">8%+</div>
            <div className="text-blue-200 text-sm">{t("stat1")}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">10+</div>
            <div className="text-blue-200 text-sm">{t("stat2")}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">ROI</div>
            <div className="text-blue-200 text-sm">{t("stat3")}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-blue-200 text-sm">{t("stat4")}</div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t("ctaTitle")}
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            {t("ctaDescription")}
          </p>
          <a
            href="tel:+971504122447"
            className="inline-flex items-center gap-2 bg-[#286485] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1e4d5f] transition-colors text-lg"
          >
            <Phone className="w-5 h-5" />
            {t("scheduleConsultation")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunities;
