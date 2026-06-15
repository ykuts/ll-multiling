import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Project1000() {
  const { t } = useTranslation('project1000');

  const points = [0, 1, 2, 3].map((index) => t(`role.points.${index}`));

  const stages = [0, 1, 2, 3, 4].map((index) => ({
    number: t(`academy.stages.${index}.number`),
    title: t(`academy.stages.${index}.title`),
    description: t(`academy.stages.${index}.description`),
  }));

  const stats = [0, 1, 2].map((index) => ({
    number: t(`impact.stats.${index}.number`),
    label: t(`impact.stats.${index}.label`),
    suffix: t(`impact.stats.${index}.suffix`),
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Project1000 - Namibia's Digital Employment Initiative",
    "description": "Label Ladder is a contributing employer in Project1000, an MICT national initiative implemented by Impact Tank to create 1,000 digital jobs for Namibian youth.",
    "about": {
      "@type": "Organization",
      "name": "Label Ladder"
    }
  };

  return (
    <Layout
      title="Project1000 - Namibia's Digital Employment Initiative | Label Ladder"
      description="Label Ladder is a contributing employer in Project1000, Namibia's national initiative to create 1,000 digital jobs for youth in technology, AI, and data."
      keywords="Project1000, Namibia digital jobs, MICT, Impact Tank, digital employment, Label Ladder Academy"
      image="https://labelladder.com/images/og/project1000-og.jpg"
      structuredData={structuredData}
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 mb-4 rounded-full bg-white/10 text-sm font-semibold tracking-wide uppercase">
              {t('hero.label')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl mb-8 text-accent">
              {t('hero.subtitle')}
            </p>
          </div>
        </Container>
      </section>

      {/* Role Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title={t('role.title')}
              subtitle={t('role.description')}
              centered
            />
            <ul className="space-y-4 mt-8">
              {points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center mr-4 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Academy Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading
            title={t('academy.title')}
            subtitle={t('academy.description')}
            centered
          />
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            {t('academy.subtitle')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {stages.map((stage, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {stage.number}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{stage.title}</h3>
                <p className="text-gray-600 text-sm">{stage.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <Container>
          <SectionHeading title={t('impact.title')} centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-secondary">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-lg font-semibold text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              {t('cta.description')}
            </p>
            <Button href="/contact/" variant="white" size="lg">
              {t('cta.button')}
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header', 'footer', 'project1000'])),
    },
  };
}
