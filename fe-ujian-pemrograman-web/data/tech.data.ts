import { TTech } from "@/types/tech.type";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiNestjs,
  SiCloudinary,
  SiPrisma,
  SiMongodb,
  SiTailwindcss,
  SiShadcnui,
  SiLucide,
  SiReacthookform,
  SiReactquery,
  SiAxios,
  SiZod,
} from "react-icons/si";

export const backendTechData: TTech[] = [
  {
    name: "Typescript",
    icon: BiLogoTypescript,
  },
  {
    name: "NestJS",
    icon: SiNestjs,
  },
  {
    name: "Cloudinary",
    icon: SiCloudinary,
  },
  {
    name: "Prisma ORM",
    icon: SiPrisma,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
];

export const frontendTechData: TTech[] = [
  {
    name: "Typescript",
    icon: BiLogoTypescript,
  },
  {
    name: "NextJS",
    icon: RiNextjsFill,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "ShadCN UI",
    icon: SiShadcnui,
  },
  {
    name: "Lucide Icon",
    icon: SiLucide,
  },
  {
    name: "React Hook Form",
    icon: SiReacthookform,
  },
  {
    name: "React Query",
    icon: SiReactquery,
  },
  {
    name: "Axios",
    icon: SiAxios,
  },
  {
    name: "Zod",
    icon: SiZod,
  },
];
