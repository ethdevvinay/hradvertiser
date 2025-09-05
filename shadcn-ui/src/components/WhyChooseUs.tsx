import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Clock, Grid3X3 } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "State-of-the-art equipment and premium materials ensure exceptional print quality every time.",
      stat: "99.9%",
      statLabel: "Quality Rate"
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Competitive rates with transparent pricing. No hidden costs, just honest value for money.",
      stat: "30%",
      statLabel: "Cost Savings"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality. Rush orders available for urgent needs.",
      stat: "24-48hrs",
      statLabel: "Delivery Time"
    },
    {
      icon: Grid3X3,
      title: "Wide Range",
      description: "Complete printing solutions under one roof. From business cards to large format printing.",
      stat: "19+",
      statLabel: "Services"
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-700">Haryana Advertiser?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering exceptional printing services that exceed your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-700 mb-2">{feature.stat}</div>
                  <div className="text-sm text-gray-500 mb-4">{feature.statLabel}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;