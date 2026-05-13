import { Button } from './ui/button';
import { MapPin, Phone, Mail, Clock, AlertCircle, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const whatsappNumber = "+243816728505";
  
  const openWhatsApp = (message = "") => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Contactez-nous</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prêt à démarrer votre projet ? Notre équipe d'experts est là pour vous accompagner de la conception à la réalisation. Contactez-nous directement via WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Adresse</h3>
                <p className="text-muted-foreground">
                  Avenue Tombalbaye, Gombe<br />
                  Kinshasa, République Démocratique du Congo
                </p>
                <button className="text-primary hover:text-primary/80 transition-colors mt-2">
                  Voir sur Maps
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Téléphone</h3>
                <p className="text-muted-foreground mb-1">+243 816 728 505</p>
                <p className="text-muted-foreground mb-2">+243 851 719 356</p>
                <button 
                  onClick={() => window.open(`tel:${whatsappNumber}`, '_self')}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Appeler
                </button>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground mb-1">isaacmwenga64@gmail.com</p>
                <button 
                  onClick={() => window.open('mailto:isaacmwenga64@gmail.com', '_self')}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Envoyer un email
                </button>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Horaires</h3>
                <p className="text-muted-foreground mb-1">Lun-Ven: 8h00 - 17h00</p>
                <p className="text-muted-foreground mb-1">Sam: 8h00 - 12h00</p>
                <p className="text-muted-foreground mb-2">Dim: Fermé</p>
                <button 
                  onClick={() => openWhatsApp("Bonjour, j'aimerais planifier un rendez-vous.")}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Planifier RDV
                </button>
              </div>
            </div>

            {/* Emergency */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-800 mb-1">Contact d'urgence</h4>
                  <p className="text-sm text-red-700 mb-2">
                    Pour les urgences techniques ou interventions d'urgence :
                  </p>
                  <p className="font-semibold text-red-800">+243 111 222 333</p>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Contact Section */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg border border-green-200">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Contactez-nous sur WhatsApp</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Discutez directement avec notre équipe d'experts pour votre projet de construction, architecture ou design.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-foreground mb-2">✅ Réponse rapide</h4>
                  <p className="text-muted-foreground">Nous répondons généralement dans les 30 minutes</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-foreground mb-2">📋 Devis gratuit</h4>
                  <p className="text-muted-foreground">Obtenez votre estimation personnalisée rapidement</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-foreground mb-2">🏗️ Suivi de projet</h4>
                  <p className="text-muted-foreground">Restez informé de l'avancement de vos travaux</p>
                </div>
              </div>

              <div className="space-y-4">
                <Button 
                  onClick={() => openWhatsApp("Bonjour, j'aimerais obtenir un devis pour mon projet de construction.")}
                  className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-4 rounded-xl"
                  size="lg"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Demander un devis
                </Button>
                
                <Button 
                  onClick={() => openWhatsApp("Bonjour, j'ai une question concernant vos services.")}
                  variant="outline" 
                  className="w-full border-green-500 text-green-700 hover:bg-green-50 text-lg py-4 rounded-xl"
                  size="lg"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Poser une question
                </Button>
                
                <Button 
                  onClick={() => openWhatsApp()}
                  variant="ghost" 
                  className="w-full text-green-700 hover:bg-green-50 text-lg py-4 rounded-xl"
                  size="lg"
                >
                  Ouvrir WhatsApp
                </Button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-muted-foreground">
                  Ou appelez-nous directement : <strong className="text-green-700">{whatsappNumber}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;