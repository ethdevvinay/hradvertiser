import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Basic Package",
      price: "₹999",
      period: "Starting from",
      description: "Perfect for small businesses and personal needs",
      features: [
        "Business Cards (500 pcs)",
        "Basic Design Support",
        "Standard Paper Quality",
        "3-4 Days Delivery",
        "1 Free Revision",
        "Digital Proof"
      ],
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Professional Package",
      price: "₹2,499",
      period: "Starting from",
      description: "Ideal for growing businesses and marketing campaigns",
      features: [
        "Business Cards (1000 pcs)",
        "Brochures (500 pcs)",
        "Premium Design Service",
        "High-Quality Materials",
        "24-48 Hours Delivery",
        "3 Free Revisions",
        "Free Delivery in Rohtak"
      ],
      popular: true,
      color: "border-blue-500"
    },
    {
      name: "Enterprise Package",
      price: "₹4,999",
      period: "Starting from",
      description: "Complete solution for large businesses and events",
      features: [
        "Complete Branding Kit",
        "Large Format Printing",
        "Custom Design & Consultation",
        "Premium Materials & Finishes",
        "Same Day Delivery Available",
        "Unlimited Revisions",
        "Dedicated Account Manager",
        "Bulk Order Discounts"
      ],
      popular: false,
      color: "border-orange-500"
    }
  ];

  const handleGetQuote = (packageName: string) => {
    const message = `Hi! I'm interested in the ${packageName}. Please provide me with detailed pricing and customization options for my requirements.`;
    const whatsappUrl = `https://wa.me/919896615867?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent <span className="text-blue-700">Pricing</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package for your printing needs. All prices are starting rates and can be customized based on your specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.color} border-2 ${plan.popular ? 'scale-105 shadow-xl' : 'shadow-lg'} hover:shadow-xl transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-700">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleGetQuote(plan.name)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Get Custom Quote
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need something different? We create custom packages tailored to your specific needs.
          </p>
          <button 
            onClick={() => {
              const message = "Hi! I need a custom printing package. Please help me create a solution that fits my specific requirements and budget.";
              const whatsappUrl = `https://wa.me/919896615867?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Request Custom Package
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;