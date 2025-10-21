export const footerCollection = {
  name: "footerTranslations",
  label: "Footer Translations",
  path: "public/locales",
  format: "json",
  match: {
    include: "*/footer"
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    // Description
    {
      type: "string",
      name: "description",
      label: "📝 Description",
      ui: {
        component: "textarea",
      },
    },
    
    // Quick Links
    {
      type: "object",
      name: "quickLinks",
      label: "🔗 Quick Links",
      fields: [
        { type: "string", name: "title", label: "Section Title" },
        { type: "string", name: "aboutUs", label: "About Us" },
        { type: "string", name: "ourApproach", label: "Our Approach" },
        { type: "string", name: "credentials", label: "Credentials" },
      ],
    },
    
    // Services
    {
      type: "object",
      name: "services",
      label: "🛠️ Services",
      fields: [
        { type: "string", name: "title", label: "Section Title" },
        { type: "string", name: "ourServices", label: "Our Services" },
        { type: "string", name: "generalData", label: "General Data Annotation" },
        { type: "string", name: "expertAnnotation", label: "Expert Annotation" },
      ],
    },
    
    // Contact
    {
      type: "object",
      name: "contact",
      label: "📧 Contact",
      fields: [
        { type: "string", name: "title", label: "Section Title" },
        { type: "string", name: "email", label: "Email Label" },
        { type: "string", name: "website", label: "Website Label" },
      ],
    },
    
    // CTA & Copyright
    {
      type: "string",
      name: "cta",
      label: "📢 CTA Button Text",
    },
    {
      type: "string",
      name: "copyright",
      label: "© Copyright Text",
    },
  ],
}