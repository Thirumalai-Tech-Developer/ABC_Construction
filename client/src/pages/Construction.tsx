import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { manpowerCategories } from "@/data/manpowerData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import skilled_work  from "@/images/workers.png"
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet";

export default function Construction() {
  return (
    <>
      <Helmet>
        <title>Building Construction Projects | ABC Contracting UAE</title>
        <meta
          name="description"
          content="ABC Building Contracting LLC specializes in high-quality residential and commercial building construction projects across UAE with expert engineering and project management."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://abccont.com/construction" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abccont.com/construction" />
        <meta property="og:title" content="Construction Projects | ABC Contracting UAE" />
        <meta property="og:description" content="Delivering reliable and high-quality construction solutions across UAE." />
        <meta property="og:image" content="https://abccont.com/og-image.jpg" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className="pt-24 pb-20"
      >
        <section className="relative py-20 bg-muted/30 mb-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <SectionTitle title="Building Construction" subtitle="Complete Construction Solutions" align="center" />
              <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
                We deliver high-quality residential, commercial, and industrial construction projects across the UAE. 
                From planning and foundation work to finishing and handover, we manage every stage with precision, safety, and professionalism.
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
                <h2 className="font-display font-bold text-3xl mb-6">
                  Why Choose Our Construction Services?
                </h2> 
                <div className="space-y-4">
                  {[
                    "End-to-end project management",
                    "Strict quality control & safety standards",
                    "Compliance with UAE construction regulations",
                    "On-time project delivery",
                    "Experienced engineers and supervisors"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                      <span className="text-lg text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <Button size="lg" className="mt-8 bg-white text-primary hover:bg-white/90 font-semibold">
                    Request a Construction Quote
                  </Button>
                </Link>
              </div>
              <div className="hidden lg:block">
                {/* Unsplash: Construction worker portrait */}
                <img 
                  src={skilled_work}
                  alt="Construction Project" 
                  className="rounded-xl shadow-2xl border-4 border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
