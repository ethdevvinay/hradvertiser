import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Star, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(formData.phone)) newErrors.phone = 'Enter valid 10-digit phone number';
    if (!formData.service.trim()) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate loading for better UX
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const whatsappMessage = `Hi! I'm ${formData.name}. I need ${formData.service}. ${formData.message} Please contact me at ${formData.phone}.`;
      const whatsappUrl = `https://wa.me/919896615867?text=${encodeURIComponent(whatsappMessage)}`;
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        setIsSuccess(false);
        setFormData({ name: '', phone: '', service: '', message: '' });
      }, 2000);
    }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 animate-bounce">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            Let's Create Something <span className="relative">
              Amazing
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            🚀 Ready to transform your ideas into stunning prints? Let's collaborate and bring your vision to life with our premium printing services!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="relative z-10 text-center pb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 mx-auto animate-pulse">
                <Send className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ✨ Let's Connect!
              </CardTitle>
              <p className="text-gray-600 mt-2">Tell us about your amazing project</p>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name Field */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <Input
                    name="name"
                    placeholder="Your Amazing Name ✨"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`relative z-10 h-14 text-lg border-2 transition-all duration-300 bg-white/90 backdrop-blur-sm
                      ${errors.name ? 'border-red-400 shadow-red-200' : 
                        focusedField === 'name' ? 'border-purple-400 shadow-lg shadow-purple-200' : 
                        'border-gray-200 hover:border-purple-300'} 
                      ${formData.name ? 'border-green-400 shadow-green-200' : ''}`}
                  />
                  {formData.name && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <CheckCircle className="w-5 h-5 text-green-500 animate-bounce" />
                    </div>
                  )}
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2 animate-shake flex items-center">
                      <span className="mr-1">⚠️</span> {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <Input
                    name="phone"
                    placeholder="Your Phone Number 📱"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className={`relative z-10 h-14 text-lg border-2 transition-all duration-300 bg-white/90 backdrop-blur-sm
                      ${errors.phone ? 'border-red-400 shadow-red-200' : 
                        focusedField === 'phone' ? 'border-blue-400 shadow-lg shadow-blue-200' : 
                        'border-gray-200 hover:border-blue-300'} 
                      ${formData.phone ? 'border-green-400 shadow-green-200' : ''}`}
                  />
                  {formData.phone && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <CheckCircle className="w-5 h-5 text-green-500 animate-bounce" />
                    </div>
                  )}
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-2 animate-shake flex items-center">
                      <span className="mr-1">⚠️</span> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Service Field */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('service')}
                    onBlur={() => setFocusedField(null)}
                    className={`relative z-10 w-full h-14 px-4 text-lg border-2 rounded-md transition-all duration-300 bg-white/90 backdrop-blur-sm focus:outline-none
                      ${errors.service ? 'border-red-400 shadow-red-200' : 
                        focusedField === 'service' ? 'border-green-400 shadow-lg shadow-green-200' : 
                        'border-gray-200 hover:border-green-300'} 
                      ${formData.service ? 'border-green-400 shadow-green-200' : ''}`}
                  >
                    <option value="">🎨 Choose Your Service</option>
                    <option value="Digital Printing">🖨️ Digital Printing</option>
                    <option value="Offset Printing">📄 Offset Printing</option>
                    <option value="Flex Printing">🏢 Flex Printing</option>
                    <option value="Vinyl Printing">🎯 Vinyl Printing</option>
                    <option value="Business Cards">💼 Business Cards</option>
                    <option value="Brochures">📋 Brochures</option>
                    <option value="Wedding Cards">💒 Wedding Cards</option>
                    <option value="Other">✨ Other Services</option>
                  </select>
                  {formData.service && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <CheckCircle className="w-5 h-5 text-green-500 animate-bounce" />
                    </div>
                  )}
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-2 animate-shake flex items-center">
                      <span className="mr-1">⚠️</span> {errors.service}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your amazing project! 🚀 What's your vision?"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`relative z-10 text-lg border-2 transition-all duration-300 bg-white/90 backdrop-blur-sm resize-none
                      ${errors.message ? 'border-red-400 shadow-red-200' : 
                        focusedField === 'message' ? 'border-pink-400 shadow-lg shadow-pink-200' : 
                        'border-gray-200 hover:border-pink-300'} 
                      ${formData.message ? 'border-green-400 shadow-green-200' : ''}`}
                  />
                  {formData.message && (
                    <div className="absolute right-3 top-3">
                      <CheckCircle className="w-5 h-5 text-green-500 animate-bounce" />
                    </div>
                  )}
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-2 animate-shake flex items-center">
                      <span className="mr-1">⚠️</span> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  disabled={isSubmitting || isSuccess}
                  className={`relative w-full h-16 text-xl font-bold rounded-xl transition-all duration-500 transform hover:scale-105 overflow-hidden
                    ${isSuccess ? 'bg-green-500 hover:bg-green-600' : 
                      isSubmitting ? 'bg-gray-400' : 
                      'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700'} 
                    shadow-lg hover:shadow-2xl`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {isSuccess ? (
                    <span className="flex items-center justify-center animate-bounce">
                      <CheckCircle className="w-6 h-6 mr-2" />
                      Success! Opening WhatsApp... 🎉
                    </span>
                  ) : isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Preparing your message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="w-6 h-6 mr-2 animate-pulse" />
                      🚀 Launch on WhatsApp!
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up animation-delay-300">
            {/* Rohtak Office */}
            <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative z-10 p-8 space-y-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-4 animate-pulse">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    🏢 Rohtak Office
                  </h3>
                </div>

                <div className="group/item flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                    <Phone className="w-7 h-7 text-white animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-gray-800">📞 +91-9802919872</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-green-600 hover:text-green-700 font-semibold text-base hover:scale-105 transition-transform duration-200"
                      onClick={() => window.open('tel:+919802919872', '_self')}
                    >
                      ✨ Call Now
                    </Button>
                  </div>
                </div>

                <div className="group/item flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                    <Mail className="w-7 h-7 text-white animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-gray-800">✉️ hradvertiser92@gmail.com</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-orange-600 hover:text-orange-700 font-semibold text-base hover:scale-105 transition-transform duration-200"
                      onClick={() => window.open('mailto:hradvertiser92@gmail.com', '_self')}
                    >
                      🚀 Send Email
                    </Button>
                  </div>
                </div>

                <div className="group/item flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                    <MapPin className="w-7 h-7 text-white animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                      📍 Wakilon Wali, Gali, Shant Mai Chowk, Jhajjar Road, Rohtak, Haryana - 124001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gurgaon Office */}
            <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative z-10 p-8 space-y-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 animate-pulse">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    🏙️ Gurgaon Office
                  </h3>
                </div>

                <div className="group/item flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                    <Phone className="w-7 h-7 text-white animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-gray-800">📞 +91-9138119872</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-green-600 hover:text-green-700 font-semibold text-base hover:scale-105 transition-transform duration-200"
                      onClick={() => window.open('tel:+919138119872', '_self')}
                    >
                      ✨ Call Now
                    </Button>
                  </div>
                </div>

                <div className="group/item flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                    <Mail className="w-7 h-7 text-white animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-gray-800">✉️ hradvertiserggn@gmail.com</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-orange-600 hover:text-orange-700 font-semibold text-base hover:scale-105 transition-transform duration-200"
                      onClick={() => window.open('mailto:hradvertiserggn@gmail.com', '_self')}
                    >
                      🚀 Send Email
                    </Button>
                  </div>
                </div>

                <div className="group/item flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                    <MapPin className="w-7 h-7 text-white animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                      📍 392/12, Near Shiv Murti, Gurgaon, Haryana - 122001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative z-10 p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4 animate-pulse">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    ⏰ Business Hours
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-green-50 to-blue-50 hover:from-green-100 hover:to-blue-100 transition-all duration-300">
                    <span className="text-lg font-semibold text-gray-800">🗓️ Mon - Sat:</span>
                    <span className="text-lg font-bold text-green-600">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300">
                    <span className="text-lg font-semibold text-gray-800">🌟 Sunday:</span>
                    <span className="text-lg font-bold text-purple-600">10:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;