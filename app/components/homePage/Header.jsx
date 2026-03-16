"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
     { href: "/about-us", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/brands", label: "Brands" },
    { href: "/packages", label: "Packages" },
    { href: "/offers", label: "Offers" },
    { href: "/blog", label: "Blogs" },
    { href: "/shop", label: "Shop" },
  ];

  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50  flex justify-center transition-all duration-500 ${
          scrolled ? 'pt-2' : ''
        }`}
      >
        <div 
          className={`w-full transition-all duration-500 ${
            scrolled 
              ? 'max-w-[95%] lg:max-w-[90%] rounded-2xl border border-gray-200/50 dark:border-gray-800/50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg' 
              : 'max-w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md'
          }`}
        >
          <div className="w-[90%] mx-auto max-w-7xl sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            
            {/* Logo with animation */}
            <Link 
              href="/" 
              className="relative group overflow-hidden"
            >
              <div className="flex uppercase items-center text-xl md:text-2xl font-bold">
                <span className="text-gray-900 dark:text-white">800</span>
                <span className="text-orange-500 dark:text-orange-500 relative">
                  motor
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                </span>
                <span className="text-gray-900 dark:text-white">guru</span>
              </div>
            </Link>

            {/* Desktop Navigation - No Dropdowns */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActiveLink(link.href)
                      ? "text-orange-500 bg-orange-500/10"
                      : "text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Language Switch */}
              <LanguageSwitcher />

              {/* Dark Mode Toggle */}
              <ThemeToggle />

              {/* Book Now Button with animation */}
              <button className="relative hidden md:block group overflow-hidden rounded-lg bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25">
                <span className="relative z-10">Book Now</span>
                <span className="absolute inset-0 -z-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>

              {/* Mobile Menu Button with animation */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden relative w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800/50 text-gray-900 dark:text-white transition-all duration-200 group"
                aria-label="Toggle menu"
              >
                <div className="absolute inset-0 rounded-full bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors duration-200"></div>
                {mobileMenuOpen ? (
                  <X size={20} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                ) : (
                  <Menu size={20} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${
          mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>

        {/* Menu Panel */}
        <div
          className={`
            absolute top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md
            bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800
            shadow-2xl transition-all duration-500 ease-out
            ${mobileMenuOpen 
              ? "opacity-100 translate-y-0 scale-100" 
              : "opacity-0 -translate-y-8 scale-95"
            }
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Decorative header */}
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Menu</h3>
          </div>

          {/* Navigation Links - No Dropdowns */}
          <nav className="flex flex-col py-2 px-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActiveLink(link.href)
                    ? "bg-orange-500/10 text-orange-500 font-medium"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Book Now Button */}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-orange-500/25">
                Book Now
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;