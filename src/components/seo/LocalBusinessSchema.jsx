import JsonLd from './JsonLd';

const LocalBusinessSchema = ({ office = 'zurich' }) => {
  const officeData = {
    zurich: {
      name: "Label Ladder Zürich Office",
      address: {
        streetAddress: "Bahnhofstrasse 21",
        addressLocality: "Zürich",
        postalCode: "8001",
        addressRegion: "Zurich",
        addressCountry: "CH"
      },
      geo: {
        latitude: "47.3769",
        longitude: "8.5417"
      },
      telephone: "+41-44-123-45-67",
      email: "zurich@labelladder.com",
      openingHours: {
        opens: "09:00",
        closes: "17:00",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
      },
      timeZone: "Europe/Zurich"
    },
    windhoek: {
      name: "Label Ladder Windhoek Office", 
      address: {
        streetAddress: "123 Independence Avenue",
        addressLocality: "Windhoek",
        addressRegion: "Khomas",
        addressCountry: "NA"
      },
      geo: {
        latitude: "-22.5609",
        longitude: "17.0658"
      },
      telephone: "+264-61-234-5678",
      email: "windhoek@labelladder.com",
      openingHours: {
        opens: "08:00",
        closes: "16:00",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
      },
      timeZone: "Africa/Windhoek"
    }
  };

  const currentOffice = officeData[office];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": currentOffice.name,
    "@id": `https://labelladder.com/#${office}-office`,
    "url": "https://labelladder.com",
    "telephone": currentOffice.telephone,
    "email": currentOffice.email,
    "address": {
      "@type": "PostalAddress",
      ...currentOffice.address
    },
    "geo": {
      "@type": "GeoCoordinates",
      ...currentOffice.geo
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": currentOffice.openingHours.dayOfWeek,
      "opens": currentOffice.openingHours.opens,
      "closes": currentOffice.openingHours.closes
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": "Label Ladder",
      "url": "https://labelladder.com"
    },
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Invoice"],
    "currenciesAccepted": ["USD", "EUR", "CHF"],
    "hasMap": `https://www.google.com/maps/search/?api=1&query=${currentOffice.geo.latitude},${currentOffice.geo.longitude}`,
    "areaServed": {
      "@type": "Country",
      "name": office === 'zurich' ? "Switzerland" : "Namibia"
    }
  };

  return <JsonLd data={schema} />;
};

export default LocalBusinessSchema;