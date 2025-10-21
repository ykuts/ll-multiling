export const generalServicesCollection = {
    name: "generalServicesTranslations",
    label: "General Services Page Translations",
    path: "public/locales",
    format: "json",
    match: {
        include: "*/general-services"
    },
    ui: {
        router: ({ document }) => {
            const locale = document._sys.breadcrumbs[0];
            if (locale === 'en') {
                return '/services/general-services/';
            }
            return `/${locale}/services/general-services/`;
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

        // Overview
        {
            type: "object",
            name: "overview",
            label: "📋 Overview",
            fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
            ],
        },

        // Service Types Cards
        {
            type: "object",
            name: "serviceTypes",
            label: "🔧 Service Type Cards",
            fields: [
                {
                    type: "object",
                    name: "text",
                    label: "Text Service Card",
                    fields: [
                        { type: "string", name: "title", label: "Title" },
                        { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                    ],
                },
                {
                    type: "object",
                    name: "image",
                    label: "Image Service Card",
                    fields: [
                        { type: "string", name: "title", label: "Title" },
                        { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                    ],
                },
                {
                    type: "object",
                    name: "video",
                    label: "Video Service Card",
                    fields: [
                        { type: "string", name: "title", label: "Title" },
                        { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                    ],
                },
                {
                    type: "object",
                    name: "audio",
                    label: "Audio Service Card",
                    fields: [
                        { type: "string", name: "title", label: "Title" },
                        { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                    ],
                },
                {
                    type: "object",
                    name: "processing",
                    label: "Processing Service Card",
                    fields: [
                        { type: "string", name: "title", label: "Title" },
                        { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                    ],
                },
            ],
        },

        // Text Annotation Section
        {
            type: "object",
            name: "textAnnotation",
            label: "📝 Text Annotation",
            fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
            ],
        },

        // Image Annotation Section
        {
            type: "object",
            name: "imageAnnotation",
            label: "🖼️ Image Annotation",
            fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
            ],
        },

        // Video Annotation Section
        {
            type: "object",
            name: "videoAnnotation",
            label: "🎥 Video Annotation",
            fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
            ],
        },

        // Audio Annotation Section
        {
            type: "object",
            name: "audioAnnotation",
            label: "🎵 Audio Annotation",
            fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
            ],
        },

        // Data Processing Section
        {
            type: "object",
            name: "dataProcessing",
            label: "⚙️ Data Processing",
            fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
            ],
        },

        // Custom Solutions
        {
            type: "object",
            name: "customSolutions",
            label: "✨ Custom Solutions",
            fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
                { type: "string", name: "paragraph1", label: "Paragraph 1", ui: { component: "textarea" } },
                { type: "string", name: "paragraph2", label: "Paragraph 2", ui: { component: "textarea" } },
                { type: "string", name: "button", label: "Button Text" },
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

        // Table Headers
        {
            type: "object",
            name: "tableHeaders",
            label: "📊 Table Headers",
            fields: [
                { type: "string", name: "service", label: "Service Header" },
                { type: "string", name: "description", label: "Description Header" },
            ],
        },
    ],
}