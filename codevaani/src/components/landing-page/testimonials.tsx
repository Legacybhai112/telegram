"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Neha Sharma",
    business: "Red Chilli Restaurant",
    content: "I needed a website for my new restaurant but was worried about the cost. CODEVAANI delivered a beautiful site for just ₹999 that actually brings in customers! The WhatsApp support was incredibly responsive.",
    stars: 5,
    initial: "NS"
  },
  {
    id: 2,
    name: "Rajesh Patel",
    business: "Patel Electronics",
    content: "Our old website was slow and outdated. The team at CODEVAANI redesigned it completely with a modern look and even set up our Google Business profile. Sales have increased by 30% since launching the new site!",
    stars: 5,
    initial: "RP"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Client Love
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-foreground/70 max-w-3xl mx-auto text-lg"
          >
            Don't just take our word for it. Here's what our clients have to say.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden border border-border hover:border-primary/20 transition-all">
                <CardContent className="p-8">
                  <div className="flex space-x-1 mb-4">
                    {/* Fix array index key issue by creating a unique key using testimonial id */}
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <FiStar
                        key={`${testimonial.id}-star-${i}`}
                        className="h-5 w-5 text-primary fill-primary"
                      />
                    ))}
                  </div>

                  <p className="mb-6 text-foreground/80 italic">"{testimonial.content}"</p>

                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20">
                        {testimonial.initial}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-foreground/60">{testimonial.business}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-foreground/70">
            Join 100+ happy businesses who trust CODEVAANI for their web presence
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
