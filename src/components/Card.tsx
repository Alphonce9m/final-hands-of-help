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
    <div className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all ${
      hover ? 'hover:shadow-md hover:-translate-y-0.5' : ''
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
          <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        )}
        {description && (
          <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        )}
        {children}
      </div>
    </div>
  );
}