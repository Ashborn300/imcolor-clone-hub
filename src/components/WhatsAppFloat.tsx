import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const WhatsAppFloat = () => {
  const whatsappNumber = "+243816728505";
  
  const openWhatsApp = () => {
    const message = "Bonjour, j'aimerais en savoir plus sur vos services.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={openWhatsApp}
        className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
        size="icon"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;