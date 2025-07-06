import React from 'react';

const Programs: React.FC = () => {
  const programs = [
    {
      icon: null,
      title: "Education & Learning",
      description: "Providing access to quality learning through our Havens Community Library and Digital Learning Centre with remedial education, early childhood development, and after-school academic support.",
      image: "/gallery/IMG-20250515-WA0047.jpg",
      impact: "100+ children accessing library resources daily",
      activities: [
        "Remedial learning sessions led by trained volunteers",
        "Digital learning devices and structured materials",
        "Mentorship and scholarship opportunities",
        "Academic and personal development support"
      ]
    },
    {
      icon: null,
      title: "Sister Menstrual Health Management",
      description: "Promoting physical and emotional health through our flagship MHM project, ensuring girls receive dignity kits and accurate information on menstrual health.",
      image: "/gallery/IMG-20250604-WA0035.jpg",
      impact: "Hundreds of girls empowered with dignity and confidence",
      activities: [
        "Distribution of dignity kits (sanitary towels, undergarments, soap)",
        "SRHR workshops and training sessions in schools",
        "Training peer educators and caregivers",
        "Psychosocial support and referral services"
      ]
    },
    {
      icon: null,
      title: "Skills Development & Digital Literacy",
      description: "Supporting young people to acquire skills for employment and entrepreneurship through vocational training, digital literacy, and business development.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      impact: "50+ youth engaged in vocational training programs",
      activities: [
        "Digital literacy classes using computers and software",
        "Vocational training in tailoring, hairdressing, ICT",
        "Entrepreneurship and financial literacy workshops",
        "Startup kits and mentorship support"
      ]
    },
    {
      icon: null,
      title: "Community Engagement & Advocacy",
      description: "Building awareness on key community issues such as governance, climate change, human rights, and social inclusion while providing platforms for community voices.",
      image: "/gallery/IMG-20250514-WA0003.jpg",
      impact: "Community-wide engagement in civic activities",
      activities: [
        "Community radio programs and podcasts",
        "Public forums and community dialogues",
        "Youth civic education and leadership training",
        "Collaboration with local leaders for accountability"
      ]
    },
    {
      icon: null,
      title: "Climate Change & Environmental Action",
      description: "Engaging the community in climate literacy and environmental stewardship through awareness campaigns, education programs, and practical environmental actions.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      impact: "Youth and community leaders trained in climate action",
      activities: [
        "Tree planting drives and community clean-ups",
        "Climate change mitigation workshops",
        "Environmental rights education",
        "Youth-led environmental initiatives and documentation"
      ]
    }
  ];

  const successStories = [
    {
      title: "Havens Community Library Success",
      description: "Our library has become a safe space for learning and mentorship, with over 100 children accessing educational resources daily and showing improved academic performance.",
      impact: "100+ daily users"
    },
    {
      title: "Sister MHM Empowerment",
      description: "Through our menstrual health management program, hundreds of girls have gained confidence and dignity, with reduced school absenteeism during menstrual periods.",
      impact: "Hundreds of girls"
    },
    {
      title: "Digital Skills Training",
      description: "Our digital literacy programs have equipped over 50 youth with essential computer skills, preparing them for employment in the modern economy.",
      impact: "50+ youth trained"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-900 via-black to-purple-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-purple-300 animate-fade-in">
              Our Programs
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transforming lives through education, health, and community development initiatives in Kasabuni
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="#programs" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
              >
                Explore Programs
              </a>
              <a 
                href="/donate" 
                className="px-8 py-3 bg-transparent border-2 border-white/20 hover:border-white/40 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Support Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Overview */}
      <section id="programs" className="py-20 bg-black relative overflow-hidden">
        {/* Animated background elements */}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Key Focus Areas</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We focus on five key areas that address fundamental needs and create 
              the foundation for thriving communities in informal settlements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {program.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 mb-4 line-clamp-3">{program.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">Key Activities</h4>
                    <ul className="space-y-2">
                      {program.activities.slice(0, 3).map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300 text-sm">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">Impact</p>
                        <p className="text-sm text-blue-300 font-medium">{program.impact}</p>
                      </div>
                      <button className="text-blue-400 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Project Highlight */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-900/30 text-blue-300 border border-blue-800/50">
                <span className="flex w-2 h-2 mr-2 bg-blue-400 rounded-full"></span>
                Flagship Initiative
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Havens Community Library</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cornerstone initiative transforming education and digital access in Kasabuni
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10" data-aos="fade-right">
              <div className="space-y-6">
                <div className="p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                  <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300 mb-4">
                    A Beacon of Hope in Kasabuni
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    The Havens Community Library & Digital Learning Centre serves as a transformative hub 
                    for education and empowerment in the heart of Kasabuni's informal settlement. More than 
                    just a library, it's a sanctuary where dreams take flight and potential is unlocked.
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    This innovative space bridges the digital divide by providing access to modern technology, 
                    educational resources, and mentorship programs that were previously out of reach for 
                    community members.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-900/50 to-blue-900/20 p-5 rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-colors">
                    <div className="text-blue-300 text-3xl font-bold mb-2">100+</div>
                    <p className="text-sm text-gray-300">Children accessing resources daily</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-900/50 to-purple-900/20 p-5 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-colors">
                    <div className="text-purple-300 text-3xl font-bold mb-2">24/7</div>
                    <p className="text-sm text-gray-300">Safe learning environment</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-5 rounded-xl border border-blue-900/30 backdrop-blur-sm">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-600/20 p-2 rounded-lg mr-4">
                      <svg className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-1">Funded by</h4>
                      <p className="text-sm text-gray-300">USAID Kenya through YALI</p>
                      <p className="text-xs text-blue-200 mt-1">Phase 1 successfully completed with full transparency</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative" data-aos="fade-left" data-aos-delay="200">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="/gallery/IMG-20250515-WA0047.jpg"
                  alt="Havens Community Library"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
                    <span className="text-sm text-gray-200">Open Now</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Visit Our Space</h3>
                  <p className="text-gray-200 text-sm">Open to all community members for learning and growth</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3 mt-6">
                {['/gallery/IMG-20250515-WA0047.jpg', '/gallery/IMG-20250604-WA0035.jpg', '/gallery/IMG-20250514-WA0003.jpg'].map((img, i) => (
                  <div key={i} className="aspect-square overflow-hidden rounded-lg border-2 border-gray-800 hover:border-blue-400 transition-colors">
                    <img 
                      src={img} 
                      alt="" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="relative py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-purple-900/30 text-purple-300 border border-purple-800/50">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.324-.441-.569-.927-.816-1.533z" clipRule="evenodd" />
                </svg>
                Impact Stories
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Transforming Lives, One Story at a Time</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real impact from our programs in the Kasabuni community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-300 mb-4">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-3">
                      {story.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{story.description}</p>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-800">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center">
                          <svg className="w-5 h-5 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Impact</p>
                        <p className="text-sm font-medium text-purple-300">{story.impact}</p>
                      </div>
                      <div className="ml-auto text-purple-400 group-hover:translate-x-1 transition-transform">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 -mr-8 -mt-8 bg-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
            ))}
            
            {/* Call to action card */}
            <div 
              className="relative group bg-gradient-to-br from-gray-900 to-purple-900/30 rounded-xl overflow-hidden border-2 border-dashed border-gray-800 hover:border-purple-500/50 transition-all duration-300 flex flex-col items-center justify-center p-8 text-center"
              data-aos="fade-up"
              data-aos-delay={successStories.length * 100}
            >
              <div className="w-16 h-16 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-300 mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Share Your Story</h3>
              <p className="text-gray-300 mb-6 max-w-xs mx-auto">
                Has our work made a difference in your life? We'd love to hear your story.
              </p>
              <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition-colors duration-300 flex items-center group-hover:scale-105">
                Share Your Experience
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-900/30 text-blue-300 border border-blue-800/50">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Our Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How We Create Lasting Change</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our community-centered approach ensures sustainable and impactful results through every step
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline connector */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 via-cyan-500/50 to-purple-500/30 -ml-px"></div>
            
            <div className="space-y-12 md:space-y-16">
              {[
                {
                  number: '01',
                  title: 'Community Assessment',
                  description: 'We work directly with community members to understand their unique needs and challenges through surveys, interviews, and focus groups.',
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  )
                },
                {
                  number: '02',
                  title: 'Local Partnership',
                  description: 'We collaborate with community leaders, local organizations, and stakeholders to develop culturally appropriate and sustainable solutions.',
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
                {
                  number: '03',
                  title: 'Community Implementation',
                  description: 'We execute programs with active community involvement, ensuring local ownership and continuous feedback mechanisms.',
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  )
                },
                {
                  number: '04',
                  title: 'Sustainable Impact',
                  description: 'We ensure programs are sustainable, with capacity building and knowledge transfer for continued local ownership and impact.',
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                }
              ].map((step, index) => (
                <div 
                  key={index}
                  className={`group relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} ${index < 3 ? 'mb-12' : ''}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 px-4 md:px-8 py-6 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white mb-4 md:mb-6 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                  
                  {/* Number indicator */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-900/50 to-blue-900/20 border-2 border-blue-800/50 text-2xl font-bold text-blue-300 z-10 mx-4 flex-shrink-0">
                    {step.number}
                  </div>
                  
                  {/* Spacer for alignment */}
                  <div className="hidden md:block md:w-1/2"></div>
                  
                  {/* Mobile number indicator */}
                  <div className="md:hidden w-12 h-12 bg-gradient-to-br from-blue-900/50 to-blue-900/20 border-2 border-blue-800/50 rounded-full flex items-center justify-center text-lg font-bold text-blue-300 my-4">
                    {step.number}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Ready to make an impact?
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Join Our Mission Today</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/volunteer" 
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 inline-flex items-center justify-center"
              >
                Volunteer With Us
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="/donate" 
                className="px-6 py-3 bg-transparent border-2 border-blue-500/30 text-blue-300 font-medium rounded-full hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300 inline-flex items-center justify-center"
              >
                Make a Donation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Current Goals */}
      <section className="relative py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-900/30 text-cyan-300 border border-cyan-800/50">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v4h6m-6 0h10m6 0v4m0 0v4m0 0h-6m6 0H7a2 2 0 01-2-2v-4m0 0H3m0 0V7a2 2 0 012-2h2m0 0h10a2 2 0 012 2v4m0 0h4m0 0h-4m0 0h-6" />
                </svg>
                Strategic Objectives
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Roadmap to Greater Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our strategic objectives for continued growth and measurable impact in the Kasabuni community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Governance",
                goals: [
                  "Establish a strong Board of Directors",
                  "Develop comprehensive policies"
                ],
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                color: "from-cyan-600 to-blue-600"
              },
              {
                title: "Program Expansion",
                goals: [
                  "Expand Havens Community Library",
                  "Launch Phase 2 of Sister MHM Project",
                  "Scale digital literacy programs"
                ],
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
                color: "from-blue-600 to-indigo-600"
              },
              {
                title: "Partnerships",
                goals: [
                  "Forge new strategic partnerships",
                  "Strengthen existing collaborations",
                  "Engage corporate sponsors"
                ],
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                color: "from-indigo-600 to-purple-600"
              },
              {
                title: "Sustainability",
                goals: [
                  "Ensure program sustainability",
                  "Increase community engagement",
                  "Enhance mentorship programs"
                ],
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                color: "from-purple-600 to-pink-600"
              }
            ].map((category, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 p-6 h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-6`}>
                    {category.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                  
                  <ul className="space-y-3">
                    {category.goals.map((goal, goalIndex) => (
                      <li key={goalIndex} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
                        </div>
                        <span className="text-gray-300">{goal}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-4 border-t border-gray-800">
                    <div className="flex items-center text-sm text-cyan-300 font-medium">
                      <span>View progress</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 -mr-8 -mt-8 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
          
          {/* Progress section */}
          <div className="mt-16 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-2xl p-8 border border-cyan-500/20" data-aos="fade-up">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">Our Progress So Far</h3>
              
              <div className="space-y-6">
                {[
                  { name: "Board Development", progress: 65 },
                  { name: "Library Expansion", progress: 40 },
                  { name: "MHM Project Phase 2", progress: 30 },
                  { name: "Partnership Development", progress: 55 }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                      <span>{item.name}</span>
                      <span>{item.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full" 
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row justify-between items-center bg-black/30 rounded-xl p-6 border border-cyan-500/10">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Help Us Achieve Our Goals</h4>
                  <p className="text-gray-300 text-sm">Your support can help us reach 100% on all our objectives</p>
                </div>
                <a 
                  href="/donate" 
                  className="mt-4 sm:mt-0 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 whitespace-nowrap"
                >
                  Support Our Mission
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 -right-20 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <div className="inline-block mb-5">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-900/30 to-blue-900/30 text-cyan-300 border border-cyan-800/50">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Get Involved
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Mission to Empower Kasabuni</h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Your support, whether through time, resources, or partnership, helps us create lasting change and empower the Kasabuni community through education and opportunity.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6" data-aos="fade-up" data-aos-delay="100">
              <a
                href="/volunteer"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Volunteer With Us
                </div>
              </a>
              
              <a
                href="/donate"
                className="group relative px-8 py-4 bg-transparent text-white font-medium rounded-full border-2 border-cyan-500/50 hover:border-cyan-400/70 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Make a Donation
                </div>
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-gray-400 text-sm" data-aos="fade-up" data-aos-delay="200">
              <a href="/contact" className="flex items-center hover:text-cyan-400 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Our Team
              </a>
              <a href="/about" className="flex items-center hover:text-cyan-400 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Learn More About Us
              </a>
              <a href="/programs" className="flex items-center hover:text-cyan-400 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Explore All Programs
              </a>
            </div>
          </div>
          
          <div className="mt-20 pt-12 border-t border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "500+", label: "Community Members Reached" },
                { value: "10+", label: "Active Programs" },
                { value: "100%", label: "Volunteer Driven" },
                { value: "5+", label: "Years of Service" }
              ].map((stat, index) => (
                <div key={index} className="group" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-cyan-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;