"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type Props = {
  className?: string;
};

export function ModeToggle({ className }: Props) {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className={className}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ rotate: 0, scale: 0 }}
        animate={{
          rotate: theme === "dark" ? 0 : 90,
          scale: theme === "dark" ? 0 : 1,
          transition: { duration: 0.3 },
        }}
        exit={{ rotate: -90, scale: 0 }}
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </motion.div>
      <motion.div
        className="absolute flex items-center justify-center"
        initial={{ rotate: 90, scale: 0 }}
        animate={{
          rotate: theme === "dark" ? 0 : -90,
          scale: theme === "dark" ? 1 : 0,
          transition: { duration: 0.3 },
        }}
        exit={{ rotate: 90, scale: 0 }}
      >
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
