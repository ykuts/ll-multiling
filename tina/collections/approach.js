export const approachCollection = {
  name: "approachTranslations",
  label: "Approach Page Translations",
  path: "public/locales",
  format: "json",
  match: {
    include: "*/approach"
  },
  ui: {
    router: ({ document }) => {
      const locale = document._sys.breadcrumbs[0];
      if (locale === 'en') {
        return '/approach/';
      }
      return `/${locale}/approach/`;
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
    
    // Intro Section
    {
      type: "object",
      name: "intro",
      label: "📝 Introduction",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subtitle", label: "Subtitle" },
        { type: "string", name: "paragraph1", label: "Paragraph 1", ui: { component: "textarea" } },
        { type: "string", name: "paragraph2", label: "Paragraph 2", ui: { component: "textarea" } },
        { type: "string", name: "paragraph3", label: "Paragraph 3", ui: { component: "textarea" } },
      ],
    },
    
    // Steps Section
    {
      type: "object",
      name: "steps",
      label: "📋 Our Approach Steps",
      fields: [
        { type: "string", name: "whatWeDo", label: "What We Do Label" },
        { type: "string", name: "howWeDoIt", label: "How We Do It Label" },
        
        // Needs Assessment
        {
          type: "object",
          name: "needsAssessment",
          label: "Step 1: Needs Assessment",
          fields: [
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
            { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          ],
        },
        
        // Custom Design
        {
          type: "object",
          name: "customDesign",
          label: "Step 2: Custom Design",
          fields: [
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
          ],
        },
        
        // Architecture
        {
          type: "object",
          name: "architecture",
          label: "Step 3: Architecture",
          fields: [
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
          ],
        },
        
        // Human in Loop
        {
          type: "object",
          name: "humanInLoop",
          label: "Step 4: Human in Loop",
          fields: [
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
            { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          ],
        },
      ],
    },
    
    // Results Section
    {
      type: "object",
      name: "results",
      label: "🎉 Results Section",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
        { type: "string", name: "button", label: "Button Text" },
      ],
    },
    
    // Process Design Section
    {
      type: "object",
      name: "processDesign",
      label: "🔧 Process Design Section",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
        
        // Needs Assessment
        {
          type: "object",
          name: "needsAssessment",
          label: "Needs Assessment Card",
          fields: [
            { type: "string", name: "title1", label: "Title Line 1" },
            { type: "string", name: "title2", label: "Title Line 2" },
            { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          ],
        },
        
        // Custom Design
        {
          type: "object",
          name: "customDesign",
          label: "Custom Design Card",
          fields: [
            { type: "string", name: "title1", label: "Title Line 1" },
            { type: "string", name: "title2", label: "Title Line 2" },
            { type: "string", name: "title3", label: "Title Line 3" },
            { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          ],
        },
        
        // Architecture
        {
          type: "object",
          name: "architecture",
          label: "Architecture Card",
          fields: [
            { type: "string", name: "title1", label: "Title Line 1" },
            { type: "string", name: "title2", label: "Title Line 2" },
            { type: "string", name: "title3", label: "Title Line 3" },
            { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          ],
        },
        
        // Human in Loop
        {
          type: "object",
          name: "humanInLoop",
          label: "Human in Loop Card",
          fields: [
            { type: "string", name: "title1", label: "Title Line 1" },
            { type: "string", name: "title2", label: "Title Line 2" },
            { type: "string", name: "title3", label: "Title Line 3" },
            { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          ],
        },
        
        // Results
        {
          type: "object",
          name: "results",
          label: "Results Card",
          fields: [
            { type: "string", name: "title", label: "Title" },
            { 
              type: "string", 
              name: "description", 
              label: "Description (supports HTML)", 
              ui: { component: "textarea" } 
            },
          ],
        },
      ],
    },
  ],
}