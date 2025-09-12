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

    {/* Ultra Professional & Interactive Footer */}
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-tl from-pink-500/15 via-rose-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce delay-1100"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Company Info - Enhanced */}
            <div className="lg:col-span-5 space-y-8">
              <div className="group">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="relative">
                    <img 
                      src="/images/Logo.jpg" 
                      alt="Haryana Advertiser Logo" 
                      className="w-20 h-20 rounded-2xl object-cover shadow-2xl ring-4 ring-gradient-to-r from-cyan-400 to-purple-500 ring-opacity-50 group-hover:ring-opacity-100 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3"
                    />
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                      Haryana Advertiser
                    </h3>
                    <p className="text-lg font-semibold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                      🏆 Printing Excellence Since 2009
                    </p>
                  </div>
                </div>
                
                <div className="relative p-6 bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                  <p className="text-gray-200 text-lg leading-relaxed mb-6">
                    🎨 Your trusted partner for all printing needs in Rohtak, Haryana. 
                    We specialize in creating <span className="text-cyan-400 font-semibold">stunning visual solutions</span> with 
                    <span className="text-emerald-400 font-semibold"> premium quality</span>, 
                    <span className="text-pink-400 font-semibold"> competitive prices</span>, and 
                    <span className="text-orange-400 font-semibold"> exceptional customer service</span>.
                  </p>
                  
                  {/* Enhanced Social Buttons */}
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => window.open('https://wa.me/919896615867', '_blank')}
                      className="group relative w-16 h-16 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-400 hover:via-emerald-400 hover:to-green-500 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-green-500/50 transform hover:scale-125 hover:rotate-12"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="w-8 h-8 text-white group-hover:animate-bounce" />
                      <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                    </button>
                    
                    <button 
                      onClick={() => window.open('tel:+919896615867', '_self')}
                      className="group relative w-16 h-16 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 hover:from-blue-400 hover:via-cyan-400 hover:to-blue-500 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-125 hover:-rotate-12"
                      aria-label="Phone"
                    >
                      <Phone className="w-8 h-8 text-white group-hover:animate-bounce" />
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                    </button>
                    
                    <button 
                      onClick={() => window.open('mailto:info@haryanaadvertiser.com', '_blank')}
                      className="group relative w-16 h-16 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-400 hover:via-pink-400 hover:to-purple-500 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-125 hover:rotate-12"
                      aria-label="Email"
                    >
                      <span className="text-2xl text-white group-hover:animate-bounce">✉️</span>
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links - Enhanced */}
            <div className="lg:col-span-3">
              <div className="relative p-6 bg-gradient-to-br from-slate-800/40 to-blue-900/30 rounded-2xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                <h4 className="text-2xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 bg-clip-text text-transparent flex items-center">
                  <span className="mr-3 text-3xl">🔗</span> Quick Links
                </h4>
                <ul className="space-y-4">
                  {[
                    { name: 'Home', icon: '🏠', id: 'home' },
                    { name: 'About Us', icon: '👥', id: 'about' },
                    { name: 'Services', icon: '🎨', id: 'services' },
                    { name: 'Contact', icon: '📞', id: 'contact' }
                  ].map((link, index) => (
                    <li key={index}>
                      <button 
                        onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                        className="group w-full text-left flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-transparent to-transparent hover:from-blue-500/20 hover:to-purple-500/20 text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-3 hover:scale-105"
                      >
                        <span className="text-xl group-hover:animate-bounce">{link.icon}</span>
                        <span className="font-medium group-hover:font-semibold">{link.name}</span>
                        <span className="ml-auto text-blue-400 group-hover:text-white transition-colors">→</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info - Enhanced */}
            <div className="lg:col-span-4">
              <div className="relative p-6 bg-gradient-to-br from-slate-800/40 to-purple-900/30 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                <h4 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center">
                  <span className="mr-3 text-3xl">📋</span> Contact Info
                </h4>
                <div className="space-y-5">
                  {[
                    { icon: '📱', color: 'from-green-500 to-emerald-600', text: '+91-9896615867', action: () => window.open('tel:+919896615867') },
                    { icon: '✉️', color: 'from-red-500 to-rose-600', text: 'info@haryanaadvertiser.com', action: () => window.open('mailto:info@haryanaadvertiser.com') },
                    { icon: '📍', color: 'from-purple-500 to-violet-600', text: 'Rohtak, Haryana, India', action: () => window.open('https://maps.google.com/?q=Rohtak,Haryana,India') },
                    { icon: '🕒', color: 'from-orange-500 to-amber-600', text: 'Mon-Sat: 9AM-8PM', action: null }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className={`group flex items-center gap-4 p-3 rounded-xl hover:bg-gradient-to-r hover:from-slate-700/30 hover:to-purple-700/30 transition-all duration-300 transform hover:scale-105 ${item.action ? 'cursor-pointer' : ''}`}
                      onClick={item.action || undefined}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                        <span className="text-xl group-hover:animate-pulse">{item.icon}</span>
                      </div>
                      <span className="text-gray-200 group-hover:text-white font-medium group-hover:font-semibold transition-all duration-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Enhanced */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl"></div>
            <div className="relative border-t border-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 pt-8">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6 p-6 bg-gradient-to-r from-slate-800/30 via-purple-900/20 to-slate-800/30 rounded-2xl backdrop-blur-sm">
                <div className="text-center lg:text-left">
                  <p className="text-gray-300 text-lg font-medium">
                    <span className="text-2xl mr-2">©</span>
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">2025 Haryana Advertiser</span>
                    <span className="mx-2">•</span>
                    <span className="text-emerald-400">All rights reserved</span>
                  </p>
                </div>
                <div className="text-center lg:text-right">
                  <p className="text-gray-300 text-lg">
                    <span className="text-xl mr-2">🎨</span>
                    Designed & Developed by{" "}
                    <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold text-xl hover:animate-pulse cursor-pointer">
                      EthicsComputer
                    </span>
                    <span className="text-xl ml-2">✨</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}