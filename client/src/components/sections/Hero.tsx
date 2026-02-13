import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import hero_image from "@/images/hero.png"

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Unsplash image of modern skyscraper construction */}
        <img 
          src={ hero_image }
          alt="Modern Architecture Construction" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary/20" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg- border border-green-300/90 text-green-300 text-sm font-semibold mb-6 backdrop-blur-sm">
              Leading Contracting
            </span>
            <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-tight mb-6 text-shadow-lg">
              Building Dreams <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                Engineering Reality
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
              From groundbreaking infrastructure projects to skilled workforce solutions, 
              <span className="text-yellow-400">Alsahraa Alsamitah Building Contracting LLC</span> delivers excellence at every level of the construction industry.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/services">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 h-14 text-base">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary font-semibold px-8 h-14 text-base backdrop-blur-sm">
                Get a Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
