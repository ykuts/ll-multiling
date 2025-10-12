import Container from '../ui/Container';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import { useTranslation } from 'next-i18next';

const ApproachSection = () => {
  const { t } = useTranslation('home');

  const steps = [
    {
      number: 1,
      title: t('approach.steps.assessment.title'),
      description: t('approach.steps.assessment.description')
    },
    {
      number: 2,
      title: t('approach.steps.design.title'),
      description: t('approach.steps.design.description')
    },
    {
      number: 3,
      title: t('approach.steps.architecture.title'),
      description: t('approach.steps.architecture.description')
    },
    {
      number: 4,
      title: t('approach.steps.human.title'),
      description: t('approach.steps.human.description')
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionHeading
          title="Our Approach"
          subtitle="We follow a thoughtful approach to designing a solution that fits your needs."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg mr-4 flex-shrink-0">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-primary">{step.title}</h3>
              </div>
              <p className="text-gray-600 ml-16">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button href="/approach/" variant="primary" size="lg">
            {t('approach.cta')}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ApproachSection;