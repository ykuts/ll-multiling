export const contactCollection = {
  name: "contactTranslations",
  label: "Contact Page Translations",
  path: "public/locales",
  format: "json",
  match: {
    include: "*/contact"
  },
  ui: {
    router: ({ document }) => {
      const locale = document._sys.breadcrumbs[0];
      if (locale === 'en') {
        return '/contact/';
      }
      return `/${locale}/contact/`;
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
    
    // Get in Touch Section
    {
      type: "object",
      name: "getInTouch",
      label: "📧 Get in Touch",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
        { type: "string", name: "emailUs", label: "Email Us Link Text" },
      ],
    },
    
    // Social Media
    {
      type: "object",
      name: "socialMedia",
      label: "📱 Social Media",
      fields: [
        { type: "string", name: "title", label: "Title" },
      ],
    },
    
    // Contact Form
    {
      type: "object",
      name: "form",
      label: "📝 Contact Form",
      fields: [
        { type: "string", name: "title", label: "Form Title" },
        { type: "string", name: "firstName", label: "First Name Label" },
        { type: "string", name: "lastName", label: "Last Name Label" },
        { type: "string", name: "email", label: "Email Label" },
        { type: "string", name: "company", label: "Company Label" },
        { type: "string", name: "phone", label: "Phone Label" },
        { type: "string", name: "serviceType", label: "Service Type Label" },
        { type: "string", name: "dataVolume", label: "Data Volume Label" },
        { type: "string", name: "message", label: "Message Label" },
        { type: "string", name: "required", label: "Required Field Indicator" },
        { type: "string", name: "submit", label: "Submit Button Text" },
        { type: "string", name: "submitted", label: "Submitted Status Text" },
        { type: "string", name: "successMessage", label: "Success Message", ui: { component: "textarea" } },
        { type: "string", name: "errorMessage", label: "Error Message", ui: { component: "textarea" } },
        { type: "string", name: "errorMessageGeneral", label: "General Error Message", ui: { component: "textarea" } },
      ],
    },
    
    // Service Types
    {
      type: "object",
      name: "serviceTypes",
      label: "🔧 Service Type Options",
      fields: [
        { type: "string", name: "select", label: "Select Placeholder" },
        { type: "string", name: "text", label: "Text Annotation" },
        { type: "string", name: "image", label: "Image Annotation" },
        { type: "string", name: "video", label: "Video Annotation" },
        { type: "string", name: "audio", label: "Audio Annotation" },
        { type: "string", name: "processing", label: "Data Processing" },
        { type: "string", name: "other", label: "Other/Not Sure" },
      ],
    },
    
    // Data Volumes
    {
      type: "object",
      name: "dataVolumes",
      label: "📊 Data Volume Options",
      fields: [
        { type: "string", name: "select", label: "Select Placeholder" },
        { type: "string", name: "small", label: "Small Volume" },
        { type: "string", name: "medium", label: "Medium Volume" },
        { type: "string", name: "large", label: "Large Volume" },
        { type: "string", name: "enterprise", label: "Enterprise Volume" },
        { type: "string", name: "unknown", label: "Unknown Volume" },
      ],
    },
    
    // FAQ Section
    {
      type: "object",
      name: "faq",
      label: "❓ FAQ Section",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
        {
          type: "object",
          name: "q1",
          label: "Question 1",
          fields: [
            { type: "string", name: "question", label: "Question", ui: { component: "textarea" } },
            { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } },
          ],
        },
        {
          type: "object",
          name: "q2",
          label: "Question 2",
          fields: [
            { type: "string", name: "question", label: "Question", ui: { component: "textarea" } },
            { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } },
          ],
        },
        {
          type: "object",
          name: "q3",
          label: "Question 3",
          fields: [
            { type: "string", name: "question", label: "Question", ui: { component: "textarea" } },
            { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } },
          ],
        },
        {
          type: "object",
          name: "q4",
          label: "Question 4",
          fields: [
            { type: "string", name: "question", label: "Question", ui: { component: "textarea" } },
            { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } },
          ],
        },
        {
          type: "object",
          name: "q5",
          label: "Question 5",
          fields: [
            { type: "string", name: "question", label: "Question", ui: { component: "textarea" } },
            { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } },
          ],
        },
        { type: "string", name: "contactPrompt", label: "Contact Prompt" },
        { type: "string", name: "emailQuestion", label: "Email Question Button" },
      ],
    },
    
    // Office Locations
    {
      type: "object",
      name: "officeLocations",
      label: "🏢 Office Locations",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
        { type: "string", name: "workingHours", label: "Working Hours Label" },
        { type: "string", name: "keyServices", label: "Key Services Label" },
        {
          type: "object",
          name: "zurich",
          label: "Zurich Office",
          fields: [
            { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          ],
        },
        {
          type: "object",
          name: "windhoek",
          label: "Windhoek Office",
          fields: [
            { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          ],
        },
      ],
    },
    
    // Ready to Visit
    {
      type: "object",
      name: "readyToVisit",
      label: "📅 Ready to Visit CTA",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
        { type: "string", name: "scheduleMeeting", label: "Schedule Meeting Button" },
        { type: "string", name: "sendEmail", label: "Send Email Button" },
      ],
    },
  ],
}