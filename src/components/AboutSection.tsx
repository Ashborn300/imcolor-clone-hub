import { CheckCircle, Users, Award, Lightbulb, Heart, Shield } from 'lucide-react';
import { Button } from './ui/button';
import handshakeImage from '@/assets/handshake.jpg';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';

const values = [
  {
    icon: Award,
    title: "Excellence dans la qualité de construction"
  },
  {
    icon: CheckCircle,
    title: "Respect des délais et du budget"
  },
  {
    icon: Lightbulb,
    title: "Innovation et technologies modernes"
  },
  {
    icon: Heart,
    title: "Service client personnalisé"
  },
  {
    icon: Shield,
    title: "Développement durable et écologique"
  },
  {
    icon: Users,
    title: "Transparence et intégrité"
  }
];

const AboutSection = () => {
  const professionalsCounter = useCounterAnimation({ end: 50, suffix: '+', duration: 2300 });
  const projectsCounter = useCounterAnimation({ end: 150, suffix: '+', duration: 2500, delay: 200 });
  const experienceCounter = useCounterAnimation({ end: 10, suffix: '+', duration: 2000, delay: 400 });

  return (
    <section id="apropos" className="py-20 bg-imcolor-gray-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">À propos d'IM COLOR sarl</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Depuis plus de 10 ans, <strong>IM COLOR sarl</strong> s'impose comme leader de la <strong>peinture à Kinshasa</strong> et dans toute la République Démocratique du Congo. Nos <strong>peintres professionnels</strong> sont reconnus pour leur expertise et leur savoir-faire.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Notre entreprise de <strong>peinture Kinshasa</strong> a été fondée avec une vision claire : offrir des services de peinture et construction de qualité supérieure tout en respectant les délais, les budgets et les standards internationaux. Nous combinons l'expertise locale avec les meilleures pratiques internationales.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Que ce soit pour des <a href="/services" className="text-primary hover:underline">travaux de peinture</a>, la construction de votre maison ou la rénovation d'espaces commerciaux, notre équipe de <strong>peintres Kinshasa</strong> qualifiés vous accompagne à chaque étape.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Nos Valeurs</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <value.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">{value.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <a href="/about">
              <Button className="btn-orange">
                Découvrir notre histoire
              </Button>
            </a>
          </div>

          {/* Image & Stats */}
          <div className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={handshakeImage} 
                alt="Partenariat professionnel IM COLOR sarl"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div ref={professionalsCounter.ref} className="text-3xl font-bold text-primary mb-2">{professionalsCounter.value}</div>
                <div className="text-sm text-muted-foreground">Professionnels qualifiés</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div ref={projectsCounter.ref} className="text-3xl font-bold text-primary mb-2">{projectsCounter.value}</div>
                <div className="text-sm text-muted-foreground">Projets réalisés</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div ref={experienceCounter.ref} className="text-3xl font-bold text-primary mb-2">{experienceCounter.value}</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;