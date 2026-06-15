import Container from '../ui/Container';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import { useTranslation } from 'next-i18next';

const ServicesOverviewSection = () => {
  const { t } = useTranslation('home');

  const cards = [0, 1, 2, 3].map((index) => ({
    title: t(`servicesOverview.cards.${index}.title`),
    description: t(`servicesOverview.cards.${index}.description`),
  }));

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title={t('servicesOverview.title')}
          subtitle={t('servicesOverview.subtitle')}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-secondary"
            >
              <span className="text-4xl font-bold text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl font-bold text-primary mt-2 mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/services/" variant="primary" size="lg">
            {t('servicesOverview.cta')}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ServicesOverviewSection;
