import { useState, useEffect } from 'react';
import { Users, Award, Clock, Smile } from 'lucide-react';

const StatsSection = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    experience: 0,
    satisfaction: 0
  });

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
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Award,
      label: "Projects Completed",
      value: counters.projects,
      suffix: "+",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      label: "Years Experience",
      value: counters.experience,
      suffix: "+",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Smile,
      label: "Satisfaction Rate",
      value: counters.satisfaction,
      suffix: "%",
      color: "from-purple-500 to-purple-600"
    }
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalStats).map((key) => {
      const finalValue = finalStats[key as keyof typeof finalStats];
      const increment = finalValue / steps;
      let currentValue = 0;

      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
          clearInterval(intervals.find(interval => interval === setInterval(() => {}, 0)));
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
    <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-blue-400">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                
                <div className="text-gray-300 text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why These Numbers Matter
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Every number represents our dedication to quality, innovation, and customer satisfaction. 
              From our first client to our 5000th, each project has been handled with the same level 
              of care and professionalism that defines Haryana Advertiser.
            </p>
            <button 
              onClick={() => {
                const message = "Hi! I'm impressed by your track record. I'd like to discuss my printing requirements with you.";
                const whatsappUrl = `https://wa.me/919896615867?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Join Our Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;