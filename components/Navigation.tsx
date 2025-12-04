"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/contexts/LocaleContext";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLocale = () => {
    const newLocale = locale === "bg" ? "en" : "bg";
    setLocale(newLocale);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/cleaning", label: t.nav.cleaning },
    { href: "/landscaping", label: t.nav.landscaping },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center h-10">
              <img
                src="/logo.jpg"
                alt="Pure Space"
                className="h-full w-auto object-contain"
              />
            </Link>
            <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-[#5682B1]"
                      : "text-[#000000] hover:text-[#5682B1]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              {/* Language Button - Desktop */}
              <button
                onClick={toggleLocale}
                className="hidden md:block px-4 py-2 text-sm font-medium text-[#5682B1] border border-[#5682B1] rounded-md hover:bg-[#739EC9] hover:text-white transition-colors"
              >
                {locale === "bg" ? "EN" : "BG"}
              </button>
              {/* Language Button - Mobile (next to hamburger) */}
              <button
                onClick={toggleLocale}
                className="md:hidden px-3 py-1.5 text-sm font-medium text-[#5682B1] border border-[#5682B1] rounded-md hover:bg-[#739EC9] hover:text-white transition-colors"
              >
                {locale === "bg" ? "EN" : "BG"}
              </button>
              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-[#5682B1] focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop/Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-16 px-4">
          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 p-2 text-[#5682B1] hover:bg-[#739EC9] hover:text-white rounded-md transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`text-lg font-medium py-2 px-4 rounded-md transition-colors ${
                  pathname === link.href
                    ? "text-white bg-[#5682B1]"
                    : "text-[#000000] hover:text-white hover:bg-[#5682B1]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
