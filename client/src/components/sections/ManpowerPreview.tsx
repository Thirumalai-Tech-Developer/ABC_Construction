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
              title="Building Construction & Skilled Workforce in Dubai"
              subtitle="End-to-End Construction & Contracting Solutions Across UAE"
              align="left"
              className="mb-8"
            />

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <strong>ALSAHRAA ALSAMITAH BUILDING CONTRACTING LLC</strong> is a
              trusted construction company in Dubai, UAE delivering complete
              building construction, civil engineering, and manpower solutions.
              From foundation to finishing, we execute residential, commercial,
              and industrial projects with precision, safety, and efficiency.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our experienced engineers, supervisors, and certified workforce
              ensure every construction project meets UAE regulatory standards,
              quality benchmarks, and strict timelines. Whether it’s structural
              works, renovation, or full-scale contracting, we provide reliable
              execution backed by technical expertise.
            </p>

            <h3 className="font-display font-bold text-xl mb-4">
              Our Core Construction Capabilities
            </h3>

            <ul className="space-y-4 mb-8">
              {[
                "Complete Residential & Commercial Building Construction",
                "Civil, Structural & Infrastructure Works",
                "Certified & Skilled Construction Workforce",
                "Project Planning, Supervision & On-Time Delivery",
                "Renovation & Interior Fit-Out Solutions"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium text-primary">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground mb-8">
              As one of the emerging building contracting companies in Dubai,
              we focus on delivering cost-effective, high-quality construction
              services tailored to each client’s vision. Our integrated approach
              ensures seamless coordination between manpower, materials, and
              project management.
            </p>

            <Link href="/construction">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Our Construction & Contracting Services
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

                <h3 className="font-display font-bold text-lg mb-2">
                  {cat.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {cat.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
