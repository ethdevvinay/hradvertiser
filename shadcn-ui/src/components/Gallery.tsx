import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Business Cards",
      category: "Corporate",
      image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/visiting-cards/glossy-visiting-cards/IN_Glossy-Visiting-Cards_Overview",
      description: "Premium business cards with various finishes"
    },
    {
      id: 2,
      title: "Wedding Invitations",
      category: "Personal",
      image: "https://swastikweddingcards.com/wp-content/uploads/SCROLL/black-satin-768x1024.jpg.webp",
      description: "Elegant wedding cards with custom designs"
    },
    {
      id: 3,
      title: "Marketing Brochures",
      category: "Marketing",
      image: "https://cms.cloudinary.vpsvc.com/image/upload/if_ar_gt_1.1/c_scale,t_pdpHeroGallery_Gallery/if_else/c_scale,w_816/if_end/f_auto,q_auto:best,dpr_auto/india%20lob/brochures/in_brochures_001",
      description: "Professional brochures for business promotion"
    },
    {
      id: 4,
      title: "Large Format Banners",
      category: "Advertising",
      image: "https://lag.azureedge.net/w2p-cms-1/sliderImages/22-11-30-BANS oversized vinyl banner billboard_500x300.jpg",
      description: "Eye-catching banners for events and promotions"
    },
    {
      id: 5,
      title: "Product Catalogs",
      category: "Corporate",
      image: "https://blog-frontend.envato.com/cdn-cgi/image/width=1280,quality=75,format=auto/uploads/sites/2/2024/01/brochures-featured.jpg",
      description: "Detailed product catalogs with premium binding"
    },
    {
      id: 6,
      title: "Custom Stickers",
      category: "Branding",
      image: "https://www.stickitup.xyz/cdn/shop/files/HOME-PAGE-BANNER-IMAGE.png?v=1707407022&width=750",
      description: "Custom stickers for branding and decoration"
    },
    {
      id: 7,
      title: "Packaging Design",
      category: "Packaging",
      image: "https://cdn-ikpginp.nitrocdn.com/PRntyBdDPhmusWKVDuNFHSODyQxBrsGD/assets/images/optimized/rev-31bfdad/www.deuglo.com/wp-content/uploads/2024/06/Product-Packaging-Design-Company-in-Noida-UP-Deuglo.png",
      description: "Custom packaging solutions for products"
    },
    {
      id: 8,
      title: "Event Posters",
      category: "Events",
      image: "https://www.eventbookings.com/wp-content/uploads/2023/06/Brothers-Lounge-Bar-Poster.jpg",
      description: "Vibrant posters for events and announcements"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-700">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our gallery of successful printing projects and see the quality we deliver
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-2 py-1 bg-blue-600 text-xs rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-gray-700 text-sm">🔍</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img 
                src={selectedImage} 
                alt="Gallery item"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Want to see your project in our gallery? Let's create something amazing together!
          </p>
          <button 
            onClick={() => {
              const message = "Hi! I saw your portfolio and I'm impressed. I'd like to discuss a printing project with you.";
              const whatsappUrl = `https://wa.me/919802919872?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;