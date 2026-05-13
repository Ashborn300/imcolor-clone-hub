import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Nos services — IM COLOR" },
      { name: "description", content: "Peinture, décoration, faux plafonds, climatisation et plus." },
      { property: "og:title", content: "Nos services — IM COLOR" },
      { property: "og:description", content: "Peinture, décoration, faux plafonds, climatisation et plus." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="pt-16">
          <ServicesSection />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
