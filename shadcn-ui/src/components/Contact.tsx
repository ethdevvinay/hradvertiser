import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const whatsappMessage = `Hi! I'm ${formData.name}. I need ${formData.service}. ${formData.message} Please contact me at ${formData.phone}.`;
      const whatsappUrl = `https://wa.me/919896615867?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="text-blue-700">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your printing project? Contact us today for a free quote 
            and let's bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Input
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.service ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="">Select Service *</option>
                    <option value="Digital Printing">Digital Printing</option>
                    <option value="Offset Printing">Offset Printing</option>
                    <option value="Flex Printing">Flex Printing</option>
                    <option value="Vinyl Printing">Vinyl Printing</option>
                    <option value="Business Cards">Business Cards</option>
                    <option value="Brochures">Brochures</option>
                    <option value="Wedding Cards">Wedding Cards</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your printing requirements *"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 text-lg"
                >
                  Send Message via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Rohtak Office */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Rohtak Office</h3>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600">+91-9802919872</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-blue-700 hover:text-blue-800"
                      onClick={() => window.open('tel:+919802919872', '_self')}
                    >
                      Call Now
                    </Button>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600">hradvertiser92@gmail.com</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-blue-700 hover:text-blue-800"
                      onClick={() => window.open('mailto:hradvertiser92@gmail.com', '_self')}
                    >
                      Send Email
                    </Button>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-600">
                    Wakilon Wali, Gali, Shant Mai Chowk, Jhajjar Road, Rohtak, Haryana - 124001
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Gurgaon Office */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Gurgaon Office</h3>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600">+91-9138119872</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-blue-700 hover:text-blue-800"
                      onClick={() => window.open('tel:+919138119872', '_self')}
                    >
                      Call Now
                    </Button>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600">hradvertiserggn@gmail.com</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-blue-700 hover:text-blue-800"
                      onClick={() => window.open('mailto:hradvertiserggn@gmail.com', '_self')}
                    >
                      Send Email
                    </Button>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-600">
                    392/12, Near Shiv Murti, Gurgaon, Haryana - 122001
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Sunday: 10:00 AM - 6:00 PM</p>
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
