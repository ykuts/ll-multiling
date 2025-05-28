import Layout from '@/components/layout/Layout';
import { useState } from 'react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import OfficeLocationsDemo from '../components/sections/OfficeLocationsDemo';

export default function Contact() {
    const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "Label Ladder",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+41-44-123-45-67",
            "contactType": "customer service",
            "email": "hello@labelladder.com",
            "availableLanguage": "English",
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "17:00"
            }
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Label Ladder Zürich Office",
      "@id": "https://labelladder.com/#zurich-office",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bahnhofstrasse 21",
        "addressLocality": "Zürich",
        "postalCode": "8001", 
        "addressCountry": "CH"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "47.3769",
        "longitude": "8.5417"
      },
      "telephone": "+41-44-123-45-67",
      "email": "zurich@labelladder.com",
      "url": "https://labelladder.com/contact",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00", 
        "closes": "17:00"
      },
      "parentOrganization": {
        "@type": "Organization",
        "name": "Label Ladder"
      }
    },
    {
      "@context": "https://schema.org", 
      "@type": "LocalBusiness",
      "name": "Label Ladder Windhoek Office",
      "@id": "https://labelladder.com/#windhoek-office",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Independence Avenue",
        "addressLocality": "Windhoek",
        "addressCountry": "NA"
      },
      "telephone": "+264-61-234-5678",
      "email": "windhoek@labelladder.com",
      "url": "https://labelladder.com/contact",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification", 
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "16:00"
      },
      "parentOrganization": {
        "@type": "Organization",
        "name": "Label Ladder"
      }
    }
  ];

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        serviceType: '',
        dataVolume: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        error: false,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!formData.firstName || !formData.email || !formData.message) {
            setFormStatus({
                submitted: false,
                error: true,
                message: 'Please fill in all required fields.'
            });
            return;
        }

        // In a real app, you would send the form data to your API here
        // For now, we'll just simulate a successful submission
        setFormStatus({
            submitted: true,
            error: false,
            message: 'Thank you for your message! We will get back to you shortly.'
        });

        // Reset form after successful submission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            phone: '',
            message: '',
            serviceType: '',
            dataVolume: ''
        });
    };

    const serviceTypes = [
        { value: '', label: 'Select a service type' },
        { value: 'text', label: 'Text Annotation' },
        { value: 'image', label: 'Image Annotation' },
        { value: 'video', label: 'Video Annotation' },
        { value: 'audio', label: 'Audio Annotation' },
        { value: 'processing', label: 'Data Processing' },
        { value: 'other', label: 'Other / Not Sure' }
    ];

    const dataVolumes = [
        { value: '', label: 'Select data volume (if applicable)' },
        { value: 'small', label: 'Small (Less than 1,000 items)' },
        { value: 'medium', label: 'Medium (1,000 - 10,000 items)' },
        { value: 'large', label: 'Large (10,000 - 100,000 items)' },
        { value: 'enterprise', label: 'Enterprise (100,000+ items)' },
        { value: 'unknown', label: 'Not sure yet' }
    ];

    return (
        <Layout 
      title="Contact Label Ladder - Get Quote for Data Annotation Services"
      description="Contact Label Ladder for professional data annotation and processing services. Offices in Zürich, Switzerland and Windhoek, Namibia. Get your custom quote today - hello@labelladder.com"
      keywords="contact Label Ladder, data annotation quote, get data processing quote, Label Ladder offices, Zurich office, Windhoek office, data annotation consultation, hello@labelladder.com"
      image="https://labelladder.com/images/og/contact-og.jpg"
      structuredData={structuredData}
    >
            {/* Hero Section */}
            <section className="relative py-20 bg-primary text-white">
                <Container>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl mb-8 text-accent">
                            Get in touch with our team to discuss your data annotation and processing needs.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Contact Form Section */}
            <section className="py-16">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Левая колонка - Контактная информация */}
                        <div>
                            <SectionHeading
                                title="Get in Touch"
                                subtitle="We'd love to hear from you! Fill out the form and our team will get back to you as soon as possible."
                            />

                            <div className="mt-8 space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-primary">Email Us</h3>
                                        <p className="mt-1 text-gray-600">
                                            <a href="mailto:hello@labelladder.com" className="hover:text-secondary transition-colors">
                                                hello@labelladder.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h3 className="text-xl font-bold text-primary mb-6">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="https://linkedin.com/company/labelladder" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-colors">
                                        <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Правая колонка - Контактная форма */}
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-primary mb-6">Send Us a Message</h3>

                            {formStatus.submitted ? (
                                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
                                    <p>{formStatus.message}</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} name="contact" netlify>
                                    {formStatus.error && (
                                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
                                            <p>{formStatus.message}</p>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <input type="hidden" name="form-name" value="contact" />
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                                First Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                                                Service Type
                                            </label>
                                            <select
                                                id="serviceType"
                                                name="serviceType"
                                                value={formData.serviceType}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
                                            >
                                                {serviceTypes.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="dataVolume" className="block text-sm font-medium text-gray-700 mb-1">
                                                Data Volume
                                            </label>
                                            <select
                                                id="dataVolume"
                                                name="dataVolume"
                                                value={formData.dataVolume}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
                                            >
                                                {dataVolumes.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
                                            required
                                        ></textarea>
                                    </div>

                                    <div>
                                        <Button type="submit" variant="primary" size="lg" className="w-full">
                                            Send Message
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Office Locations Section */}
            <OfficeLocationsDemo />

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
                <Container>
                    <SectionHeading
                        title="Frequently Asked Questions"
                        subtitle="Find answers to common questions about our services."
                        centered
                    />

                    <div className="mt-12 space-y-6 max-w-4xl mx-auto">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-bold text-primary mb-2">What types of data can you help us annotate?</h3>
                            <p className="text-gray-600">
                                We provide annotation services for a wide range of data types including text, images, video, and audio. Our services cover everything from basic labeling to complex segmentation tasks for machine learning and AI applications.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-bold text-primary mb-2">How do you ensure data security and confidentiality?</h3>
                            <p className="text-gray-600">
                                We follow strict data security protocols compliant with international standards. All our annotators sign confidentiality agreements, and we can implement additional security measures based on your specific requirements, including secure infrastructure and access controls.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-bold text-primary mb-2">What is the typical turnaround time for projects?</h3>
                            <p className="text-gray-600">
                                Project timelines vary based on the complexity and volume of data. We provide detailed timeline estimates during the project scoping phase. For urgent needs, we can allocate additional resources to accelerate delivery while maintaining quality standards.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-bold text-primary mb-2">Do you offer custom annotation services for specific industries?</h3>
                            <p className="text-gray-600">
                                Yes, we specialize in domain-specific annotation across various industries including healthcare, legal, retail, automotive, and more. Our team receives specialized training to understand the nuances and requirements of each industry&apos;s data.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-bold text-primary mb-2">How do you handle quality control in the annotation process?</h3>
                            <p className="text-gray-600">
                                We implement a multi-layered quality control system including consensus scoring, gold standard tasks, blind reviews, and regular performance reviews. This ensures consistent accuracy and reliability in our annotation output.
                            </p>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-gray-600 mb-4">
                                Don&apos;t see your question answered here? Contact us directly.
                            </p>
                            <Button href="mailto:hello@labelladder.com" variant="outline">
                                Email Your Question
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </Layout>
    );
}