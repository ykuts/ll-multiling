import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { useTranslation } from 'next-i18next';

const ChallengeSection = () => {
  const { t } = useTranslation('home');

  const challenges = [
    {
      title: t('challenge.challenges.time.title'),
      description: t('challenge.challenges.time.description'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: t('challenge.challenges.quality.title'),
      description: t('challenge.challenges.quality.description'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: t('challenge.challenges.costs.title'),
      description: t('challenge.challenges.costs.description'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
          <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: t('challenge.challenges.integration.title'),
      description: t('challenge.challenges.integration.description'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
          <path d="M8 2v4" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 2v4" stroke="currentColor" strokeWidth="2"/>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 10h18" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 14h.01" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 14h.01" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 14h.01" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 18h.01" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 18h.01" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 18h.01" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title={t('challenge.title')}
          subtitle={t('challenge.subtitle')}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {challenges.map((challenge, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-primary group"
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <div className="bg-primary/90 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                        {challenge.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-3 text-center">
                {challenge.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ChallengeSection;