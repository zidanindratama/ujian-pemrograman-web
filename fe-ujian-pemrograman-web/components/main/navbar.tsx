"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { navigationData } from "@/data/navigation.data";
import { ArrowRightIcon, Menu } from "lucide-react";
import React from "react";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <div className="sticky top-0 p-6 drop-shadow bg-white dark:bg-black z-50">
      <div className="flex flex-row justify-between items-center max-w-7xl mx-auto w-full text-[#050505] dark:text-white">
        <Link href={"/"} className="font-bold text-xl">
          Dream Station
        </Link>
        <div className="hidden md:flex flex-row gap-12 justify-between items-center">
          {navigationData.map((link) => {
            return (
              <Link
                href={link.href}
                key={link.id}
                className="font-semibold hover:text-muted-foreground"
              >
                {link.label}
              </Link>
            );
          })}
          <ModeToggle />
          <Button
            effect="expandIcon"
            icon={ArrowRightIcon}
            iconPlacement="right"
            asChild
          >
            <Link href={"/dreams/create"} className="font-bold">
              Join Us
            </Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent className="">
            <SheetHeader>
              <SheetTitle className="text-left">
                <ModeToggle />
              </SheetTitle>
              <div className="flex flex-col gap-4 text-left py-10">
                {navigationData.map((link) => {
                  return (
                    <Link
                      href={link.href}
                      key={link.id}
                      className="font-semibold hover:text-muted-foreground"
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Button
                  effect="expandIcon"
                  icon={ArrowRightIcon}
                  iconPlacement="right"
                  asChild
                >
                  <Link href={"/dreams"} className="font-bold">
                    Join Us
                  </Link>
                </Button>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
