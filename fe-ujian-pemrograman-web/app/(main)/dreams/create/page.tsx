import DreamCreateForm from "@/components/dreams/create/DreamCreateForm";
import CTA from "@/components/main/cta";
import Footer from "@/components/main/footer";
import Navbar from "@/components/main/navbar";
import React from "react";

const CreateDreamPage = () => {
  return (
    <div>
      <Navbar />
      <DreamCreateForm />
      <CTA />
      <Footer />
    </div>
  );
};

export default CreateDreamPage;
