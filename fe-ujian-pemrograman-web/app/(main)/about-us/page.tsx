import HeroAboutUs from "@/components/about-us/hero";
import History from "@/components/about-us/history";
import Team from "@/components/about-us/team";
import Tech from "@/components/about-us/tech";
import CTA from "@/components/main/cta";
import Footer from "@/components/main/footer";
import Navbar from "@/components/main/navbar";
import React from "react";

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <HeroAboutUs />
      <History />
      <Team />
      <Tech />
      <CTA />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
