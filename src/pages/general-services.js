import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Image from 'next/image';
import { trackServiceInquiry } from '../lib/gtag';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useTina } from 'tinacms/dist/react'
import client from '../../tina/__generated__/client'

export default function Services(props) {
  const { t } = useTranslation('general-services');

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
    "name": "Data Annotation and Processing Services",
    "description": "Comprehensive data annotation and processing services for machine learning and AI applications",
    "provider": {
      "@type": "Organization",
      "name": "Label Ladder"
    },
    "serviceType": "Data Processing Services",
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Data Annotation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Text Annotation Services",
            "description": "Character recognition, transcription, article qualification, content moderation",
            "offers": {
              "@type": "Offer",
              "priceRange": "$0.005-$5",
              "priceCurrency": "USD"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Image Annotation Services",
            "description": "Image tagging, labeling, shape recognition, image segmentation",
            "offers": {
              "@type": "Offer",
              "priceRange": "$0.02-$5",
              "priceCurrency": "USD"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Video Annotation Services",
            "description": "Video transcription and sequencing services",
            "offers": {
              "@type": "Offer",
              "priceRange": "$2-$15",
              "priceCurrency": "USD"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Audio Processing Services",
            "description": "Speech-to-text conversion and sentiment analysis",
            "offers": {
              "@type": "Offer",
              "priceRange": "$0.02-$5",
              "priceCurrency": "USD"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Processing Services",
            "description": "Data entry, validation, cleansing, and migration services"
          }
        }
      ]
    }
  };

  // Text Annotation Services
  const textServices = [
    {
      name: t('textAnnotation.services.recognition.name'),
      description: t('textAnnotation.services.recognition.description'),
      price: t('textAnnotation.services.recognition.price'),
      moq: t('textAnnotation.services.recognition.moq')
    },
    {
      name: t('textAnnotation.services.transcription.name'),
      description: t('textAnnotation.services.transcription.description'),
      price: t('textAnnotation.services.transcription.price'),
      moq: t('textAnnotation.services.transcription.moq')
    },
    {
      name: t('textAnnotation.services.qualification.name'),
      description: t('textAnnotation.services.qualification.description'),
      price: t('textAnnotation.services.qualification.price'),
      moq: t('textAnnotation.services.qualification.moq')
    },
    {
      name: t('textAnnotation.services.moderation.name'),
      description: t('textAnnotation.services.moderation.description'),
      price: t('textAnnotation.services.moderation.price'),
      moq: t('textAnnotation.services.moderation.moq')
    }
  ];

  // Image Annotation Services
  const imageServices = [
    {
      name: t('imageAnnotation.services.annotation.name'),
      description: t('imageAnnotation.services.annotation.description'),
      price: t('imageAnnotation.services.annotation.price'),
      moq: t('imageAnnotation.services.annotation.moq')
    },
    {
      name: t('imageAnnotation.services.labeling.name'),
      description: t('imageAnnotation.services.labeling.description'),
      price: t('imageAnnotation.services.labeling.price'),
      moq: t('imageAnnotation.services.labeling.moq')
    },
    {
      name: t('imageAnnotation.services.recognition.name'),
      description: t('imageAnnotation.services.recognition.description'),
      price: t('imageAnnotation.services.recognition.price'),
      moq: t('imageAnnotation.services.recognition.moq')
    },
    {
      name: t('imageAnnotation.services.segmentation.name'),
      description: t('imageAnnotation.services.segmentation.description'),
      price: t('imageAnnotation.services.segmentation.price'),
      moq: t('imageAnnotation.services.segmentation.moq')
    }
  ];

  // Video Annotation Services
  const videoServices = [
    {
      name: t('videoAnnotation.services.transcription.name'),
      description: t('videoAnnotation.services.transcription.description'),
      price: t('videoAnnotation.services.transcription.price'),
      moq: t('videoAnnotation.services.transcription.moq')
    },
    {
      name: t('videoAnnotation.services.sequencing.name'),
      description: t('videoAnnotation.services.sequencing.description'),
      price: t('videoAnnotation.services.sequencing.price'),
      moq: t('videoAnnotation.services.sequencing.moq')
    }
  ];

  // Audio Annotation Services
  const audioServices = [
    {
      name: t('audioAnnotation.services.speechToText.name'),
      description: t('audioAnnotation.services.speechToText.description'),
      price: t('audioAnnotation.services.speechToText.price'),
      moq: t('audioAnnotation.services.speechToText.moq')
    },
    {
      name: t('audioAnnotation.services.sentiment.name'),
      description: t('audioAnnotation.services.sentiment.description'),
      price: t('audioAnnotation.services.sentiment.price'),
      moq: t('audioAnnotation.services.sentiment.moq')
    }
  ];

  // Data Processing Services
  const dataProcessingServices = [
    {
      title: t('dataProcessing.services.entry.title'),
      subtitle: t('dataProcessing.services.entry.subtitle'),
      description: t('dataProcessing.services.entry.description'),
      tasks: [
        t('dataProcessing.services.entry.tasks.typing'),
        t('dataProcessing.services.entry.tasks.transferring'),
        t('dataProcessing.services.entry.tasks.inputting'),
        t('dataProcessing.services.entry.tasks.migration')
      ]
    },
    {
      title: t('dataProcessing.services.validation.title'),
      subtitle: t('dataProcessing.services.validation.subtitle'),
      description: t('dataProcessing.services.validation.description'),
      tasks: [
        t('dataProcessing.services.validation.tasks.format'),
        t('dataProcessing.services.validation.tasks.range'),
        t('dataProcessing.services.validation.tasks.consistency'),
        t('dataProcessing.services.validation.tasks.completeness')
      ]
    },
    {
      title: t('dataProcessing.services.cleansing.title'),
      subtitle: t('dataProcessing.services.cleansing.subtitle'),
      description: t('dataProcessing.services.cleansing.description'),
      tasks: [
        t('dataProcessing.services.cleansing.tasks.duplicates'),
        t('dataProcessing.services.cleansing.tasks.typos'),
        t('dataProcessing.services.cleansing.tasks.standardizing'),
        t('dataProcessing.services.cleansing.tasks.outliers')
      ]
    },
    {
      title: t('dataProcessing.services.migration.title'),
      subtitle: t('dataProcessing.services.migration.subtitle'),
      description: t('dataProcessing.services.migration.description'),
      tasks: [
        t('dataProcessing.services.migration.tasks.extract'),
        t('dataProcessing.services.migration.tasks.transform'),
        t('dataProcessing.services.migration.tasks.cleaning'),
        t('dataProcessing.services.migration.tasks.entering'),
        t('dataProcessing.services.migration.tasks.testing')
      ]
    }
  ];

  // Service Type Cards
  const serviceTypes = [
    {
      title: t('textAnnotation.title'),
      description: t('textAnnotation.subtitle'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-primary">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
          <line x1="7" y1="8" x2="17" y2="8" stroke="currentColor" strokeWidth="2" />
          <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="2" />
          <line x1="7" y1="16" x2="13" y2="16" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      href: "#text",
    },
    {
      title: t('imageAnnotation.title'),
      description: t('imageAnnotation.subtitle'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-primary">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      href: "#image",
    },
    {
      title: t('videoAnnotation.title'),
      description: t('videoAnnotation.subtitle'),
      icon: (
        <svg viewBox="0 0 122.88 111.34" className="w-8 h-8 text-primary"> <title>video</title> <path fill="currentColor" d="M23.59,0h75.7a23.68,23.68,0,0,1,23.59,23.59V87.75A23.56,23.56,0,0,1,116,104.41l-.22.2a23.53,23.53,0,0,1-16.44,6.73H23.59a23.53,23.53,0,0,1-16.66-6.93l-.2-.22A23.46,23.46,0,0,1,0,87.75V23.59A23.66,23.66,0,0,1,23.59,0ZM54,47.73,79.25,65.36a3.79,3.79,0,0,1,.14,6.3L54.22,89.05a3.75,3.75,0,0,1-2.4.87A3.79,3.79,0,0,1,48,86.13V50.82h0A3.77,3.77,0,0,1,54,47.73ZM7.35,26.47h14L30.41,7.35H23.59A16.29,16.29,0,0,0,7.35,23.59v2.88ZM37.05,7.35,28,26.47H53.36L62.43,7.38v0Zm32,0L59.92,26.47h24.7L93.7,7.35Zm31.32,0L91.26,26.47h24.27V23.59a16.32,16.32,0,0,0-15.2-16.21Zm15.2,26.68H7.35V87.75A16.21,16.21,0,0,0,12,99.05l.17.16A16.19,16.19,0,0,0,23.59,104h75.7a16.21,16.21,0,0,0,11.3-4.6l.16-.18a16.17,16.17,0,0,0,4.78-11.46V34.06Z" /> </svg>
      ),
      href: "#video",
    },
    {
      title: t('audioAnnotation.title'),
      description: t('audioAnnotation.subtitle'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-primary">
          <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" stroke="currentColor" strokeWidth="2" />
          <path d="M19 10v1a7 7 0 0 1-14 0v-1" stroke="currentColor" strokeWidth="2" />
          <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
          <line x1="8" y1="22" x2="16" y2="22" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      href: "#audio",
    },
    {
      title: t('dataProcessing.title'),
      description: t('dataProcessing.subtitle'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-primary">
          <rect x="8" y="2" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="currentColor" strokeWidth="2" />
          <line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="2" />
          <line x1="9" y1="16" x2="15" y2="16" stroke="currentColor" strokeWidth="2" />
          <line x1="9" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      href: "#processing",
    }
  ];

  // Component for displaying services as cards on mobile
  const ServiceCards = ({ services, sectionTitle }) => (
    <div className="lg:hidden space-y-4">
      <h3 className="text-xl font-bold text-primary mb-4">{sectionTitle}</h3>
      {services.map((service, index) => (
        <div key={`mobile-${index}`} className="bg-white p-4 rounded-lg border shadow-sm">
          <h4 className="font-bold text-primary text-lg mb-2">{service.name}</h4>
          <p className="text-gray-600 text-sm mb-3 leading-relaxed">{service.description}</p>
          {/* <div className="mt-3 pt-3 border-t border-gray-200 space-y-2">
            <div className="flex justify-between items-start">
              <span className="font-medium text-sm text-gray-700">Price:</span>
              <span className="text-sm text-gray-600 text-right flex-1 ml-2">{service.price}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="font-medium text-sm text-gray-700">MOQ:</span>
              <span className="text-sm text-gray-600 text-right flex-1 ml-2">{service.moq}</span>
            </div>
          </div> */}
        </div>
      ))}
    </div>
  );

  // Component for displaying tables on desktop
  const ServiceTable = ({ services, headers }) => (
    <div className="hidden lg:block overflow-x-auto">
      <table className="w-full bg-white rounded-lg shadow-md">
        <thead className="bg-primary text-white">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-3 text-left text-sm font-medium">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {services.map((service, index) => (
            <tr key={`desktop-${index}`} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3 font-medium text-primary text-sm">{service.name}</td>
              <td className="px-4 py-3 text-gray-600 text-sm">{service.description}</td>
              {/* <td className="px-4 py-3 text-gray-600 text-sm">{service.price}</td>
              <td className="px-4 py-3 text-gray-600 text-sm">{service.moq}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const tableHeaders = [t('tableHeaders.service'), t('tableHeaders.description')];
  /* , 'UNIT PRICE', 'MOQ' */

  return (
    <Layout
      Layout
      title="Data Annotation Services - Complete Price List & Service Guide 2024"
      description="Professional data annotation services with transparent pricing. Text annotation from $0.005/char, image annotation from $0.05/image, video transcription from $2/min. High-quality, scalable solutions for AI and ML projects."
      keywords="data annotation pricing, text annotation cost, image labeling price, video transcription rates, audio processing services, data entry prices, data validation cost, data cleaning services, machine learning annotation"
      image="https://labelladder.com/images/og/services-og.jpg"
      structuredData={structuredData}
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white" id='services'>
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

      {/* Services Overview */}
      <section className="py-16">
        <Container>
          <SectionHeading
            title={t('overview.title')}
            subtitle={t('overview.subtitle')}
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {serviceTypes.map((service, index) => (
              <Card
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                variant="feature"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Text Annotation Section */}
      <section id="annotation" className="relative py-16 bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/images/services/text.png')" }}>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/100 to-white/80"></div>

        <Container>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Content */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('serviceTypes.text.title')}</h2>
                <p className="text-lg text-gray-600">{t('serviceTypes.text.description')}</p>
              </div>

              {/* Mobile Cards */}
              <ServiceCards services={textServices} sectionTitle="" />

              {/* Desktop Table */}
              <ServiceTable services={textServices} headers={tableHeaders} />
            </div>

            {/* Right side - Background image space */}
            <div className="hidden lg:block">
              {/* This space is left for the background image */}
            </div>
          </div>
        </Container>
      </section>

      {/* Image Annotation Section */}
      <section id="image" className="relative py-16 bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/images/services/image.png')" }}>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/100"></div>

        <Container>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Content side */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <SectionHeading
                  title={t('serviceTypes.image.title')}
                  subtitle={t('serviceTypes.image.description')}
                />
              </div>

              {/* Mobile Cards */}
              <ServiceCards services={imageServices} sectionTitle="" />

              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-md">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">{t('tableHeaders.service')}</th>
                      <th className="px-6 py-4 text-left">{t('tableHeaders.description')}</th>
                      {/* <th className="px-6 py-4 text-left">Price Range</th>
                      <th className="px-6 py-4 text-left">Min. Order Quantity</th> */}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {imageServices.map((service, index) => (
                      <tr key={`image-${index}`} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-primary">{service.name}</td>
                        <td className="px-6 py-4 text-gray-600">{service.description}</td>
                        {/* <td className="px-6 py-4 text-gray-600">{service.price}</td>
                        <td className="px-6 py-4 text-gray-600">{service.moq}</td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Background image space */}
            <div className="hidden lg:block order-2 lg:order-1">
              {/* This space is left for the background image */}
            </div>
          </div>
        </Container>
      </section>

      {/* Video Annotation Section */}
      <section id="video" className="relative py-16 bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/images/services/video.png')" }}>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/100 to-white/80"></div>

        <Container>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Content side */}
            <div>
              <div className="mb-8">
                <SectionHeading
                  title={t('serviceTypes.video.title')}
                  subtitle={t('serviceTypes.video.description')}
                />
              </div>

              {/* Mobile Cards */}
              <ServiceCards services={videoServices} sectionTitle="" />

              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-md">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">{t('tableHeaders.service')}</th>
                      <th className="px-6 py-4 text-left">{t('tableHeaders.description')}</th>
                      {/* <th className="px-6 py-4 text-left">{t('tableHeaders.priceRange')}</th>
                      <th className="px-6 py-4 text-left">{t('tableHeaders.minOrderQuantity')}</th> */}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {videoServices.map((service, index) => (
                      <tr key={`video-${index}`} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-primary">{service.name}</td>
                        <td className="px-6 py-4 text-gray-600">{service.description}</td>
                        {/* <td className="px-6 py-4 text-gray-600">{service.price}</td>
                        <td className="px-6 py-4 text-gray-600">{service.moq}</td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Background image space */}
            <div className="hidden lg:block">
              {/* This space is left for the background image */}
            </div>
          </div>
        </Container>
      </section>

      {/* Audio Annotation Section */}
      <section id="audio" className="relative py-16 bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/images/services/audio.png')" }}>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/100"></div>

        <Container>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Content side */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <SectionHeading
                  title={t('serviceTypes.audio.title')}
                  subtitle={t('serviceTypes.audio.description')}
                />
              </div>

              {/* Mobile Cards */}
              <ServiceCards services={audioServices} sectionTitle="" />

              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-md">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">{t('tableHeaders.service')}</th>
                      <th className="px-6 py-4 text-left">{t('tableHeaders.description')}</th>
                      {/* <th className="px-6 py-4 text-left">{t('tableHeaders.priceRange')}</th>
                      <th className="px-6 py-4 text-left">{t('tableHeaders.minOrderQuantity')}</th> */}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {audioServices.map((service, index) => (
                      <tr key={`audio-${index}`} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-primary">{service.name}</td>
                        <td className="px-6 py-4 text-gray-600">{service.description}</td>
                        {/* <td className="px-6 py-4 text-gray-600">{service.price}</td>
                        <td className="px-6 py-4 text-gray-600">{service.moq}</td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Background image space */}
            <div className="hidden lg:block order-2 lg:order-1">
              {/* This space is left for the background image */}
            </div>
          </div>
        </Container>
      </section>

      {/* Data Processing Section */}
      <section id="processing" className="relative py-16 bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/images/services/entry.png')" }}>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-white/80"></div>

        <Container>
          <div className="relative z-10">
            <SectionHeading
              title={t('serviceTypes.processing.title')}
              subtitle={t('serviceTypes.processing.description')}
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {dataProcessingServices.map((service, index) => (
                <div key={`processing-${index}`} className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <h4 className="font-semibold text-secondary mb-2">
                    {service.subtitle}
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    {service.tasks.map((task, i) => (
                      <li key={`task-${index}-${i}`} className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                          {i + 1}
                        </div>
                        <span className="text-gray-600">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Custom Solutions */}
      <section className="py-16">
        <Container>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <SectionHeading
                  title={t('customSolutions.title')}
                  subtitle={t('customSolutions.subtitle')}
                />
                <p className="text-gray-600 mb-6">
                  {t('customSolutions.paragraph1')}
                </p>
                <p className="text-gray-600 mb-8">
                  {t('customSolutions.paragraph2')}
                </p>
                <Button href="/contact/" variant="primary" size="lg">
                  {t('customSolutions.button')}
                </Button>
              </div>
              <div className="relative h-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/services/сustom-solutions.png"
                  alt="Custom Data Solutions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl mb-8 text-accent">
              {t('cta.subtitle')}
            </p>
            <Button href="/contact/" variant="white" size="lg">
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
        const tinaProps = await client.queries.generalServicesTranslations({
            relativePath: `${locale}/general-services.json`,
        });

        return {
            props: {
                ...tinaProps,
                ...(await serverSideTranslations(locale, ['common', 'header', 'footer', 'general-services'])),
            },
        };
    } catch (error) {
        console.error('Error loading Tina data:', error);
        return {
            props: {
                ...(await serverSideTranslations(locale, ['common', 'header', 'footer', 'general-services'])),
            },
        };
    }
}