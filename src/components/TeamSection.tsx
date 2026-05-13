import { Users, Award, Clock, Shield } from 'lucide-react';
import teamImage from '@/assets/team-professionals.jpg';

const TeamSection = () => {
  const teamFeatures = [
    {
      icon: Users,
      title: "Équipe expérimentée",
      description: "Plus de 15 ans d'expérience dans le secteur"
    },
    {
      icon: Award,
      title: "Certifications",
      description: "Professionnels certifiés et qualifiés"
    },
    {
      icon: Clock,
      title: "Réactivité",
      description: "Intervention rapide sur tous vos projets"
    },
    {
      icon: Shield,
      title: "Fiabilité",
      description: "Respect des délais et des normes de sécurité"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Notre Équipe de Peintres Professionnels à Kinshasa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Les <strong>peintres IM COLOR sarl à Kinshasa</strong> : une équipe d'experts passionnés et qualifiés, dédiée à la réalisation de vos projets de <strong>peinture</strong> et construction avec le plus haut niveau de professionnalisme.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Team Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={teamImage} 
                alt="Équipe de professionnels IM COLOR sarl en tenues de sécurité"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-primary text-primary-foreground rounded-2xl p-4 sm:p-6 shadow-xl">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold">15+</div>
                <div className="text-xs sm:text-sm">Années d'expérience</div>
              </div>
            </div>
          </div>

          {/* Team Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Pourquoi choisir nos peintres IM COLOR sarl ?
              </h3>
              <p className="text-muted-foreground text-lg mb-8">
                Nos <strong>peintres professionnels à Kinshasa</strong> combinent expertise technique, passion du métier et engagement 
                pour vous offrir des solutions de <strong>peinture</strong>, construction et rénovation exceptionnelles.
              </p>
            </div>

            <div className="grid gap-6">
              {teamFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">
                    Sécurité garantie
                  </h4>
                  <p className="text-muted-foreground">
                    Tous nos professionnels respectent les normes de sécurité les plus strictes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Projets réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Clients satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support disponible</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Années d'expérience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;