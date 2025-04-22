"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  FiLayout,
  FiGlobe,
  FiShoppingBag,
  FiImage,
  FiMapPin,
  FiServer,
  FiSettings
} from "react-icons/fi";

const services = [
  {
    id: 1,
    title: "1-Page Website",
    description: "A dynamic single-page website crafted to highlight your brand with a modern, intuitive interface.",
    features: [
      "Cross device compatibility",
      "Advanced SEO optimization",
      "Swift delivery within 2-3 days"
    ],
    icon: FiLayout
  },
  {
    id: 2,
    title: "Business Website",
    description: "A sophisticated multi-page site designed to amplify your brand with seamless functionality.",
    features: [
      "Universal device compatibility",
      "Enhanced search engine performance",
      "Deployed in just 3 days"
    ],
    icon: FiGlobe
  },
  {
    id: 3,
    title: "E-commerce Setup",
    description: "A powerful online store equipped with secure payments and streamlined product management.",
    features: [
      "Optimized for mobile shopping",
      "SEO-driven product visibility",
      "Ready in 2-3 days"
    ],
    icon: FiShoppingBag
  },
  {
    id: 4,
    title: "Logo Design",
    description: "A bespoke logo that embodies your brand’s vision, crafted for lasting impact.",
    features: [
      "Adaptable for all media formats",
      "Consistent with brand identity",
      "Completed in 2-3 days"
    ],
    icon: FiImage
  },
  {
    id: 5,
    title: "Google Map + WhatsApp Setup",
    description: "Strengthen your local reach with Google Maps and instant WhatsApp communication.",
    features: [
      "Precise location integration",
      "Real-time customer interaction",
      "Set up in 2-3 days"
    ],
    icon: FiMapPin
  },
  {
    id: 6,
    title: "Domain & Hosting Support",
    description: "Reliable domain and hosting solutions ensuring optimal performance and security.",
    features: [
      "Guaranteed high uptime",
      "Robust domain security",
      "Activated in 2-3 days"
    ],
    icon: FiServer
  },
  {
    id: 7,
    title: "Custom Sites & Admin Panels",
    description: "Tailored websites with intuitive admin panels for effortless management and growth.",
    features: [
      "Custom-designed interfaces",
      "Built for SEO excellence",
      "Delivered in 2-3 days"
    ],
    icon: FiSettings
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-foreground/70 max-w-3xl mx-auto text-lg"
          >
            Affordable, high-quality web solutions for Indian businesses of all sizes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border border-border h-full hover:border-primary/20 hover:shadow-lg transition-all">
                <div className="h-2 bg-gradient-to-r from-saffron via-peacockBlue to-deepPurple" />
                <CardHeader className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-card to-card/50 p-3 rounded-md border border-border">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="mt-4">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-foreground/50 mt-1">
                      <span className="inline-block h-2 w-2 rounded-full bg-primary mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;