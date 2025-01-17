import React from "react";
import Ripple from "../ui/ripple";

const HeroAboutUs = () => {
  return (
    <div className="relative flex sm:min-h-[71vh] min-h-[68vh] w-full flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center px-2 py-8">
          <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
            Discover the Heart of Our Mission and the People Behind It
          </h1>
          <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
            At Dream Station, we believe in the power of dreams. Our mission is
            to create a space where aspirations turn into action, and
            possibilities become realities. Join us in shaping a brighter
            future, one dream at a time.
          </p>
        </div>
      </div>
      <Ripple />
    </div>
  );
};

export default HeroAboutUs;
