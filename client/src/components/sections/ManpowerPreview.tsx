import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { manpowerCategories } from "@/data/manpowerData";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function ManpowerPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionTitle 
              title="Workforce Solutions" 
              subtitle="Manpower Supply" 
              align="left"
              className="mb-8"
            />
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We understand that the backbone of any successful project is a skilled and reliable workforce. 
              ApexBuild provides top-tier manpower supply services, ensuring you have the right people for the job, exactly when you need them.
            </p>
            
            <ul className="space-y-4 mb-8">
              {["Strict Vetting Process", "Rapid Deployment", "Flexible Contracts", "Compliance with Labor Laws"].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium text-primary">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/manpower">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Manpower Services
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {manpowerCategories.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-muted/30 p-6 rounded-xl border border-border/50 hover:border-accent/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-white p-3 rounded-lg inline-block shadow-sm mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                  <cat.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{cat.title}</h3>
                <p className="text-sm text-muted-foreground">{cat.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
