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

  // Dynamically update the height of the mobile menu for smooth transitions
  useEffect(() => {
    if (menuRef.current) {
      if (isMenuOpen) {
        setMenuHeight(`${menuRef.current.scrollHeight}px`);
      } else {
        setMenuHeight("0px");
      }
    }
  }, [isMenuOpen]);

  const handleScroll = (sectionId: string) => {
    // Close mobile menu if open
    setIsMenuOpen(false);

    // If we're not on the home page, navigate to home first
    if (pathname !== "/") {
      router.push("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }

    // If we're already on home page, just scroll
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="relative z-30">
      <div className="flex items-center justify-between">
        {/* Align the logo and the rest of the navbar content in a centered container */}
        <div className="container mx-auto flex items-center justify-between w-full pb-2">
          <div>
            <Image
              src={logo}
              alt="bayareq alkhadraa"
              className="w-[200px] h-[150px]"
            />
          </div>

          <ul className="hidden md:flex items-center gap-10">
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <button
                  onClick={() => handleScroll(href)}
                  className="font-medium text-xl cursor-pointer"
                >
                  {translation(label as any)}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            {locale === "en" ? (
              <a href="/ar">
                <p>العربية</p>
              </a>
            ) : (
              <a href="/en">
                <p>English</p>
              </a>
            )}
            <Globe size={20} />
          </div>

          {/* Toggle button for mobile menu */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu with transition */}
      <div
        ref={menuRef}
        style={{
          height: menuHeight,
          transition: "height 300ms ease, opacity 300ms ease",
          opacity: isMenuOpen ? 1 : 0,
          overflow: "hidden",
        }}
        className={`absolute top-full left-0 right-0 bg-white shadow-lg md:hidden`}
      >
        <ul className="flex flex-col p-4">
          {links.map(({ href, label }) => (
            <li key={`mobile-${href}${label}`} className="py-2">
              <button
                onClick={() => handleScroll(href)}
                className="font-medium text-lg block w-full text-left"
              >
                {translation(label as any)}
              </button>
            </li>
          ))}

          <li className="py-2 mt-2 border-t">
            <div className="flex items-center gap-2">
              {locale === "en" ? (
                <a href="/ar" onClick={() => setIsMenuOpen(false)}>
                  <p>العربية</p>
                </a>
              ) : (
                <a href="/en" onClick={() => setIsMenuOpen(false)}>
                  <p>English</p>
                </a>
              )}
              <Globe size={20} />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
