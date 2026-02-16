import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { services } from "@/data/servicesData";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Construction Services | ABC Building Contracting LLC UAE</title>
        <meta
          name="description"
          content="Explore our construction services including residential building, commercial projects, civil engineering, manpower supply, and contracting solutions across UAE."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://abccont.com/services" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abccont.com/services" />
        <meta property="og:title" content="Our Construction Services | ABC Contracting" />
        <meta property="og:description" content="Complete building and civil engineering services delivered with precision and safety in UAE." />
        <meta property="og:image" content="https://abccont.com/og-image.jpg" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className="pt-24 pb-20"
      >
        <section className="bg-primary text-white py-20 mb-20">
          <div className="container mx-auto px-4 text-center">
            <SectionTitle title="Our Services" subtitle="Comprehensive Solutions" align="center" dark />
            <p className="max-w-2xl mx-auto text-white/80 text-lg">
              We offer a wide range of specialized services to meet the diverse needs of the construction industry.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <h3 className="text-3xl font-display font-bold text-primary">{service.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-4">
                    <h4 className="font-bold text-primary">What we offer:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {(service.title === "Building Construction"
                        ? [
                            "Project Planning & Management",
                            "Structural & Architectural Execution",
                            "Quality Control & Safety Compliance",
                            "On-Time & Budget Delivery",
                          ]
                        : service.title === "Civil Engineering"
                        ? [
                            "Infrastructure Development",
                            "Road & Utility Construction",
                            "Structural Analysis & Design",
                            "Site Survey & Feasibility Studies",
                          ]
                        : service.title === "Renovation"
                        ? [
                            "Interior & Exterior Remodeling",
                            "Structural Modifications",
                            "Modernization & Upgrades",
                            "Space Optimization Solutions",
                          ]
                        : []
                      ).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-accent" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/contact">
                    <Button className="mt-4">Request Service</Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
