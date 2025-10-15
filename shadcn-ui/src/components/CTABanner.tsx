import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Sparkles, Star, Zap, Award, Clock, CheckCircle } from 'lucide-react';

// Inline CSS animations
const animationStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
    50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(147, 51, 234, 0.6); }
  }
  
  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes bounce-in {
    0% { transform: scale(0.3) rotate(-10deg); opacity: 0; }
    50% { transform: scale(1.05) rotate(5deg); }
    70% { transform: scale(0.9) rotate(-2deg); }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  .animate-float { animation: float 6s ease-in-out infinite; }
  .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
  .animate-gradient { 
    background-size: 200% 200%; 
    animation: gradient-shift 3s ease infinite; 
  }
  .animate-bounce-in { animation: bounce-in 0.8s ease-out; }
  .animate-shimmer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    animation: shimmer 2s infinite;
  }
  
  .animation-delay-200 { animation-delay: 200ms; }
  .animation-delay-400 { animation-delay: 400ms; }
  .animation-delay-600 { animation-delay: 600ms; }
  .animation-delay-800 { animation-delay: 800ms; }
`;

const CTABanner = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const offices = [
    {
      name: "Rohtak Office",
      phone: "9138119872",
      whatsapp: "9138119872",
      color: "from-emerald-500 to-teal-600",
      hoverColor: "from-emerald-600 to-teal-700",
      icon: Star,
    },
    {
      name: "Gurgaon Office", 
      phone: "9802919872",
      whatsapp: "9802919872",
      color: "from-purple-500 to-pink-600",
      hoverColor: "from-purple-600 to-pink-700",
      icon: Zap,
    },
  ];

  const features = [
    { icon: Award, text: "Premium Quality", color: "text-yellow-400" },
    { icon: Clock, text: "24-48 Hour Delivery", color: "text-green-400" },
    { icon: CheckCircle, text: "100% Satisfaction", color: "text-blue-400" },
  ];

  const handleWhatsApp = (number: string) => {
    const message = "Hi! I want to get a custom printing quote. Please provide me with details about your services and pricing.";
    const whatsappUrl = `https://wa.me/91${number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCall = (number: string) => {
    window.open(`tel:+91${number}`, "_self");
  };

  return (
    <>
      {/* Inject CSS animations */}
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 animate-gradient">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-400"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-800"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 6}s`
              }}
            >
              <Sparkles 
                className="w-4 h-4 text-white opacity-20" 
                style={{
                  filter: `hue-rotate(${Math.random() * 360}deg)`
                }}
              />
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="mb-16 animate-bounce-in">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-8 animate-pulse-glow">
                <Sparkles className="w-10 h-10 text-white animate-float" />
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  Transform Your Ideas
                </span>
                <br />
                <span className="text-white">Into Stunning</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  Reality! ✨
                </span>
              </h1>
              
              <p className="text-2xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto animate-bounce-in animation-delay-200">
                🚀 <strong>Premium Printing Services</strong> with lightning-fast delivery! 
                Get your <span className="text-yellow-400 font-bold">FREE consultation</span> and competitive quote today!
              </p>
            </div>

            {/* Interactive Office Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {offices.map((office, index) => {
                const IconComponent = office.icon;
                return (
                  <div 
                    key={index} 
                    className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 animate-bounce-in"
                    style={{ animationDelay: `${index * 200 + 400}ms` }}
                  >
                    {/* Card Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl" 
                         style={{ background: `linear-gradient(45deg, ${office.color.replace('from-', '').replace(' to-', ', ')})` }}></div>
                    
                    <div className="relative z-10">
                      {/* Office Header */}
                      <div className="text-center mb-8">
                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${office.color} rounded-full mb-4 animate-pulse-glow group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          🏢 {office.name}
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-50"></div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-4">
                        {/* WhatsApp Button */}
                        <button
                          onClick={() => handleWhatsApp(office.whatsapp)}
                          onMouseEnter={() => setHoveredButton(`whatsapp-${index}`)}
                          onMouseLeave={() => setHoveredButton(null)}
                          className={`relative w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 shadow-2xl overflow-hidden animate-shimmer
                            ${hoveredButton === `whatsapp-${index}` ? 'animate-pulse-glow' : ''}`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                          <MessageCircle className="w-6 h-6 animate-float" />
                          <span>💬 WhatsApp {office.name}</span>
                          <div className="absolute right-4">
                            <Zap className="w-5 h-5 text-yellow-300 animate-pulse" />
                          </div>
                        </button>

                        {/* Call Button */}
                        <button
                          onClick={() => handleCall(office.phone)}
                          onMouseEnter={() => setHoveredButton(`call-${index}`)}
                          onMouseLeave={() => setHoveredButton(null)}
                          className={`relative w-full bg-gradient-to-r ${office.color} hover:bg-gradient-to-r hover:${office.hoverColor} text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 shadow-2xl overflow-hidden animate-shimmer
                            ${hoveredButton === `call-${index}` ? 'animate-pulse-glow' : ''}`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                          <Phone className="w-6 h-6 animate-float" />
                          <span>📞 Call: +91-{office.phone}</span>
                          <div className="absolute right-4">
                            <Star className="w-5 h-5 text-yellow-300 animate-pulse" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Features Section */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 animate-bounce-in animation-delay-600">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center justify-center gap-3">
                <Award className="w-8 h-8 text-yellow-400 animate-float" />
                Why Choose Us?
                <Award className="w-8 h-8 text-yellow-400 animate-float animation-delay-200" />
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div 
                      key={index} 
                      className="group text-center animate-bounce-in"
                      style={{ animationDelay: `${index * 150 + 800}ms` }}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                        <IconComponent className={`w-8 h-8 ${feature.color} animate-float`} />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{feature.text}</h4>
                      <div className="w-12 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-50"></div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 animate-bounce-in animation-delay-800">
              <p className="text-2xl text-yellow-300 font-bold mb-4 animate-pulse">
                🎯 Ready to Get Started? Contact Us NOW!
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-gray-300">
                <div className="flex items-center gap-2 animate-float">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>✨ Free Consultation</span>
                </div>
                <div className="flex items-center gap-2 animate-float animation-delay-200">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>⚡ Lightning Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2 animate-float animation-delay-400">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <span>🏆 Premium Quality Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTABanner;
