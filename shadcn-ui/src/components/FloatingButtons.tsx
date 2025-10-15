import React, { useState } from 'react';
import { Phone, MessageCircle, ChevronUp } from 'lucide-react';

const offices = [
  {
    name: "Rohtak Office",
    phone: "9138119872",
    whatsapp: "9138119872",
  },
  {
    name: "Gurgaon Office",
    phone: "9802919872",
    whatsapp: "9802919872",
  },
];

const FloatingButtons = () => {
  const [showOffices, setShowOffices] = useState(false);

  const handleWhatsApp = (number) => {
    const message = "Hi! I'm interested in your printing services. Please provide more information.";
    const whatsappUrl = `https://wa.me/91${number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowOffices(false);
  };

  const handleCall = (number) => {
    window.open(`tel:+91${number}`, '_self');
    setShowOffices(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Office Selection Dropdown */}
      {showOffices && (
        <div className="mb-3 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          {offices.map((office, index) => (
            <div key={index} className="border-b border-gray-100 last:border-b-0">
              <div className="px-4 py-2 bg-gray-50 text-sm font-medium text-gray-700">
                {office.name}
              </div>
              <div className="flex">
                {/* WhatsApp Option */}
                <button
                  onClick={() => handleWhatsApp(office.whatsapp)}
                  className="flex-1 px-4 py-3 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center space-x-2 transition-colors"
                  title={`WhatsApp ${office.name}`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">{office.whatsapp}</span>
                </button>
                {/* Call Option */}
                <button
                  onClick={() => handleCall(office.phone)}
                  className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center space-x-2 transition-colors"
                  title={`Call ${office.name}`}
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{office.phone}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setShowOffices(!showOffices)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
          showOffices 
            ? 'bg-gray-600 hover:bg-gray-700' 
            : 'bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700'
        }`}
        aria-label="Contact Options"
        title="Contact Us"
      >
        {showOffices ? (
          <ChevronUp className="w-8 h-8 text-white" />
        ) : (
          <div className="flex items-center space-x-1">
            <MessageCircle className="w-4 h-4 text-white" />
            <Phone className="w-4 h-4 text-white" />
          </div>
        )}
      </button>
    </div>
  );
};

export default FloatingButtons;
