import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Image from 'next/image';
import ProcessDesignSection from '@/components/sections/ProcessDesignSection';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useTina } from 'tinacms/dist/react'
import client from '../../tina/__generated__/client'

export default function Approach(props) {
  const { t } = useTranslation('approach');

  const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Label Ladder's Data Annotation Approach - Human-in-the-Loop Methodology",
    "description": "Learn about our comprehensive 4-step approach to data annotation: needs assessment, custom design, future-proofed architecture, and human-in-the-loop quality assurance.",
    "author": {
      "@type": "Organization",
      "name": "Label Ladder"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Label Ladder",
      "logo": "https://labelladder.com/images/logo.png"
    },
    "mainEntityOfPage": "https://labelladder.com/approach",
    "articleSection": "Methodology",
    "keywords": ["data annotation methodology", "human-in-the-loop", "data quality assurance", "annotation workflow"],
    "about": [
      {
        "@type": "Thing",
        "name": "Data Annotation Process"
      },
      {
        "@type": "Thing",
        "name": "Quality Control"
      }
    ]
  };

  const approachSteps = [
    {
      title: t('steps.needsAssessment.title'),
      subtitle: t('steps.needsAssessment.subtitle'),
      description: t('steps.needsAssessment.description'),
      actions: [
        t('steps.needsAssessment.actions.useCase.title') + ': ' + t('steps.needsAssessment.actions.useCase.description'),
        t('steps.needsAssessment.actions.dataAudit.title') + ': ' + t('steps.needsAssessment.actions.dataAudit.description'),
        t('steps.needsAssessment.actions.labelStrategy.title') + ': ' + t('steps.needsAssessment.actions.labelStrategy.description')
      ],
      teamWork: [
        t('steps.needsAssessment.teamWork.swiss'),
        t('steps.needsAssessment.teamWork.namibian')
      ],
      image: "/images/approach/assessment.png"
    },
    {
      title: t('steps.customDesign.title'),
      subtitle: t('steps.customDesign.subtitle'),
      description: "",
      actions: [
        t('steps.customDesign.actions.workflow.title') + ': ' + t('steps.customDesign.actions.workflow.description'),
        t('steps.customDesign.actions.quality.title') + ': ' + t('steps.customDesign.actions.quality.description'),
        t('steps.customDesign.actions.scalability.title') + ': ' + t('steps.customDesign.actions.scalability.description')
      ],
      teamWork: [
        t('steps.customDesign.teamWork.swiss'),
        t('steps.customDesign.teamWork.namibian')
      ],
      image: "/images/approach/customDesign.png"
    },
    {
      title: t('steps.architecture.title'),
      subtitle: t('steps.architecture.subtitle'),
      description: "",
      actions: [
        t('steps.architecture.actions.formats.title') + ': ' + t('steps.architecture.actions.formats.description'),
        t('steps.architecture.actions.version.title') + ': ' + t('steps.architecture.actions.version.description'),
        t('steps.architecture.actions.retraining.title') + ': ' + t('steps.architecture.actions.retraining.description')
      ],
      teamWork: [
        t('steps.architecture.teamWork.swiss'),
        t('steps.architecture.teamWork.namibian')
      ],
      image: "/images/approach/architecture.png"
    },
    {
      title: t('steps.humanInLoop.title'),
      subtitle: t('steps.humanInLoop.subtitle'),
      description: t('steps.humanInLoop.description'),
      actions: [
        t('steps.humanInLoop.actions.training.title') + ': ' + t('steps.humanInLoop.actions.training.description'),
        t('steps.humanInLoop.actions.collaboration.title') + ': ' + t('steps.humanInLoop.actions.collaboration.description'),
        t('steps.humanInLoop.actions.feedback.title') + ': ' + t('steps.humanInLoop.actions.feedback.description')
      ],
      teamWork: [
        t('steps.humanInLoop.teamWork.swiss'),
        t('steps.humanInLoop.teamWork.namibian')
      ],
      image: "/images/approach/human.png"
    }
  ];

  return (
    <Layout
      title="Our Data Annotation Approach - Human-in-the-Loop Methodology"
      description="Discover Label Ladder's proven 4-step approach to data annotation: comprehensive needs assessment, custom workflow design, future-proofed architecture, and human-in-the-loop quality assurance for superior results."
      keywords="data annotation approach, human-in-the-loop annotation, data annotation methodology, annotation workflow design, data quality control, custom annotation solutions, Swiss data annotation process"
      image="https://labelladder.com/images/og/approach-og.jpg"
      type="article"
      article={true}
      structuredData={structuredData}
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl mb-8 text-accent">
              {t('hero.subtitle')}
            </p>
          </div>
        </Container>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title={t('intro.title')}
                subtitle={t('intro.subtitle')}
              />
              <p className="text-gray-600 mb-6">
                {t('intro.paragraph1')}
              </p>
              <p className="text-gray-600 mb-6">
                {t('intro.paragraph2')}
              </p>
              <p className="text-gray-600">
                {t('intro.paragraph3')}
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/approach/customDesign.png"
                alt="Label Ladder Approach"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Process Design Section */}
      <ProcessDesignSection />

      {/* Approach Steps Section */}
      {approachSteps.map((step, index) => (
        <section
          key={index}
          className={`py-16 ${index % 2 === 1 ? 'bg-cover bg-right bg-no-repeat overflow-hidden relative' : 'bg-cover bg-center bg-no-repeat overflow-hidden relative'}`}
          id={step.title.toLowerCase().replace(/\s+/g, '-')}
          style={{
            backgroundImage: `url(${step.image})`
          }}
        >
          {/* Background overlay */}
          <div className={`absolute inset-0 ${index % 2 === 1 ? 'bg-gradient-to-r from-white/80 to-white/100' : 'bg-gradient-to-r from-white/100 to-white/80'}`} ></div>
          <Container>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 ">
              <div className={`order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <SectionHeading
                  title={step.title}
                  subtitle={step.subtitle}
                />

                {step.description && (
                  <p className="text-gray-600 mb-6">{step.description}</p>
                )}

                <div className="mt-8">
                  <h3 className="text-lg font-bold text-primary mb-4">{t('steps.whatWeDo')}</h3>
                  <ul className="space-y-4">
                    {step.actions.map((action, i) => {
                      const [actionTitle, actionDesc] = action.split(':');
                      return (
                        <li key={i} className="flex">
                          <div>
                            <span className="font-semibold text-primary">{actionTitle}:</span>
                            <span className="text-gray-600">{actionDesc}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-bold text-primary mb-4">{t('steps.howWeDoIt')}</h3>
                  <ul className="space-y-3">
                    {/* {step.teamWork.map((work, i) => ( */}
                    <li key={0} className="flex items-start">
                      <Image
                        src="/images/icons/switzerland.png"
                        alt="Switzerland Flag"
                        width={48}
                        height={48}
                        className="mr-3"
                      />
                      {/* <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-white font-bold text-sm mr-3 mt-0.5">{i+1}</span> */}
                      <span className="text-gray-600">{step.teamWork[0]}</span>
                    </li>
                    <li key={1} className="flex items-start">
                      <Image
                        src="/images/icons/namibia.png"
                        alt="Switzerland Flag"
                        width={48}
                        height={48}
                        className="mr-3"
                      />
                      {/* <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-white font-bold text-sm mr-3 mt-0.5">{i+1}</span> */}
                      <span className="text-gray-600">{step.teamWork[1]}</span>
                    </li>

                  </ul>
                </div>
              </div>

              <div className={`order-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div >
                  <Image
                    src={step.image}
                    alt={`${step.title} Process`}
                    fill
                    className="object-cover hidden"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* <HumanInTheLoopSection /> */}

      {/* Results Section */}
      <section className="py-16 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('results.title')}
            </h2>
            <p className="text-xl mb-8 text-accent">
              {t('results.subtitle')}
            </p>
            <Button href="/contact/" variant="white" size="lg">
              {t('results.button')}
            </Button>
          </div>
        </Container>
      </section>
    </Layout> 
  );
}

export async function getStaticProps({ locale }) {
    try {
        const tinaProps = await client.queries.approachTranslations({
            relativePath: `${locale}/approach.json`,
        });

        return {
            props: {
                ...tinaProps,
                ...(await serverSideTranslations(locale, ['common', 'header', 'footer', 'approach'])),
            },
        };
    } catch (error) {
        console.error('Error loading Tina data:', error);
        return {
            props: {
                ...(await serverSideTranslations(locale, ['common', 'header', 'footer', 'approach'])),
            },
        };
    }
}