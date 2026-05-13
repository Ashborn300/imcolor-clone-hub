import { Button } from './ui/button';
import { Eye, Target, Heart, Shield, Users } from 'lucide-react';
import workersSiteImage from '@/assets/workers-site.jpg';

const VisionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={workersSiteImage} 
                alt="Vision IM COLOR sarl - Équipe d'experts en peinture"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">La Vision d'IM COLOR sarl</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Guidés par une vision créative et des valeurs fortes, <strong>IM COLOR sarl</strong> et ses <strong>peintres professionnels</strong> œuvrent chaque jour pour colorer et transformer les espaces de <strong>Kinshasa</strong> avec passion et expertise.
              </p>
            </div>

            {/* Vision, Mission, Values */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Notre Vision</h3>
                  <p className="text-muted-foreground">
                    Devenir la référence incontournable de la <strong>peinture à Kinshasa</strong> et en RDC, en alliant créativité, qualité <strong>IM COLOR sarl</strong> et innovation pour transformer chaque espace en œuvre d'art.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Notre Mission</h3>
                  <p className="text-muted-foreground">
                    Accompagner nos clients dans la transformation de leurs espaces en offrant des solutions de peinture et décoration sur mesure, alliant savoir-faire artisanal et techniques modernes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Nos Valeurs</h3>
                  <p className="text-muted-foreground">
                    La créativité, l'excellence, l'écoute client et le respect de l'environnement guident chacune de nos réalisations pour créer des espaces qui vous ressemblent.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Notre Engagement</h3>
                  <p className="text-muted-foreground">
                    Nous nous engageons à utiliser des produits de qualité supérieure et des techniques respectueuses de l'environnement pour colorer votre avenir durablement.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Rejoignez notre vision de la couleur</h3>
                  <p className="text-muted-foreground">
                    Ensemble, colorons l'avenir de Kinshasa avec des projets de peinture et décoration qui transforment positivement vos espaces de vie et de travail.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact">
                <Button className="btn-orange">
                  Commencer votre projet peinture
                </Button>
              </a>
              <a href="/services">
                <Button variant="outline" className="btn-outline-orange">
                  Découvrir nos services peinture Kinshasa
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;