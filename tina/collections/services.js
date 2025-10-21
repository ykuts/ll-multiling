export const servicesCollection = {
    name: "servicesTranslations",
    label: "Services Page Translations",
    path: "public/locales",
    format: "json",
    match: {
        include: "*/services"
    },
    ui: {
        router: ({ document }) => {
            const locale = document._sys.breadcrumbs[0];
            if (locale === 'en') {
                return '/services/';
            }
            return `/${locale}/services/`;
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

        // General Services Section
        {
            type: "object",
            name: "general",
            label: "📊 General Data Annotation",
            fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
                {
                    type: "object",
                    name: "builtForScale",
                    label: "Built for Scale",
                    fields: [
                        { type: "string", name: "title", label: "Title" },
                        { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                        {
                            type: "object",
                            name: "stats",
                            label: "Statistics",
                            fields: [
                                { type: "string", name: "processed", label: "Processed Label" },
                                { type: "string", name: "turnaround", label: "Turnaround Label" },
                            ],
                        },
                    ],
                },
                {
                    type: "object",
                    name: "whyExcel",
                    label: "Why Excel Section",
                    fields: [
                        { type: "string", name: "title", label: "Title" },
                        {
                            type: "object",
                            name: "reasons",
                            label: "Reasons",
                            fields: [
                                { type: "string", name: "native", label: "Native Speakers" },
                                { type: "string", name: "quality", label: "Quality Management" },
                                { type: "string", name: "scalable", label: "Scalable Workforce" },
                                { type: "string", name: "pricing", label: "Competitive Pricing" },
                            ],
                        },
                    ],
                },
            ],
        },

        // Expert Services Section
        {
            type: "object",
            name: "expert",
            label: "🔬 Expert & Specialist Services",
            fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
                {
                    type: "object",
                    name: "medical",
                    label: "Medical & Healthcare",
                    fields: [
                        { type: "string", name: "title", label: "Title" },
                        { type: "string", name: "subtitle", label: "Subtitle" },
                        { type: "string", name: "button", label: "Button Text" },
                    ],
                },
            ],
        },

        // Service Level Section
        {
            type: "object",
            name: "serviceLevel",
            label: "⚖️ Service Level Comparison",
            fields: [
                { type: "string", name: "title", label: "Title" },
                { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
                {
                    type: "object",
                    name: "generalAnnotation",
                    label: "General Annotation Card",
                    fields: [
                        { type: "string", name: "title", label: "Title" },
                        { type: "string", name: "subtitle", label: "Subtitle" },
                        {
                            type: "object",
                            name: "features",
                            label: "Features",
                            fields: [
                                {
                                    type: "object",
                                    name: "capacity",
                                    label: "Capacity",
                                    fields: [
                                        { type: "string", name: "title", label: "Title" },
                                        { type: "string", name: "description", label: "Description" },
                                    ],
                                },
                                {
                                    type: "object",
                                    name: "coverage",
                                    label: "Coverage",
                                    fields: [
                                        { type: "string", name: "title", label: "Title" },
                                        { type: "string", name: "description", label: "Description" },
                                    ],
                                },
                                {
                                    type: "object",
                                    name: "native",
                                    label: "Native Speakers",
                                    fields: [
                                        { type: "string", name: "title", label: "Title" },
                                        { type: "string", name: "description", label: "Description" },
                                    ],
                                },
                                {
                                    type: "object",
                                    name: "pricing",
                                    label: "Pricing",
                                    fields: [
                                        { type: "string", name: "title", label: "Title" },
                                        { type: "string", name: "description", label: "Description" },
                                    ],
                                },
                            ],
                        },
                        {
                            type: "object",
                            name: "buttons",
                            label: "Buttons",
                            fields: [
                                { type: "string", name: "details", label: "Details Button" },
                                { type: "string", name: "quote", label: "Quote Button" },
                            ],
                        },
                    ],
                },
                {
                    type: "object",
                    name: "expertAnnotation",
                    label: "Expert Annotation Card",
                    fields: [
                        { type: "string", name: "title", label: "Title" },
                        { type: "string", name: "subtitle", label: "Subtitle" },
                        {
                            type: "object",
                            name: "features",
                            label: "Features",
                            fields: [
                                {
                                    type: "object",
                                    name: "medical",
                                    label: "Medical",
                                    fields: [
                                        { type: "string", name: "title", label: "Title" },
                                        { type: "string", name: "description", label: "Description" },
                                    ],
                                },
                                {
                                    type: "object",
                                    name: "expertLed",
                                    label: "Expert-Led",
                                    fields: [
                                        { type: "string", name: "title", label: "Title" },
                                        { type: "string", name: "description", label: "Description" },
                                    ],
                                },
                                {
                                    type: "object",
                                    name: "compliance",
                                    label: "Compliance",
                                    fields: [
                                        { type: "string", name: "title", label: "Title" },
                                        { type: "string", name: "description", label: "Description" },
                                    ],
                                },
                                {
                                    type: "object",
                                    name: "swiss",
                                    label: "Swiss Quality",
                                    fields: [
                                        { type: "string", name: "title", label: "Title" },
                                        { type: "string", name: "description", label: "Description" },
                                    ],
                                },
                            ],
                        },
                        {
                            type: "object",
                            name: "buttons",
                            label: "Buttons",
                            fields: [
                                { type: "string", name: "details", label: "Details Button" },
                                { type: "string", name: "discuss", label: "Discuss Button" },
                            ],
                        },
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