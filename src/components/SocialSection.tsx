import { Button } from './ui/button';
import { Facebook, Smartphone } from 'lucide-react';

const SocialSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Suivez-nous sur les réseaux sociaux
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Restez connectés avec IM COLOR pour découvrir nos derniers projets, conseils et actualités du secteur
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Facebook Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Facebook className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Suivez-nous sur Facebook</h3>
            <p className="text-muted-foreground mb-6">
              Découvrez nos réalisations, partagez vos projets et restez informés de nos actualités
            </p>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white w-full"
              onClick={() => window.open('https://www.facebook.com/profile.php?id=61569466989365', '_blank')}
            >
              <Facebook className="w-5 h-5 mr-2" />
              S'abonner à notre page
            </Button>
          </div>

          {/* TikTok Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border text-center">
            <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Suivez-nous sur TikTok</h3>
            <p className="text-muted-foreground mb-6">
              Découvrez nos vidéos exclusives, conseils de construction et coulisses de nos chantiers
            </p>
            <Button 
              className="bg-black hover:bg-black/90 text-white w-full"
              onClick={() => window.open('https://tiktok.com/@im.color64', '_blank')}
            >
              <Smartphone className="w-5 h-5 mr-2" />
              Suivre @im.color64
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-6 max-w-2xl mx-auto shadow-md border border-border">
            <p className="text-lg text-muted-foreground mb-4">
              💡 <strong>Partagez vos projets avec nous !</strong>
            </p>
            <p className="text-muted-foreground">
              Utilisez le hashtag <span className="font-semibold text-primary">#IMColor</span> pour partager vos réalisations avec la communauté
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;