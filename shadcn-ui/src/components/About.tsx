import { useState, useEffect } from 'react';
import { Award, Users, Clock, Heart, Sparkles, Zap, Star, Trophy } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { icon: Award, text: "Premium Quality", color: "text-blue-500", bg: "bg-blue-500" },
    { icon: Users, text: "5000+ Customers", color: "text-green-500", bg: "bg-green-500" },
    { icon: Clock, text: "Fast Service", color: "text-orange-500", bg: "bg-orange-500" },
    { icon: Heart, text: "Customer Love", color: "text-pink-500", bg: "bg-pink-500" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-tl from-orange-400/20 to-yellow-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-spin-slow"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 right-32 w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-48 left-48 w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
                <Sparkles className="w-4 h-4" />
                About Us
                <Sparkles className="w-4 h-4" />
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                  Crafting Excellence
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
                  Since 2009
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Welcome to <span className="text-purple-600 font-semibold">Haryana Advertiser</span>, where 
                <span className="text-pink-600 font-semibold"> creativity meets precision</span> in the world of printing. 
                For over <span className="text-orange-600 font-semibold">15 years</span>, we've been transforming ideas into 
                <span className="text-blue-600 font-semibold"> stunning visual realities</span>.
              </p>
              
              <p>
                Our state-of-the-art facility in <span className="text-green-600 font-semibold">Rohtak, Haryana</span> is equipped with 
                <span className="text-purple-600 font-semibold"> cutting-edge technology</span> and operated by a team of 
                <span className="text-pink-600 font-semibold"> passionate professionals</span> who understand that every print tells a story.
              </p>
            </div>

            {/* Dynamic Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div 
                    key={index}
                    className={`flex items-center gap-3 p-4 rounded-2xl transition-all duration-500 ${
                      index === activeFeature 
                        ? 'bg-white shadow-xl scale-105 border-2 border-purple-200' 
                        : 'bg-white/60 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center shadow-lg ${
                      index === activeFeature ? 'animate-pulse' : ''
                    }`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className={`font-semibold ${feature.color} ${
                      index === activeFeature ? 'text-lg' : 'text-base'
                    } transition-all duration-300`}>
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Logo and Stats */}
          <div className="relative">
            {/* Main Logo Container */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
              
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 group-hover:scale-105 transition-all duration-500">
                <div className="text-center mb-6">
                  <img 
                    src="/images/Logo.jpg" 
                    alt="Haryana Advertiser Logo" 
                    className="w-32 h-32 mx-auto rounded-2xl shadow-xl object-cover group-hover:rotate-6 transition-transform duration-500"
                  />
                </div>
                
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Haryana Advertiser
                  </h3>
                  <p className="text-gray-600 font-medium">Printing Excellence Since 2009</p>
                  
                  {/* Achievement Badges */}
                  <div className="flex justify-center gap-4 mt-6">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      <Trophy className="w-4 h-4" />
                      Award Winner
                    </div>
                    <div className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      <Star className="w-4 h-4 fill-current" />
                      Top Rated
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-8 -left-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl p-4 shadow-xl animate-float">
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years</div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-2xl p-4 shadow-xl animate-float delay-1000">
              <div className="text-center">
                <div className="text-2xl font-bold">5K+</div>
                <div className="text-sm">Clients</div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-12 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-2xl p-4 shadow-xl animate-float delay-500">
              <div className="text-center">
                <div className="text-2xl font-bold">99%</div>
                <div className="text-sm">Quality</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl p-1 shadow-2xl max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Ready to Create Something Amazing?
              </h3>
              <p className="text-gray-600 mb-6">
                Let's bring your vision to life with our premium printing services and creative expertise.
              </p>
              <button 
                onClick={() => {
                  const message = "Hi! I'm interested in your premium printing services. Please tell me more about what you can create for me.";
                  const whatsappUrl = `https://wa.me/919896615867?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Let's Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;