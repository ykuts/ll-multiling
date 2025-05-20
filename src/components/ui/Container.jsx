const Container = ({ 
  children, 
  className = '',
  size = 'default',
  ...props 
}) => {
  const sizes = {
    small: 'max-w-4xl',
    default: 'max-w-7xl',
    large: 'max-w-screen-2xl',
    full: 'max-w-none',
  };

  return (
    <div 
      className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;