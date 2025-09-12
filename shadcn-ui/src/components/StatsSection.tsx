import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Award, 
  Clock, 
  Smile, 
  Star, 
  Zap, 
  ArrowRight, 
  Play,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const HeroSection = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    experience: 0,
    satisfaction: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  const finalStats = {
    clients: 5000,
    projects: 12000,
    experience: 15,
    satisfaction: 99
  };

  const stats = [
    {
      icon: Users,
      label: "Happy Clients",
      value: counters.clients,
      suffix: "+",
      color: "from-cyan-400 via-blue-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50"
    },
    {
      icon: Award,
      label: "Projects Completed",
      value: counters.projects,
      suffix: "+",
      color: "from-emerald-400 via-green-500 to-teal-600",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-50"
    },
    {
      icon: Clock,
      label: "Years Experience",
      value: counters.experience,
      suffix: "+",
      color: "from-orange-400 via-red-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50"
    },
    {
      icon: Smile,
      label: "Satisfaction Rate",
      value: counters.satisfaction,
      suffix: "%",
      color: "from-violet-400 via-purple-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-violet-50 to-purple-50"
    }
  ];

  const features = [
    "Premium Quality Printing",
    "24/7 Customer Support", 
    "Fast Delivery Guarantee",
    "Eco-Friendly Materials"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const duration = 2500;
    const steps = 80;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalStats).map((key) => {
      const finalValue = finalStats[key as keyof typeof finalStats];
      const increment = finalValue / steps;
      let currentValue = 0;

      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
        }
        
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepDuration);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Hero Content */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 font-medium">Premium Printing Solutions</span>
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent leading-tight">
            Haryana
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Advertiser
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your ideas into stunning reality with our 
            <span className="text-cyan-400 font-semibold"> world-class printing services</span>. 
            From business cards to large format displays, we deliver 
            <span className="text-purple-400 font-semibold"> excellence in every print</span>.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 transition-all duration-300 hover:bg-white/20 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={() => {
                const message = "Hi! I'm interested in your premium printing services. Can we discuss my requirements?";
                const whatsappUrl = `https://wa.me/919802919872?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <Zap className="w-6 h-6" />
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group flex items-center gap-3 text-white hover:text-cyan-300 font-semibold text-lg transition-colors">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Play className="w-6 h-6 ml-1" />
              </div>
              Watch Our Story
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent ml-3">
                Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that showcase our commitment to excellence and innovation in the printing industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index} 
                  className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                  
                  <div className="relative z-10">
                    <div className="relative mb-6">
                      <div className={`w-24 h-24 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3`}>
                        <IconComponent className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    </div>
                    
                    <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                      {stat.value.toLocaleString()}{stat.suffix}
                    </div>
                    
                    <div className="text-gray-300 text-lg font-semibold">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to Create Something Amazing?
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Join thousands of satisfied customers who trust us with their printing needs. 
                From concept to completion, we're here to bring your vision to life with 
                unmatched quality and service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    const message = "Hi! I'm ready to start my printing project. Let's discuss the details!";
                    const whatsappUrl = `https://wa.me/919802919872?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                >
                  Start Your Project
                </button>
                <button className="border-2 border-white/30 hover:border-white/50 text-white hover:bg-white/10 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;