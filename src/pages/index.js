import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import ChallengeSection from '../components/sections/ChallengeSection';
import SolutionSection from '../components/sections/SolutionSection';
import ApproachSection from '../components/sections/ApproachSection';
import ServicesOverviewSection from '../components/sections/ServicesOverviewSection';
import CTASection from '../components/sections/CTASection';
import CredentialsSection from '../components/sections/CredentialsSection';
import FoundationSection from '../components/sections/FoundationSection';
import ExpertAnnotationSection from '../components/sections/ExpertAnnotationSection';
import WhyChooseSection from '../components/sections/WhyChooseSection';

export default function Home() {
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
      "slogan": "Labelling data. Powering intelligence."
    }
  };

  return (
    <Layout 
      title="Professional Data Annotation & Processing Services for AI & ML"
      description="Expert data annotation services for machine learning and AI projects. Swiss precision meets Namibian talent. Text, image, video, audio annotation and comprehensive data processing solutions with competitive pricing."
      keywords="data annotation services, AI training data, machine learning datasets, data labeling company, text annotation, image annotation, video transcription, audio processing, data validation, data cleaning, Switzerland, Namibia"
      image="https://labelladder.com/images/og/homepage-og.jpg"
      structuredData={structuredData}
    >
      <HeroSection />
      <FoundationSection />
      <ChallengeSection />
      <SolutionSection />
      <ExpertAnnotationSection />
      <WhyChooseSection />
      <ApproachSection />
      <ServicesOverviewSection />
      <CredentialsSection />
      <CTASection />
    </Layout>
  );
}