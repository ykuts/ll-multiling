import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { useTranslation } from 'next-i18next';

const ValuePillarsSection = () => {
  const { t } = useTranslation('home');

  const pillars = [0, 1, 2].map((index) => ({
    title: t(`valuePillars.pillars.${index}.title`),
    description: t(`valuePillars.pillars.${index}.description`),
  }));

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionHeading title={t('valuePillars.title')} centered />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="h-full flex flex-col bg-primary text-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-white">{pillar.title}</h3>
              <p className="text-accent leading-relaxed flex-grow">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ValuePillarsSection;
