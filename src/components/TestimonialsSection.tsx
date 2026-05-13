import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Marie Kabila",
    role: "Propriétaire",
    project: "Villa Moderne - Gombe",
    avatar: "MK",
    content: "IM COLOR sarl a dépassé toutes nos attentes. La qualité de finition est exceptionnelle et le respect des délais parfait. Je recommande vivement leurs services."
  },
  {
    name: "Jean-Baptiste Tshombe",
    role: "Directeur Commercial",
    project: "Centre Commercial Kinshasa",
    avatar: "JT",
    content: "Un travail professionnel remarquable. L'équipe a su comprendre nos besoins et livrer un projet conforme à nos attentes. Excellent suivi de chantier."
  },
  {
    name: "Sarah Mukendi",
    role: "Architecte",
    project: "Résidence Familiale",
    avatar: "SM",
    content: "La collaboration avec IM COLOR sarl fut excellente. Leur expertise technique et leur écoute ont permis de concrétiser parfaitement nos plans architecturaux."
  },
  {
    name: "André Kasongo",
    role: "Entrepreneur",
    project: "Complexe Industriel",
    avatar: "AK",
    content: "IM COLOR sarl allie professionnalisme et innovation. Leur approche moderne de la construction nous a permis d'optimiser nos investissements."
  },
  {
    name: "Célestine Mbuyi",
    role: "Particulier",
    project: "Rénovation Maison",
    avatar: "CM",
    content: "Service client exceptionnel et travaux de qualité. L'équipe a transformé notre ancienne maison en un véritable bijou architectural."
  },
  {
    name: "Patrick Nyembo",
    role: "Promoteur Immobilier",
    project: "Résidence Haut Standing",
    avatar: "PN",
    content: "Partenaire de confiance pour tous nos projets. La qualité de leurs réalisations et leur respect des engagements font de IM COLOR sarl un choix évident."
  },
  {
    name: "Grace Mbombo",
    role: "Médecin",
    project: "Clinique Privée",
    avatar: "GM",
    content: "Construction d'une clinique moderne avec toutes les normes respectées. IM COLOR sarl a su adapter le projet aux exigences médicales spécifiques."
  },
  {
    name: "Robert Kimbembe",
    role: "Ingénieur",
    project: "Infrastructure Routière",
    avatar: "RK",
    content: "Expertise technique impressionnante en travaux publics. L'équipe maîtrise parfaitement les défis des infrastructures urbaines de Kinshasa."
  },
  {
    name: "Aminata Diallo",
    role: "Commerçante",
    project: "Boutique Moderne",
    avatar: "AD",
    content: "Aménagement intérieur créatif et fonctionnel. IM COLOR sarl a su créer un espace commercial attractif qui a boosté notre chiffre d'affaires."
  },
  {
    name: "David Mulumba",
    role: "Directeur d'École",
    project: "École Primaire",
    avatar: "DM",
    content: "Construction d'une école moderne et sécurisée. L'attention portée aux détails et la qualité des matériaux utilisés sont remarquables."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Avis de nos Clients</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez ce que nos clients pensent de nos services et réalisations. Leur satisfaction est notre plus belle récompense.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
              {/* Quote */}
              <div className="mb-6">
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Project */}
              <div className="mb-4">
                <p className="text-sm text-primary font-semibold">
                  Projet: {testimonial.project}
                </p>
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Clients satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Note moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-muted-foreground">Avis positifs</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Recommandations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;