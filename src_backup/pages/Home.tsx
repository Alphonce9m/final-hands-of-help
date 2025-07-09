import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaUsers, FaHeart, FaQuoteLeft, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home = () => {
  // Testimonials data
  const testimonials = [
    {
      quote: "The educational programs transformed my child's learning journey. The support and resources provided are exceptional.",
      author: "Sarah Muthoni",
      role: "Parent"
    },
    {
      quote: "As a volunteer, I've seen firsthand the positive impact on our community. The dedication of the team is inspiring.",
      author: "Victor Musili",
      role: "Volunteer"
    },
    {
      quote: "The skills I gained through their programs helped me start my own small business. Forever grateful!",
      author: "Gabriel Omondi",
      role: "Beneficiary"
    }
  ];

  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };
  const programs = [
    {
      icon: <FaGraduationCap className="h-8 w-8 text-blue-400" />,
      title: "Education & Learning",
      description: "Providing access to quality learning through our Havens Community Library and Digital Learning Centre with remedial education, early childhood development, and after-school academic support.",
      image: "/gallery/IMG-20250515-WA0047.jpg",
      impact: "100+ children accessing library resources daily",
      activities: [
        "Remedial learning sessions",
        "Digital learning devices",
        "Mentorship programs",
        "Academic support"
      ]
    },
    {
      icon: <FaHeart className="h-8 w-8 text-pink-400" />,
      title: "Menstrual Health Management",
      description: "Promoting physical and emotional health through our flagship MHM project, ensuring girls receive dignity kits and accurate information on menstrual health.",
      image: "/gallery/IMG-20250604-WA0035.jpg",
      impact: "Hundreds of girls empowered with dignity and confidence",
      activities: [
        "Distribution of dignity kits",
        "SRHR workshops",
        "Peer educator training",
        "Psychosocial support"
      ]
    },
    {
      icon: <FaUsers className="h-8 w-8 text-green-400" />,
      title: "Skills Development",
      description: "Supporting young people to acquire skills for employment and entrepreneurship through vocational training, digital literacy, and business development.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      impact: "50+ youth engaged in training programs",
      activities: [
        "Digital literacy classes",
        "Vocational training",
        "Entrepreneurship workshops",
        "Startup support"
      ]
    }
  ];

  const stats = [
    { value: '500+', label: 'Students Reached' },
    { value: '50+', label: 'Programs' },
    { value: '2000+', label: 'Books Distributed' },
    { value: '100%', label: 'Community Focused' }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <Hero 
        height="lg"
        className="relative"
      >
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-purple-300"
            >
              Hands of Help
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Transforming lives through education, health, and community development in Kasabuni
            </motion.p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/programs" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
              >
                Our Programs
              </Link>
              <Link 
                to="/donate" 
                className="px-8 py-3 bg-transparent border-2 border-white/20 hover:border-white/40 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Support Us
              </Link>
            </div>
          </div>
        </div>
      </Hero>

      {/* Stats Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-20 bg-black relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-400 bg-blue-900/30 rounded-full border border-blue-800/50 mb-3">
                Our Impact
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Making a Difference</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're committed to creating lasting change in our community through focused programs and initiatives.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Programs Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-20 bg-gray-900 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-400 bg-blue-900/30 rounded-full border border-blue-800/50 mb-3">
                What We Do
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Key Programs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="group relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-700 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0">
                      {program.icon}
                    </div>
                    <h3 className="ml-3 text-xl font-bold text-white">
                      {program.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {program.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <h4 className="text-sm font-medium text-blue-400 mb-2">Impact:</h4>
                    <p className="text-sm text-gray-300">{program.impact}</p>
                    
                    <h4 className="text-sm font-medium text-blue-400 mt-4 mb-2">Activities:</h4>
                    <ul className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                      {program.activities.map((activity, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              to="/programs" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              View All Programs
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-400 bg-blue-900/30 rounded-full border border-blue-800/50">
                Testimonials
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Stories of Impact
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <FaQuoteLeft className="text-blue-400 text-2xl mb-4 opacity-70" />
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-300 font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates on our programs, events, and success stories.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-grow">
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Your support helps us continue our mission of empowering communities through education and opportunity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/donate" 
              className="px-8 py-3 bg-white hover:bg-gray-100 text-blue-900 font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Donate Now
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-transparent border-2 border-white/20 hover:border-white/40 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
