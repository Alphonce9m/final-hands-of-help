import React from 'react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  height?: 'sm' | 'md' | 'lg' | 'xl';
  backgroundImage?: string;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  children, 
  height = 'lg',
  backgroundImage,
  className = ''
}) => {
  const heightClasses = {
    sm: 'h-64',
    md: 'h-96',
    lg: 'h-[32rem]',
    xl: 'h-screen'
  };

  return (
    <div 
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden bg-black ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)'
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-black/80 to-black/90" />
      
      {/* Floating orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      
      {/* Additional floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl float glow-white"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-400/30 rounded-full blur-xl float glow-yellow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-600/30 rounded-full blur-xl float glow-blue" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-black/20 rounded-full blur-xl float" style={{ animationDelay: '6s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight text-shadow">
          <span className="block bg-gradient-to-r from-white via-yellow-200 to-blue-200 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-5xl mx-auto text-shadow backdrop-blur-light bg-white/10 rounded-2xl p-6">
            {subtitle}
          </p>
        )}
        {children && (
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;