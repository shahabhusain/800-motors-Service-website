import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ];

  const services = [
    { href: "/services/oil-change", label: "Oil Change" },
    { href: "/services/brake-repair", label: "Brake Repair" },
    { href: "/services/engine-diagnostic", label: "Engine Diagnostic" },
    { href: "/services/tire-service", label: "Tire Service" },
    { href: "/services/battery-service", label: "Battery Service" },
    { href: "/services/ac-service", label: "AC Service" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com", label: "Youtube" },
  ];

  return (
    <footer className="bg-white dark:bg-black text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-semibold tracking-wide inline-block">
              <span className="text-gray-900 dark:text-white">800</span>
              <span className="text-gray-900 dark:text-white">motor</span>
              <span className="text-orange-500 font-bold">guro</span>
              <span className="text-gray-900 dark:text-white">.</span>
            </Link>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Premium car services at your doorstep. Professional, reliable, and fast maintenance solutions for your vehicle.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full hover:bg-orange-500 hover:text-white dark:hover:bg-orange-600 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-600 dark:text-orange-500">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-600 dark:text-orange-500">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500 transition-colors duration-200 text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-600 dark:text-orange-500">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-600 dark:text-orange-500 shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  123 Auto Street, Car City, CC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-600 dark:text-orange-500 shrink-0" />
                <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500 text-sm transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-600 dark:text-orange-500 shrink-0" />
                <a href="mailto:info@800motorguro.com" className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500 text-sm transition-colors">
                  info@800motorguro.com
                </a>
              </li>
            </ul>

  
          </div>
        </div>

        {/* Bottom Bar */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} All rights reserved by 800MOTORGURU.
            </p>
             <p className="text-gray-500 text-sm flex items-center gap-6 text-center md:text-left">
               <span>Privacy Policy</span>
               <span>Terms & Conditions</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;