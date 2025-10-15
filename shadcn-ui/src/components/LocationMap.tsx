import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, ExternalLink } from 'lucide-react';

interface LocationData {
  id: string;
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  phone: string;
  email: string;
}

const LocationMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const locations: LocationData[] = [
    {
      id: 'rohtak',
      name: 'Rohtak Office',
      address: 'Wakilon Wali, Gali, Shant Mai Chowk, Jhajjar Road, Rohtak, Haryana - 124001',
      coordinates: {
        lat: 28.8955,
        lng: 76.6066
      },
      phone: '+91-9138119872',
      email: 'hradvertiser92@gmail.com'
    },
    {
      id: 'gurgaon',
      name: 'Gurgaon Office',
      address: '392/12, Near Shiv Murti, Gurgaon, Haryana - 122001',
      coordinates: {
        lat: 28.4595,
        lng: 77.0266
      },
      phone: '+91-9802919872',
      email: 'hradvertiserggn@gmail.com'
    }
  ];

  const openGoogleMaps = (lat: number, lng: number) => {
    window.open(`https://maps.google.com/?q=${lat},${lng}`, '_blank');
  };

  const openDirections = (lat: number, lng: number) => {
    window.open(`https://maps.google.com/dir/?api=1&destination=${lat},${lng}`, '_blank');
  };

  const InteractiveMap = () => {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Interactive Location Map</h3>
        
        {/* Map Container */}
        <div className="relative bg-white rounded-xl shadow-inner p-6 min-h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-50 to-yellow-50 rounded-xl opacity-30"></div>
          
          {/* Map Markers */}
          <div className="relative h-full flex items-center justify-center">
            <div className="relative w-full max-w-2xl h-80">
              {/* Rohtak Marker */}
              <div 
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: '25%', top: '40%' }}
                onClick={() => {
                  setSelectedLocation('rohtak');
                  openGoogleMaps(locations[0].coordinates.lat, locations[0].coordinates.lng);
                }}
              >
                <div className="relative">
                  <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg animate-pulse group-hover:scale-110 transition-transform duration-200"></div>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    Rohtak Office
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              </div>

              {/* Gurgaon Marker */}
              <div 
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: '75%', top: '60%' }}
                onClick={() => {
                  setSelectedLocation('gurgaon');
                  openGoogleMaps(locations[1].coordinates.lat, locations[1].coordinates.lng);
                }}
              >
                <div className="relative">
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-lg animate-pulse group-hover:scale-110 transition-transform duration-200"></div>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    Gurgaon Office
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              </div>

              {/* Connection Line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line 
                  x1="25%" y1="40%" 
                  x2="75%" y2="60%" 
                  stroke="#6366f1" 
                  strokeWidth="2" 
                  strokeDasharray="5,5"
                  className="opacity-50"
                />
              </svg>

              {/* Map Instructions */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-gray-600 shadow-md">
                Click on markers to open in Google Maps
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Locations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We have strategically located offices in both Rohtak and Gurgaon to serve you better with professional services.
          </p>
        </div>

        {/* Interactive Map */}
        <div className="mb-16">
          <InteractiveMap />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {locations.map((location) => (
            <div key={location.id} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{location.name}</h3>
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-green-500 animate-pulse"></div>
              </div>
              
              {/* Address */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    {location.address}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button 
                      onClick={() => openGoogleMaps(location.coordinates.lat, location.coordinates.lng)} 
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open in Maps
                    </button>
                    <button 
                      onClick={() => openDirections(location.coordinates.lat, location.coordinates.lng)} 
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      <Navigation className="w-4 h-4" />
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <a href={`tel:${location.phone}`} className="text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium">
                    {location.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a href={`mailto:${location.email}`} className="text-gray-600 hover:text-orange-600 transition-colors duration-200 font-medium">
                    {location.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Business Hours - Enhanced */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Business Hours</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Monday - Friday</span>
                      <span className="text-gray-600 font-medium">9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Saturday</span>
                      <span className="text-gray-600 font-medium">9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium text-gray-700">Sunday</span>
                      <span className="text-gray-600 font-medium">10:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Special Services</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Extended hours for urgent orders</li>
                      <li>• 24/7 emergency support available</li>
                      <li>• Weekend consultations by appointment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
