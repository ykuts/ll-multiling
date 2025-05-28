export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Отправка просмотра страницы в GA
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Отправка событий в GA
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      send_to: GA_TRACKING_ID
    });
  }
};

// Специфичные события для Label Ladder
export const trackContactForm = (formType) => {
  event({
    action: 'form_submit',
    category: 'Contact',
    label: formType,
  });
};

export const trackServiceInquiry = (serviceType) => {
  event({
    action: 'service_inquiry',
    category: 'Services',
    label: serviceType,
  });
};

export const trackDownload = (fileName) => {
  event({
    action: 'download',
    category: 'Resources',
    label: fileName,
  });
};

export const trackPhoneClick = () => {
  event({
    action: 'phone_click',
    category: 'Contact',
    label: 'Header Phone',
  });
};

export const trackEmailClick = () => {
  event({
    action: 'email_click', 
    category: 'Contact',
    label: 'Email Link',
  });
};