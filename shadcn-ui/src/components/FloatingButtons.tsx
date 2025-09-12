import { Phone, MessageCircle } from 'lucide-react';

const offices = [
  {
    name: "Rohtak Office",
    phone: "9802919872",
    whatsapp: "9802919872",
  },
  {
    name: "Gurgaon Office",
    phone: "9138119872",
    whatsapp: "9138119872",
  },
];

const FloatingButtons = () => {
  const handleWhatsApp = (number) => {
    const message = "Hi! I'm interested in your printing services. Please provide more information.";
    const whatsappUrl = `https://wa.me/91${number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = (number) => {
    window.open(`tel:+91${number}`, '_self');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {offices.map((office, index) => (
        <div key={index} className="flex space-x-2">
          {/* WhatsApp Button */}
          <button
            onClick={() => handleWhatsApp(office.whatsapp)}
            className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label={`Contact ${office.name} via WhatsApp`}
            title={`${office.name} - WhatsApp`}
          >
            <MessageCircle className="w-7 h-7 text-white group-hover:animate-pulse" />
          </button>

          {/* Call Button */}
          <button
            onClick={() => handleCall(office.phone)}
            className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label={`Call ${office.name}`}
            title={`${office.name} - Call`}
          >
            <Phone className="w-7 h-7 text-white group-hover:animate-pulse" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default FloatingButtons;
