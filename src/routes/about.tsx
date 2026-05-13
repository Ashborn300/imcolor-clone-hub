import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const URL = "https://imcolor.lovable.app";
const TITLE = "À propos d'IM COLOR sarl — Leader de la peinture à Kinshasa, RDC";
const DESC =
  "IM COLOR sarl, plus de 10 ans d'expertise en peinture professionnelle à Kinshasa et en RDC. Découvrez notre équipe, notre vision et nos valeurs.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "à propos IM COLOR, entreprise peinture Kinshasa, équipe peintres RDC, vision IM COLOR sarl, histoire IM COLOR",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${URL}/about` },
      { property: "og:image", content: `${URL}/favicon.jpg` },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: `${URL}/favicon.jpg` },
    ],
    links: [{ rel: "canonical", href: `${URL}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="pt-16">
          <AboutSection />
          <section className="py-12 bg-secondary">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold mb-4">Allez plus loin</h2>
              <p className="text-muted-foreground mb-6">
                Explorez{" "}
                <Link to="/services" className="text-primary underline">
                  nos services
                </Link>
                , découvrez{" "}
                <Link to="/realizations" className="text-primary underline">
                  nos réalisations
                </Link>{" "}
                ou{" "}
                <Link to="/contact" className="text-primary underline font-semibold">
                  contactez-nous
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
