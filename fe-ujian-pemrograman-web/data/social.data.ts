import { TSocial } from "@/types/social.type";
import { SiNestjs, SiNextdotjs } from "react-icons/si";

export const socialData: TSocial[] = [
  {
    id: "1",
    icon: SiNextdotjs,
    label: "Repo GitHub Frontend",
    href: "https://github.com/zidanindratama/ujian-pemrograman-web/tree/main/fe-ujian-pemrograman-web",
  },
  {
    id: "2",
    icon: SiNestjs,
    label: "Repo GitHub Backend",
    href: "https://github.com/zidanindratama/ujian-pemrograman-web/tree/main/be-ujian-pemrograman-web",
  },
];
