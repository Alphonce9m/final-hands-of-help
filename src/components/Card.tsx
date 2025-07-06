import React from 'react';

interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
  className?: string;
  hover?: boolean;
  noPadding?: boolean;
}

export default function Card({ 
  title, 
  description, 
  image, 
  children, 
  className = '',
  hover = true,
  noPadding = false
}: CardProps) {
  return (
    <div className={`bg-gray-900 rounded-xl shadow-sm overflow-hidden transition-all border border-gray-800 ${
      hover ? 'hover:shadow-lg hover:-translate-y-0.5 hover:border-gray-700' : ''
    } ${className}`}>
      {image && (
        <div className="relative h-48 overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center transform hover:scale-110 transition-transform duration-700" 
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden="true"
          />
        </div>
      )}
      <div className={noPadding ? '' : 'p-6'}>
        {title && (
          <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        )}
        {description && (
          <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
        )}
        {children}
      </div>
    </div>
  );
}