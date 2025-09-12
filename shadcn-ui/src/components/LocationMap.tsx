import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const LocationMap = () => {
  const openGoogleMaps = (location: string) => {
    window.open(`https://maps.google.com/?q=${location}`, '_blank');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visit Our <span className="text-blue-700">Locations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We have offices in both Rohtak and Gurgaon to serve you better.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Rohtak Office */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Rohtak Office</h3>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                <p className="text-gray-600">
                  Wakilon Wali, Gali, Shant Mai Chowk, Jhajjar Road, Rohtak, Haryana - 124001
                </p>
                <button 
                  onClick={() => openGoogleMaps("Rohtak,Haryana,India")} 
                  className="mt-2 text-blue-600 hover:underline text-sm font-medium"
                >
                  Open in Google Maps
                </button>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                <p className="text-gray-600">+91-9802919872</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                <p className="text-gray-600">hradvertiser92@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Gurgaon Office */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Gurgaon Office</h3>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                <p className="text-gray-600">
                  392/12, Near Shiv Murti, Gurgaon, Haryana - 122001
                </p>
                <button 
                  onClick={() => openGoogleMaps("Gurgaon,Haryana,India")} 
                  className="mt-2 text-blue-600 hover:underline text-sm font-medium"
                >
                  Open in Google Maps
                </button>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                <p className="text-gray-600">+91-9138119872</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                <p className="text-gray-600">hradvertiserggn@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours - Common for both */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
              <div className="text-gray-600 space-y-1">
                <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                <p>Sunday: 10:00 AM - 6:00 PM</p>
              </div>
              <p className="text-sm text-gray-500 mt-1">Extended hours available for urgent orders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
