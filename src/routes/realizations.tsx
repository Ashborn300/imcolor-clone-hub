import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import RealizationsSection from "@/components/RealizationsSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/realizations")({
  head: () => ({
    meta: [
      { title: "Nos réalisations — IM COLOR sarl" },
      { name: "description", content: "Découvrez nos réalisations en peinture et décoration." },
      { property: "og:title", content: "Nos réalisations — IM COLOR sarl" },
      { property: "og:description", content: "Découvrez nos réalisations en peinture et décoration." },
    ],
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
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
