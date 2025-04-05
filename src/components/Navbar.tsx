"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import logo from "@assets/Logo.svg";
import { useRouter, usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Globe, Menu, X } from "lucide-react";

const links = [
  { href: "home", label: "Home" },
  { href: "about", label: "About Us" },
  { href: "products", label: "Products" },
  { href: "contact", label: "Contact Us" },
  { href: "gallery", label: "Gallery" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState("0px");
  const menuRef = useRef<HTMLDivElement>(null);
  const translation = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(isMenuOpen ? `${menuRef.current.scrollHeight}px` : "0px");
    }
  }, [isMenuOpen]);

  const handleScroll = (sectionId: string) => {
    setIsMenuOpen(false);
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4 sm:px-6 py-4">
      <div className="bg-white rounded shadow-md px-6 py-10">
        <div className="relative flex items-center justify-center">
          {/* Logo - Left */}
          <div className="absolute left-0 py-2">
            <Image src={logo} alt="Logo" className="w-40 h-40 object-contain" />
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center space-x-8">
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <button
                    onClick={() => handleScroll(href)}
                    className="font-medium text-base text-gray-800 hover:text-gray-600 transition-colors"
                  >
                    {translation(label as any)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Language Selector - Right */}
          <div className="absolute right-0 hidden md:flex items-center gap-2 text-gray-800">
            {locale === "en" ? (
              <a href="/ar" className="hover:text-gray-600 transition-colors">
                <p>العربية</p>
              </a>
            ) : (
              <a href="/en" className="hover:text-gray-600 transition-colors">
                <p>English</p>
              </a>
            )}
            <Globe size={18} />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden absolute right-0 text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        style={{
          height: menuHeight,
          transition: "height 300ms ease, opacity 300ms ease",
          opacity: isMenuOpen ? 1 : 0,
          overflow: "hidden",
        }}
        className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden rounded-b-md"
      >
        <ul className="flex flex-col p-4">
          {links.map(({ href, label }) => (
            <li
              key={`mobile-${href}${label}`}
              className="py-2 border-b border-gray-100"
            >
              <button
                onClick={() => handleScroll(href)}
                className="font-medium text-base text-gray-800 block w-full text-left"
              >
                {translation(label as any)}
              </button>
            </li>
          ))}
          <li className="py-3 mt-1">
            <div className="flex items-center gap-2 text-gray-800">
              {locale === "en" ? (
                <a href="/ar" onClick={() => setIsMenuOpen(false)}>
                  <p>العربية</p>
                </a>
              ) : (
                <a href="/en" onClick={() => setIsMenuOpen(false)}>
                  <p>English</p>
                </a>
              )}
              <Globe size={18} />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
