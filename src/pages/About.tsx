import React from 'react';
import { FaLeaf, FaHeart, FaBalanceScale, FaUsers, FaUniversalAccess, FaRecycle, FaBookOpen, FaHandsHelping, FaGraduationCap } from 'react-icons/fa';
import Hero from '../components/Hero';

const About: React.FC = () => {
  const impactStats = [
    { icon: <FaBookOpen className="w-8 h-8 text-blue-600" />, number: "5,000+", label: "Books in Library" },
    { icon: <FaGraduationCap className="w-8 h-8 text-blue-600" />, number: "200+", label: "Children Educated" },
    { icon: <FaHandsHelping className="w-8 h-8 text-blue-600" />, number: "50+", label: "Community Projects" },
    { icon: <FaUsers className="w-8 h-8 text-blue-600" />, number: "10,000+", label: "Lives Impacted" }
  ];

  const values = [
    {
      icon: <FaBalanceScale className="w-6 h-6 text-blue-600" />,
      title: "Equity",
      description: "We believe in equal access to resources and opportunities for all community members, regardless of their background."
    },
    {
      icon: <FaHeart className="w-6 h-6 text-blue-600" />,
      title: "Empowerment",
      description: "Our programs are designed to equip individuals with the knowledge and skills needed for sustainable success."
    },
    {
      icon: <FaLeaf className="w-6 h-6 text-blue-600" />,
      title: "Integrity",
      description: "We maintain the highest standards of transparency and ethical conduct in all our operations."
    },
    {
      icon: <FaUsers className="w-6 h-6 text-blue-600" />,
      title: "Community",
      description: "Our initiatives are developed with and for the community, ensuring they address real, local needs."
    },
    {
      icon: <FaUniversalAccess className="w-6 h-6 text-blue-600" />,
      title: "Inclusivity",
      description: "We design our programs to be accessible to everyone, with special attention to marginalized groups."
    },
    {
      icon: <FaRecycle className="w-6 h-6 text-blue-600" />,
      title: "Sustainability",
      description: "We focus on creating lasting change through programs that communities can sustain independently."
    }
  ];

  const milestones = [
    { 
      year: "2015", 
      event: "Founded in Kasabuni",
      description: "Established with a mission to transform lives through education in Nairobi's informal settlements."
    },
    { 
      year: "2018", 
      event: "Menstrual Health Project",
      description: "Launched initiative to provide dignity kits and education to adolescent girls."
    },
    { 
      year: "2020", 
      event: "Havens Library Opens",
      description: "Established a community library and digital learning center serving hundreds of children."
    },
    { 
      year: "2022", 
      event: "Official CBO Status",
      description: "Recognized as a Community-Based Organization, expanding our impact."
    },
    { 
      year: "2024", 
      event: "10 Years of Impact",
      description: "Celebrating a decade of transforming lives and communities through education."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero
        title="Our Story"
        subtitle="A decade of transforming lives through education and community empowerment in Kasabuni"
        height="md"
        backgroundImage="/gallery/IMG-20250515-WA0006.jpg"
      />

      {/* Impact Stats */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-white/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Journey</h2>
            <div className="w-20 h-1 bg-white/20 mx-auto mb-6"></div>
            <p className="text-lg text-white/80">
              Founded in 2015, Hands of Help Children's Organization began as a small community initiative 
              in Kasabuni, Nairobi. What started as a modest effort to provide educational support has grown 
              into a comprehensive community development organization impacting thousands of lives.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gray-900/20 p-8 rounded-lg hover:shadow-lg transition-shadow border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-white/80">
                To unlock potential in informal settlements through education, digital empowerment, 
                and community support, creating leaders who will build thriving, equitable societies.
              </p>
            </div>
            <div className="bg-gray-900/20 p-8 rounded-lg hover:shadow-lg transition-shadow border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-white/80">
                A future where every child in underserved communities has access to quality education 
                and opportunities to transform their lives and communities.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Milestones</h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 w-0.5 h-full bg-white/20 transform -translate-x-1/2"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative">
                    {/* Dot */}
                    <div className="absolute left-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                    
                    {/* Content */}
                    <div className={`relative pl-8 pr-8 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className={`inline-block w-5/6 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                        <div className="bg-gray-900/20 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-white/10">
                          <div className="text-white/70 font-semibold mb-1">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-white mb-2">{milestone.event}</h3>
                          <p className="text-white/80">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-900/20 p-6 rounded-lg shadow-sm hover:shadow-md transition-transform hover:-translate-y-1 border border-white/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-white/20 rounded-full">
                      {React.cloneElement(value.icon, { className: 'w-6 h-6 text-white' })}
                    </div>
                    <h3 className="text-xl font-bold text-white">{value.title}</h3>
                  </div>
                  <p className="text-white/80">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl mb-8 text-white/80 max-w-3xl mx-auto">
            Be part of our journey to create lasting change in Kasabuni and beyond. 
            Together, we can build a brighter future for the next generation.
          </p>
          <a
            href="/donate"
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Support Our Work
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;