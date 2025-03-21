// src/components/ui/Button.tsx
import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
};

const Button: React.FC<ButtonProps> = ({ 
  href, 
  className = '', 
  children, 
  variant = 'primary' 
}) => {
  const baseClasses = 'inline-block font-bold rounded-full transition-all duration-500 relative overflow-hidden z-10';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary to-primary-light text-white hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1',
    secondary: 'bg-gradient-to-r from-secondary to-secondary-light text-dark hover:shadow-lg hover:shadow-secondary/30 hover:-translate-y-1',
    accent: 'bg-gradient-to-r from-accent to-accent-light text-dark hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-1',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
};

export default Button;