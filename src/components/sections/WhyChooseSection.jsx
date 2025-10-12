import Container from '../ui/Container';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import { useTranslation } from 'next-i18next';

const WhyChooseSection = () => {
  const { t } = useTranslation('home');

  const features = [
    {
      title: t('whyChoose.features.scale.title'),
      description: t('whyChoose.features.scale.description'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: t('whyChoose.features.medical.title'),
      description: t('whyChoose.features.medical.description'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: t('whyChoose.features.social.title'),
      description: t('whyChoose.features.social.description'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: t('whyChoose.features.excellence.title'),
      description: t('whyChoose.features.excellence.description'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          title={t('whyChoose.title')}
          subtitle={t('whyChoose.subtitle')}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="p-8 bg-gray-50 rounded-xl hover:shadow-xl border-l-4 border-primary hover:border-secondary transition-all duration-300">
                {/* Icon */}
                <div className="mb-4 flex justify-start">
                  <div className="w-14 h-14 rounded-full bg-primary group-hover:bg-secondary flex items-center justify-center transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 bg-primary rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            {t('whyChoose.cta.title')}
          </h3>
          <p className="text-accent mb-6 max-w-2xl mx-auto">
            {t('whyChoose.cta.description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/services#general" variant="white" size="md">
              {t('whyChoose.cta.btnGeneral')}
            </Button>
            <Button href="/services#expert" variant="secondary" size="md">
              {t('whyChoose.cta.btnExpert')}
            </Button>
            <Button href="/contact/" variant="outline" className="text-white border-white hover:bg-white/10" size="md">
              {t('whyChoose.cta.btnGetStarted')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseSection;