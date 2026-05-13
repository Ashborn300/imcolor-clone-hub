import { Badge } from "@/components/ui/badge";
import newRealization from "@/assets/new-realization.jpg";
import realization2 from "@/assets/realization-2.jpg";
import realization3 from "@/assets/realization-3.jpg";
import realization4 from "@/assets/realization-4.jpg";
import realization5 from "@/assets/realization-5.jpg";
import realization6 from "@/assets/realization-6.jpg";
import realization7 from "@/assets/realization-7.jpg";
import realization8 from "@/assets/realization-8.jpg";
import realization9 from "@/assets/realization-9.jpg";
import realization10 from "@/assets/realization-10.jpg";
import realization11 from "@/assets/realization-11.jpg";
import realization12 from "@/assets/realization-12.jpg";
import realization13 from "@/assets/realization-13.jpg";
import realization14 from "@/assets/realization-14.jpg";
import realization15 from "@/assets/realization-15.jpg";
import realization16 from "@/assets/realization-16.jpg";
import realization17 from "@/assets/realization-17.jpg";
import realization18 from "@/assets/realization-18.jpg";
import realization19 from "@/assets/realization-19.jpg";
import realization20 from "@/assets/realization-20.jpg";
import realization21 from "@/assets/realization-21.jpg";
import realization22 from "@/assets/realization-22.jpg";
import realization23 from "@/assets/realization-23.jpg";
import realization24 from "@/assets/realization-24.jpg";
import realization25 from "@/assets/realization-25.jpg";
import realization26 from "@/assets/realization-26.jpg";
import realization27 from "@/assets/realization-27.jpg";
import realization28 from "@/assets/realization-28.jpg";
import realization29 from "@/assets/realization-29.jpg";

const realizations = [
  { id: 1, image: newRealization },
  { id: 2, image: realization2 },
  { id: 3, image: realization3 },
  { id: 4, image: realization4 },
  { id: 5, image: realization5 },
  { id: 6, image: realization6 },
  { id: 7, image: realization7 },
  { id: 8, image: realization8 },
  { id: 9, image: realization9 },
  { id: 10, image: realization10 },
  { id: 11, image: realization11 },
  { id: 12, image: realization12 },
  { id: 13, image: realization13 },
  { id: 14, image: realization14 },
  { id: 15, image: realization15 },
  { id: 16, image: realization16 },
  { id: 17, image: realization17 },
  { id: 18, image: realization18 },
  { id: 19, image: realization19 },
  { id: 20, image: realization20 },
  { id: 21, image: realization21 },
  { id: 22, image: realization22 },
  { id: 23, image: realization23 },
  { id: 24, image: realization24 },
  { id: 25, image: realization25 },
  { id: 26, image: realization26 },
  { id: 27, image: realization27 },
  { id: 28, image: realization28 },
  { id: 29, image: realization29 },
];

const RealizationsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Réalisations IM COLOR - Projets de Peinture à Kinshasa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les projets réalisés par nos <strong>peintres professionnels IM COLOR à Kinshasa</strong>. 
            Chaque réalisation de <strong>peinture</strong> reflète notre engagement envers l'excellence et la qualité <strong>IM COLOR</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {realizations.map((realization) => (
            <div 
              key={realization.id} 
              className="group overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={realization.image}
                alt={`Projet de peinture IM COLOR Kinshasa - Réalisation ${realization.id}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 rounded-lg"
              />
            </div>
          ))}
        </div>
        
        {/* Section pour diriger vers les réseaux sociaux */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Plus de Réalisations Peinture IM COLOR Kinshasa
          </h3>
          <p className="text-muted-foreground mb-6">
            Découvrez encore plus de projets de <strong>peinture</strong> réalisés par <strong>IM COLOR Kinshasa</strong>. Suivez nos dernières réalisations et l'actualité de nos <strong>peintres professionnels</strong> sur nos réseaux sociaux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.facebook.com/profile.php?id=61569466989365" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white rounded-lg hover:bg-[#166FE5] transition-colors duration-300 hover:scale-105 transform"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
            <a
              href="https://tiktok.com/@im.color64"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 hover:scale-105 transform"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealizationsSection;