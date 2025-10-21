import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  
  schema: {
  collections: [
    // Главная страница
   {
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
      label: "Hero Section",
      fields: [
        {
          type: "string",
          name: "brandName",
          label: "Brand Name",
        },
        {
          type: "string",
          name: "tagline1",
          label: "Tagline Line 1",
        },
        {
          type: "string",
          name: "tagline2",
          label: "Tagline Line 2",
        },
        {
          type: "string",
          name: "subtitle1",
          label: "Subtitle 1",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "subtitle2",
          label: "Subtitle 2",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "btnServices",
          label: "Services Button Text",
        },
        {
          type: "string",
          name: "btnContact",
          label: "Contact Button Text",
        },
      ],
    },
    
    // Foundation Section
    {
      type: "object",
      name: "foundation",
      label: "Foundation Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "subtitle",
          label: "Subtitle",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    
    // Challenge Section
    {
      type: "object",
      name: "challenge",
      label: "Challenge Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "subtitle",
          label: "Subtitle",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    
    // Solution Section
    {
      type: "object",
      name: "solution",
      label: "Solution Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "subtitle",
          label: "Subtitle",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    
    // Approach Section
    {
      type: "object",
      name: "approach",
      label: "Approach Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "subtitle",
          label: "Subtitle",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "cta",
          label: "CTA Button Text",
        },
      ],
    },
    
    // CTA Section
    {
      type: "object",
      name: "cta",
      label: "CTA Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "subtitle",
          label: "Subtitle",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "button",
          label: "Button Text",
        },
      ],
    },
  ],
},
    
    // Оставляем Posts для примера
    /* {
      name: "post",
      label: "Posts",
      path: "content/posts",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          isTitle: true,
          required: true,
        },
        
        {
          type: "rich-text",
          name: "body",
          label: "Body",
          isBody: true,
        },
      ],
      ui: {
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
    }, */
  ],
}
});