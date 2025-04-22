"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-60 h-60 rounded-full bg-saffron blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 w-60 h-60 rounded-full bg-peacockBlue blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-deepPurple blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-5xl md:text-7xl font-bold bg-gradient-to-r from-saffron via-peacockBlue to-deepPurple bg-clip-text text-transparent"
          >
            CODEVAANI
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 text-xl md:text-2xl font-medium text-foreground/90"
          >
            Tech ki Zubaan, CODEVAANI ke Naam
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 text-lg text-foreground/70 max-w-2xl"
          >
            Empowering Indian businesses with affordable, AI-powered web solutions.
            Get your business online with clean, fast, and responsive websites.
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="#contact">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
              >
                Get Your Website Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto fill-accent/10"
        >
          <path d="M0,96L60,90.7C120,85,240,75,360,69.3C480,64,600,64,720,69.3C840,75,960,85,1080,80C1200,75,1320,53,1380,42.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
