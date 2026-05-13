import { ArrowRight } from 'lucide-react';
import professionalPaintingImage from '@/assets/professional-painting.jpg';
import constructionSiteImage from '@/assets/construction-site.jpg';
import architectWorkImage from '@/assets/architect-work.jpg';
import buildingConstructionImage from '@/assets/building-construction.jpg';
import floorCleaningImage from '@/assets/floor-cleaning.jpg';
import houseModelImage from '@/assets/house-model.jpg';
import modernLivingSpaceImage from '@/assets/modern-living-space.jpg';
import chemicalProductsImage from '@/assets/chemical-products.jpg';
import constructionToolsImage from '@/assets/construction-tools.jpg';
import paintBucketsImage from '@/assets/paint-buckets.jpg';
import falseCeilingImage from '@/assets/false-ceiling.jpg';
import airConditioningImage from '@/assets/air-conditioning.jpg';
import electricalWorkImage from '@/assets/electrical-work.jpg';
import plumbingWorkImage from '@/assets/plumbing-work.jpg';

const services = [
  {
    title: "Peinture Professionnelle Kinshasa",
    description: "Nos peintres professionnels à Kinshasa réalisent tous vos travaux de peinture avec les meilleurs produits IM COLOR originaux.",
    features: ["Peinture intérieure et extérieure", "Peinture de rénovation", "Peinture d'immeuble", "Peinture des maisons et espaces de travail", "Produits de peinture IM COLOR de qualité"],
    image: professionalPaintingImage,
    link: "/services"
  },
  {
    title: "Construction",
    description: "Construction de bâtiments résidentiels, commerciaux et industriels avec les standards les plus élevés.",
    features: ["Maisons individuelles", "Immeubles", "Centres commerciaux", "Usines"],
    image: constructionSiteImage,
    link: "/services/construction"
  },
  {
    title: "Architecture", 
    description: "Conception architecturale innovante et fonctionnelle adaptée à vos besoins et votre budget.",
    features: ["Plans architecturaux", "Études de faisabilité", "Permis de construire", "Supervision"],
    image: architectWorkImage,
    link: "/services/architecture"
  },
  {
    title: "Travaux Publics",
    description: "Réalisation d'infrastructures publiques et privées pour le développement urbain.",
    features: ["Routes et voiries", "Ponts", "Canalisations", "Aménagement urbain"],
    image: buildingConstructionImage,
    link: "/services/travaux-publics"
  },
  {
    title: "Design Intérieur & Extérieur",
    description: "Création d'espaces esthétiques et fonctionnels qui reflètent votre personnalité.",
    features: ["Décoration intérieure", "Aménagement paysager", "Rénovation", "Mobilier sur mesure"],
    image: floorCleaningImage,
    link: "/services/design"
  },
  {
    title: "Modélisation 3D",
    description: "Visualisation réaliste de vos projets avant construction grâce à nos technologies avancées.",
    features: ["Plans 3D", "Rendus photoréalistes", "Visites virtuelles", "Animations"],
    image: houseModelImage,
    link: "/services/modelisation"
  },
  {
    title: "Design Intérieur",
    description: "Aménagement et décoration d'espaces intérieurs modernes et fonctionnels selon vos goûts.",
    features: ["Conception mobilier TV", "Éclairage LED", "Aménagement salon", "Design contemporain"],
    image: modernLivingSpaceImage,
    link: "/services/design-interieur"
  },
  {
    title: "Vente Produits Chimiques",
    description: "Fourniture de produits chimiques de qualité pour tous vos besoins industriels et domestiques.",
    features: ["Solvants industriels", "Produits de traitement", "Colorants", "Produits de nettoyage"],
    image: chemicalProductsImage,
    link: "/services/produits-chimiques"
  },
  {
    title: "Vente Outils de Construction",
    description: "Large gamme d'outils professionnels et équipements de sécurité pour vos chantiers.",
    features: ["Outils électriques", "Équipements de sécurité", "Matériel professionnel", "Accessoires"],
    image: constructionToolsImage,
    link: "/services/outils-construction"
  },
  {
    title: "Vente Pots de Peinture",
    description: "Peintures IM COLOR de haute qualité pour tous types de surfaces et projets.",
    features: ["Peinture acrylique", "Peinture mate", "20L et autres formats", "Finitions professionnelles"],
    image: paintBucketsImage,
    link: "/services/pots-peinture"
  },
  {
    title: "Design Faux Plafond",
    description: "Installation de faux plafonds modernes avec éclairage LED intégré et finitions élégantes.",
    features: ["Éclairage LED intégré", "Design contemporain", "Isolation acoustique", "Finitions luxueuses"],
    image: falseCeilingImage,
    link: "/services/faux-plafond"
  },
  {
    title: "Climatisation",
    description: "Installation, maintenance et réparation de systèmes de climatisation pour votre confort.",
    features: ["Installation professionnelle", "Maintenance préventive", "Réparation", "Systèmes économiques"],
    image: airConditioningImage,
    link: "/services/climatisation"
  },
  {
    title: "Électricité",
    description: "Services électriques complets pour installations résidentielles et commerciales.",
    features: ["Installation électrique", "Maintenance", "Dépannage", "Mise aux normes"],
    image: electricalWorkImage,
    link: "/services/electricite"
  },
  {
    title: "Plomberie",
    description: "Services de plomberie professionnels pour tous vos besoins sanitaires et de canalisation.",
    features: ["Installation sanitaires", "Réparation fuites", "Débouchage", "Maintenance préventive"],
    image: plumbingWorkImage,
    link: "/services/plomberie"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Nos Services de Peinture et Construction à Kinshasa</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <strong>IM COLOR Kinshasa</strong> vous offre une gamme complète de services : <strong>peinture professionnelle</strong>, construction, rénovation et aménagement. Nos <strong>peintres à Kinshasa</strong> sont à votre service pour tous vos projets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="card-service group cursor-pointer">
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center text-primary group-hover:text-primary/80 transition-colors duration-200">
                  <span className="font-semibold">En savoir plus</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a href="/services">
            <button className="btn-orange">
              Voir tous nos services de peinture Kinshasa
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;