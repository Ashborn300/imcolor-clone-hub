import { MapPin, Phone, Mail, Clock } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-imcolor-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IC</span>
              </div>
              <span className="text-xl font-bold">IM COLOR</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Experts en construction, architecture et travaux publics à Kinshasa. Excellence, innovation et qualité depuis plus de 10 ans.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Nos Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Construction</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Architecture</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Travaux Publics</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Design Intérieur</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Modélisation 3D</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Peinture IM COLOR</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Liens Rapides</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#accueil" className="hover:text-primary transition-colors">Accueil</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#apropos" className="hover:text-primary transition-colors">À propos</a></li>
              <li><a href="#projets" className="hover:text-primary transition-colors">Projets</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Devis Gratuit</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p>Avenue Tombalbaye, Gombe</p>
                  <p>Kinshasa, RDC</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p>+243 816 728 505</p>
                  <p>+243 851 719 356</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p>isaacmwenga64@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p>Lun-Ven: 8h00-17h00</p>
                  <p>Sam: 8h00-12h00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2025 IM COLOR. Tous droits réservés.</p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-primary transition-colors">Conditions d'utilisation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;