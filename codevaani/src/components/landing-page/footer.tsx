"use client";

import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-saffron via-peacockBlue to-deepPurple bg-clip-text text-transparent">
                CODEVAANI
              </h3>
            </Link>
            <p className="text-foreground/70 mb-6 md:max-w-sm">
              Affordable web solutions for Indian businesses. AI-powered websites, fast delivery, and exceptional quality.
            </p>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://instagram.com/codevaani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card border border-border rounded-full hover:border-primary/20 hover:bg-accent/5 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5 text-foreground/70" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card border border-border rounded-full hover:border-primary/20 hover:bg-accent/5 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5 text-foreground/70" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                {/* <Link href="#about" className="text-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link> */}
              </li>
              <li>
                <Link href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-foreground/70 hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                  1-Page Website
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                  Business Website
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                  E-commerce Setup
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                  Logo Design
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} CODEVAANI. All rights reserved.
          </p>
          <div className="flex items-center">
            <p className="text-foreground/60 text-sm">
              Made in <span className="mx-1">🇮🇳</span> with ❤️ by Team CODEVAANI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
