import Header from "@/components/landing-page/header";
import Hero from "@/components/landing-page/hero";
import WhyChoose from "@/components/landing-page/why-choose";
import Services from "@/components/landing-page/services";
import Pricing from "@/components/landing-page/pricing";
import Testimonials from "@/components/landing-page/testimonials";
import Contact from "@/components/landing-page/contact";
import Footer from "@/components/landing-page/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyChoose />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}