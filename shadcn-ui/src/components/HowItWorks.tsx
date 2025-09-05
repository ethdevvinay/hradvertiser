import { useState, useEffect } from 'react';
import { MessageSquare, CheckCircle, Printer, Truck } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: MessageSquare,
      title: "Consultation & Design",
      description: "Share your requirements with us. Our design team will create mockups and provide expert consultation.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: CheckCircle,
      title: "Approval & Customization",
      description: "Review designs, make changes, and approve final artwork. We ensure everything meets your expectations.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Printer,
      title: "Printing & Quality Check",
      description: "Professional printing with rigorous quality control. Every piece is inspected before packaging.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Truck,
      title: "Delivery / Pickup",
      description: "Fast delivery to your location or convenient pickup from our facility in Rohtak, Haryana.",
      color: "from-purple-500 to-purple-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It <span className="text-blue-700">Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures smooth execution from concept to delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = index === activeStep;
            
            return (
              <div 
                key={index} 
                className={`relative text-center transition-all duration-500 ${
                  isActive ? 'transform scale-105' : ''
                }`}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                  {index + 1}
                </div>

                {/* Card */}
                <div className={`p-6 rounded-xl border-2 transition-all duration-500 ${
                  isActive 
                    ? 'border-blue-500 shadow-lg bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                }`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 ${
                    isActive ? 'animate-pulse' : ''
                  }`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const message = "Hi! I'd like to start a printing project. Can you guide me through the process?";
              const whatsappUrl = `https://wa.me/919896615867?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;