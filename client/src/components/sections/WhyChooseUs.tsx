import { SectionTitle } from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Award, Users } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "Strict adherence to international safety standards and protocols on every site."
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Commitment to project timelines without compromising on quality or precision."
  },
  {
    icon: Award,
    title: "Quality Assurance",
    desc: "Premium materials and expert craftsmanship guaranteeing lasting results."
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "A dedicated workforce of qualified engineers, supervisors, and skilled labor."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="Why Choose ApexBuild" 
          subtitle="Our Commitment" 
          align="center"
          dark
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              <div className="bg-accent/20 p-4 rounded-full inline-flex mb-6 text-accent">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
