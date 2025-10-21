export const credentialsCollection = {
  name: "credentialsTranslations",
  label: "Credentials Page Translations",
  path: "public/locales",
  format: "json",
  match: {
    include: "*/credentials"
  },
  ui: {
    router: ({ document }) => {
      const locale = document._sys.breadcrumbs[0];
      if (locale === 'en') {
        return '/credentials/';
      }
      return `/${locale}/credentials/`;
    },
  },
  fields: [
    // Hero Section
    {
      type: "object",
      name: "hero",
      label: "🎯 Hero Section",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
      ],
    },
    
    // Success Stories Section
    {
      type: "object",
      name: "successStories",
      label: "🏆 Success Stories",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
        { type: "string", name: "viewCaseStudy", label: "View Case Study Button" },
      ],
    },
    
    // Detailed Case Labels
    {
      type: "object",
      name: "detailedCase",
      label: "📋 Case Study Labels",
      fields: [
        { type: "string", name: "who", label: "WHO Label" },
        { type: "string", name: "what", label: "WHAT Label" },
        { type: "string", name: "how", label: "HOW Label" },
        { type: "string", name: "getSimilarResults", label: "CTA Button" },
      ],
    },
    
    // Results Section
    {
      type: "object",
      name: "results",
      label: "📊 Results Section",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
        {
          type: "object",
          name: "accuracy",
          label: "Accuracy Stat",
          fields: [
            { type: "string", name: "number", label: "Number" },
            { type: "string", name: "label", label: "Label" },
            { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          ],
        },
        {
          type: "object",
          name: "costReduction",
          label: "Cost Reduction Stat",
          fields: [
            { type: "string", name: "number", label: "Number" },
            { type: "string", name: "label", label: "Label" },
            { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          ],
        },
        {
          type: "object",
          name: "delivery",
          label: "Delivery Stat",
          fields: [
            { type: "string", name: "number", label: "Number" },
            { type: "string", name: "label", label: "Label" },
            { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          ],
        },
      ],
    },
    
    // Industries Section
    {
      type: "object",
      name: "industries",
      label: "🏭 Industries We Serve",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
        {
          type: "object",
          name: "list",
          label: "Industry List",
          fields: [
            { type: "string", name: "finance", label: "Finance" },
            { type: "string", name: "healthcare", label: "Healthcare" },
            { type: "string", name: "ecommerce", label: "E-commerce" },
            { type: "string", name: "software", label: "Software" },
            { type: "string", name: "automotive", label: "Automotive" },
            { type: "string", name: "manufacturing", label: "Manufacturing" },
            { type: "string", name: "logistics", label: "Logistics" },
            { type: "string", name: "insurance", label: "Insurance" },
            { type: "string", name: "legal", label: "Legal" },
            { type: "string", name: "realEstate", label: "Real Estate" },
            { type: "string", name: "education", label: "Education" },
            { type: "string", name: "energy", label: "Energy" },
          ],
        },
      ],
    },
    
    // CTA Section
    {
      type: "object",
      name: "cta",
      label: "📢 CTA Section",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
        { type: "string", name: "btnContact", label: "Contact Button" },
        { type: "string", name: "btnServices", label: "Services Button" },
      ],
    },
    
    // Case Studies
    {
      type: "object",
      name: "cases",
      label: "📚 Case Studies",
      fields: [
        // Adaire Case
        {
          type: "object",
          name: "adaire",
          label: "Adaire Case",
          fields: [
            { type: "string", name: "project", label: "Project Title" },
            { type: "string", name: "description", label: "Short Description", ui: { component: "textarea" } },
            { type: "string", name: "who", label: "WHO", ui: { component: "textarea" } },
            { type: "string", name: "what", label: "WHAT", ui: { component: "textarea" } },
            { type: "string", name: "how", label: "HOW", ui: { component: "textarea" } },
            { type: "string", name: "challenge", label: "Challenge" },
            { type: "string", name: "solution", label: "Solution" },
            { type: "string", name: "outcome", label: "Outcome" },
          ],
        },
        // DDD Case
        {
          type: "object",
          name: "ddd",
          label: "DDD Case",
          fields: [
            { type: "string", name: "project", label: "Project Title" },
            { type: "string", name: "description", label: "Short Description", ui: { component: "textarea" } },
            { type: "string", name: "who", label: "WHO", ui: { component: "textarea" } },
            { type: "string", name: "what", label: "WHAT", ui: { component: "textarea" } },
            { type: "string", name: "how", label: "HOW", ui: { component: "textarea" } },
            { type: "string", name: "challenge", label: "Challenge" },
            { type: "string", name: "solution", label: "Solution" },
            { type: "string", name: "outcome", label: "Outcome" },
          ],
        },
        // Ambulanzpartner Case
        {
          type: "object",
          name: "ambulanzpartner",
          label: "Ambulanzpartner Case",
          fields: [
            { type: "string", name: "project", label: "Project Title" },
            { type: "string", name: "description", label: "Short Description", ui: { component: "textarea" } },
            { type: "string", name: "who", label: "WHO", ui: { component: "textarea" } },
            { type: "string", name: "what", label: "WHAT", ui: { component: "textarea" } },
            { type: "string", name: "how", label: "HOW", ui: { component: "textarea" } },
            { type: "string", name: "challenge", label: "Challenge" },
            { type: "string", name: "solution", label: "Solution" },
            { type: "string", name: "outcome", label: "Outcome" },
          ],
        },
        // Impact Tank Case
        {
          type: "object",
          name: "impactTank",
          label: "Impact Tank Case",
          fields: [
            { type: "string", name: "project", label: "Project Title" },
            { type: "string", name: "description", label: "Short Description", ui: { component: "textarea" } },
            { type: "string", name: "who", label: "WHO", ui: { component: "textarea" } },
            { type: "string", name: "what", label: "WHAT", ui: { component: "textarea" } },
            { type: "string", name: "how", label: "HOW", ui: { component: "textarea" } },
            { type: "string", name: "challenge", label: "Challenge" },
            { type: "string", name: "solution", label: "Solution" },
            { type: "string", name: "outcome", label: "Outcome" },
          ],
        },
      ],
    },
  ],
}