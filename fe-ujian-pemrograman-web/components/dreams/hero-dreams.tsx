import React from "react";
import Ripple from "../ui/ripple";
import Link from "next/link";
import ShinyButton from "../ui/shiny-button";

const HeroDreams = () => {
  return (
    <div className="relative flex sm:min-h-[71vh] min-h-[68vh] w-full flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center px-2 py-8">
          <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
            Dreams Written Down
          </h1>
          <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
            Explore the dreams shared by people from all walks of life. Each
            story represents a journey toward achieving something meaningful,
            and we&apos;re here to help turn those dreams into reality.
          </p>
          <Link href={"/dreams/create"}>
            <ShinyButton>Write it!</ShinyButton>
          </Link>
        </div>
      </div>
      <Ripple />
    </div>
  );
};

export default HeroDreams;
