import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ManpowerPreview } from "@/components/sections/ManpowerPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTASection } from "@/components/sections/CTASection";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>ABC Building Contracting LLC | Construction Company in UAE</title>
        <meta
          name="description"
          content="ABC Building Contracting LLC is a trusted construction company in UAE delivering residential, commercial, and civil engineering projects with quality, safety, and on-time execution."
        />
        <meta
          name="keywords"
          content="ABC Building Contracting LLC, construction company UAE, building contracting UAE, civil engineering UAE, commercial construction, residential construction"
        />
        <meta name="author" content="ABC Building Contracting LLC" />
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href="https://abccont.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abccont.com/" />
        <meta property="og:title" content="ABC Building Contracting LLC | You Dream It, We Build It" />
        <meta
          property="og:description"
          content="Professional construction and contracting services across UAE. Quality-driven, safety-focused, and result-oriented."
        />
        <meta property="og:image" content="https://abccont.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ABC Building Contracting LLC | Construction Experts" />
        <meta
          name="twitter:description"
          content="Leading construction and building contracting company in UAE delivering excellence."
        />
        <meta name="twitter:image" content="https://abccont.com/og-image.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ConstructionCompany",
            "name": "ABC Building Contracting LLC",
            "url": "https://abccont.com",
            "logo": "https://abccont.com/logo.png",
            "description": "Professional construction and civil engineering services in UAE.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "AE"
            }
          }
          `}
        </script>
      </Helmet>
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
    </>
  );
}
