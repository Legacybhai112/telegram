"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaPaperPlane } from "react-icons/fa";
import { useState, useEffect } from "react";

// Variants for page transition
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
};

// Variants for staggered children
const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// Variants for form fields and icons
const childVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const ContactForm = () => {
  const [isClient, setIsClient] = useState(false);
  const [messageLength, setMessageLength] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMessageChange = (e) => {
    setMessageLength(e.target.value.length);
  };

  if (!isClient) return null;

  return (
    <motion.form
      action="https://formspree.io/f/xqaproje"
      method="POST"
      className="space-y-5"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.div className="relative" variants={childVariants}>
          <Input
            id="name"
            placeholder=" "
            type="text"
            name="name"
            required
            className="peer bg-card/5 border-border/20 focus:ring-1 focus:ring-primary/40 focus:border-primary/60 transition-all duration-300 rounded-md py-5 px-3 text-sm shadow-sm placeholder-transparent"
          />
          <label
            htmlFor="name"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-foreground/60 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm"
          >
            Your Name
          </label>
        </motion.div>
        <motion.div className="relative" variants={childVariants}>
          <Input
            id="phone"
            placeholder=" "
            type="tel"
            name="phone"
            required
            className="peer bg-card/5 border-border/20 focus:ring-1 focus:ring-primary/40 focus:border-primary/60 transition-all duration-300 rounded-md py-5 px-3 text-sm shadow-sm placeholder-transparent"
          />
          <label
            htmlFor="phone"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-foreground/60 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm"
          >
            WhatsApp Number
          </label>
        </motion.div>
      </div>
      <motion.div className="relative" variants={childVariants}>
        <Input
          id="email"
          placeholder=" "
          type="email"
          name="email"
          required
          className="peer bg-card/5 border-border/20 focus:ring-1 focus:ring-primary/40 focus:border-primary/60 transition-all duration-300 rounded-md py-5 px-3 text-sm shadow-sm placeholder-transparent"
        />
        <label
          htmlFor="email"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-foreground/60 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm"
        >
          Your Email
        </label>
      </motion.div>
      <motion.div className="relative" variants={childVariants}>
        <Textarea
          id="message"
          placeholder=" "
          name="message"
          required
          rows={4}
          onChange={handleMessageChange}
          maxLength={500}
          className="peer bg-card/5 border-border/20 focus:ring-1 focus:ring-primary/40 focus:border-primary/60 transition-all duration-300 rounded-md py-3 px-3 text-sm shadow-sm resize-none placeholder-transparent"
        />
        <label
          htmlFor="message"
          className="absolute left-3 top-3 text-sm text-foreground/60 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:font-medium transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm"
        >
          Your Message
        </label>
        <div className="absolute bottom-1 right-2 text-xs text-foreground/40">
          {messageLength}/500
        </div>
      </motion.div>
      <input type="hidden" name="_redirect" value="https://codevaani.in/thank-you" />
      <motion.div
        variants={childVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold py-5 rounded-md transition-all duration-300 text-base shadow-md flex items-center justify-center"
        >
          <FaPaperPlane className="mr-2 h-5 w-5" />
          Send Message
        </Button>
      </motion.div>
    </motion.form>
  );
};

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(
      typeof window !== "undefined" &&
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
    );
  }, []);

  const getEmailLink = () => {
    const email = "codevaani.in@gmail.com";
    const subject = encodeURIComponent("Inquiry from Codevaani");
    const body = encodeURIComponent(
      "Hi Codevaani Team,\n\nI have a question about..."
    );
    return isMobile
      ? `mailto:${email}?subject=${subject}&body=${body}`
      : `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.section
        id="contact"
        className="py-12 sm:py-16 bg-gradient-to-b from-background to-background/95"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="container px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            className="text-center mb-10 sm:mb-12"
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              variants={childVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
            >
              Let’s Connect
            </motion.h2>
            <motion.p
              variants={childVariants}
              className="text-foreground/70 max-w-xl mx-auto text-sm sm:text-base"
            >
              Ready to start your project or have a question? We’re here to help.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div
              variants={childVariants}
              className="bg-card/10 backdrop-blur-lg p-6 sm:p-7 rounded-lg border border-border/20 shadow-lg"
            >
              <div className="flex items-center mb-5">
                <FaPaperPlane className="h-5 w-5 text-primary mr-2" />
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                  Send Us a Message
                </h3>
              </div>
              <p className="text-foreground/70 mb-6 text-sm">
                Drop us a message, and we’ll respond within 24 hours.
              </p>
              <ContactForm />
            </motion.div>

            <motion.div
              variants={childVariants}
              className="bg-card/10 backdrop-blur-lg p-6 sm:p-7 rounded-lg border border-border/20 shadow-lg"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-5 text-foreground">
                Connect With Us
              </h3>
              <motion.div
                className="space-y-5"
                variants={containerVariants}
                initial="initial"
                animate="animate"
              >
                <motion.div
                  className="flex items-start space-x-3"
                  variants={childVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="relative group bg-primary/5 p-2 rounded-full border border-primary/10"
                  >
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat with Codevaani on WhatsApp"
                    >
                      <FaWhatsapp className="h-5 w-5 text-[#25D366]" />
                    </a>
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block px-2 py-1 text-xs text-foreground bg-background/90 border border-border/40 rounded-md shadow-sm whitespace-nowrap">
                      Open WhatsApp
                    </span>
                  </motion.div>
                  <div>
                    <h4 className="font-medium mb-1 text-sm sm:text-base">WhatsApp Support</h4>
                    <p className="text-foreground/70 text-xs sm:text-sm">
                      Instant responses via WhatsApp
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-3"
                  variants={childVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="relative group bg-primary/5 p-2 rounded-full border border-primary/10"
                  >
                    <a
                      href={getEmailLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Compose an email to Codevaani"
                    >
                      <FiMail className="h-5 w-5 text-primary" />
                    </a>
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block px-2 py-1 text-xs text-foreground bg-background/90 border border-border/40 rounded-md shadow-sm whitespace-nowrap">
                      {isMobile ? "Open Email App" : "Open Gmail"}
                    </span>
                  </motion.div>
                  <div>
                    <h4 className="font-medium mb-1 text-sm sm:text-base">Email Us</h4>
                    <p className="text-foreground/70 text-xs sm:text-sm">
                      For detailed inquiries
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-3"
                  variants={childVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="relative group bg-primary/5 p-2 rounded-full border border-primary/10"
                  >
                    <a
                      href="https://www.instagram.com/codevaani.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Codevaani's Instagram profile"
                    >
                      <FaInstagram className="h-5 w-5 text-[#C13584]" />
                    </a>
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block px-2 py-1 text-xs text-foreground bg-background/90 border border-border/40 rounded-md shadow-sm whitespace-nowrap">
                      Open Instagram
                    </span>
                  </motion.div>
                  <div>
                    <h4 className="font-medium mb-1 text-sm sm:text-base">Instagram</h4>
                    <p className="text-foreground/70 text-xs sm:text-sm">
                      Follow us for updates
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="pt-5 mt-5 border-t border-border/30"
                  variants={childVariants}
                >
                  <h4 className="font-medium mb-3 text-sm sm:text-base">Our Process</h4>
                  <ol className="space-y-2 pl-5 list-decimal text-foreground/70 text-xs sm:text-sm">
                    <li>Share your requirements</li>
                    <li>Receive a quote in 24 hours</li>
                    <li>Approve the design mockup</li>
                    <li>We build your website (2-3 days)</li>
                    <li>Launch your new online presence</li>
                  </ol>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Contact;