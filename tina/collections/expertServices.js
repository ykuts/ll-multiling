export const expertServicesCollection = {
    name: "expertServicesTranslations",
    label: "Expert Services Page Translations",
    path: "public/locales",
    format: "json",
    match: {
        include: "*/expert-services"
    },
    ui: {
        router: ({ document }) => {
            const locale = document._sys.breadcrumbs[0];
            if (locale === 'en') {
                return '/services/expert-services/';
            }
            return `/${locale}/services/expert-services/`;
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

        // Why Choose Section
        {
            type: "object",
            name: "whyChoose",
            label: "💡 Why Choose Us",
            fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
                {
                    type: "object",
                    name: "expertise",
                    label: "Clinical Expertise",
                    fields: [
                        { type: "string", name: "title", label: "Title" },
                        { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                    ],
                },
                {
                    type: "object",
                    name: "compliance",
                    label: "Compliance",
                    fields: [
                        { type: "string", name: "title", label: "Title" },
                        { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                    ],
                },
                {
                    type: "object",
                    name: "quality",
                    label: "Quality Assurance",
                    fields: [
                        { type: "string", name: "title", label: "Title" },
                        { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                    ],
                },
                {
                    type: "object",
                    name: "swiss",
                    label: "Swiss Precision",
                    fields: [
                        { type: "string", name: "title", label: "Title" },
                        { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                    ],
                },
            ],
        },

        // Capabilities Section
        {
            type: "object",
            name: "capabilities",
            label: "🔬 Medical Capabilities",
            fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },

                // Radiology
                {
                    type: "object",
                    name: "radiology",
                    label: "Radiology & Medical Imaging",
                    fields: [
                        { type: "string", name: "title", label: "Title" },
                        { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                        { type: "string", name: "button", label: "Button Text" },
                    ],
                },

                // Pathology
                {
                    type: "object",
                    name: "pathology",
                    label: "Pathology & Laboratory",
                    fields: [
                        { type: "string", name: "title", label: "Title" },
                        { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                        { type: "string", name: "button", label: "Button Text" },
                    ],
                },

                // Clinical
                {
                    type: "object",
                    name: "clinical",
                    label: "Clinical Documentation",
                    fields: [
                        { type: "string", name: "title", label: "Title" },
                        { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                        { type: "string", name: "button", label: "Button Text" },
                    ],
                },
            ],
        },

        // Common Button
        {
            type: "string",
            name: "button",
            label: "🔘 Default Button Text",
        },

        // Section Labels
        {
            type: "object",
            name: "sections",
            label: "📋 Section Labels",
            fields: [
                { type: "string", name: "keyCapabilities", label: "Key Capabilities Label" },
                { type: "string", name: "useCases", label: "Use Cases Label" },
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
                {
                    type: "object",
                    name: "buttons",
                    label: "Buttons",
                    fields: [
                        { type: "string", name: "start", label: "Start Project Button" },
                        { type: "string", name: "viewAll", label: "View All Services Button" },
                    ],
                },
            ],
        },
    ],
}