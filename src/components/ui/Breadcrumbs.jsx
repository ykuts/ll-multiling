import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumbs = ({ customBreadcrumbs = null, className = '' }) => {
  const router = useRouter();
  
  // Если переданы кастомные breadcrumbs, используем их
  if (customBreadcrumbs) {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": customBreadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.label,
        "item": `https://labelladder.com${crumb.href}`
      }))
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <nav aria-label="Breadcrumb" className={`text-sm text-gray-600 mb-6 ${className}`}>
          <ol className="flex items-center space-x-2">
            {customBreadcrumbs.map((crumb, index) => (
              <li key={crumb.href} className="flex items-center">
                {index > 0 && (
                  <svg 
                    className="w-4 h-4 mx-2 text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
                {index === customBreadcrumbs.length - 1 ? (
                  <span className="text-gray-900 font-medium">{crumb.label}</span>
                ) : (
                  <Link 
                    href={crumb.href} 
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </>
    );
  }

  // Автоматическая генерация breadcrumbs на основе URL
  const pathSegments = router.asPath.split('/').filter(segment => segment && !segment.includes('?'));
  
  if (pathSegments.length === 0) return null; // Не показываем на главной странице
  
  const pageNames = {
    'about': 'About Us',
    'services': 'Services', 
    'approach': 'Our Approach',
    'credentials': 'Credentials',
    'contact': 'Contact'
  };

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    ...pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      const label = pageNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
      return { label, href };
    })
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.label,
      "item": `https://labelladder.com${crumb.href}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className={`text-sm text-gray-600 mb-6 ${className}`}>
        <ol className="flex items-center space-x-2">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center">
              {index > 0 && (
                <svg 
                  className="w-4 h-4 mx-2 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-900 font-medium">{crumb.label}</span>
              ) : (
                <Link 
                  href={crumb.href} 
                  className="hover:text-primary transition-colors duration-200"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;