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
        <title>
          ALSAHRAA ALSAMITAH BUILDING CONTRACTING LLC | ABC Construction Company in Dubai UAE
        </title>

        <meta
          name="description"
          content="ALSAHRAA ALSAMITAH BUILDING CONTRACTING LLC (ABC Construction) is a leading construction company in Dubai, UAE delivering residential, commercial, civil engineering, renovation, and skilled workforce solutions."
        />

        <meta
          name="keywords"
          content="ABC Contracting, ABC Contracting Dubai, ABC Construction, ABC Construction UAE, ALSAHRAA ALSAMITAH, ALSAHRAA, ALSAMITAH, ALSAHRAA ALSAMITAH Building Contracting LLC, Building Construction Dubai, Civil Engineering UAE, Renovation Company Dubai, Construction Company UAE, Skilled Workforce Dubai, Construction Services UAE, Construction Solutions Dubai, Building Excellence UAE, Trusted Construction Company Dubai"
        />

        <meta name="author" content="ALSAHRAA ALSAMITAH BUILDING CONTRACTING LLC" />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://abccont.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abccont.com/" />
        <meta
          property="og:title"
          content="ALSAHRAA ALSAMITAH BUILDING CONTRACTING LLC | ABC Construction Dubai"
        />
        <meta
          property="og:description"
          content="Trusted construction and civil engineering company in Dubai, UAE. Building excellence with integrity and innovation."
        />
        <meta property="og:image" content="https://abccont.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ALSAHRAA ALSAMITAH BUILDING CONTRACTING LLC"
        />
        <meta
          name="twitter:description"
          content="Professional building construction, civil engineering and renovation services in UAE."
        />
        <meta name="twitter:image" content="https://abccont.com/og-image.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ConstructionCompany",
            "name": "ALSAHRAA ALSAMITAH BUILDING CONTRACTING LLC",
            "alternateName": ["ABC Contracting", "ABC Construction", "ABC Cont"],
            "url": "https://abccont.com",
            "logo": "https://abccont.com/logo.png",
            "telephone": "+971554712353",
            "email": "info@abccont.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Al Zahra Techno Center",
              "addressLocality": "Dubai",
              "addressCountry": "AE"
            },
            "areaServed": "United Arab Emirates",
            "openingHours": "Mo-Sa 08:00-18:00"
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
