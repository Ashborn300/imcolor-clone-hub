import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "@/components/Header";
import RealizationsSection from "@/components/RealizationsSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const URL = "https://imcolor.lovable.app";
const TITLE = "Nos réalisations — Projets de peinture à Kinshasa | IM COLOR sarl";
const DESC =
  "Galerie des réalisations IM COLOR sarl à Kinshasa : projets de peinture intérieure, extérieure, décoration et rénovation menés par nos peintres professionnels.";

export const Route = createFileRoute("/realizations")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "réalisations peinture Kinshasa, projets IM COLOR, portfolio peintre Kinshasa, rénovation RDC, décoration intérieure projets",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${URL}/realizations` },
      { property: "og:image", content: `${URL}/favicon.jpg` },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: `${URL}/favicon.jpg` },
    ],
    links: [{ rel: "canonical", href: `${URL}/realizations` }],
  }),
  component: RealizationsPage,
});

function RealizationsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="pt-16">
          <RealizationsSection />
          <section className="py-12 bg-secondary">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold mb-4">Inspiré ?</h2>
              <p className="text-muted-foreground mb-6">
                Découvrez{" "}
                <Link to="/services" className="text-primary underline">
                  nos services
                </Link>
                , apprenez-en plus{" "}
                <Link to="/about" className="text-primary underline">
                  sur notre équipe
                </Link>{" "}
                ou{" "}
                <Link to="/contact" className="text-primary underline font-semibold">
                  demandez votre devis
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
