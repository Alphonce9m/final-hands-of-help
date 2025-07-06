import { useState, useEffect } from 'react';
import { X, Search, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Category = 'All' | 'Education' | 'Community' | 'Events' | 'Training';

interface GalleryImage {
  url: string;
  title: string;
  location: string;
  description: string;
  category: Category[];
  date: string;
}

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const modalAnimation = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3 }
  },
  exit: { opacity: 0, scale: 0.9 }
};

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Gallery images with their full paths and categories
  const galleryImages: GalleryImage[] = [
    // Newly added images
    {
      url: '/gallery/IMG-20250614-WA0009.jpg',
      title: 'Community Engagement',
      location: 'Kasabuni, Nairobi',
      description: 'Community members actively participating in our programs',
      category: ['Community', 'Events'],
      date: 'June 14, 2025'
    },
    {
      url: '/gallery/IMG-20250616-WA0039.jpg',
      title: 'Educational Workshop',
      location: 'Kasabuni, Nairobi',
      description: 'Interactive learning session with participants',
      category: ['Education', 'Training'],
      date: 'June 16, 2025'
    },
    {
      url: '/gallery/IMG-20250621-WA0007.jpg',
      title: 'Community Gathering',
      location: 'Kasabuni, Nairobi',
      description: 'Community members coming together for an event',
      category: ['Community', 'Events'],
      date: 'June 21, 2025'
    },
    {
      url: '/gallery/IMG-20250621-WA0009.jpg',
      title: 'Training Session',
      location: 'Kasabuni, Nairobi',
      description: 'Practical skills development workshop',
      category: ['Training', 'Education'],
      date: 'June 21, 2025'
    },
    {
      url: '/gallery/IMG-20250621-WA0055.jpg',
      title: 'Group Activity',
      location: 'Kasabuni, Nairobi',
      description: 'Participants engaged in a group exercise',
      category: ['Community', 'Training'],
      date: 'June 21, 2025'
    },
    // Existing images
    {
      url: '/gallery/IMG-20250514-WA0007.jpg',
      title: 'Community Gathering',
      location: 'Kasabuni, Nairobi',
      description: 'Community members participating in our programs',
      category: ['Community', 'Events'],
      date: 'May 14, 2025'
    },
    {
      url: '/gallery/IMG-20250515-WA0001.jpg',
      title: 'Education Program',
      location: 'Kasabuni, Nairobi',
      description: 'Students engaged in learning activities',
      category: ['Education'],
      date: 'May 15, 2025'
    },
    {
      url: '/gallery/IMG-20250515-WA0002.jpg',
      title: 'Community Workshop',
      location: 'Kasabuni, Nairobi',
      description: 'Interactive session with community members',
      category: ['Community', 'Training'],
      date: 'May 15, 2025'
    },
    {
      url: '/gallery/IMG-20250515-WA0003.jpg',
      title: 'Youth Development',
      location: 'Kasabuni, Nairobi',
      description: 'Young people participating in skills training',
      category: ['Training', 'Education'],
      date: 'May 15, 2025'
    },
    {
      url: '/gallery/IMG-20250515-WA0006.jpg',
      title: 'Group Activity',
      location: 'Kasabuni, Nairobi',
      description: 'Community members working together',
      category: ['Community', 'Events'],
      date: 'May 15, 2025'
    },
    {
      url: '/gallery/IMG-20250515-WA0007.jpg',
      title: 'Learning Session',
      location: 'Kasabuni, Nairobi',
      description: 'Educational workshop in progress',
      category: ['Education', 'Training'],
      date: 'May 15, 2025'
    },
    {
      url: '/gallery/IMG-20250515-WA0047.jpg',
      title: 'Community Meeting',
      location: 'Kasabuni, Nairobi',
      description: 'Discussion with community leaders',
      category: ['Community'],
      date: 'May 15, 2025'
    },
    {
      url: '/gallery/IMG-20250515-WA0048.jpg',
      title: 'Skills Training',
      location: 'Kasabuni, Nairobi',
      description: 'Practical skills development session',
      category: ['Training'],
      date: 'May 15, 2025'
    },
    {
      url: '/gallery/IMG-20250604-WA0004.jpg',
      title: 'Outdoor Activity',
      location: 'Kasabuni, Nairobi',
      description: 'Community members in an outdoor setting',
      category: ['Community', 'Events'],
      date: 'June 4, 2025'
    },
    {
      url: '/gallery/IMG-20250604-WA0035.jpg',
      title: 'Group Discussion',
      location: 'Kasabuni, Nairobi',
      description: 'Interactive discussion session',
      category: ['Community', 'Training'],
      date: 'June 4, 2025'
    },
    {
      url: '/IMG-20250621-WA0090.jpg',
      title: 'Community Event',
      location: 'Kasabuni, Nairobi',
      description: 'Community gathering and celebration',
      category: ['Community', 'Events'],
      date: 'June 21, 2025'
    },
    {
      url: '/IMG-20250621-WA0091.jpg',
      title: 'Educational Workshop',
      location: 'Kasabuni, Nairobi',
      description: 'Learning and development session',
      category: ['Education', 'Training'],
      date: 'June 21, 2025'
    },
    {
      url: '/IMG-20250621-WA0111.jpg',
      title: 'Group Photo',
      location: 'Kasabuni, Nairobi',
      description: 'Community members and participants',
      category: ['Community', 'Events'],
      date: 'June 21, 2025'
    }
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter images based on active category and search term
  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = activeCategory === 'All' || image.category.includes(activeCategory);
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get unique categories
  const categories: Category[] = ['All', 'Education', 'Community', 'Events', 'Training'];

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Capturing the impact of our programs and the spirit of our community
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-12 w-12 text-blue-500 animate-spin" />
          </div>
        ) : filteredImages.length > 0 ? (
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
                onClick={() => openModal(image)}
                whileHover={{ y: -5 }}
              >
                <div className="aspect-w-4 aspect-h-3 bg-gray-100">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-gray-200 text-sm mb-2">{image.location}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {image.category.map((cat, i) => (
                      <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mb-4">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No images found</h3>
            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" 
            onClick={handleBackdropClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-white hover:text-gray-300 focus:outline-none z-10 bg-black/50 rounded-full p-2"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            
            <motion.div 
              className="relative max-w-5xl w-full max-h-[90vh] bg-gray-900 rounded-xl overflow-hidden shadow-2xl"
              variants={modalAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm p-4 z-10">
                <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
                <p className="text-gray-300 text-sm">{selectedImage.date} • {selectedImage.location}</p>
              </div>
              
              <div className="h-full overflow-auto">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                
                <div className="p-6 bg-gray-900">
                  <p className="text-gray-200 mb-4">{selectedImage.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedImage.category.map((cat, i) => (
                      <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-900/50 text-blue-100">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
