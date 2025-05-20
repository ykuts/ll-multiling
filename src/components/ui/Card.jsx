import Image from 'next/image';
import Link from 'next/link';

const Card = ({
  title,
  description,
  icon,
  imageSrc,
  imageAlt,
  href,
  variant = 'default', // default, feature, service
  className = '',
}) => {
  const cardContent = (
    <>
      {icon && (
        <div className="mb-4 text-primary">
          {icon}
        </div>
      )}
      
      {imageSrc && (
        <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      )}
      
      <h3 className="mb-3 text-xl font-bold text-primary">{title}</h3>
      
      {description && (
        <p className="text-gray-600">{description}</p>
      )}
      
      {href && !variant.includes('feature') && (
        <div className="mt-4">
          <span className="text-secondary font-medium hover:underline">
            Learn more
          </span>
        </div>
      )}
    </>
  );

  const cardClasses = {
    default: 'bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300',
    feature: 'bg-white p-8 rounded-lg shadow-md hover:shadow-lg border-t-4 border-secondary transition-all duration-300',
    service: 'bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:translate-y-[-5px] transition-all duration-300',
  };

  const wrapperClasses = `${cardClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={wrapperClasses}>
        {cardContent}
      </Link>
    );
  }

  return <div className={wrapperClasses}>{cardContent}</div>;
};

export default Card;