import { Phone, MessageCircle } from 'lucide-react';

const CTABanner = () => {
  const handleWhatsApp = () => {
    const message = "Hi! I want to get a custom printing quote. Please provide me with details about your services and pricing.";
    const whatsappUrl = `https://wa.me/919896615867?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919896615867', '_self');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Get Your Custom Printing Quote Today!
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Ready to bring your ideas to life? Contact us now for a free consultation and competitive quote. 
            Quality printing services with fast delivery guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Request Quote via WhatsApp
            </button>
            
            <button 
              onClick={handleCall}
              className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone className="w-6 h-6" />
              Call Now: +91-9896615867
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>24-48 Hour Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;