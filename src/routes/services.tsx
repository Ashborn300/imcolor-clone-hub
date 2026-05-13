import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const URL = "https://imcolor.lovable.app";
const TITLE = "Nos services — Peinture, décoration & rénovation à Kinshasa | IM COLOR sarl";
const DESC =
  "Découvrez tous les services d'IM COLOR sarl à Kinshasa : peinture intérieure et extérieure, décoration, faux plafonds, panneaux acoustiques, climatisation, électricité, plomberie et rénovation.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "services peinture Kinshasa, faux plafond Kinshasa, panneaux acoustiques RDC, climatisation Kinshasa, électricité bâtiment, plomberie Kinshasa, rénovation RDC",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${URL}/services` },
      { property: "og:image", content: `${URL}/favicon.jpg` },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: `${URL}/favicon.jpg` },
    ],
    links: [{ rel: "canonical", href: `${URL}/services` }],
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
          <section className="py-12 bg-secondary">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold mb-4">Découvrez aussi</h2>
              <p className="text-muted-foreground mb-6">
                Parcourez{" "}
                <Link to="/realizations" className="text-primary underline">
                  nos réalisations à Kinshasa
                </Link>{" "}
                ou apprenez-en plus{" "}
                <Link to="/about" className="text-primary underline">
                  sur IM COLOR sarl
                </Link>
                . Prêt à démarrer votre projet ?{" "}
                <Link to="/contact" className="text-primary underline font-semibold">
                  Demandez un devis gratuit
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
