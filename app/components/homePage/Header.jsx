"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef({});
  const timeoutRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (label) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // 200ms delay before closing
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { 
      href: "/services", 
      label: "Services",
      columns: 4,
      dropdown: [
        { 
          category: "Powers", 
          items: [
            "Battery Replacement",
            "Jumpstart Service",
            "Battery Testing",
            "Alternator Repair"
          ]
        },
        { 
          category: "Tyre & Wheels", 
          items: [
            "Flat Tyre Change",
            "New Tyre Fitting",
            "Wheel Balancing",
            "Nitrogen Filling"
          ]
        },
        { 
          category: "Mechanic", 
          items: [
            "Oil Change",
            "Brake Service",
            "AC Repair",
            "Engine Diagnostics"
          ]
        },
        { 
          category: "Emergency", 
          items: [
            "Roadside Recovery",
            "Fuel Delivery",
            "Lockout Service",
            "Towing Service"
          ]
        }
      ]
    },
    { 
      href: "/brands", 
      label: "Brands",
      columns: 2,
      dropdown: [
        { category: "Luxury", items: ["BMW", "Mercedes", "Audi", "Lexus"] },
        { category: "Mainstream", items: ["Toyota", "Honda", "Ford", "Nissan"] },
        { category: "European", items: ["Volkswagen", "Peugeot", "Renault", "Fiat"] },
        { category: "Asian", items: ["Hyundai", "Kia", "Mazda", "Mitsubishi"] }
      ]
    },
    { 
      href: "/packages", 
      label: "Packages",
      columns: 2,
      dropdown: [
        { 
          category: "Maintenance", 
          items: [
            "Basic Service Package - $99",
            "Premium Care Package - $199",
            "Complete Check Package - $299",
            "Annual Maintenance Package - $499"
          ]
        },
        { 
          category: "Repair", 
          items: [
            "Brake Service Package",
            "AC Repair Package",
            "Engine Diagnostics",
            "Transmission Service"
          ]
        }
      ]
    },
    { 
      href: "/offers", 
      label: "Offers",
      columns: 2,
      dropdown: [
        {
          category: "Seasonal",
          items: [
            "Summer Special - 20% Off",
            "Winter Check - Free Inspection",
            "Spring Service - $50 Off",
            "Fall Maintenance - Tire Change Free"
          ]
        },
        {
          category: "Limited Time",
          items: [
            "New Customer - 15% Off",
            "Battery Replacement - $30 Off",
            "Wheel Alignment - Buy 2 Get 1 Free",
            "Oil Change - Special Price $29.99"
          ]
        }
      ]
    },
    { href: "/blog", label: "Blogs" },
    { href: "/shop", label: "Shop" },
  ];

  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  // Calculate dropdown width based on columns
  const getDropdownWidth = (link) => {
    if (!link.dropdown) return 'auto';
    
    // Base width per column (approximately 220px)
    const baseColumnWidth = 240;
    const columns = link.columns || 1;
    const calculatedWidth = columns * baseColumnWidth;
    
    return `${calculatedWidth}px`;
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
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

            {/* Desktop Navigation with Hover Dropdowns */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <div 
                  key={link.href} 
                  className="relative dropdown-container"
                  onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.dropdown ? (
                    <>
                      <Link
                         href={link.href}
                        ref={el => dropdownRefs.current[link.label] = el}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                          isActiveLink(link.href)
                            ? "text-orange-500 bg-orange-500/10"
                            : "text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                        }`}
                      >
                        {link.label}
                        <ChevronDown 
                          size={16} 
                          className={`ml-0.5 transition-all duration-300 ${
                            openDropdown === link.label ? 'rotate-180 translate-y-0.5' : ''
                          }`}
                        />
                      </Link>
                      
                      {/* Dropdown Menu with Dynamic Width */}
                      {openDropdown === link.label && (
                        <div 
                          className="absolute top-full left-0 mt-2 animate-in fade-in slide-in-from-top-2 duration-200"
                          style={{ width: getDropdownWidth(link) }}
                        >
                          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden">
                            {/* Dropdown Header */}
                            <div className="px-5 py-3 bg-gradient-to-r from-orange-500/5 to-transparent border-b border-gray-200 dark:border-gray-800">
                              <span className="text-xs font-medium text-orange-500 uppercase tracking-wider">
                                {link.label}
                              </span>
                            </div>
                            
                            {/* Dropdown Content */}
                            <div className={`p-5 grid gap-6`} 
                              style={{
                                gridTemplateColumns: `repeat(${link.columns || 1}, minmax(0, 1fr))`
                              }}
                            >
                              {link.dropdown.map((category, idx) => (
                                <div key={idx} className="space-y-2">
                                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                                    {category.category}
                                  </h3>
                                  <ul className="space-y-1">
                                    {category.items.map((item, itemIdx) => (
                                      <li key={itemIdx}>
                                        <Link
                                          href={`${link.href}/${item.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-')}`}
                                          className="group flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 hover:bg-orange-500/5 rounded-lg transition-all duration-200"
                                          onClick={() => setOpenDropdown(null)}
                                        >
                                          <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-orange-500 transition-colors"></span>
                                          <span>{item}</span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                            
                            {/* Dropdown Footer with CTA
                            <div className="px-5 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800">
                              <Link
                                href={link.href}
                                className="text-xs text-orange-500 hover:text-orange-600 font-medium flex items-center gap-1 group"
                                onClick={() => setOpenDropdown(null)}
                              >
                                View all {link.label.toLowerCase()}
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                              </Link>
                            </div> */}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActiveLink(link.href)
                          ? "text-orange-500 bg-orange-500/10"
                          : "text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              <LanguageSwitcher />
              <ThemeToggle />
              <button className="relative hidden md:block group overflow-hidden rounded-lg bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25">
                <span className="relative z-10">Book Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
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
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>

        <div
          className={`
            absolute top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md
            bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800
            shadow-2xl transition-all duration-500 ease-out max-h-[70vh] overflow-y-auto
            ${mobileMenuOpen 
              ? "opacity-100 translate-y-0 scale-100" 
              : "opacity-0 -translate-y-8 scale-95"
            }
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-900 z-10">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Menu</h3>
          </div>

          <nav className="flex flex-col py-2 px-2">
            {navLinks.map((link) => (
              <div key={link.href} className="w-full">
                {link.dropdown ? (
                  <div className="mb-2">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <span className="font-medium">{link.label}</span>
                      <ChevronDown 
                        size={18}
                        className={`text-gray-400 transition-transform duration-300 ${
                          openDropdown === link.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {openDropdown === link.label && (
                      <div className="pl-4 pr-2 pb-2 space-y-4 mt-2 animate-in slide-in-from-top-2 duration-200">
                        {link.dropdown.map((category, idx) => (
                          <div key={idx} className="space-y-1">
                            <h4 className="text-sm font-semibold text-orange-500 px-4">
                              {category.category}
                            </h4>
                            <div className="space-y-1">
                              {category.items.map((item, itemIdx) => (
                                <Link
                                  key={itemIdx}
                                  href={`${link.href}/${item.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-')}`}
                                  className="block px-8 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 hover:bg-orange-500/5 rounded-lg transition-colors"
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setOpenDropdown(null);
                                  }}
                                >
                                  {item}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl transition-all duration-200 ${
                      isActiveLink(link.href)
                        ? "bg-orange-500/10 text-orange-500 font-medium"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            
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