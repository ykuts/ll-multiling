import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Image from 'next/image';
import { trackServiceInquiry } from '../lib/gtag';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useTina } from 'tinacms/dist/react'
import client from '../../tina/__generated__/client'

export default function Medical(props) {
    const { t } = useTranslation('expert-services');

    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });

    useEffect(() => {
        trackServiceInquiry('medical_page_view');
    }, []);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "MedicalService",
        "name": "Medical Data Annotation Services",
        "description": "Expert medical data annotation services for healthcare AI applications including radiology, pathology, and clinical documentation",
        "provider": {
            "@type": "Organization",
            "name": "Label Ladder"
        },
        "areaServed": "Global",
        "serviceType": "Medical Data Processing Services"
    };

    const medicalServices = [
        {
            title: t('capabilities.radiology.title'),
            description: t('capabilities.radiology.description'),
            image: "/images/medical/radiology.jpg",
            capabilities: [
                t('capabilities.radiology.capabilities.xray'),
                t('capabilities.radiology.capabilities.mri'),
                t('capabilities.radiology.capabilities.ct'),
                t('capabilities.radiology.capabilities.dicom'),
                t('capabilities.radiology.capabilities.reconstruction'),
                t('capabilities.radiology.capabilities.rendering')
            ],
            compliance: [t('capabilities.radiology.compliance.dicom'), t('capabilities.radiology.compliance.hipaa'), t('capabilities.radiology.compliance.validation')],
            useCases: [
                t('capabilities.radiology.useCases.diagnostic'),
                t('capabilities.radiology.useCases.detection'),
                t('capabilities.radiology.useCases.research'),
                t('capabilities.radiology.useCases.training')
            ]
        },
        {
            title: t('capabilities.pathology.title'),
            description: t('capabilities.pathology.description'),
            image: "/images/medical/pathology.jpg",
            capabilities: [
                t('capabilities.pathology.capabilities.histopathology'),
                t('capabilities.pathology.capabilities.cancer'),
                t('capabilities.pathology.capabilities.tissue'),
                t('capabilities.pathology.capabilities.microscopy'),
                t('capabilities.pathology.capabilities.laboratory'),
                t('capabilities.pathology.capabilities.biomarker')
            ],
            compliance: [t('capabilities.pathology.compliance.quality'), t('capabilities.pathology.compliance.terminology'), t('capabilities.pathology.compliance.accuracy')],
            useCases: [
                t('capabilities.pathology.useCases.cancer'),
                t('capabilities.pathology.useCases.education'),
                t('capabilities.pathology.useCases.drug'),
                t('capabilities.pathology.useCases.digital')
            ]
        },
        {
            title: t('capabilities.clinical.title'),
            description: t('capabilities.clinical.description'),
            image: "/images/medical/clinical.jpg",
            capabilities: [
                t('capabilities.clinical.capabilities.ehr'),
                t('capabilities.clinical.capabilities.clinical'),
                t('capabilities.clinical.capabilities.terminology'),
                t('capabilities.clinical.capabilities.journey'),
                t('capabilities.clinical.capabilities.medication'),
                t('capabilities.clinical.capabilities.correlation')
            ],
            compliance: [t('capabilities.clinical.compliance.hipaa'), t('capabilities.clinical.compliance.coding'), t('capabilities.clinical.compliance.deidentification')],
            useCases: [
                t('capabilities.clinical.useCases.decision'),
                t('capabilities.clinical.useCases.population'),
                t('capabilities.clinical.useCases.research'),
                t('capabilities.clinical.useCases.quality')
            ]
        }
    ];

    const whyChooseMedical = [
        {
            title: t('whyChoose.expertise.title'),
            description: t('whyChoose.expertise.description'),
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="currentColor" strokeWidth="2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 11v6" stroke="currentColor" strokeWidth="2" />
                    <path d="M9 14h6" stroke="currentColor" strokeWidth="2" />
                </svg>
            )
        },
        {
            title: t('whyChoose.compliance.title'),
            description: t('whyChoose.compliance.description'),
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" />
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: t('whyChoose.quality.title'),
            description: t('whyChoose.quality.description'),
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" />
                </svg>
            )
        },
        {
            title: t('whyChoose.swiss.title'),
            description: t('whyChoose.swiss.description'),
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="currentColor" strokeWidth="2" />
                </svg>
            )
        }
    ];

    return (
        <Layout
            title="Medical Data Annotation Services - Healthcare AI Solutions"
            description="Expert medical data annotation for healthcare AI. Radiology, pathology, clinical documentation with HIPAA compliance and clinical accuracy. Specialized teams in Namibia with medical expertise."
            keywords="medical data annotation, healthcare AI, radiology annotation, pathology labeling, clinical data processing, HIPAA compliant, medical imaging annotation, electronic health records"
            image="https://labelladder.com/images/og/medical-og.jpg"
            structuredData={structuredData}
        >
            {/* Hero Section */}
            <section className="relative py-20 bg-primary text-white">
                <Container>
                    <div className="max-w-3xl">
                        {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-6">
              <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-white">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div> */}
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {t('hero.title')}
                        </h1>
                        <p className="text-xl mb-8 text-accent">
                            {t('hero.subtitle')}
                        </p>
                        {/* <div className="flex flex-wrap justify-center gap-4">
              <Button href="#services" variant="white" size="lg">
                View Medical Services
              </Button>
              <Button href="/contact" variant="outline" className="text-white border-white hover:bg-white/10" size="lg">
                Discuss Your Project
              </Button>
            </div> */}
                    </div>
                </Container>
            </section>

            {/* Why Choose Our Medical Services */}
            <section className="py-16 bg-gray-50">
                <Container>
                    <SectionHeading
                        title={t('whyChoose.title')}
                        subtitle={t('whyChoose.subtitle')}
                        centered
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {whyChooseMedical.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300 group">
                                {/* Icon */}
                                <div className="mb-4 flex justify-center">
                                    <div className="w-16 h-16 rounded-full bg-primary group-hover:bg-secondary flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                                        {item.icon}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Medical Services Detailed */}
            <section id="services" className="py-16">
                <Container>
                    <SectionHeading
                        title={t('capabilities.title')}
                        subtitle={t('capabilities.subtitle')}
                        centered
                    />

                    {medicalServices.map((service, index) => (
                        <div key={index} className={`mb-16`}>
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                    {/* Image placeholder */}
                                    <div className={`bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-12 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <div className="text-center">
                                            <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 text-primary">
                                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <h4 className="text-lg font-semibold text-primary">{service.title}</h4>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={`p-8 lg:p-12 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 text-lg">
                                            {service.description}
                                        </p>

                                        {/* Capabilities */}
                                        <div className="mb-6">
                                            <h4 className="font-semibold text-primary mb-3">{t('sections.keyCapabilities')}</h4>
                                            <ul className="space-y-2">
                                                {service.capabilities.slice(0, 4).map((capability, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></div>
                                                        <span className="text-gray-600 text-sm">{capability}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Compliance badges */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {service.compliance.map((item, i) => (
                                                <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>

                                        <Button href="/contact/" variant="primary" size="md">
                                            {t('button')}
                                        </Button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    ))}
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary text-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6  text-white/90">
                            {t('cta.title')}
                        </h2>
                        <p className="text-xl mb-8 text-white/90">
                            {t('cta.subtitle')}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button href="/contact/" variant="white" size="lg">
                                {t('cta.buttons.start')}
                            </Button>
                            <Button href="/services/" variant="outline" className="text-white border-white hover:bg-white/10" size="lg">
                                {t('cta.buttons.viewAll')}
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    try {
        const tinaProps = await client.queries.expertServicesTranslations({
            relativePath: `${locale}/expert-services.json`,
        });

        return {
            props: {
                ...tinaProps,
                ...(await serverSideTranslations(locale, ['common', 'header', 'footer', 'expert-services'])),
            },
        };
    } catch (error) {
        console.error('Error loading Tina data:', error);
        return {
            props: {
                ...(await serverSideTranslations(locale, ['common', 'header', 'footer', 'expert-services'])),
            },
        };
    }
}