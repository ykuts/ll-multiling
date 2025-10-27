import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { useTranslation } from 'next-i18next';

const ExpertAnnotationSection = () => {
    const { t } = useTranslation('home');

    const processSteps = [
        {
            number: "1",
            title: t('expertAnnotation.how.step1_title'),
            description: t('expertAnnotation.how.step1_description')
        },
        {
            number: "2",
            title: t('expertAnnotation.how.step2_title'),
            description: t('expertAnnotation.how.step2_description')
        },
        {
            number: "3",
            title: t('expertAnnotation.how.step3_title'),
            description: t('expertAnnotation.how.step3_description')
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <Container>
                <SectionHeading
                    title={t('expertAnnotation.title')}
                    subtitle={t('expertAnnotation.subtitle')}
                    centered
                />

                {/* Process Steps - Large Colored Block */}
<div className="mb-12">
    <div className="bg-gradient-to-br from-secondary to-secondary/90 rounded-2xl p-8 md:p-12 text-white shadow-xl">
        <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-white">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">{t('expertAnnotation.how.title')}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {processSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                    {/* Number centered */}
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold text-xl text-white">
                            {step.number}
                        </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-primary font-bold text-lg mb-3 text-center">
                        {step.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-center">
                        {step.description}
                    </p>
                </div>
            ))}
        </div>
    </div>
</div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <Button href="/contact/" variant="primary" size="lg">
                        {t('expertAnnotation.cta')}
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default ExpertAnnotationSection;