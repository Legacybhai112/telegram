"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiZap, FiClock, FiCpu, FiMessageCircle, FiDollarSign } from "react-icons/fi";

const features = [
  {
    id: 1,
    title: "Desi Vibe + Tech Power",
    description: "Blending Indian cultural elements with cutting-edge technology for authentic digital experiences.",
    icon: FiZap,
    delay: 0
  },
  {
    id: 2,
    title: "Fast Delivery",
    description: "Quick turnaround time to get your business online faster than traditional agencies.",
    icon: FiClock,
    delay: 0.1
  },
  {
    id: 3,
    title: "AI-enhanced designs",
    description: "Leveraging AI to create modern, unique designs tailored to Indian audiences.",
    icon: FiCpu,
    delay: 0.2
  },
  {
    id: 4,
    title: "WhatsApp Support",
    description: "Direct communication via WhatsApp for quick responses and updates.",
    icon: FiMessageCircle,
    delay: 0.3
  },
  {
    id: 5,
    title: "Affordable Packages",
    description: "Budget-friendly packages designed specifically for Indian business needs.",
    icon: FiDollarSign,
    delay: 0.4
  }
];

const WhyChoose = () => {
  return (
    <section id="why-choose" className="py-20 bg-accent/5">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Choose CODEVAANI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-foreground/70 max-w-3xl mx-auto text-lg"
          >
            What makes us different from other web development agencies in India
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/20 hover:shadow-lg transition-all"
            >
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-br from-primary/10 to-deepPurple/5 border border-primary/20 rounded-lg p-8 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-4">Indian Solutions for Indian Businesses</h3>
          <p className="text-lg mb-6 text-foreground/80">
            We understand the unique needs of Indian businesses and create solutions that resonate with local customers.
          </p>
          <div className="inline-flex items-center gap-2 text-sm bg-card/90 px-4 py-2 rounded-full">
            <span className="text-primary font-semibold">🇮🇳</span>
            <span>Proudly Indian</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
