import { Button } from './ui/button';
import { Play } from 'lucide-react';
import heroInterior from '@/assets/hero-interior.jpg';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';

const HeroSection = () => {
  const projectsCounter = useCounterAnimation({ end: 150, suffix: '+', duration: 2500 });
  const experienceCounter = useCounterAnimation({ end: 10, suffix: '+', duration: 2000, delay: 200 });
  const satisfactionCounter = useCounterAnimation({ end: 98, suffix: '%', duration: 2200, delay: 400 });

  return (
    <section id="accueil" className="pt-20 pb-16 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              IM COLOR Kinshasa - Peintres Professionnels
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              <strong>IM COLOR</strong>, leader de la <strong>peinture à Kinshasa</strong>. Nos <strong>peintres professionnels</strong> réalisent vos projets de peinture intérieure, extérieure, construction et rénovation. 
              Excellence et qualité depuis plus de 10 ans.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact">
                <Button className="btn-orange text-lg px-8 py-4 w-full">
                  Obtenir un devis gratuit
                </Button>
              </a>
              <a href="/realizations">
                <Button variant="outline" className="btn-outline-orange text-lg px-8 py-4 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Voir nos réalisations
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div ref={projectsCounter.ref} className="text-4xl font-bold text-primary">{projectsCounter.value}</div>
                <div className="text-muted-foreground">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div ref={experienceCounter.ref} className="text-4xl font-bold text-primary">{experienceCounter.value}</div>
                <div className="text-muted-foreground">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div ref={satisfactionCounter.ref} className="text-4xl font-bold text-primary">{satisfactionCounter.value}</div>
                <div className="text-muted-foreground">Clients satisfaits</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroInterior} 
                alt="Salon moderne avec mur TV design par IM COLOR"
                className="w-full h-auto object-cover"
              />
              
              {/* Project Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="font-semibold text-green-600">Projet livré</span>
                </div>
                <div className="text-sm text-foreground">
                  Résidence Moderne - Gombe
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;