import Link from 'next/link';
import { trackEmailClick, trackPhoneClick } from '../../lib/gtag';

const ContactButton = ({ 
  type = 'email', // 'email' | 'phone' | 'link'
  href,
  children,
  className = '',
  ...props 
}) => {
  const handleClick = () => {
    if (type === 'email') {
      trackEmailClick();
    } else if (type === 'phone') {
      trackPhoneClick();
    }
  };

  if (type === 'phone') {
    return (
      <a 
        href={`tel:${href}`}
        onClick={handleClick}
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  }

  if (type === 'email') {
    return (
      <a 
        href={`mailto:${href}`}
        onClick={handleClick}
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link 
      href={href}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ContactButton;