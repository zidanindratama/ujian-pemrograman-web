"use client";

import React from "react";
import { HoverEffectBenefit } from "../ui/card-hover-effect-benefit";
import { benefitData } from "@/data/benefit.data";

const Benefit = () => {
  return (
    <div className="relative py-12 md:py-20">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold">Why Share Your Dream?</h1>
          <p className="text-muted-foreground max-w-[800px]">
            Sharing your dreams opens the door to endless possibilities.
            Discover the benefits of expressing your aspirations and turning
            them into reality.
          </p>
        </div>
        <HoverEffectBenefit benefits={benefitData} />
      </div>
    </div>
  );
};

export default Benefit;
