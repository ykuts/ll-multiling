import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { useTranslation } from 'next-i18next';

const FoundationSection = () => {
  const { t } = useTranslation('home');

  const stats = [
    {
      number: t('foundation.stats.annotators.number'),
      label: t('foundation.stats.annotators.label'),
      description: t('foundation.stats.annotators.description')
    },
    {
      number: t('foundation.stats.costReduction.number'),
      label: t('foundation.stats.costReduction.label'),
      description: t('foundation.stats.costReduction.description')
    },
    {
      number: t('foundation.stats.delivery.number'),
      label: t('foundation.stats.delivery.label'),
      description: t('foundation.stats.delivery.description')
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionHeading
          title={t('foundation.title')}
          subtitle={t('foundation.subtitle')}
          centered
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-12 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-secondary mb-2">
                {stat.label}
              </div>
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom text about Swiss Quality */}
        <div className="mt-12 bg-gradient-to-br from-secondary to-secondary/90 text-white p-8 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">{t('foundation.capabilities.swissQuality.title')}</h3>
              <p className="text-white/90 mb-4">
                {t('foundation.capabilities.swissQuality.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom text about Label Ladder Academy */}
        <div className="mt-12 bg-primary text-white p-8 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">{t('foundation.academy.title')}</h3>
              <p className="text-white/90 mb-4">
                {t('foundation.academy.description1')}
              </p>
              <p className="text-white/90">
                {t('foundation.academy.description2')}
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{t('foundation.academy.stat')}</div>
              <div className="text-xl text-secondary font-semibold mb-2">{t('foundation.academy.statLabel')}</div>
              <p className="text-white/80 text-sm">{t('foundation.academy.statDescription')}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FoundationSection;