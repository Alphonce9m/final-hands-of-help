import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

const leadership: TeamMember[] = [
  {
    name: "Kennedy Otieno",
    role: "Founder & Executive Director",
    bio: "Kennedy founded Hands of Help Children's Organization with a vision to transform lives in Kasabuni. His leadership has guided the organization from a small charity to a recognized community-based organization."
  },
  {
    name: "Elishifa Muthoni",
    role: "Assistant Executive Director",
    bio: "Elishifa supports strategic leadership and program oversight, bringing fresh perspectives and innovative approaches to our community initiatives."
  },
  {
    name: "Claris Oprah",
    role: "Head of Programs, Operations and Finance",
    bio: "Claris ensures efficient program delivery and financial management, overseeing the implementation of our key initiatives across the community."
  },
  {
    name: "David Okeyo",
    role: "Assistant Head of Programs, Operations and Finance",
    bio: "David supports program coordination and operational efficiency, helping to maintain the quality and impact of our community programs."
  },
  {
    name: "Eden Mwikali",
    role: "Administration Manager",
    bio: "Eden manages administrative functions and ensures smooth organizational operations, supporting all teams in their daily activities."
  },
  {
    name: "Martha Mbashu",
    role: "Project Coordinator",
    bio: "Martha coordinates project implementation and community engagement, ensuring our programs meet the needs of our beneficiaries."
  },
  {
    name: "Alphonce Mdaki",
    role: "Head of Digital Literacy & Resource Mobilization Assistant",
    bio: "Alphonce leads our digital literacy programs and supports resource mobilization efforts to expand our impact."
  },
  {
    name: "Macy Tarus",
    role: "Partnership & Resource Mobilization Lead",
    bio: "Macy builds strategic partnerships and leads resource mobilization efforts to sustain and expand our programs."
  },
  {
    name: "Brian Otieno",
    role: "Head Librarian",
    bio: "Brian manages the Havens Community Library, ensuring quality educational resources and learning support for community members."
  },
  {
    name: "Dorcas Awino",
    role: "Assistant Administration Lead & Community Meal Support Officer",
    bio: "Dorcas supports administrative functions and coordinates community meal programs, ensuring holistic support for our beneficiaries."
  }
];

const Team: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-primary/90 to-black/90">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-up">
            Our Dedicated Team
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 animate-slide-up animation-delay-100">
            Meet the passionate individuals driving positive change in our community
          </p>
        </div>
      </section>
      
      {/* Leadership Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Our team is composed of dedicated professionals committed to making a lasting impact in our community through education and empowerment.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <TeamMemberCard 
                key={index} 
                member={member} 
                isHovered={hoveredCard === index}
                onHover={() => setHoveredCard(index)}
                onLeave={() => setHoveredCard(null)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-black/50 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Youth-Led Excellence</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Our 100% youth-led team combines local expertise with innovative approaches to community development.
              Each member brings unique skills and shared commitment to our mission.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
            {[
              { number: '15+', label: 'Team Members' },
              { number: '9+', label: 'Years Experience' },
              { number: '5+', label: 'Program Areas' },
              { number: '100%', label: 'Local Leadership' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-card p-6 text-center border border-white/10 rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm font-medium text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card p-8 border border-white/10 rounded-xl hover:border-primary/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Our Approach</h3>
                <p className="text-white/80">
                  We believe in hands-on, community-driven solutions. Our team works directly with community members to identify needs and develop sustainable programs that create lasting change.
                </p>
              </div>
              <div className="bg-card p-8 border border-white/10 rounded-xl hover:border-primary/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Join Our Team</h3>
                <p className="text-white/80 mb-6">
                  Interested in joining our team? We're always looking for passionate individuals committed to making a difference.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-block bg-primary text-black font-medium py-2 px-6 rounded-full hover:bg-primary/90 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-primary/5 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Be part of our mission to empower communities through education and opportunity
          </p>
          <Link 
            to="/careers" 
            className="inline-block bg-white text-black font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            View Open Positions
          </Link>
        </div>
      </section>
    </div>
  );
};

// Team Member Card Component
const TeamMemberCard: React.FC<{ 
  member: TeamMember;
  isHovered?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
}> = ({ member, isHovered, onHover, onLeave }) => {
  const [imageError] = React.useState(false);
  const initials = member.name.split(' ').map(n => n[0]).join('');
  
  return (
    <div 
      className="bg-card rounded-xl overflow-hidden h-full flex flex-col border border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative h-64 bg-gradient-to-br from-primary/10 to-black/30">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`text-7xl font-bold text-white/10 transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}>
            {initials}
          </div>
        </div>
        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`} />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-white text-center mb-1">{member.name}</h3>
        <p className="text-primary font-medium text-center mb-4">{member.role}</p>
        
        <div className="mt-auto">
          {member.bio && (
            <div className="mb-4">
              <p className="text-sm text-white/80 text-center">
                {member.bio.length > 120 ? `${member.bio.substring(0, 120)}...` : member.bio}
              </p>
            </div>
          )}
          
          <div className="flex justify-center space-x-4 pt-4 border-t border-white/10">
            <a 
              href={`mailto:${member.name.split(' ')[0].toLowerCase()}@handsofhelp.org`} 
              className="text-white/60 hover:text-primary transition-colors"
              aria-label={`Email ${member.name}`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </a>
            <a 
              href={`https://linkedin.com`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary transition-colors"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;