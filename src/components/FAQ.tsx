"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

const FAQ = () => {
  const t = useTranslations("FAQ");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: t("faq1.question"),
      answer: t("faq1.answer"),
    },
    {
      question: t("faq2.question"),
      answer: t("faq2.answer"),
    },
    {
      question: t("faq3.question"),
      answer: t("faq3.answer"),
    },
    {
      question: t("faq4.question"),
      answer: t("faq4.answer"),
    },
    {
      question: t("faq5.question"),
      answer: t("faq5.answer"),
    },
    {
      question: t("faq6.question"),
      answer: t("faq6.answer"),
    },
  ];

  return (
    <section className="spacing-y-main bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973"
              alt="Dubai real estate"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#286485]/90 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-3xl font-bold mb-4">{t("imageTitle")}</h3>
              <p className="text-blue-100 text-lg">{t("imageDescription")}</p>
            </div>
          </div>

          {/* Right: FAQs */}
          <div>
            <div className="mb-8">
              <h2 className="text-[#286485] text-2xl font-medium mb-2">
                {t("subtitle")}
              </h2>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {t("title")}
              </h1>
              <p className="text-gray-600 text-lg">{t("description")}</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-[#286485] shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#286485] shrink-0" />
                    )}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-[#286485] rounded-xl text-white">
              <p className="mb-4">{t("contactPrompt")}</p>
              <a
                href="tel:+971504122447"
                className="inline-block bg-white text-[#286485] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t("contactButton")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
