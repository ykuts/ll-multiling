import JsonLd from './JsonLd';

const ServiceSchema = ({ services }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Data Annotation and Processing Services",
    "description": "Professional data annotation and processing services for machine learning and AI applications",
    "provider": {
      "@type": "Organization",
      "name": "Label Ladder",
      "url": "https://labelladder.com"
    },
    "serviceType": "Data Processing Services",
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://labelladder.com/contact",
      "serviceSmsNumber": "+41-44-123-45-67",
      "servicePhone": "+41-44-123-45-67"
    },
    "category": [
      "Data Annotation",
      "Machine Learning Services", 
      "AI Training Data",
      "Data Processing"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Data Annotation Services Catalog",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description,
          "category": service.category
        },
        "priceSpecification": service.price ? {
          "@type": "PriceSpecification",
          "price": service.price,
          "priceCurrency": "USD"
        } : undefined,
        "eligibleQuantity": service.moq ? {
          "@type": "QuantitativeValue",
          "minValue": service.moq
        } : undefined
      }))
    }
  };

  return <JsonLd data={schema} />;
};

export default ServiceSchema;