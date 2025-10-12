import Container from '../ui/Container';
import Button from '../ui/Button';
import { useTranslation } from 'next-i18next';

const CTASection = () => {
  const { t } = useTranslation('home');

  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-8 text-accent">
            {t('cta.subtitle')}
          </p>
          <Button href="/contact/" variant="white" size="lg">
            {t('cta.button')}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;