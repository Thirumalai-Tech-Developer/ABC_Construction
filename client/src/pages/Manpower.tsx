import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { manpowerCategories } from "@/data/manpowerData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";

export default function Manpower() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="pt-24 pb-20"
    >
      <section className="relative py-20 bg-muted/30 mb-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <SectionTitle title="Manpower Supply" subtitle="Workforce Solutions" align="center" />
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Connecting projects with skilled professionals. We ensure you have the right talent to get the job done efficiently.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {manpowerCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all border-t-4 border-t-primary group">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                    <cat.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="font-display text-xl">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{cat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Why Our Workforce */}
        <div className="bg-primary text-white rounded-3xl p-8 md:p-16 relative overflow-hidden mb-24">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl mb-6">Why Choose Our Workforce?</h2>
              <div className="space-y-4">
                {[
                  "Strict recruitment and vetting process",
                  "Compliance with UAE Labor Laws",
                  "Medical insurance and visa processing",
                  "Transportation and accommodation handling",
                  "Regular training and safety workshops"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-lg text-white/90">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <Button size="lg" className="mt-8 bg-white text-primary hover:bg-white/90 font-semibold">
                  Request Manpower
                </Button>
              </Link>
            </div>
            <div className="hidden lg:block">
              {/* Unsplash: Construction worker portrait */}
              <img 
                src="https://images.unsplash.com/photo-1535732820275-9e99d47a18b9?q=80&w=1000&auto=format&fit=crop" 
                alt="Skilled Worker" 
                className="rounded-xl shadow-2xl border-4 border-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
