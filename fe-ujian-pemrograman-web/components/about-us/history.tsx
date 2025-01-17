import React from "react";
import { HeroVideoDialog } from "../ui/hero-video-dialog";

const History = () => {
  return (
    <div className="relative py-12 md:py-20">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold">
            Our Journey Through Dreams
          </h1>
          <p className="text-muted-foreground max-w-[800px]">
            Dream Station started as a simple idea: to build a space where
            dreams are shared and realized. Today, we empower individuals to
            turn aspirations into achievements.
          </p>
        </div>
        <div className="relative mt-10">
          <HeroVideoDialog
            className="dark:hidden block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/Td7JBUcyql8?si=3fLLw0mGH4dfq7N5"
            thumbnailSrc="histories/history-3.jpg"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/Td7JBUcyql8?si=3fLLw0mGH4dfq7N5"
            thumbnailSrc="histories/history-3.jpg"
            thumbnailAlt="Hero Video"
          />
        </div>
      </div>
    </div>
  );
};

export default History;
