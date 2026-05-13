import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos — IM COLOR" },
      { name: "description", content: "Découvrez l'équipe et la vision d'IM COLOR." },
      { property: "og:title", content: "À propos — IM COLOR" },
      { property: "og:description", content: "Découvrez l'équipe et la vision d'IM COLOR." },
    ],
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
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
