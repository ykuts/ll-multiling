import Container from '../ui/Container';
import Button from '../ui/Button';
import { useTranslation } from 'next-i18next';

const Project1000CalloutSection = () => {
  const { t } = useTranslation('home');

  return (
    <section className="py-16 md:py-20 bg-secondary text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-white/10 text-sm font-semibold tracking-wide uppercase">
            {t('project1000.label')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('project1000.title')}
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            {t('project1000.description')}
          </p>
          <Button href="/project1000/" variant="white" size="lg">
            {t('project1000.cta')}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Project1000CalloutSection;
