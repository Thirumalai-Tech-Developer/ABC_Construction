import { Users, Wrench, HardHat, Truck } from "lucide-react";

export const manpowerCategories = [
  {
    id: "skilled",
    title: "Skilled Labor",
    description: "Certified electricians, plumbers, carpenters, and masons ready for deployment.",
    icon: Wrench
  },
  {
    id: "general",
    title: "General Helpers",
    description: "Hardworking general assistants for construction sites and facility management.",
    icon: Users
  },
  {
    id: "technical",
    title: "Technical Staff",
    description: "Site engineers, supervisors, and safety officers to manage operations.",
    icon: HardHat
  },
  {
    id: "operators",
    title: "Machine Operators",
    description: "Experienced heavy machinery operators for cranes, loaders, and excavators.",
    icon: Truck
  }
];
