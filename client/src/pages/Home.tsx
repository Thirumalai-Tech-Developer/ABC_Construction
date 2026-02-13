import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ManpowerPreview } from "@/components/sections/ManpowerPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-0" // pt-0 because Hero handles its own spacing/overlay
    >
      <Hero />
      <ServicesPreview />
      <ManpowerPreview />
      <WhyChooseUs />
      <CTASection />
    </motion.main>
  );
}
