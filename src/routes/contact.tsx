import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const URL = "https://imcolor.lovable.app";
const TITLE = "Contact — Devis gratuit peinture à Kinshasa | IM COLOR sarl";
const DESC =
  "Contactez IM COLOR sarl à Kinshasa pour un devis gratuit : peinture professionnelle, décoration, rénovation. Téléphone, WhatsApp et email disponibles.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "contact IM COLOR, devis peinture Kinshasa, téléphone peintre Kinshasa, WhatsApp IM COLOR sarl, email peinture RDC",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${URL}/contact` },
      { property: "og:image", content: `${URL}/favicon.jpg` },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: `${URL}/favicon.jpg` },
    ],
    links: [{ rel: "canonical", href: `${URL}/contact` }],
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
          <section className="py-12 bg-secondary">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold mb-4">En attendant</h2>
              <p className="text-muted-foreground mb-6">
                Parcourez{" "}
                <Link to="/services" className="text-primary underline">
                  nos services
                </Link>{" "}
                ou explorez{" "}
                <Link to="/realizations" className="text-primary underline">
                  nos réalisations à Kinshasa
                </Link>
                .
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
