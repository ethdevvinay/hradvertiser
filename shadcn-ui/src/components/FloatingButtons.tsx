import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  const handleWhatsApp = () => {
    const message = "Hi! I'm interested in your printing services. Please provide more information.";
    const whatsappUrl = `https://wa.me/919896615867?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919896615867', '_self');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white group-hover:animate-pulse" />
      </button>

      {/* Call Button */}
      <button
        onClick={handleCall}
        className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Call us"
      >
        <Phone className="w-7 h-7 text-white group-hover:animate-pulse" />
      </button>
    </div>
  );
};

export default FloatingButtons;