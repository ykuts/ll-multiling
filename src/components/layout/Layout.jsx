// src/components/layout/Layout.jsx
import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ 
  children, 
  title, 
  description, 
  keywords, 
  image, 
  type = 'website',
  article = false,
  noIndex = false,
  canonicalUrl,
  structuredData
}) => {
  const router = useRouter();
  
  // Default SEO values
  const defaultTitle = 'Label Ladder - Professional Data Annotation & Processing Services | Switzerland & Namibia';
  const defaultDescription = 'Expert data annotation and processing services for AI and ML. Swiss precision meets Namibian talent. Text, image, video, audio annotation and comprehensive data processing solutions.';
  const defaultKeywords = 'data annotation, data processing, machine learning, AI training data, text annotation, image annotation, video annotation, audio processing, data labeling, data validation, data cleaning, data migration, Switzerland, Namibia, Zurich, Windhoek';
  const defaultImage = 'https://labelladder.com/images/og/label-ladder-og.jpg';
  
  // Processed meta values
  const pageTitle = title ? `Label Ladder | ${title}` : defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords || defaultKeywords;
  const pageImage = image || defaultImage;
  const pageCanonicalUrl = canonicalUrl || `https://labelladder.com${router.asPath.split('?')[0]}`;
  
  // Organization structured data (always included)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Label Ladder",
    "url": "https://labelladder.com",
    "logo": "https://labelladder.com/images/logo.png",
    "description": defaultDescription,
    "foundingDate": "2018",
    "numberOfEmployees": "50-100",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Hungerbergstrasse 26",
        "addressLocality": "Zürich",
        "postalCode": "8046",
        "addressRegion": "Zurich",
        "addressCountry": "CH",
        "name": "Label Ladder Zürich Office"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "8 Bell Street",
        "addressLocality": "Windhoek",
        "addressRegion": "Khomas",
        "addressCountry": "NA",
        "name": "Label Ladder Windhoek Office"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        /* "telephone": "+41-44-123-45-67", */
        "contactType": "customer service",
        "email": "hello@labelladder.com",
        "availableLanguage": ["English"],
        "areaServed": ["CH", "NA", "DE", "AT"]
      }
    ],
    "sameAs": [
      "https://linkedin.com/company/labelladder",
      "https://www.labelladder.com"
    ],
    "founder": [
      {
        "@type": "Person",
        "name": "Lorenzo Olivi",
        "jobTitle": "Co-founder & CEO"
      },
      {
        "@type": "Person", 
        "name": "Marion Schleifer",
        "jobTitle": "Co-founder & CTO"
      }
    ],
    "knowsAbout": [
      "Data Annotation",
      "Machine Learning",
      "Artificial Intelligence",
      "Data Processing",
      "Computer Vision",
      "Natural Language Processing"
    ],
    "serviceArea": {
      "@type": "Place",
      "name": "Worldwide"
    }
  };

  // Scroll to top on route change
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Label Ladder" />
        <meta name="publisher" content="Label Ladder" />
        <meta name="copyright" content="Label Ladder" />
        
        {/* Robots */}
        <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
        <meta name="googlebot" content={noIndex ? "noindex, nofollow" : "index, follow"} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={pageCanonicalUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={title || "Label Ladder - Data Annotation Services"} />
        <meta property="og:url" content={pageCanonicalUrl} />
        <meta property="og:site_name" content="Label Ladder" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <meta name="twitter:image:alt" content={title || "Label Ladder - Data Annotation Services"} />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="CH-ZH" />
        <meta name="geo.placename" content="Zürich, Switzerland" />
        <meta name="geo.position" content="47.3769;8.5417" />
        <meta name="ICBM" content="47.3769, 8.5417" />
        
        {/* Language and Region Alternates */}
        <link rel="alternate" hrefLang="en" href={pageCanonicalUrl} />
        <link rel="alternate" hrefLang="en-CH" href={pageCanonicalUrl} />
        <link rel="alternate" hrefLang="en-NA" href={pageCanonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={pageCanonicalUrl} />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
        {/* Article specific meta tags */}
        {article && (
          <>
            <meta property="article:publisher" content="Label Ladder" />
            <meta property="article:author" content="Label Ladder" />
            <meta property="article:section" content="Technology" />
            <meta property="article:tag" content="Data Annotation, Machine Learning, AI" />
          </>
        )}

        {/* Additional Security Headers */}
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

        {/* Organization Structured Data - Always included */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />

        {/* Page-specific Structured Data */}
        {structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData)
            }}
          />
        )}
      </Head>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;