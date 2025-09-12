import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import LocationMap from '@/components/LocationMap';
import CTABanner from '@/components/CTABanner';
import Contact from '@/components/Contact';
import FloatingButtons from '@/components/FloatingButtons';
import { Phone, MessageCircle } from 'lucide-react';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <HowItWorks />
      <Gallery />
      <Testimonials />
      <LocationMap />
      <CTABanner />
      <Contact />
      <FloatingButtons />
      
      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/images/Logo.jpg" 
                  alt="Haryana Advertiser Logo" 
                  className="w-16 h-16 rounded-xl object-cover shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Haryana Advertiser
                  </h3>
                  <p className="text-sm text-gray-300">Printing Excellence Since 2009</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted partner for all printing needs in Rohtak, Haryana. 
                We specialize in creating stunning visual solutions with premium quality, 
                competitive prices, and exceptional customer service.
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => window.open('https://wa.me/919896615867', '_blank')}
                  className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                </button>
                <button 
                  onClick={() => window.open('tel:+919896615867', '_self')}
                  className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                  aria-label="Phone"
                >
                  <Phone className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-300 block"
                  >
                    → Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-300 block"
                  >
                    → About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-300 block"
                  >
                    → Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-300 block"
                  >
                    → Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Contact Info
              </h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span>+91-9896615867</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">@</span>
                  </div>
                  <span>info@haryanaadvertiser.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <span>Rohtak, Haryana, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">🕒</span>
                  </div>
                  <span>Mon-Sat: 9AM-8PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700/50 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-center md:text-left">
                &copy; 2025 Haryana Advertiser. All rights reserved.
              </p>
              <p className="text-gray-400 text-center md:text-right">
                Designed &amp; Developed by{" "} <span className="text-blue-400 font-semibold">EthicsComputer</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}