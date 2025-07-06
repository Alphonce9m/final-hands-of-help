import React from 'react';

interface ImpactArea {
  title: string;
  description: string;
}

interface SuccessStory {
  title: string;
  description: string;
  result: string;
  theme: 'green' | 'pink' | 'blue';
}

interface SupportOption {
  title: string;
  description: string;
  link: string;
  linkText: string;
  isExternal?: boolean;
}

const Donate: React.FC = () => {
  const impactAreas: ImpactArea[] = [
    {
      title: 'Education & Library',
      description: 'Support our community library and educational programs.'
    },
    {
      title: 'Youth Development',
      description: 'Fund skills training and mentorship for young people.'
    },
    {
      title: 'Health & Wellness',
      description: 'Help provide healthcare services and hygiene education.'
    },
    {
      title: 'Community Support',
      description: 'Support our food security and family support programs.'
    }
  ];

  const successStories: SuccessStory[] = [
    {
      title: 'USAID Partnership Success',
      description: 'With USAID funding through YALI, we successfully completed Phase 1 of our Havens Community Library, demonstrating our ability to manage funds transparently and effectively.',
      result: '100+ children now have daily library access',
      theme: 'green'
    },
    {
      title: 'Sister MHM Impact',
      description: 'Through donor support, our Sister Menstrual Health Management program has empowered hundreds of girls with dignity kits and comprehensive health education.',
      result: 'Reduced school absenteeism among girls',
      theme: 'pink'
    },
    {
      title: 'Digital Skills Training',
      description: 'Donor contributions have enabled us to provide digital literacy training to over 50 youth, preparing them for employment in the modern economy.',
      result: '50+ youth equipped with digital skills',
      theme: 'blue'
    }
  ];

  const supportOptions: SupportOption[] = [
    {
      title: 'Donate via M-Changa',
      description: 'Support our cause through secure online donations via M-Changa. Every contribution makes a difference!',
      link: 'https://www.mchanga.africa/fundraiser/116090',
      linkText: 'Donate Now',
      isExternal: true
    },
    {
      title: 'Volunteer',
      description: 'Join our volunteer programs and contribute your skills to our mission in Kasabuni.',
      link: '/contact',
      linkText: 'Learn More',
      isExternal: false
    },
    {
      title: 'Partnerships',
      description: 'Partner with us to create sustainable programs and expand our community impact.',
      link: '/contact',
      linkText: 'Get Started',
      isExternal: false
    },
    {
      title: 'In-Kind Donations',
      description: 'Donate books and educational materials to our Havens Community Library.',
      link: '/contact',
      linkText: 'Donate Books',
      isExternal: false
    }
  ];

  const benefits = [
    'Sustained impact with regular support',
    'Lower administrative costs',
    'Easy and convenient giving',
    'Tax benefits',
    'Regular updates on your impact'
  ];

  const themeClasses = {
    green: 'bg-green-50 text-green-700',
    pink: 'bg-pink-50 text-pink-700',
    blue: 'bg-blue-50 text-blue-700'
  };
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="py-32 bg-black text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Support Our Mission</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your donation creates lasting change in the Kasabuni community and empowers young leaders
          </p>
        </div>
      </div>

      {/* Donation CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border border-white/10 p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-6">Make a Donation</h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Support our initiatives through M-Changa, a secure fundraising platform
            </p>
            
            {/* M-Changa Donation Button */}
            <div className="mt-10">
              <div className="space-y-4">
                <a
                  href="https://www.mchanga.africa/fundraiser/116090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-medium text-white transition-colors bg-red-600 border border-transparent rounded-md hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  Donate via M-Changa
                </a>
                <p className="text-sm text-center text-white/60">
                  Secure payments via M-Pesa, Card, or Bank Transfer
                </p>
                
                <div className="pt-4 mt-4 border-t border-white/10">
                  <h3 className="text-lg font-medium text-white">Other Ways to Support</h3>
                  <div className="grid gap-4 mt-4 sm:grid-cols-2">
                    {supportOptions.filter(opt => !opt.isExternal).map((option, index) => (
                      <a
                        key={index}
                        href={option.link}
                        className="flex items-center justify-between p-4 transition-colors bg-gray-900 rounded-lg hover:bg-gray-800"
                      >
                        <div>
                          <h4 className="font-medium text-white">{option.title}</h4>
                          <p className="mt-1 text-sm text-gray-300">{option.description}</p>
                        </div>
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Where Your Money Goes</h2>
            <p className="text-xl text-gray-600">
              See exactly how your donation creates impact in our specific programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area: ImpactArea, index: number) => (
              <div key={index} className="border border-white/10 p-6 h-full">
                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-white/70">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-white/10 p-8 md:p-12">
            <div className="md:flex items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4">Become a Monthly Donor</h2>
                <p className="text-lg text-white/70 mb-6">
                  Join our community of monthly supporters and help create sustainable change in Kasabuni.
                </p>
                <button className="px-8 py-3 bg-white text-black font-semibold hover:bg-gray-100 transition-colors">
                  Give Monthly
                </button>
              </div>
              <div className="md:w-1/3">
                <div className="border border-white/10 p-6">
                  <h3 className="font-semibold mb-3">Why give monthly?</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span className="text-white/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Your Impact</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              See how your donation makes a difference in the lives of children and youth in Kasabuni
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {story.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {story.description}
                </p>
                <div className={`${themeClasses[story.theme]} p-3 rounded-lg`}>
                  <span className="font-semibold">Result: {story.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Other Ways to Support</h2>
            <p className="text-xl text-blue-100">
              There are many ways to make a difference beyond financial donations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="text-center p-6 bg-blue-800 rounded-lg h-full">
                <h3 className="text-xl font-semibold mb-3 text-white">{option.title}</h3>
                <p className="text-blue-100 mb-4">
                  {option.description}
                </p>
                <a href={option.link} className="text-orange-500 hover:text-orange-300 font-semibold">
                  {option.linkText} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Donations */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Questions About Donating?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're here to help you understand how your donation will make a difference. 
            Contact us for more information about our programs and impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:handsofhelpchildrenorg@gmail.com"
              className="bg-blue-700 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition-colors duration-200 font-semibold"
            >
              Contact Us
            </a>
            <a
              href="/programs"
              className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-full hover:bg-blue-700 hover:text-white transition-colors duration-200 font-semibold"
            >
              Learn About Our Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;