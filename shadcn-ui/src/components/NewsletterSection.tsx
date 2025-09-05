import { useState } from 'react';
import { Mail, Gift, Bell, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you'd send this to your backend
      const message = `Hi! I want to subscribe to Haryana Advertiser newsletter with email: ${email}. Please add me to your mailing list for offers and updates.`;
      const whatsappUrl = `https://wa.me/919896615867?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const benefits = [
    {
      icon: Gift,
      title: "Exclusive Offers",
      description: "Get special discounts and early access to promotions"
    },
    {
      icon: Bell,
      title: "New Services",
      description: "Be the first to know about our latest printing services"
    },
    {
      icon: Zap,
      title: "Quick Tips",
      description: "Receive design tips and printing best practices"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 translate-y-48"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to get exclusive offers, printing tips, and be the first to know about our new services and special promotions.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-blue-100 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* Subscription Form */}
          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white/20"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 font-semibold whitespace-nowrap"
                >
                  Subscribe Now
                </Button>
              </div>
              <p className="text-blue-200 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-6">
                <div className="text-green-300 text-4xl mb-4">✓</div>
                <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
                <p className="text-green-200">
                  We'll contact you via WhatsApp to confirm your subscription and start sending you exclusive offers!
                </p>
              </div>
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-blue-200 text-sm">
              Join over 1000+ satisfied customers who trust Haryana Advertiser for their printing needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;