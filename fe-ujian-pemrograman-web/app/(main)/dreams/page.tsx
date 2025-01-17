import Dream from "@/components/dreams/dream";
import HeroDreams from "@/components/dreams/hero-dreams";
import CTA from "@/components/main/cta";
import Footer from "@/components/main/footer";
import Navbar from "@/components/main/navbar";
import React from "react";

const DreamsPage = () => {
  return (
    <div>
      <Navbar />
      <HeroDreams />
      <Dream />
      <CTA />
      <Footer />
    </div>
  );
};

export default DreamsPage;
