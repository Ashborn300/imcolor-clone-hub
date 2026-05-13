import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import VisionSection from "@/components/VisionSection";
import ProductSection from "@/components/ProductSection";
import AcousticPanelsSection from "@/components/AcousticPanelsSection";
import TeamSection from "@/components/TeamSection";
import RealizationsSection from "@/components/RealizationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import SocialSection from "@/components/SocialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const URL = "https://imcolor.lovable.app";
const TITLE = "IM COLOR sarl — Peinture professionnelle à Kinshasa | Décoration & Rénovation";
const DESC =
  "IM COLOR sarl : peintres professionnels à Kinshasa pour vos travaux de peinture intérieure et extérieure, décoration, faux plafonds, climatisation et rénovation. Devis gratuit en RDC.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "peinture Kinshasa, peintre professionnel Kinshasa, IM COLOR, décoration intérieure Kinshasa, faux plafond, rénovation RDC, panneaux acoustiques, climatisation Kinshasa, entreprise de peinture RDC",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${URL}/` },
      { property: "og:image", content: `${URL}/favicon.jpg` },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: `${URL}/favicon.jpg` },
    ],
    links: [{ rel: "canonical", href: `${URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "IM COLOR sarl",
          image: `${URL}/favicon.jpg`,
          url: URL,
          description: DESC,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kinshasa",
            addressCountry: "CD",
          },
          areaServed: { "@type": "City", name: "Kinshasa" },
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <VisionSection />
      <ProductSection />
      <AcousticPanelsSection />
      <TeamSection />
      <RealizationsSection />
      <TestimonialsSection />
      <FAQSection />
      <SocialSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
