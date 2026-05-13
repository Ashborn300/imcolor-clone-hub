import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — IM COLOR" },
      { name: "description", content: "Contactez IM COLOR pour un devis gratuit." },
      { property: "og:title", content: "Contact — IM COLOR" },
      { property: "og:description", content: "Contactez IM COLOR pour un devis gratuit." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="pt-16">
          <ContactSection />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
