import { TBenefit } from "@/types/benefit.type";
import { FaLightbulb, FaUsers, FaRocket, FaChartLine } from "react-icons/fa";

export const benefitData: TBenefit[] = [
  {
    id: "1",
    icon: FaLightbulb,
    title: "Unlock New Perspectives",
    description:
      "Sharing your dreams can spark fresh ideas and innovative solutions that you may have never considered before.",
  },
  {
    id: "2",
    icon: FaUsers,
    title: "Connect with Like-Minded People",
    description:
      "Build meaningful relationships with individuals who share your aspirations and are eager to support your journey.",
  },
  {
    id: "3",
    icon: FaRocket,
    title: "Take the First Step Forward",
    description:
      "Expressing your dreams is the first step toward turning them into actionable plans and achieving your goals.",
  },
  {
    id: "4",
    icon: FaChartLine,
    title: "Track Your Progress",
    description:
      "Documenting your dreams helps you measure your growth and stay motivated as you move closer to your aspirations.",
  },
];
