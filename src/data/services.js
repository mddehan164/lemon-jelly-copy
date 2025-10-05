import {
  Award,
  MicVocal,
  PenTool,
  Target,
  TriangleRight,
  WandSparkles,
} from "lucide-react";

export const services = [
  {
    id: 1,
    title: "graphic design",
    description: "pixel-perfect creativity, brand-defining impact.",
    Icon: PenTool, // আপনি এখানে Icon class বা image name দিতে পারেন
  },
  {
    id: 2,
    title: "media design",
    description: "crafting compelling visuals that captivate and engage.",
    Icon: TriangleRight,
  },
  {
    id: 3,
    title: "brand design",
    description:
      "creating distinctive brand identities that resonate with your audience.",
    Icon: Award,
  },
  {
    id: 4,
    title: "motion magic",
    description:
      "transforming ideas into dynamic stories that move your audience.",
    Icon: WandSparkles,
  },
  {
    id: 5,
    title: "break through campaigns",
    description: "launching innovative campaigns that disrupt and inspire.",
    Icon: MicVocal,
  },
  {
    id: 6,
    title: "marketing service",
    description:
      "driving growth with strategic marketing that connects and converts.",
    Icon: Target,
  },
];
