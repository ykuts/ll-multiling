import HeroSection from '../components/sections/HeroSection';
import ChallengeSection from '../components/sections/ChallengeSection';
import SolutionSection from '../components/sections/SolutionSection';
import AboutSection from '../components/sections/AboutSection';
import ApproachSection from '../components/sections/ApproachSection';
import ServicesOverviewSection from '../components/sections/ServicesOverviewSection';
import CredentialsSection from '../components/sections/CredentialsSection';
import CTASection from '../components/sections/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ChallengeSection />
      <SolutionSection />
      <AboutSection />
      <ApproachSection />
      <ServicesOverviewSection />
      <CredentialsSection />
      <CTASection />
    </>
  );
}