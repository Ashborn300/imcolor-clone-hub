import { Button } from './ui/button';
import { Star, Package, Truck, Clock, Palette, CheckCircle } from 'lucide-react';
import paintBucketsImage from '@/assets/paint-buckets.jpg';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';

const ProductSection = () => {
  const priceCounter = useCounterAnimation({ end: 45, prefix: '', suffix: '$', duration: 2000 });
  const oldPriceCounter = useCounterAnimation({ end: 60, prefix: '', suffix: '$', duration: 1800, delay: 300 });
  const ratingCounter = useCounterAnimation({ end: 4.9, decimal: 1, duration: 2500 });
  const reviewsCounter = useCounterAnimation({ end: 150, suffix: '+', duration: 2200, delay: 500 });

  return (
    <section className="py-20 bg-imcolor-gray-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Peinture IM COLOR - La Meilleure Qualité à Kinshasa</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre gamme exclusive de <strong>peintures IM COLOR</strong> - la référence qualité de <strong>peinture à Kinshasa</strong> pour tous vos projets intérieurs et extérieurs. Produits utilisés par nos <strong>peintres professionnels</strong>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">Peinture IM COLOR Kinshasa</h3>
              <p className="text-xl text-primary font-semibold">Acrylique Mate Beige - 20L | Qualité Premium</p>
              
              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-muted-foreground">(<span ref={ratingCounter.ref}>{ratingCounter.value}</span>/5 - <span ref={reviewsCounter.ref}>{reviewsCounter.value}</span> avis)</span>
              </div>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Qualité Premium</h4>
                  <p className="text-sm text-muted-foreground">Peinture de première qualité avec finition professionnelle</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Prix Imbattable</h4>
                  <p className="text-sm text-muted-foreground">Le meilleur rapport qualité-prix du marché congolais</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Durabilité</h4>
                  <p className="text-sm text-muted-foreground">Résiste 5+ ans aux conditions climatiques tropicales</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Palette className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Large Gamme</h4>
                  <p className="text-sm text-muted-foreground">Plus de 200 couleurs disponibles en stock</p>
                </div>
              </div>
            </div>

            {/* Characteristics */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-foreground">Caractéristiques</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">Peinture acrylique haute qualité</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">Finition mate et brillante disponible</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">Résistance aux intempéries</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">Couverture optimale - 20L</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">Séchage rapide</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">Sans odeur désagréable</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div ref={priceCounter.ref} className="text-3xl font-bold text-primary">{priceCounter.value}</div>
                <div ref={oldPriceCounter.ref} className="text-lg text-muted-foreground line-through">{oldPriceCounter.value}</div>
                <div className="bg-red-100 text-red-600 px-2 py-1 rounded-md text-sm font-semibold">-25%</div>
              </div>
              <p className="text-muted-foreground mb-4">Prix spécial pour le pot de 20L - Promotion limitée</p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/contact" className="flex-1">
                  <Button className="btn-orange w-full">
                    Commander maintenant
                  </Button>
                </a>
                <a href="/services">
                  <Button variant="outline" className="btn-outline-orange">
                    Voir toutes les couleurs
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Product Image & Status */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={paintBucketsImage} 
                alt="Pots de peinture IM COLOR - Acrylique mate beige 20L"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Status Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                <Package className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-sm font-semibold text-green-600">En stock</div>
                <div className="text-xs text-green-500">20L disponible</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                <Truck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-semibold text-blue-600">Livraison</div>
                <div className="text-xs text-blue-500">Gratuite</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-200">
                <CheckCircle className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="text-sm font-semibold text-orange-600">100%</div>
                <div className="text-xs text-orange-500">Qualité</div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Offer */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Profitez de notre offre spéciale !</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Achetez 3 pots de peinture IM COLOR et bénéficiez de 30% de réduction + livraison gratuite dans tout Kinshasa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button className="btn-orange">
                Profiter de l'offre
              </Button>
            </a>
            <a href="/services">
              <Button variant="outline" className="btn-outline-orange">
                Voir le catalogue peinture IM COLOR
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;