export const headerCollection = {
  name: "headerTranslations",
  label: "Header Translations",
  path: "public/locales",
  format: "json",
  match: {
    include: "*/header"
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    // Main Navigation
    {
      type: "object",
      name: "navigation",
      label: "🧭 Main Navigation",
      fields: [
        { type: "string", name: "aboutUs", label: "About Us" },
        { type: "string", name: "approach", label: "Approach" },
        { type: "string", name: "services", label: "Services" },
        { type: "string", name: "credentials", label: "Credentials" },
        { type: "string", name: "contactUs", label: "Contact Us" },
      ],
    },
    
    // About Submenu
    {
      type: "object",
      name: "aboutSubmenu",
      label: "📋 About Submenu",
      fields: [
        { type: "string", name: "mission", label: "Mission" },
        { type: "string", name: "meetTheTeam", label: "Meet the Team" },
      ],
    },
    
    // Services Submenu
    {
      type: "object",
      name: "servicesSubmenu",
      label: "🔧 Services Submenu",
      fields: [
        {
          type: "object",
          name: "ourServices",
          label: "Our Services",
          fields: [
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "description", label: "Description" },
          ],
        },
        {
          type: "object",
          name: "generalData",
          label: "General Data Annotation",
          fields: [
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "description", label: "Description" },
          ],
        },
        {
          type: "object",
          name: "expertAnnotation",
          label: "Expert Annotation",
          fields: [
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "description", label: "Description" },
          ],
        },
      ],
    },
  ],
}