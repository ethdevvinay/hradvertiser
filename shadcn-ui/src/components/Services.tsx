import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  CreditCard, 
  FileText, 
  Image, 
  Printer, 
  Calendar, 
  Award,
  Sparkles,
  Zap,
  Heart,
  Star,
  Gift,
  Palette,
  Camera,
  Book,
  Shirt,
  Coffee,
  Trophy,
  Briefcase,
  MapPin
} from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      title: "Business Cards",
      description: "Professional business cards with premium finishes and modern designs",
      icon: CreditCard,
      gradient: "from-pink-500 via-red-500 to-yellow-500",
      bgGradient: "from-pink-50 to-red-50",
      features: ["Premium Paper", "Multiple Finishes", "Quick Delivery"]
    },
    {
      title: "Brochures & Flyers",
      description: "Eye-catching marketing materials to promote your business effectively",
      icon: FileText,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient: "from-blue-50 to-cyan-50",
      features: ["Full Color", "Various Sizes", "Bulk Discounts"]
    },
    {
      title: "Digital Printing",
      description: "High-quality digital prints for all your personal and business needs",
      icon: Printer,
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      bgGradient: "from-green-50 to-emerald-50",
      features: ["HD Quality", "Fast Turnaround", "Any Quantity"]
    },
    {
      title: "Flex Printing",
      description: "Banners, posters, and signage for maximum visual impact",
      icon: Image,
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      bgGradient: "from-orange-50 to-amber-50",
      features: ["Weather Resistant", "HD Graphics", "Custom Sizes"]
    },
    {
      title: "Event Materials",
      description: "Complete printing solutions for conferences, weddings, and events",
      icon: Calendar,
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      bgGradient: "from-indigo-50 to-purple-50",
      features: ["Event Packages", "Bulk Orders", "Same Day Service"]
    },
    {
      title: "Custom Stickers",
      description: "Vibrant stickers and labels for branding, decoration, and packaging",
      icon: Star,
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      bgGradient: "from-yellow-50 to-orange-50",
      features: ["Waterproof", "Die Cut", "Custom Shapes"]
    },
    {
      title: "Gift Packaging",
      description: "Beautiful gift boxes, bags, and wrapping solutions for special occasions",
      icon: Gift,
      gradient: "from-rose-500 via-pink-500 to-purple-500",
      bgGradient: "from-rose-50 to-pink-50",
      features: ["Luxury Finish", "Custom Sizes", "Ribbon & Bow"]
    },
    {
      title: "Logo Design",
      description: "Professional logo design and branding services for your business",
      icon: Palette,
      gradient: "from-violet-500 via-purple-500 to-indigo-500",
      bgGradient: "from-violet-50 to-purple-50",
      features: ["Multiple Concepts", "Unlimited Revisions", "Vector Files"]
    },
    {
      title: "Photo Printing",
      description: "High-quality photo prints for memories, portfolios, and displays",
      icon: Camera,
      gradient: "from-teal-500 via-cyan-500 to-blue-500",
      bgGradient: "from-teal-50 to-cyan-50",
      features: ["Premium Paper", "Color Correction", "Multiple Sizes"]
    },
    {
      title: "Catalogs & Magazines",
      description: "Professional catalogs, magazines, and booklets for your business",
      icon: Book,
      gradient: "from-emerald-500 via-green-500 to-lime-500",
      bgGradient: "from-emerald-50 to-green-50",
      features: ["Perfect Binding", "Glossy Finish", "Bulk Printing"]
    },
    {
      title: "T-Shirt Printing",
      description: "Custom t-shirt printing for events, teams, and promotional campaigns",
      icon: Shirt,
      gradient: "from-amber-500 via-yellow-500 to-lime-500",
      bgGradient: "from-amber-50 to-yellow-50",
      features: ["DTG Printing", "Screen Print", "Vinyl Transfer"]
    },
    {
      title: "Mugs & Gifts",
      description: "Personalized mugs, keychains, and promotional gifts for any occasion",
      icon: Coffee,
      gradient: "from-red-500 via-pink-500 to-rose-500",
      bgGradient: "from-red-50 to-pink-50",
      features: ["Sublimation Print", "Laser Engraving", "Custom Design"]
    },
    {
      title: "Certificates & Awards",
      description: "Professional certificates, awards, and recognition materials",
      icon: Trophy,
      gradient: "from-blue-600 via-indigo-500 to-purple-500",
      bgGradient: "from-blue-50 to-indigo-50",
      features: ["Gold Foiling", "Embossing", "Premium Frame"]
    },
    {
      title: "Corporate Identity",
      description: "Complete corporate branding packages including letterheads and envelopes",
      icon: Briefcase,
      gradient: "from-gray-600 via-slate-500 to-zinc-500",
      bgGradient: "from-gray-50 to-slate-50",
      features: ["Complete Package", "Brand Guidelines", "Stationery Set"]
    },
    {
      title: "Vehicle Graphics",
      description: "Eye-catching vehicle wraps, decals, and advertising graphics",
      icon: MapPin,
      gradient: "from-orange-600 via-red-500 to-pink-500",
      bgGradient: "from-orange-50 to-red-50",
      features: ["Full Wrap", "Partial Graphics", "Reflective Material"]
    }
  ];

  const handleBookService = (serviceName: string) => {
    const message = `Hi! I'm interested in ${serviceName}. Please provide me with detailed information about pricing, customization options, and delivery time.`;
    const whatsappUrl = `https://wa.me/919896615867?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-pink-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-green-300/20 to-yellow-300/20 rounded-full blur-2xl animate-spin-slow"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-300/20 to-red-300/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            Our Premium Services
            <Sparkles className="w-4 h-4" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Complete Printing
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of 
            <span className="text-blue-600 font-semibold"> 16+ professional printing services</span> designed to bring your ideas to life with 
            <span className="text-purple-600 font-semibold"> stunning quality and vibrant colors</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 bg-gradient-to-br ${service.bgGradient} cursor-pointer h-full`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Floating Icon */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className={`w-6 h-6 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`} />
                </div>

                <CardHeader className="relative z-10 pb-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors leading-tight">
                    {service.title}
                  </CardTitle>
                  
                  <div className={`text-sm font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.price}
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 pt-0">
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-1 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={() => handleBookService(service.title)}
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:scale-105 text-white font-semibold py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-0 text-sm`}
                  >
                    <Zap className="w-3 h-3 mr-1" />
                    Book Now
                  </Button>
                </CardContent>

                {/* Hover Effect Overlay */}
                {hoveredService === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-2 left-2">
                      <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
                    </div>
                    <div className="absolute bottom-2 right-2">
                      <Award className="w-4 h-4 text-purple-400 animate-bounce" />
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Something Custom?
            </h3>
            <p className="text-gray-600 mb-6">
              We create personalized printing solutions tailored to your unique requirements and budget.
            </p>
            <Button 
              onClick={() => {
                const message = "Hi! I need a custom printing solution. Please help me create something unique for my requirements.";
                const whatsappUrl = `https://wa.me/919896615867?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;