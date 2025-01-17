import Benefit from "@/components/main/benefit";
import CTA from "@/components/main/cta";
import Footer from "@/components/main/footer";
import Hero from "@/components/main/hero";
import Navbar from "@/components/main/navbar";
import Testimonials from "@/components/main/testimonials";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Benefit />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;
