import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Sparkles, Zap, Award, Star, MapPin } from 'lucide-react';

const Hero = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState(0);

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

  const features = [
    { icon: Award, text: "Premium Quality Printing", color: "text-blue-500" },
    { icon: Zap, text: "Lightning Fast Delivery", color: "text-orange-500" },
    { icon: Star, text: "5000+ Happy Customers", color: "text-yellow-500" },
    { icon: Sparkles, text: "15+ Years Experience", color: "text-purple-500" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleGetQuote = () => {
    const message = "Hi! I'm interested in getting a printing quote. Please provide me with details about your services and pricing.";
    const whatsappUrl = `https://wa.me/91${offices[selectedOffice].whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:+91${offices[selectedOffice].phone}`, '_self');
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-2xl animate-spin-slow"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-orange-500 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-16 w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-green-500 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Dynamic Feature Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-2 transition-all duration-500 ${
                      index === currentFeature 
                        ? 'scale-110 opacity-100' 
                        : 'scale-90 opacity-50'
                    }`}
                  >
                    <IconComponent className={`w-5 h-5 ${feature.color}`} />
                    {index === currentFeature && (
                      <span className="text-gray-700 font-medium whitespace-nowrap">
                        {feature.text}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main Heading with Gradient Text */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient">
                Haryana Advertiser
              </span>
            </h1>
            <div className="relative">
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-2">
                Printing Excellence at Your Service
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
            </div>
          </div>

          {/* Enhanced Description */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your ideas into stunning prints with our 
            <span className="text-blue-600 font-semibold"> professional digital and offset printing services</span> in Rohtak, Haryana. 
            <span className="text-orange-600 font-semibold"> Quality prints, competitive prices, and lightning-fast delivery</span> for all your printing needs.
          </p>

          {/* Office Selection */}
          <div className="mb-8">
            <p className="text-lg text-gray-600 mb-4">Choose your preferred office:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {offices.map((office, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOffice(index)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl border-2 transition-all duration-300 ${
                    selectedOffice === index
                      ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-lg scale-105'
                      : 'border-gray-300 bg-white text-gray-600 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-semibold">{office.name}</div>
                    <div className="text-sm opacity-75">+91 {office.phone}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              onClick={handleGetQuote}
              className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Get Instant Quote
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button 
              onClick={handleCall}
              variant="outline"
              className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Call Now
            </Button>
          </div>

          {/* Enhanced Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-200/50">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assured</h3>
                <p className="text-gray-600 leading-relaxed">Premium printing with state-of-the-art equipment and meticulous attention to detail</p>
              </div>
            </div>

            <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-200/50 md:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
                <p className="text-gray-600 leading-relaxed">Quick turnaround times with same-day delivery available for urgent orders</p>
              </div>
            </div>

            <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-200/50">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-3xl font-bold">₹</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Best Value</h3>
                <p className="text-gray-600 leading-relaxed">Competitive pricing with transparent costs and bulk discounts available</p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-gray-600 font-medium">5000+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-500" />
              <span className="text-gray-600 font-medium">15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-500" />
              <span className="text-gray-600 font-medium">24-48 Hour Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;