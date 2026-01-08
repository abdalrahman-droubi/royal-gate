"use client";
import { useTranslations } from "next-intl";
import {
  Shield,
  Award,
  Users,
  TrendingUp,
  Phone,
  MapPin,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

const WhyChooseUs = () => {
  const t = useTranslations("WhyChooseUs");

  const features = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: t("feature1.title"),
      description: t("feature1.description"),
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: t("feature2.title"),
      description: t("feature2.description"),
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: t("feature3.title"),
      description: t("feature3.description"),
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: t("feature4.title"),
      description: t("feature4.description"),
    },
  ];

  const benefits = [
    t("benefit1"),
    t("benefit2"),
    t("benefit3"),
    t("benefit4"),
    t("benefit5"),
    t("benefit6"),
  ];

  return (
    <section className="spacing-y-main bg-gradient-to-b from-gray-50 to-white">
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="bg-[#286485] text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Benefits List */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              {t("benefitsTitle")}
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#286485] shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://media.istockphoto.com/id/2173317399/photo/midsection-of-businessman-and-customer-shaking-hands-over-table-in-office.jpg?s=612x612&w=0&k=20&c=lz_5ZFTs5fyU6RpO4mqU84dujDYTE2HFxR_ue0-8Fnw="
              alt="Dubai real estate"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#286485]/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h4 className="text-2xl font-bold mb-2">{t("imageTitle")}</h4>
              <p className="text-blue-100">{t("imageSubtitle")}</p>
            </div>
          </div>
        </div>

        {/* Call to Action Card */}
        <div className="bg-[#286485] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: CTA Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t("ctaTitle")}
              </h3>
              <p className="text-blue-100 text-lg mb-8">
                {t("ctaDescription")}
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+971504122447"
                  className="flex items-center gap-3 bg-white text-[#286485] px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full justify-center"
                >
                  <Phone className="w-5 h-5" />
                  <span>+971 50 412 2447</span>
                </a>

                <a
                  href="https://wa.me/971504122447"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors w-full justify-center"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>{t("whatsapp")}</span>
                </a>

                <a
                  href="#contact"
                  className="flex items-center gap-3 bg-transparent border-2 border-white text-white px-6 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#286485] transition-colors w-full justify-center"
                >
                  <MapPin className="w-5 h-5" />
                  <span>{t("visitOffice")}</span>
                </a>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="bg-[#1e4d5f] p-8 md:p-12 flex items-center">
              <div className="w-full">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="text-4xl font-bold text-white mb-2">
                      {t("stat1Value")}
                    </div>
                    <div className="text-blue-100 text-sm">
                      {t("stat1Label")}
                    </div>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="text-4xl font-bold text-white mb-2">
                      {t("stat2Value")}
                    </div>
                    <div className="text-blue-100 text-sm">
                      {t("stat2Label")}
                    </div>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="text-4xl font-bold text-white mb-2">
                      {t("stat3Value")}
                    </div>
                    <div className="text-blue-100 text-sm">
                      {t("stat3Label")}
                    </div>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="text-4xl font-bold text-white mb-2">
                      {t("stat4Value")}
                    </div>
                    <div className="text-blue-100 text-sm">
                      {t("stat4Label")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
