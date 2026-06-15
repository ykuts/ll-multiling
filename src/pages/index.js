import { useTina } from 'tinacms/dist/react'
import client from '../../tina/__generated__/client'
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import ValuePillarsSection from '../components/sections/ValuePillarsSection';
import ServicesOverviewSection from '../components/sections/ServicesOverviewSection';
import Project1000CalloutSection from '../components/sections/Project1000CalloutSection';
import ChallengeSection from '../components/sections/ChallengeSection';
import SolutionSection from '../components/sections/SolutionSection';
import ApproachSection from '../components/sections/ApproachSection';
import CTASection from '../components/sections/CTASection';
import CredentialsSection from '../components/sections/CredentialsSection';
import FoundationSection from '../components/sections/FoundationSection';
import ExpertAnnotationSection from '../components/sections/ExpertAnnotationSection';
import WhyChooseSection from '../components/sections/WhyChooseSection';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Home(props) {
  const { t } = useTranslation('common');

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Label Ladder",
    "url": "https://labelladder.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://labelladder.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Label Ladder",
      "slogan": "High-Quality Data Annotation. From Scale to Specialization.",
      "description": "Swiss-Namibian company providing data annotation services from large-scale general projects to specialized medical expertise",
      "foundingDate": "2018",
      "numberOfEmployees": "1000",
      "location": [
        {
          "@type": "Place",
          "name": "Zürich, Switzerland"
        },
        {
          "@type": "Place",
          "name": "Windhoek, Namibia"
        }
      ],
      "serviceArea": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "hasOfferCatalog": [
        {
          "@type": "OfferCatalog",
          "name": "General Data Annotation Services",
          "description": "Large-scale annotation services powered by 1,000-strong team"
        },
        {
          "@type": "OfferCatalog",
          "name": "Medical & Healthcare Annotation",
          "description": "Specialized medical data annotation with clinical expertise"
        }
      ],
      "knowsAbout": [
        "Data Annotation",
        "Medical Data Processing",
        "Healthcare AI",
        "Radiology Annotation",
        "Pathology Labeling",
        "Clinical Documentation",
        "Machine Learning",
        "Computer Vision"
      ]
    }
  };

  return (
    <Layout
      title="Namibia's Digital Services Partner"
      description="Software development, software implementation, data services, and digital consulting for Namibia's leading public and private institutions"
      keywords="data annotation services, medical data annotation, healthcare AI, large scale data labeling, radiology annotation, pathology labeling, clinical data processing, Swiss Namibian partnership, native English speakers"
      image="https://labelladder.com/images/og/homepage-medical-og.jpg"
      structuredData={structuredData}
    >
      <HeroSection tinaData={data?.homeTranslations?.hero} />
      <ValuePillarsSection />
      <ServicesOverviewSection />
      <Project1000CalloutSection />
      <FoundationSection />
      <ExpertAnnotationSection />
      <ChallengeSection />
      <SolutionSection />
      <WhyChooseSection />
      <ApproachSection />
      <CredentialsSection />
      <CTASection />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  try {
    // Download data from Tina CMS
    const tinaProps = await client.queries.homeTranslations({
      relativePath: `${locale}/home.json`,
    })

    return {
      props: {
        ...tinaProps,
        ...(await serverSideTranslations(locale, ['common', 'header', 'footer', 'home', 'services', 'credentials', 'contact'])),
      },
    }
  } catch (error) {
    console.error('Error loading Tina data:', error)
    // Fallback if Tina CMS is not working
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common', 'header', 'footer', 'home', 'services', 'credentials', 'contact'])),
      },
    }
  }
}