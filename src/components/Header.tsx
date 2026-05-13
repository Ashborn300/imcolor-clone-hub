import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import imColorLogo from '@/assets/im-color-logo.jpg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo et Slogan */}
          <div className="flex items-center space-x-3">
            <img 
              src={imColorLogo} 
              alt="IM COLOR Logo" 
              className="h-16 w-auto"
              fetchPriority="high"
            />
            <div className="md:hidden">
              <p className="text-xs text-muted-foreground font-medium">
                IM COLOR, éblouis votre espace
              </p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link text-foreground hover:text-primary transition-colors duration-200">Accueil</Link>
            <Link to="/services" className="nav-link text-foreground hover:text-primary transition-colors duration-200">Services</Link>
            <Link to="/about" className="nav-link text-foreground hover:text-primary transition-colors duration-200">À propos</Link>
            <Link to="/realizations" className="nav-link text-foreground hover:text-primary transition-colors duration-200">Nos réalisations</Link>
            <Link to="/contact" className="nav-link text-foreground hover:text-primary transition-colors duration-200">Contact</Link>
          </nav>

          {/* CTA Button Desktop */}
          <Button className="hidden md:flex btn-orange">
            Devis Gratuit
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-border">
            <nav className="flex flex-col py-4 space-y-2">
              <Link 
                to="/" 
                className="px-4 py-2 text-foreground hover:text-primary hover:bg-accent transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/services" 
                className="px-4 py-2 text-foreground hover:text-primary hover:bg-accent transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="px-4 py-2 text-foreground hover:text-primary hover:bg-accent transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                to="/realizations" 
                className="px-4 py-2 text-foreground hover:text-primary hover:bg-accent transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nos réalisations
              </Link>
              <Link 
                to="/contact" 
                className="px-4 py-2 text-foreground hover:text-primary hover:bg-accent transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4 pt-2">
                <Button className="w-full btn-orange">
                  Devis Gratuit
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;