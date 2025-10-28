export const homeCollection = {
  name: "homeTranslations",
  label: "Home Page Translations",
  path: "public/locales",
  format: "json",
  match: {
    include: "*/home"
  },
  ui: {
    router: ({ document }) => {
      const locale = document._sys.breadcrumbs[0];
      if (locale === 'en') {
        return '/';
      }
      return `/${locale}/`;
    },
  },
  fields: [
    // Hero Section
    {
      type: "object",
      name: "hero",
      label: "🎯 Hero Section",
      fields: [
        { type: "string", name: "brandName", label: "Brand Name" },
        { type: "string", name: "tagline1", label: "Tagline Line 1" },
        { type: "string", name: "tagline2", label: "Tagline Line 2" },
        { type: "string", name: "subtitle1", label: "Subtitle 1", ui: { component: "textarea" } },
        { type: "string", name: "subtitle2", label: "Subtitle 2", ui: { component: "textarea" } },
        { type: "string", name: "btnServices", label: "Services Button" },
        { type: "string", name: "btnContact", label: "Contact Button" },
      ],
    },
    
    // Foundation Section
    {
      type: "object",
      name: "foundation",
      label: "🏛️ Foundation Section",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
        {
          type: "object",
          name: "stats",
          label: "Statistics",
          fields: [
            {
              type: "object",
              name: "annotators",
              label: "Annotators Stat",
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
        {
          type: "object",
          name: "capabilities",
          label: "Capabilities",
          fields: [
            {
              type: "object",
              name: "swissQuality",
              label: "Swiss Quality",
              fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              ],
            },
          ],
        },
        {
          type: "object",
          name: "academy",
          label: "Academy",
          fields: [
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "description1", label: "Description 1", ui: { component: "textarea" } },
            { type: "string", name: "description2", label: "Description 2", ui: { component: "textarea" } },
            { type: "string", name: "stat", label: "Stat Number" },
            { type: "string", name: "statLabel", label: "Stat Label" },
            { type: "string", name: "statDescription", label: "Stat Description", ui: { component: "textarea" } },
          ],
        },
      ],
    },
    
    // Expert Annotation Section
    {
      type: "object",
      name: "expertAnnotation",
      label: "🔬 Expert Annotation Section",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
        { type: "string", name: "cta", label: "CTA Button Text" },
        {
          type: "object",
          name: "medical",
          label: "Medical & Healthcare",
          fields: [
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
          ],
        },
      ],
    },
    
    // Challenge Section
    {
      type: "object",
      name: "challenge",
      label: "⚠️ Challenge Section",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
        {
          type: "object",
          name: "challenges",
          label: "Challenges",
          fields: [
            {
              type: "object",
              name: "time",
              label: "Time Challenge",
              fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              ],
            },
            {
              type: "object",
              name: "quality",
              label: "Quality Challenge",
              fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              ],
            },
            {
              type: "object",
              name: "costs",
              label: "Costs Challenge",
              fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              ],
            },
            {
              type: "object",
              name: "integration",
              label: "Integration Challenge",
              fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              ],
            },
          ],
        },
      ],
    },
    
    // Solution Section
    {
      type: "object",
      name: "solution",
      label: "✅ Solution Section",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
        {
          type: "object",
          name: "solutions",
          label: "Solutions",
          fields: [
            {
              type: "object",
              name: "speed",
              label: "Speed",
              fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              ],
            },
            {
              type: "object",
              name: "savings",
              label: "Savings",
              fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              ],
            },
            {
              type: "object",
              name: "reliability",
              label: "Reliability",
              fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              ],
            },
          ],
        },
      ],
    },
    
    // Why Choose Section
    {
      type: "object",
      name: "whyChoose",
      label: "💡 Why Choose Section",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
        {
          type: "object",
          name: "features",
          label: "Features",
          fields: [
            {
              type: "object",
              name: "scale",
              label: "Scale & Capacity",
              fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              ],
            },
            {
              type: "object",
              name: "medical",
              label: "Medical Expertise",
              fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              ],
            },
            {
              type: "object",
              name: "social",
              label: "Social Impact",
              fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              ],
            },
          ],
        },
        {
          type: "object",
          name: "cta",
          label: "CTA",
          fields: [
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
            { type: "string", name: "btnGeneral", label: "General Button" },
            { type: "string", name: "btnExpert", label: "Expert Button" },
            { type: "string", name: "btnGetStarted", label: "Get Started Button" },
          ],
        },
      ],
    },
    
    // Approach Section
    {
      type: "object",
      name: "approach",
      label: "📋 Approach Section",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
        {
          type: "object",
          name: "steps",
          label: "Steps",
          fields: [
            {
              type: "object",
              name: "assessment",
              label: "Step 1: Assessment",
              fields: [
                { type: "string", name: "number", label: "Number" },
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              ],
            },
            {
              type: "object",
              name: "design",
              label: "Step 2: Design",
              fields: [
                { type: "string", name: "number", label: "Number" },
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              ],
            },
            {
              type: "object",
              name: "architecture",
              label: "Step 3: Architecture",
              fields: [
                { type: "string", name: "number", label: "Number" },
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              ],
            },
            {
              type: "object",
              name: "human",
              label: "Step 4: Human in Loop",
              fields: [
                { type: "string", name: "number", label: "Number" },
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              ],
            },
          ],
        },
        { type: "string", name: "cta", label: "CTA Button Text" },
      ],
    },
    
    // Credentials Section
    {
      type: "object",
      name: "credentials",
      label: "🏆 Credentials Section",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
        { type: "string", name: "cta", label: "CTA Button Text" },
        {
          type: "object",
          name: "cases",
          label: "Case Labels",
          fields: [
            { type: "string", name: "challenge", label: "Challenge Label" },
            { type: "string", name: "solution", label: "Solution Label" },
            { type: "string", name: "outcome", label: "Outcome Label" },
          ],
        },
      ],
    },
    
    // Final CTA Section
    {
      type: "object",
      name: "cta",
      label: "📢 Final CTA Section",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
        { type: "string", name: "button", label: "Button Text" },
      ],
    },
  ],
}