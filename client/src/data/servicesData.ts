import { HardHat, Ruler, Zap, Droplet, Hammer, PaintBucket } from "lucide-react";
import Construction from "@/images/building_construction.png"
import Civil from "@/images/civil.png"
export const services = [
  {
    id: "construction",
    title: "Building Construction",
    description: "Full-scale construction services for commercial, residential, and industrial projects with a focus on quality and safety.",
    icon: HardHat,
    image: Construction
  },
  {
    id: "civil",
    title: "Civil Engineering",
    description: "Expert civil engineering solutions including infrastructure development, roadworks, and structural analysis.",
    icon: Ruler,
    image: Civil
  },
  // {
  //   id: "electrical",
  //   title: "Electrical Works",
  //   description: "Comprehensive electrical installation, maintenance, and testing services for all types of buildings.",
  //   icon: Zap,
  //   image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop"
  // },
  // {
  //   id: "plumbing",
  //   title: "Plumbing & Sanitary",
  //   description: "Professional plumbing solutions including water supply systems, drainage, and sanitary installation.",
  //   icon: Droplet,
  //   image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=800&auto=format&fit=crop"
  // },
  {
    id: "renovation",
    title: "Renovation",
    description: "Transforming spaces with structural modifications, modernization, and aesthetic upgrades.",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
  },
  // {
  //   id: "fitout",
  //   title: "Interior Fit-Out",
  //   description: "Turnkey interior fit-out services creating functional and inspiring environments for offices and homes.",
  //   icon: PaintBucket,
  //   image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
  // }
];
