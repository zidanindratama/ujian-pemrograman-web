import { navigationData } from "@/data/navigation.data";
import { socialData } from "@/data/social.data";
import { teamData } from "@/data/team.data";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="relative py-12 md:py-20 bg-black dark:bg-inherit border-t text-white mt-20">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col md:col-span-2 gap-3">
            <Link href={"/"} className="font-bold text-xl">
              Dream Station
            </Link>
            <p className="md:max-w-sm text-justify">
              Dream Station is a platform where aspirations come alive. Share
              your dreams, connect with like-minded individuals, and take steps
              to turn your goals into reality.
            </p>
            <div className="flex flex-row gap-4">
              {socialData.map((social) => {
                return (
                  <Link href={social.href} target="_blank" key={social.id}>
                    <social.icon className="w-6 h-6 hover:text-muted-foreground" />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="md:text-lg">Navigations</h1>
            <div className="flex flex-col gap-2">
              {navigationData.map((link) => {
                return (
                  <Link
                    href={link.href}
                    key={link.id}
                    className="text-sm md:text-base hover:text-muted-foreground"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="md:text-lg">Teams</h1>
            <div className="flex flex-col gap-2">
              {teamData.map((team) => {
                return (
                  <Link
                    target="_blank"
                    href={team.link}
                    key={team.id}
                    className="text-sm md:text-base hover:text-muted-foreground"
                  >
                    {team.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
