import { Check } from 'lucide-react';
import acousticPanel1 from '@/assets/acoustic-panel-1.jpg';
import acousticPanel2 from '@/assets/acoustic-panel-2.jpg';
import acousticPanel3 from '@/assets/acoustic-panel-3.jpg';

const AcousticPanelsSection = () => {
  const features = [
    "Panneau en Tasseau Décoratif",
    "Isolation Thermique et Acoustique", 
    "Panneau Mural Facile à Poser",
    "Panneau Acoustique avec Isolation"
  ];

  const panels = [
    { image: acousticPanel1, alt: "Panneaux acoustiques en bois naturel" },
    { image: acousticPanel2, alt: "Panneaux acoustiques différentes finitions" },
    { image: acousticPanel3, alt: "Installation de panneaux acoustiques en intérieur" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Procurez-vous des Panneau mural acoustique bois
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              <strong>Idéal :</strong> Pour salon, Chambre, Magasin, hall d'entrée et tous les espaces intérieurs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Caractéristiques principales
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <img
                  src={panels[2].image}
                  alt={panels[2].alt}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src={panels[0].image}
                  alt={panels[0].alt}
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src={panels[1].image}
                  alt={panels[1].alt}
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcousticPanelsSection;