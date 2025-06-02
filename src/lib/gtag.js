export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Send pageview to GA
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Send events to GA
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific events for Label Ladder
export const trackContactForm = (formType = 'contact') => {
  event({
    action: 'form_submit',
    category: 'engagement',
    label: formType,
  });
};

export const trackServiceInquiry = (serviceType) => {
  event({
    action: 'service_view',
    category: 'engagement', 
    label: serviceType,
  });
};

export const trackEmailClick = () => {
  event({
    action: 'email_click',
    category: 'contact',
    label: 'email_header',
  });
};

export const trackPhoneClick = () => {
  event({
    action: 'phone_click',
    category: 'contact', 
    label: 'phone_header',
  });
};

export const trackDownload = (fileName) => {
  event({
    action: 'file_download',
    category: 'engagement',
    label: fileName,
  });
};

export const trackOfficeInteraction = (office) => {
  event({
    action: 'office_interaction',
    category: 'engagement',
    label: office,
  });
};