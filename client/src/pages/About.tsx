import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="pt-24 pb-20"
    >
      {/* Header */}
      <section className="relative py-20 bg-muted/30 mb-20">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle title="About Alsahraa Alsamitah Building Contracting LLC" subtitle="Who We Are" align="center" />
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            A premier construction and contracting company dedicated to building excellence across the UAE.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company History Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              // Unsplash: Architectural blueprint meeting
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop" 
              alt="Team Meeting" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-display text-primary mb-6">Building a Legacy of Trust</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded with a vision to revolutionize the construction industry, Alsahraa Alsamitah Building Contracting LLC has grown from a small contractor to a full-service construction. Our journey is defined by a relentless pursuit of quality and a commitment to our clients' success.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We specialize in delivering complex projects on time and within budget, leveraging our extensive network of skilled professionals and state-of-the-art technology.
            </p>
          </motion.div>
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To deliver superior construction and manpower solutions that exceed client expectations through innovation, safety, and integrity."
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "To be the region's most trusted partner in infrastructure development and workforce excellence."
            },
            {
              icon: Award,
              title: "Core Values",
              text: "Quality, Safety, Integrity, Teamwork, and Customer Satisfaction are the pillars of our operations."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full border-t-4 border-t-accent shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 text-center">
                  <div className="bg-primary/5 p-4 rounded-full inline-flex mb-6 text-primary">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold font-display mb-4">{item.title}</h4>
                  <p className="text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
