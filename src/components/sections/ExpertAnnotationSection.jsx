import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const ExpertAnnotationSection = () => {
    const { t } = useTranslation('home');

    const processSteps = [
        {
            number: "1",
            title: "Aufbau eines Expertenteams",
            description: "Wir stellten ein spezialisiertes Team mit medizinischer Zusatzausbildung zusammen und schulten es nach Schweizer Qualitätsstandards."
        },
        {
            number: "2",
            title: "Präzise Annotation medizinischer Daten",
            description: "Das Team kennzeichnete tausende Röntgen- und CT-Aufnahmen mit klinischer Genauigkeit – inklusive Validierung durch Fachärzte."
        },
        {
            number: "3",
            title: "Sichere Dokumentation & Compliance",
            description: "Alle Daten wurden HIPAA-konform verarbeitet, standardisiert und für den direkten Einsatz in die Systeme des Kunden überführt."
        }
    ];

    const medicalServices = [
        {
            title: t('expertAnnotation.medical.radiology.title'),
            description: t('expertAnnotation.medical.radiology.description'),
            features: [
                t('expertAnnotation.medical.radiology.features.dicom'),
                t('expertAnnotation.medical.radiology.features.validation'),
                t('expertAnnotation.medical.radiology.features.oversight')
            ],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="currentColor" strokeWidth="2" />
                </svg>
            )
        },
        {
            title: t('expertAnnotation.medical.pathology.title'),
            description: t('expertAnnotation.medical.pathology.description'),
            features: [
                t('expertAnnotation.medical.pathology.features.cellular'),
                t('expertAnnotation.medical.pathology.features.tissue'),
                t('expertAnnotation.medical.pathology.features.diagnostic')
            ],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" />
                </svg>
            )
        },
        {
            title: t('expertAnnotation.medical.clinical.title'),
            description: t('expertAnnotation.medical.clinical.description'),
            features: [
                t('expertAnnotation.medical.clinical.features.hipaa'),
                t('expertAnnotation.medical.clinical.features.terminology'),
                t('expertAnnotation.medical.clinical.features.standardization')
            ],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" />
                    <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" />
                    <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" />
                    <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" />
                    <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" />
                </svg>
            )
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
            <h3 className="text-2xl md:text-3xl font-bold">So haben wir das Projekt umgesetzt:</h3>
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
                        Besprechen Sie Ihre speziellen Anforderungen
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default ExpertAnnotationSection;