import DreamUpdateForm from "@/components/dreams/update/DreamUpdateForm";
import CTA from "@/components/main/cta";
import Footer from "@/components/main/footer";
import Navbar from "@/components/main/navbar";
import React from "react";

type Params = Promise<{ slug: string }>;

const UpdateDreamPage = async (props: { params: Params }) => {
  const params = await props.params;

  return (
    <div>
      <Navbar />
      <DreamUpdateForm slug={params.slug} />
      <CTA />
      <Footer />
    </div>
  );
};

export default UpdateDreamPage;
