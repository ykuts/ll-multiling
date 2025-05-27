import Link from 'next/link';

const Button = ({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick, 
  type = 'button',
  ...props 
}) => {
  // Button sizes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  // Button variants
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90 border-2 border-primary',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 border-2 border-secondary',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10',
    outlineSecondary: 'bg-transparent border-2 border-secondary text-secondary hover:bg-secondary/10',
    white: 'bg-white text-primary hover:bg-gray-100 border-2 border-white',
  };
  
  const baseClasses = 'rounded-md font-medium transition duration-300 inline-block text-center';
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }
  
  // Otherwise render as button
  return (
    <button 
      type={type} 
      className={buttonClasses} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;