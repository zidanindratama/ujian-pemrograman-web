import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import InteractiveHoverButton from "../ui/interactive-hover-button";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="relative py-12 md:py-20">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-black min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Bring Your Vision to Life and Take the First Step Toward
                Achieving Your Dreams!
              </h2>
              <p className="my-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Join a community dedicated to turning dreams into reality. Start
                your journey today and see the difference it makes.
              </p>
              <Link href={"/dreams/create"}>
                <InteractiveHoverButton text="Write it!" />
              </Link>
            </div>
            <Image
              src="/cta.jpg"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-20 md:-right-[30%] lg:-right-[10%] -bottom-32 md:-bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
        </div>
      </div>
    </div>
  );
};

export default CTA;
