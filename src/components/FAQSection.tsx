import { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

const faqs = [
  {
    question: "Quels types de projets IM COLOR sarl réalise-t-elle ?",
    answer: "IM COLOR sarl réalise tous types de projets de construction : maisons individuelles, immeubles résidentiels et commerciaux, infrastructures publiques, travaux de rénovation, aménagement intérieur et extérieur, ainsi que des services spécialisés comme la plomberie, l'électricité et la climatisation."
  },
  {
    question: "Combien de temps faut-il pour réaliser un projet de construction ?",
    answer: "La durée dépend de la complexité et de la taille du projet. Une maison individuelle prend généralement 6-12 mois, un immeuble 12-24 mois, et les travaux de rénovation 1-6 mois. Nous établissons un planning détaillé lors de l'étude de faisabilité et nous nous engageons à respecter les délais convenus."
  },
  {
    question: "Comment IM COLOR sarl garantit-elle la qualité de ses constructions ?",
    answer: "Nous utilisons uniquement des matériaux de première qualité, respectons les normes internationales de construction, effectuons des contrôles qualité à chaque étape, et offrons une garantie sur tous nos travaux. Notre équipe est composée de professionnels qualifiés et expérimentés."
  },
  {
    question: "Proposez-vous un service de financement ou d'échelonnement des paiements ?",
    answer: "Oui, nous proposons des solutions de paiement flexibles adaptées à votre budget. Nous pouvons établir un échéancier de paiement en fonction de l'avancement des travaux et vous mettre en relation avec nos partenaires financiers si nécessaire."
  },
  {
    question: "IM COLOR sarl s'occupe-t-elle des démarches administratives ?",
    answer: "Absolument ! Nous nous occupons de toutes les démarches administratives : permis de construire, autorisations nécessaires, déclarations auprès des services municipaux, et nous vous assistons dans toutes les procédures légales liées à votre projet."
  },
  {
    question: "Quels sont les matériaux utilisés par IM COLOR sarl ?",
    answer: "Nous sélectionnons rigoureusement nos matériaux auprès de fournisseurs reconnus. Nous utilisons du ciment de qualité supérieure, des fers à béton certifiés, des peintures résistantes au climat tropical, et tous les matériaux respectent les normes de construction en vigueur."
  },
  {
    question: "Peut-on visiter des réalisations de IM COLOR sarl ?",
    answer: "Bien sûr ! Nous organisons régulièrement des visites de nos réalisations pour nos clients potentiels. Contactez-nous pour programmer une visite de nos projets récents et constater la qualité de notre travail par vous-même."
  },
  {
    question: "IM COLOR sarl propose-t-elle un service après-vente ?",
    answer: "Oui, nous offrons un service après-vente complet avec une garantie sur tous nos travaux. Notre équipe reste disponible pour toute intervention, maintenance ou réparation nécessaire. Nous assurons également un suivi régulier de nos réalisations."
  },
  {
    question: "Comment obtenir un devis pour mon projet ?",
    answer: "C'est très simple ! Contactez-nous par téléphone, email ou via notre formulaire en ligne. Nous programmons une visite gratuite pour étudier votre projet, puis nous vous remettons un devis détaillé sous 48h. Le devis est entièrement gratuit et sans engagement."
  },
  {
    question: "IM COLOR sarl travaille-t-elle en dehors de Kinshasa ?",
    answer: "Oui, bien que basés à Kinshasa, nous intervenons dans toute la République Démocratique du Congo. Pour les projets en province, nous adaptons notre organisation logistique et nos équipes selon les besoins spécifiques de chaque région."
  }
];

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-imcolor-gray-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Questions Fréquentes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Retrouvez les réponses aux questions les plus fréquemment posées sur nos services et notre façon de travailler. Pour toute autre question, n'hésitez pas à nous contacter.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-border overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-border pt-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Notre équipe est là pour vous aider. Contactez-nous et nous répondrons rapidement à toutes vos interrogations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-orange flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Nous contacter
            </Button>
            <Button variant="outline" className="btn-outline-orange flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Appeler maintenant
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;