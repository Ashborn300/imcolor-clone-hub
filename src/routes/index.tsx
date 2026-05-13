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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IM COLOR sarl — Éblouis votre espace" },
      { name: "description", content: "IM COLOR sarl : peinture, décoration et aménagement intérieur. Devis gratuit." },
      { property: "og:title", content: "IM COLOR sarl — Éblouis votre espace" },
      { property: "og:description", content: "Peinture, décoration et aménagement intérieur professionnel." },
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
