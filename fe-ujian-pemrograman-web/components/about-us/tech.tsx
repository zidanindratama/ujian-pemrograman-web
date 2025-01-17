import { backendTechData, frontendTechData } from "@/data/tech.data";
import React from "react";

const Tech = () => {
  return (
    <div className="relative py-12 md:py-20">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold">Technologies Used</h1>
          <p className="text-muted-foreground max-w-[800px]">
            Our project utilizes a variety of advanced technologies to deliver
            seamless and efficient user experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:gap-10 mt-10">
          <div className="">
            <h1 className="md:text-lg font-semibold p-2 bg-black text-white dark:bg-white dark:text-black w-fit">
              Frontend
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-5">
              {frontendTechData.map((fe) => {
                return (
                  <div key={fe.name} className="flex flex-col items-center">
                    <fe.icon className="w-10 md:w-20 h-10 md:h-20" />
                    <h1 className="font-semibold mt-2">{fe.name}</h1>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            <h1 className="md:text-lg font-semibold p-2 bg-black text-white dark:bg-white dark:text-black w-fit">
              Backend
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-5">
              {backendTechData.map((be) => {
                return (
                  <div key={be.name} className="flex flex-col items-center">
                    <be.icon className="w-10 md:w-20 h-10 md:h-20" />
                    <h1 className="font-semibold mt-2">{be.name}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
