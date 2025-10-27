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
          title={t('approach.title')}
          subtitle={t('approach.subtitle')}
          centered
        />

        {/* Mobile version - blocks in order 1-2-3-4 */}
        <div className="mt-12 md:hidden space-y-6">
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

        <div className="hidden md:block mt-12 max-w-6xl mx-auto relative">
          {/* First block - centered */}
          <div className="flex justify-center mb-8">
            <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2 border-2 border-primary relative z-10">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg mr-4 flex-shrink-0">
                  {steps[0].number}
                </div>
                <h3 className="text-xl font-bold text-primary">{steps[0].title}</h3>
              </div>
              <p className="text-gray-600 ml-16">
                {steps[0].description}
              </p>
            </div>
          </div>

          {/* Arrow from block 1 to block 2 - NOW ON TOP */}
          <div className="absolute top-[80px] right-[12%] w-40 h-32 pointer-events-none z-20">
            <svg viewBox="0 0 120 100" className="w-full h-full">
              <defs>
                <marker id="arrowhead1" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                  <polygon points="0 0, 12 6, 0 12" fill="#003366" />
                </marker>
              </defs>
              <path
                d="M 20 10 Q 60 30, 100 80"
                stroke="#003366"
                strokeWidth="3"
                fill="none"
                markerEnd="url(#arrowhead1)"
                opacity="0.8"
              />
            </svg>
          </div>

          {/* Second row - blocks 4 and 2 */}
          <div className="grid grid-cols-2 gap-8 mb-8 relative">
            <div className="bg-white p-8 rounded-lg shadow-md relative z-10">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg mr-4 flex-shrink-0">
                  {steps[3].number}
                </div>
                <h3 className="text-xl font-bold text-primary">{steps[3].title}</h3>
              </div>
              <p className="text-gray-600 ml-16">
                {steps[3].description}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md relative z-10">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg mr-4 flex-shrink-0">
                  {steps[1].number}
                </div>
                <h3 className="text-xl font-bold text-primary">{steps[1].title}</h3>
              </div>
              <p className="text-gray-600 ml-16">
                {steps[1].description}
              </p>
            </div>
          </div>

          {/* Arrow from block 3 to block 4 */}
          <div className="absolute top-[450px] left-[12%] w-48 h-32 pointer-events-none z-20">
            <svg viewBox="0 0 140 100" className="w-full h-full">
              <defs>
                <marker id="arrowhead2" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                  <polygon points="0 0, 12 6, 0 12" fill="#003366" />
                </marker>
              </defs>
              <path
                d="M 90 80 Q 50 45, 30 15"
                stroke="#003366"
                strokeWidth="3"
                fill="none"
                markerEnd="url(#arrowhead2)"
                opacity="0.8"
              />
            </svg>
          </div>

          {/* Arrow from block 2 to block 3 - NOW ON TOP */}
          <div className="absolute top-[440px] right-[12%] w-48 h-32 pointer-events-none z-20">
            <svg viewBox="0 0 140 100" className="w-full h-full">
              <defs>
                <marker id="arrowhead3" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                  <polygon points="0 0, 12 6, 0 12" fill="#003366" />
                </marker>
              </defs>
              <path
                d="M 110 15 Q 90 45, 50 80"
                stroke="#003366"
                strokeWidth="3"
                fill="none"
                markerEnd="url(#arrowhead3)"
                opacity="0.8"
              />
            </svg>
          </div>

          {/* Third block - centered */}
          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2 relative z-10">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg mr-4 flex-shrink-0">
                  {steps[2].number}
                </div>
                <h3 className="text-xl font-bold text-primary">{steps[2].title}</h3>
              </div>
              <p className="text-gray-600 ml-16">
                {steps[2].description}
              </p>
            </div>
          </div>
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