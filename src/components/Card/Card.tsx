import React from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ children, className = '', onClick }, ref) => {
  return (
    <div ref={ref} className={`card ${className}`} onClick={onClick}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;

