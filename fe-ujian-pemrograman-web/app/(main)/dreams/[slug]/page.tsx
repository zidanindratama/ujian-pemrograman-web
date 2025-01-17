import DreamUpdateForm from "@/components/dreams/update/DreamUpdateForm";
import CTA from "@/components/main/cta";
import Footer from "@/components/main/footer";
import Navbar from "@/components/main/navbar";
import React from "react";

type Param = {
  slug: string;
};

type Props = {
  params: Param;
};

const UpdateDreamPage = ({ params }: Props) => {
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
