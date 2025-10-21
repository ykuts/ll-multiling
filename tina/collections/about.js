export const aboutCollection = {
  name: "aboutTranslations",
  label: "About Page Translations",
  path: "public/locales",
  format: "json",
  match: {
    include: "*/about"
  },
  ui: {
    router: ({ document }) => {
      const locale = document._sys.breadcrumbs[0];
      if (locale === 'en') {
        return '/about/';
      }
      return `/${locale}/about/`;
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
    
    // About Us Section
    {
      type: "object",
      name: "aboutUs",
      label: "📖 About Us Section",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
        { 
          type: "string", 
          name: "intro", 
          label: "Introduction (supports HTML)", 
          ui: { component: "textarea" } 
        },
        { 
          type: "string", 
          name: "paragraph2", 
          label: "Paragraph 2 (supports HTML)", 
          ui: { component: "textarea" } 
        },
        { 
          type: "string", 
          name: "paragraph3", 
          label: "Paragraph 3", 
          ui: { component: "textarea" } 
        },
        { 
          type: "string", 
          name: "paragraph4", 
          label: "Paragraph 4 (supports HTML)", 
          ui: { component: "textarea" } 
        },
      ],
    },
    
    // Working With Us Section
    {
      type: "object",
      name: "workingWithUs",
      label: "🤝 Working With Us Section",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
        {
          type: "object",
          name: "quality",
          label: "Quality Feature",
          fields: [
            { type: "string", name: "title", label: "Title" },
            { 
              type: "string", 
              name: "text", 
              label: "Text (supports HTML)", 
              ui: { component: "textarea" } 
            },
          ],
        },
        {
          type: "object",
          name: "cost",
          label: "Cost Feature",
          fields: [
            { type: "string", name: "title", label: "Title" },
            { 
              type: "string", 
              name: "text", 
              label: "Text (supports HTML)", 
              ui: { component: "textarea" } 
            },
          ],
        },
        {
          type: "object",
          name: "talent",
          label: "Talent Feature",
          fields: [
            { type: "string", name: "title", label: "Title" },
            { 
              type: "string", 
              name: "text", 
              label: "Text (supports HTML)", 
              ui: { component: "textarea" } 
            },
          ],
        },
        {
          type: "object",
          name: "impact",
          label: "Impact Feature",
          fields: [
            { type: "string", name: "title", label: "Title" },
            { 
              type: "string", 
              name: "text", 
              label: "Text (supports HTML)", 
              ui: { component: "textarea" } 
            },
          ],
        },
      ],
    },
    
    // Our Impact Section
    {
      type: "object",
      name: "ourImpact",
      label: "💪 Our Impact Section",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
        { 
          type: "string", 
          name: "paragraph1", 
          label: "Paragraph 1 (supports HTML)", 
          ui: { component: "textarea" } 
        },
        { 
          type: "string", 
          name: "paragraph2", 
          label: "Paragraph 2 (supports HTML)", 
          ui: { component: "textarea" } 
        },
        { type: "string", name: "coreTeachings", label: "Core Teachings Header" },
        {
          type: "object",
          name: "teachings",
          label: "Academy Teachings",
          fields: [
            { 
              type: "string", 
              name: "intro", 
              label: "Intro to Data Work (supports HTML)", 
              ui: { component: "textarea" } 
            },
            { 
              type: "string", 
              name: "annotation", 
              label: "Annotation Skills (supports HTML)", 
              ui: { component: "textarea" } 
            },
            { 
              type: "string", 
              name: "quality", 
              label: "Quality & Review (supports HTML)", 
              ui: { component: "textarea" } 
            },
            { 
              type: "string", 
              name: "project", 
              label: "Project & Tech Skills (supports HTML)", 
              ui: { component: "textarea" } 
            },
            { 
              type: "string", 
              name: "workplace", 
              label: "Workplace Readiness (supports HTML)", 
              ui: { component: "textarea" } 
            },
          ],
        },
      ],
    },
    
    // Team Section
    {
      type: "object",
      name: "team",
      label: "👥 Team Section",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
        {
          type: "object",
          name: "labelers",
          label: "Labelers Subsection",
          fields: [
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
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
        { type: "string", name: "button", label: "Button Text" },
      ],
    },
  ],
}