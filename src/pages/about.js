import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Trans } from 'next-i18next';

export default function About() {
    const { t } = useTranslation('about');
    // Structured data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": {
            "@type": "Organization",
            "name": "Label Ladder",
            "foundingDate": "2018",
            "founders": [
                {
                    "@type": "Person",
                    "name": "Lorenzo Olivi",
                    "jobTitle": "Co-founder & CEO"
                },
                {
                    "@type": "Person",
                    "name": "Marion Schleifer",
                    "jobTitle": "Co-founder & CTO"
                }
            ],
            "mission": "We provide end-to-end data processing and annotation services to transform data into powerful assets that drive smarter decisions, streamlined operations, and real competitive edge.",
            "numberOfEmployees": "50-100",
            "location": [
                {
                    "@type": "Place",
                    "name": "Zürich, Switzerland"
                },
                {
                    "@type": "Place",
                    "name": "Windhoek, Namibia"
                }
            ]
        }
    };

    // Team data
    const team = [
        {
            name: 'Marion Schleifer',
            role: 'Co-founder & CEO',
            image: '/images/team/marion.png',
        },
        {
            name: 'Lorenzo Olivi',
            role: 'Business Development',
            image: '/images/team/lorenzo.png',
        },
        {
            name: 'Natasha Bassingthwaighte',
            role: 'Project Oversight',
            image: '/images/team/natasha.png',
        },
        {
            name: 'Klaudia Iita',
            role: 'Operations',
            image: '/images/team/klaudia.png',
        },
        {
            name: 'Elzine Mushambi',
            role: 'Co-founder & Advisor',
            image: '/images/team/elzine.png',
        },
    ];

    const labelers = [
        { name: 'Lavinia', image: '/images/team/lavinia.png' },
        { name: 'Paulus', image: '/images/team/paulus.png' },
        { name: 'Lucien', image: '/images/team/lucien.png' },
        { name: 'Marizungiruaije', image: '/images/team/marizungiruaije.png' },
        { name: 'Racheal', image: '/images/team/racheal.png' },
        { name: 'Almando', image: '/images/team/almando.png' },
        { name: 'Silver', image: '/images/team/silver.png' },
        { name: 'Elvino', image: '/images/team/elvino.png' },
    ];
    return (
        <Layout
            title="About Label Ladder - Swiss-Namibian Data Annotation Company"
            description="Learn about Label Ladder's mission to combine Swiss precision with Namibian talent. Founded by Lorenzo Olivi and Marion Schleifer, we're training 1,000 Namibians in digital skills while providing world-class data annotation services."
            keywords="Label Ladder company, data annotation team, Swiss Namibian partnership, Lorenzo Olivi, Marion Schleifer, Label Ladder Academy, digital skills training, data annotation experts"
            image="https://labelladder.com/images/og/about-og.jpg"
            structuredData={structuredData}
        >
            {/* Hero Section */}
            <section className="relative py-20 bg-primary text-white" id='mission'>
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

            {/* About Section */}
            <section className="py-16" id="about">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionHeading
                                title={t('aboutUs.title')}
                                subtitle={t('aboutUs.subtitle')}
                            />
                            <p className="text-gray-600 mb-6">
                                <Trans
                                    i18nKey="about:aboutUs.intro"
                                    components={{ strong: <strong /> }}
                                />
                            </p>
                            <p className="text-gray-600 mb-6">
                                <Trans
                                    i18nKey="about:aboutUs.paragraph2"
                                    components={{ strong: <strong /> }}
                                />
                            </p>
                            <p className="text-gray-600 mb-6">
                                {t('aboutUs.paragraph3')}
                            </p>
                            <p className="text-gray-600">
                                <Trans
                                    i18nKey="about:aboutUs.paragraph4"
                                    components={{ strong: <strong /> }}
                                />
                            </p>
                        </div>
                        <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/images/about/office.jpg"
                                alt="Label Ladder Office"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Working With Us Section */}
            <section className="py-16 bg-gray-50">
                <Container>
                    <SectionHeading
                        title={t('workingWithUs.title')}
                        subtitle={t('workingWithUs.subtitle')}
                        centered
                    />
                    <div className="flex justify-center">
                        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* High-Quality Data Services */}
                            <div className="border-2 border-blue-900 rounded-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 mr-4">
                                        <Image
                                            src="/images/icons/quality.png"
                                            alt="High-Quality Data Services"
                                            width={48}
                                            height={48}
                                            className="w-full text-blue-900"
                                        />
                                    </div>
                                    <h3 className="text-blue-900 text-xl font-bold">{t('workingWithUs.quality.title')}</h3>
                                </div>
                                <p className="text-blue-900 font-medium mb-2">
                                    <Trans
                                        i18nKey="workingWithUs.quality.text"
                                        ns='about'
                                        components={{ strong: <strong /> }}
                                    />
                                </p>
                                <p className="text-blue-900 mb-2"><span className="font-bold">accurate</span> and <span className="font-bold">high-quality processed data</span>, avoiding common crowdsourcing inconsistency issues</p>
                            </div>
                            {/* Cost-Effective Service */}
                            <div className="border-2 border-blue-900 rounded-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 mr-4">
                                        <Image
                                            src="/images/icons/cost.png"
                                            alt="Cost-Effective Service"
                                            width={48}
                                            height={48}
                                            className="w-full text-blue-900"
                                        />
                                    </div>
                                    <h3 className="text-blue-900 text-xl font-bold">{t('workingWithUs.cost.title')}</h3>
                                </div>
                                <p className="text-blue-900 font-medium mb-2">
                                    <Trans
                                        i18nKey="workingWithUs.cost.text"
                                        ns='about'
                                        components={{ strong: <strong /> }}
                                    />
                                </p>
                            </div>
                            {/* Skilled Talent Pool */}
                            <div className="border-2 border-blue-900 rounded-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 mr-4">
                                        <Image
                                            src="/images/icons/talent.png"
                                            alt="Skilled Talent Pool"
                                            width={48}
                                            height={48}
                                            className="w-full text-blue-900"
                                        />
                                    </div>
                                    <h3 className="text-blue-900 text-xl font-bold">{t('workingWithUs.talent.title')}</h3>
                                </div>
                                <p className="text-blue-900 font-medium mb-2">
                                    <Trans
                                        i18nKey="workingWithUs.talent.text"
                                        ns='about'
                                        components={{ strong: <strong /> }}
                                    />
                                </p>
                            </div>
                            {/* A Venture Built on Impact */}
                            <div className="border-2 border-blue-900 rounded-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 mr-4">
                                        <Image
                                            src="/images/icons/impact.png"
                                            alt="A Venture Built on Impact"
                                            width={48}
                                            height={48}
                                            className="w-full text-blue-900"
                                        />
                                    </div>
                                    <h3 className="text-blue-900 text-xl font-bold">{t('workingWithUs.impact.title')}</h3>
                                </div>
                                <p className="text-blue-900 font-medium mb-2">
                                    <Trans
                                        i18nKey="workingWithUs.impact.text"
                                        ns='about'
                                        components={{ strong: <strong /> }}
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Our Impact Section */}
            <section className="py-16 bg-gray-50">
                <Container>
                    <SectionHeading
                        title={t('ourImpact.title')}
                        subtitle={t('ourImpact.subtitle')}
                        centered
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
                        <div className="order-2 md:order-1">
                            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                                <Image
                                    src="/images/about/impact.jpg"
                                    alt="Label Ladder Academy"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            {/* <h3 className="text-2xl font-bold text-primary mb-6">
                Label Ladder Academy
              </h3> */}
                            <p className="text-gray-600 mb-6">
                                <Trans
                                    i18nKey="about:ourImpact.paragraph1"
                                    components={{ strong: <strong /> }}
                                />
                            </p>
                            <p className="text-gray-600 mb-6">
                                <Trans
                                    i18nKey="about:ourImpact.paragraph2"
                                    components={{ strong: <strong /> }}
                                />
                            </p>
                        </div>
                        <div className="order-4 md:order-3">
                            <h4 className="text-xl font-bold text-primary mb-4 mt-8">
                                {t('ourImpact.coreTeachings')}
                            </h4>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    {/* <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white font-bold text-sm mr-3 mt-0.5">1</span> */}
                                    <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                                        1
                                    </div>
                                    <span>
                                        <Trans
                                            i18nKey="about:ourImpact.teachings.intro"
                                            components={{ strong: <strong /> }}
                                        />
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    {/* <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white font-bold text-sm mr-3 mt-0.5">2</span> */}
                                    <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                                        2
                                    </div>
                                    <span>
                                        <Trans
                                            i18nKey="about:ourImpact.teachings.annotation"
                                            components={{ strong: <strong /> }}
                                        />
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    {/* <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white font-bold text-sm mr-3 mt-0.5">3</span> */}
                                    <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                                        3
                                    </div>
                                    <span>
                                        <Trans
                                            i18nKey="about:ourImpact.teachings.quality"
                                            components={{ strong: <strong /> }}
                                        />
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    {/* <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white font-bold text-sm mr-3 mt-0.5">4</span> */}
                                    <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                                        4
                                    </div>
                                    <span>
                                        <Trans
                                            i18nKey="about:ourImpact.teachings.project"
                                            components={{ strong: <strong /> }}
                                        />
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    {/* <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white font-bold text-sm mr-3 mt-0.5">5</span> */}
                                    <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                                        5
                                    </div>
                                    <span>
                                        <Trans
                                            i18nKey="about:ourImpact.teachings.workplace"
                                            components={{ strong: <strong /> }}
                                        />
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-3 md:order-4">
                            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">

                                <div className="flex items-center justify-center h-full bg-white">
                                    {/* <!-- Book with ladder icon (SVG) --> */}
                                    <div className="mr-4">
                                        <Image
                                            src="/images/icons/academy.png"
                                            alt="Label Ladder Academy"
                                            width={200}
                                            height={200}
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* <!-- Text "Label Ladder Academy" --> */}
                                    <div className="text-primary font-bold">
                                        <div className="text-3xl leading-tight">Label</div>
                                        <div className="text-3xl leading-tight">Ladder</div>
                                        <div className="text-3xl leading-tight">Academy</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Container>
            </section>


            {/* Team Section */}
            <section className="py-16" id="team">
                <Container>
                    <SectionHeading
                        title={t('team.title')}
                        subtitle={t('team.subtitle')}
                        centered
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
                        {team.map((member, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="relative aspect-square">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12.5vw"

                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                                    <p className="text-gray-600">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16">
                        <SectionHeading
                            title={t('team.labelers.title')}
                            subtitle={t('team.labelers.subtitle')}
                            centered
                        />

                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mt-12">
                            {labelers.map((labeler, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <div className="relative aspect-square">
                                        <Image
                                            src={labeler.image}
                                            alt={labeler.name}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
                                        />
                                    </div>
                                    <div className="p-2 text-center">
                                        <h4 className="font-medium text-primary">{labeler.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary text-white">
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
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'header', 'footer', 'about'])),
        },
    };
}