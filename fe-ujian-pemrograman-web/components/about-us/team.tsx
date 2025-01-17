import React from "react";
import { DirectionAwareHoverTeam } from "../ui/direction-aware-hover-team";
import { teamData } from "@/data/team.data";
import Link from "next/link";

const Team = () => {
  return (
    <div className="relative py-12 md:py-20">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="flex flex-col text-center mx-auto gap-2">
          <h1 className="text-3xl font-extrabold">
            Meet the Visionaries Behind Dream Station
          </h1>
          <p className="text-muted-foreground max-w-[800px]">
            Our team is a group of passionate individuals driven by a shared
            commitment to help people achieve their dreams. Together, we bring
            expertise, creativity, and dedication to turn aspirations into
            impactful realities.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-around gap-10 mt-10">
          {teamData.map((team) => {
            return (
              <Link target="_blank" href={team.link} key={team.id}>
                <DirectionAwareHoverTeam imageUrl={team.photo}>
                  <p className="font-bold text-xl">{team.name}</p>
                  <p className="font-normal text-sm">{team.bio}</p>
                </DirectionAwareHoverTeam>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
