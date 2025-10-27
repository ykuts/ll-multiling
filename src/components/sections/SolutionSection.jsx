import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const SolutionSection = () => {
  const { t } = useTranslation('home');

  const solutions = [
    {
      title: t('solution.solutions.speed.title'),
      description: t('solution.solutions.speed.description'),
      icon: "/images/icons/speed.png"
    },
    {
      title: t('solution.solutions.savings.title'),
      description: t('solution.solutions.savings.description'),
      icon: "/images/icons/savings.png"
    },
    {
      title: t('solution.solutions.reliability.title'),
      description: t('solution.solutions.reliability.description'),
      icon: "/images/icons/reliability.png"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionHeading
          title={t('solution.title')}
          subtitle={t('solution.subtitle')}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-12">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-primary group"
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={solution.icon}
                    alt={`${solution.title} Icon`}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-3 text-center">{solution.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SolutionSection;