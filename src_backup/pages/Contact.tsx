import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      category: 'general'
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: null,
      title: "Address",
      details: ["Baba Dogo, Ruaraka", "Nairobi, Kenya"]
    },
    {
      icon: null,
      title: "Phone",
      details: ["+254 739 109 360", "+254 718 782 488", "+254 704 935 174"]
    },
    {
      icon: null,
      title: "Email",
      details: ["handsofhelpchildrenorg@gmail.com"]
    },
    {
      icon: null,
      title: "Website",
      details: ["www.handsofhelpchildren.org"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="py-32 bg-black text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Get in touch with Hands of Help Children's Organization
          </p>
        </div>
      </div>

      {/* Contact Form and Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-black border border-white/20 rounded-none text-white focus:ring-2 focus:ring-white focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-black border border-white/20 rounded-none text-white focus:ring-2 focus:ring-white focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-white/80 mb-1">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-black border border-white/20 rounded-none text-white focus:ring-2 focus:ring-white focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="programs">Program Information</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="partnership">Partnership</option>
                    <option value="donation">Donation Support</option>
                    <option value="library">Library Services</option>
                    <option value="mhm">Sister MHM Program</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-black border border-white/20 rounded-none text-white focus:ring-2 focus:ring-white focus:border-transparent"
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-black border border-white/20 rounded-none text-white focus:ring-2 focus:ring-white focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-white text-black py-3 px-6 rounded-none font-medium hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Contact Information</h2>
              <p className="text-white/70 mb-8">
                We'd love to hear from you. Reach out to us through any of the following channels.
              </p>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start border-b border-white/10 pb-6 last:border-0 last:pb-0">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                      {item.icon || (
                        <span className="text-white">
                          {item.title === 'Address' ? '📍' : item.title === 'Phone' ? '📞' : '✉️'}
                        </span>
                      )}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <div className="mt-1 space-y-1">
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-white/70">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visit Us */}
              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-4">Visit Our Community Center</h3>
                <p className="text-blue-800 mb-4">
                  Come visit the Havens Community Library & Digital Learning Centre 
                  in Kasabuni to see our programs in action and meet our team.
                </p>
                <p className="text-blue-700 font-medium">
                  Location: Kasabuni, Baba Dogo, Ruaraka - Nairobi, Kenya
                </p>
              </div>

              {/* Partnership Opportunities */}
              <div className="mt-8 p-6 bg-orange-50 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-4">Partnership Opportunities</h3>
                <p className="text-orange-800 mb-4">
                  Interested in partnering with us? We welcome collaborations with 
                  organizations, schools, and individuals who share our vision.
                </p>
                <a
                  href="mailto:handsofhelpchildrenorg@gmail.com"
                  className="text-orange-700 font-semibold hover:text-orange-900"
                >
                  Contact us for partnership opportunities →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our organization
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How can I volunteer with Hands of Help Children's Organization?
              </h3>
              <p className="text-gray-600">
                We welcome volunteers who are passionate about education, youth empowerment, 
                and community development. Contact us at handsofhelpchildrenorg@gmail.com 
                to learn about current volunteer opportunities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Where does my donation go?
              </h3>
              <p className="text-gray-600">
                Your donations directly support our programs including the Havens Community 
                Library, Sister MHM project, digital literacy training, and community 
                engagement initiatives. We operate with transparency and accountability.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I visit the Havens Community Library?
              </h3>
              <p className="text-gray-600">
                Yes! We welcome visitors to our community center in Kasabuni. 
                Please contact us in advance to arrange a visit and learn more 
                about our programs and impact in the community.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How can my organization partner with you?
              </h3>
              <p className="text-gray-600">
                We're always open to partnerships that align with our mission. 
                Whether you're a school, NGO, business, or international organization, 
                we'd love to explore collaboration opportunities. Contact us to discuss.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;