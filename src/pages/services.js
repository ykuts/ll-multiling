import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { trackServiceInquiry } from '../lib/gtag';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useTina } from 'tinacms/dist/react'
import client from '../../tina/__generated__/client'

export default function Services(props) {
  const { t } = useTranslation('services');

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  useEffect(() => {
    trackServiceInquiry('services_page_view');
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Data Annotation Services",
    "description": "Complete data annotation services from large-scale general projects to specialized medical expertise",
    "provider": {
      "@type": "Organization",
      "name": "Label Ladder"
    },
    "serviceType": "Data Processing Services",
    "areaServed": "Global"
  };

  return (
    <Layout
      title="Data Annotation Services - General & Expert Solutions"
      description="Complete data annotation services: General large-scale projects with 1,000-strong team and expert medical specialization. Swiss precision meets Namibian talent."
      keywords="data annotation services, general data labeling, medical data annotation, large scale annotation, expert annotation services, Swiss Namibian partnership"
      image="https://labelladder.com/images/og/services-og.jpg"
      structuredData={structuredData}
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl mb-8 text-accent">
              {t('hero.subtitle')}
            </p>
          </div>
        </Container>
      </section>

      {/* General Services Section */}
      <section id="general" className="py-16 bg-gray-50">
        <Container>
          <SectionHeading
            title={t('general.title')}
            subtitle={t('general.subtitle')}
            centered
          />

          <div className="bg-white rounded-xl p-8 shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">{t('general.builtForScale.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('general.builtForScale.description')}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">1M+</div>
                    <div className="text-sm text-gray-600">{t('general.builtForScale.stats.processed')}</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">48h</div>
                    <div className="text-sm text-gray-600">{t('general.builtForScale.stats.turnaround')}</div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-xl">
                <h4 className="font-bold text-primary mb-4">{t('general.whyExcel.title')}</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{t('general.whyExcel.reasons.native')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{t('general.whyExcel.reasons.quality')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{t('general.whyExcel.reasons.scalable')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{t('general.whyExcel.reasons.pricing')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Expert Services Section */}
      <section id="expert" className="py-16 bg-white">
        <Container>
          <SectionHeading
            title={t('expert.title')}
            subtitle={t('expert.subtitle')}
            centered
          />

          {/* Medical & Healthcare Focus */}
          <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-8 mb-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary mb-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-white">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">{t('expert.medical.title')}</h3>
              <p className="text-lg text-gray-600">{t('expert.medical.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-bold text-primary mb-3">{t('expert.medical.radiology.title')}</h4>
                <p className="text-gray-600 text-sm mb-4">{t('expert.medical.radiology.description')}</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• {t('expert.medical.radiology.features.dicom')}</li>
                  <li>• {t('expert.medical.radiology.features.validation')}</li>
                  <li>• {t('expert.medical.radiology.features.oversight')}</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-bold text-primary mb-3">{t('expert.medical.pathology.title')}</h4>
                <p className="text-gray-600 text-sm mb-4">{t('expert.medical.pathology.description')}</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• {t('expert.medical.pathology.features.cellular')}</li>
                  <li>• {t('expert.medical.pathology.features.tissue')}</li>
                  <li>• {t('expert.medical.pathology.features.diagnostic')}</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-bold text-primary mb-3">{t('expert.medical.clinical.title')}</h4>
                <p className="text-gray-600 text-sm mb-4">{t('expert.medical.clinical.description')}</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• {t('expert.medical.clinical.features.hipaa')}</li>
                  <li>• {t('expert.medical.clinical.features.terminology')}</li>
                  <li>• {t('expert.medical.clinical.features.standardization')}</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button href="/contact/" variant="primary" size="lg">
                {t('expert.medical.button')}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Overview - Two Main Categories */}
      <section className="py-16">
        <Container>
          <SectionHeading
            title={t('serviceLevel.title')}
            subtitle={t('serviceLevel.subtitle')}
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* General Data Annotation */}
            <div className="bg-gradient-to-br from-primary to-primary/90 text-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-6">
                  <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-white">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-3 text-white">{t('serviceLevel.generalAnnotation.title')}</h3>
                <p className="text-accent text-lg mb-6">{t('serviceLevel.generalAnnotation.subtitle')}</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-secondary mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t('serviceLevel.generalAnnotation.features.capacity.title')}</h4>
                    <p className="text-accent text-sm">{t('serviceLevel.generalAnnotation.features.capacity.description')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-secondary mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t('serviceLevel.generalAnnotation.features.coverage.title')}</h4>
                    <p className="text-accent text-sm">{t('serviceLevel.generalAnnotation.features.coverage.description')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-secondary mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t('serviceLevel.generalAnnotation.features.native.title')}</h4>
                    <p className="text-accent text-sm">{t('serviceLevel.generalAnnotation.features.native.description')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-secondary mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t('serviceLevel.generalAnnotation.features.pricing.title')}</h4>
                    <p className="text-accent text-sm">{t('serviceLevel.generalAnnotation.features.pricing.description')}</p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-auto space-y-4">
                <Button href="/general-services/" variant="white" size="lg" className="w-full">
                  {t('serviceLevel.generalAnnotation.buttons.details')}
                </Button>
                <Button href="/contact/" variant="outline" className="w-full text-white border-white hover:bg-white/10" size="md">
                  {t('serviceLevel.generalAnnotation.buttons.quote')}
                </Button>
              </div>
            </div>

            {/* Expert & Specialist Annotation */}
            <div className="bg-gradient-to-br from-secondary to-secondary/90 text-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-6">
                  <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-white">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-3">{t('serviceLevel.expertAnnotation.title')}</h3>
                <p className="text-white/90 text-lg mb-6">{t('serviceLevel.expertAnnotation.subtitle')}</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-white mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t('serviceLevel.expertAnnotation.features.medical.title')}</h4>
                    <p className="text-white/80 text-sm">{t('serviceLevel.expertAnnotation.features.medical.description')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-white mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t('serviceLevel.expertAnnotation.features.expertLed.title')}</h4>
                    <p className="text-white/80 text-sm">{t('serviceLevel.expertAnnotation.features.expertLed.description')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-white mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t('serviceLevel.expertAnnotation.features.compliance.title')}</h4>
                    <p className="text-white/80 text-sm">{t('serviceLevel.expertAnnotation.features.compliance.description')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-white mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t('serviceLevel.expertAnnotation.features.swiss.title')}</h4>
                    <p className="text-white/80 text-sm">{t('serviceLevel.expertAnnotation.features.swiss.description')}</p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-auto space-y-4">
                <Button href="/expert-services/" variant="white" size="lg" className="w-full">
                  {t('serviceLevel.expertAnnotation.buttons.details')}
                </Button>
                <Button href="/contact/" variant="outline" className="w-full text-white border-white hover:bg-white/10" size="md">
                  {t('serviceLevel.expertAnnotation.buttons.discuss')}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('cta.subtitle')}
            </p>
            <Button href="/contact/" variant="primary" size="lg">
              {t('cta.button')}
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
    try {
        const tinaProps = await client.queries.servicesTranslations({
            relativePath: `${locale}/services.json`,
        });

        return {
            props: {
                ...tinaProps,
                ...(await serverSideTranslations(locale, ['common', 'header', 'footer', 'services'])),
            },
        };
    } catch (error) {
        console.error('Error loading Tina data:', error);
        return {
            props: {
                ...(await serverSideTranslations(locale, ['common', 'header', 'footer', 'services'])),
            },
        };
    }
}