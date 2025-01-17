import { generateSlug } from "@/helpers/helper";
import { TDream } from "@/types/dream.type";

export const dreamData: TDream[] = [
  {
    id: "1",
    username: "zidanindratama",
    image: "/dreams/dream-1.jpg",
    title: "Own a Luxurious Ferrari Sports Car",
    description:
      "Experience the thrill of speed and style by owning a Ferrari, the epitome of luxury and performance in the world of sports cars.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    slug: generateSlug("Own a Luxurious Ferrari Sports Car"),
  },
  {
    id: "2",
    username: "zidanindratama",
    image: "/dreams/dream-2.jpg",
    title: "Ride a Classic Harley Davidson",
    description:
      "Fulfill your dream of freedom on the road with a Harley Davidson motorcycle, a true icon of power and elegance.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    slug: generateSlug("Ride a Classic Harley Davidson"),
  },
  {
    id: "3",
    username: "zidanindratama",
    image: "/dreams/dream-3.jpg",
    title: "Live in a Dream Home",
    description:
      "Build a cozy and beautiful dream home where you can create lifelong memories with your loved ones in comfort and serenity.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    slug: generateSlug("Live in a Dream Home"),
  },
];
