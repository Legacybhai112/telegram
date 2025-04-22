"use client";

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex justify-between items-center h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-saffron via-peacockBlue to-deepPurple bg-clip-text text-transparent">
              CODEVAANI
            </h1>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* <Link href="#about" className="text-foreground/80 hover:text-primary transition-colors">
            About
          </Link> */}
          <Link href="#services" className="text-foreground/80 hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Link href="#contact">
            <Button className="bg-primary text-black hover:bg-primary/90 hover:scale-105 hover:shadow-lg transition-all duration-200">
              Contact Us
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border">
          <nav className="container flex flex-col py-4 space-y-4">
            <Link
              href="#about"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="#pricing"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              onClick={toggleMenu}
            >
              <Button className="w-full bg-primary text-black hover:bg-primary/90 hover:scale-105 hover:shadow-lg transition-all duration-200">
                Contact Us
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;