import React from "react";
import ShinyButton from "../ui/shiny-button";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
      <div className="flex sm:min-h-[71vh] min-h-[68vh] flex-col items-center justify-center text-center px-2 py-8">
        <Link
          href={"https://github.com/zidanindratama/fe-ujian-pemrograman-web"}
          className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
        >
          Follow along on GitHub
          <ExternalLink className="w-5 h-5" />
        </Link>
        <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
          Share Your Dream, Shape Your Future
        </h1>
        <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
          Everyone has a dream worth pursuing—whether it&apos;s becoming a
          skilled programmer, starting a business, or exploring the world.
          Let&apos;s take the first step together. Share your aspirations, and
          let&apos;s bring them to life.
        </p>
        <div className="flex flex-row items-center gap-5">
          <Link href={"/dreams/create"}>
            <ShinyButton>Write it!</ShinyButton>
          </Link>
          <Button variant="link" effect="underline" asChild>
            <Link href={"/about-us"}>Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
