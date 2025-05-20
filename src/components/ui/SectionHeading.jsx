const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  size = 'default',
  className = '',
}) => {
  const titleSizes = {
    small: 'text-2xl md:text-3xl',
    default: 'text-3xl md:text-4xl',
    large: 'text-4xl md:text-5xl',
  };

  const alignment = centered ? 'text-center mx-auto' : '';
  const maxWidth = centered ? 'max-w-3xl' : '';

  return (
    <div className={`mb-10 ${alignment} ${maxWidth} ${className}`}>
      <h2 className={`font-bold text-primary ${titleSizes[size]}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;