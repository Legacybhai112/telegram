"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FiCheck, FiX } from "react-icons/fi";
import Link from "next/link";

const pricingPlans = [
  {
    id: 1,
    name: "Basic Starter",
    price: "₹1399",
    description: "Perfect for small businesses or individuals just starting out",
    features: [
      { text: "1-page responsive website", included: true },
      { text: "Custom domain setup (domain cost extra)", included: true },
      { text: "Mobile friendly design", included: true },
      { text: "Basic SEO optimization", included: true },
      { text: "WhatsApp integration", included: true },
      { text: "Social media links", included: true },
      { text: "Multi-page website", included: false },
      { text: "Admin dashboard", included: false },
    ],
    popular: false,
    color: "from-amber-600/90 to-amber-400/70",
    hoverColor: "from-amber-600 to-amber-400/80",
    textColor: "text-white",
  },
  {
    id: 2,
    name: "Business Growth",
    price: "₹2999",
    description: "For established businesses looking to expand their online presence",
    features: [
      { text: "Up to 5-page responsive website", included: true },
      { text: "Custom domain setup (domain cost extra)", included: true },
      { text: "Mobile friendly design", included: true },
      { text: "Advanced SEO optimization", included: true },
      { text: "WhatsApp Business integration", included: true },
      { text: "Social media links & sharing", included: true },
      { text: "Contact form with email notifications", included: true },
      { text: "Google Business profile setup", included: true },
    ],
    popular: true,
    color: "from-gray-600/90 to-gray-400/70",
    hoverColor: "from-gray-600 to-gray-400/80",
    textColor: "text-white",
  },
  {
    id: 3,
    name: "E-commerce Complete",
    price: "₹6999",
    description: "Full online store solution to sell products or services",
    features: [
      { text: "Full e-commerce website", included: true },
      { text: "Product/service listings", included: true },
      { text: "Payment gateway integration", included: true },
      { text: "Inventory management", included: true },
      { text: "Order processing system", included: true },
      { text: "Admin dashboard", included: true },
      { text: "Customer accounts", included: true },
      { text: "Mobile-optimized shopping experience", included: true },
    ],
    popular: false,
    color: "from-yellow-600/90 to-yellow-400/70",
    hoverColor: "from-yellow-600 to-yellow-400/80",
    textColor: "text-white",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-accent/5">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Affordable Pricing Plans
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-foreground/70 max-w-3xl mx-auto text-lg"
          >
            Choose the perfect plan to get your business online.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Card
                className={`relative h-full overflow-hidden border transform transition-all duration-300
                ${plan.popular ? 'border-gray-400 shadow-lg shadow-gray-400/20' : 'border-border'}
                hover:shadow-xl hover:border-gray-300/50 group`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                />

                {plan.popular && (
                  <div className="absolute -top-0 left-0 right-0 mx-auto w-max px-4 py-1 rounded-full text-xs font-medium bg-gray-500 text-white">
                    Most Popular
                  </div>
                )}

                <CardHeader className="pb-0 relative z-10">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-2 mb-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-foreground/60 ml-1">/one-time</span>
                  </div>
                  <CardDescription className="text-foreground/70">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-4 pb-6 flex flex-col flex-grow relative z-10 px-6">
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={`${plan.id}-feature-${i}`} className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-200">
                        {feature.included ? (
                          <FiCheck className="h-5 w-5 text-green-500 shrink-0" />
                        ) : (
                          <FiX className="h-5 w-5 text-red-500/50 shrink-0" />
                        )}
                        <span className={feature.included ? "text-foreground/90" : "text-foreground/50"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href="#contact" className="relative overflow-hidden group/button rounded-md">
                    <div className={`absolute inset-0 bg-gradient-to-r ${plan.hoverColor} transform translate-y-full group-hover/button:translate-y-0 transition-transform duration-300`} />
                    <Button
                      className={`w-full relative z-10 bg-gradient-to-r ${plan.color} ${plan.textColor} border border-transparent
                      hover:border-white/30 transition-all duration-300 group-hover/button:scale-[1.02] overflow-hidden font-semibold py-6`}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Get Started
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-2 transform translate-x-0 group-hover/button:translate-x-1 transition-transform duration-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </Button>
                  </Link>
                </CardContent>

                {plan.popular && (
                  <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gray-400/10 rounded-tl-full" />
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/70 mb-4 text-lg">
            Need a tailored solution? Let's create something unique for your business!
          </p>
          <Link href="#contact">
            <Button
              variant="outline"
              className="border-gray-400 bg-white text-black hover:bg-gray-100 hover:border-gray-500 hover:text-black 
              transition-all duration-300 group relative overflow-hidden px-8 py-3 text-lg font-semibold shadow-md 
              hover:shadow-lg hover:shadow-gray-400/40"
            >
              <span className="relative z-10 flex items-center">
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;