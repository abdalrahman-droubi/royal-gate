"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";

const MarketInsights = () => {
  const t = useTranslations("Insights");

  const insights = [
    {
      image:
        "https://media.istockphoto.com/id/1497684257/photo/real-estate-agent-explain-house-plans-to-view-house-plans-and-sales-contracts-house-purchase.jpg?s=612x612&w=0&k=20&c=CUzac2HRc9FQW2at2fbDxVfYKRdNYvg6CcNl8D9IHAM=",
      date: t("insight1.date"),
      title: t("insight1.title"),
      excerpt: t("insight1.excerpt"),
      category: t("insight1.category"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
      date: t("insight2.date"),
      title: t("insight2.title"),
      excerpt: t("insight2.excerpt"),
      category: t("insight2.category"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1996",
      date: t("insight3.date"),
      title: t("insight3.title"),
      excerpt: t("insight3.excerpt"),
      category: t("insight3.category"),
    },
  ];

  return (
    <section className="spacing-y-main bg-gray-50">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#286485] text-2xl font-medium mb-2">
            {t("subtitle")}
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {t("title")}
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#286485] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {insight.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{insight.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {insight.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {insight.excerpt}
                </p>

                <a
                  href="tel:+971504122447"
                  className="inline-flex items-center gap-2 text-[#286485] font-semibold hover:gap-4 transition-all"
                >
                  {t("learnMore")}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;
