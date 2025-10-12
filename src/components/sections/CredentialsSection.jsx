import Container from '../ui/Container';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const CredentialsSection = () => {
  const { t } = useTranslation('home', 'credentials');

  const cases = [
    {
      company: "Adaire",
      project: t('cases.adaire.project', { ns: 'credentials' }),
      who: t('cases.adaire.who', { ns: 'credentials' }),
      what: t('cases.adaire.what', { ns: 'credentials' }),
      how: t('cases.adaire.how', { ns: 'credentials' }),
      logo: "/images/credentials/adaire.png",
      industry: "Software Development",
      duration: "2 weeks",
      dataVolume: "5,000+ records",
      challenge: t('cases.adaire.challenge', { ns: 'credentials' }),
      solution: t('cases.adaire.solution', { ns: 'credentials' }),
      outcome: t('cases.adaire.outcome', { ns: 'credentials' })
    },
    {
      company: "Digital Divine Data",
      project: t('cases.ddd.project', { ns: 'credentials' }),
      who: t('cases.ddd.who', { ns: 'credentials' }),
      what: t('cases.ddd.what', { ns: 'credentials' }),
      how: t('cases.ddd.how', { ns: 'credentials' }),
      logo: "/images/credentials/ddd.webp",
      industry: "Data Annotation",
      duration: "2 weeks",
      dataVolume: "200+ Records",
      challenge: t('cases.ddd.challenge', { ns: 'credentials' }),
      solution: t('cases.ddd.solution', { ns: 'credentials' }),
      outcome: t('cases.ddd.outcome', { ns: 'credentials' })
    },
    {
      company: "Ambulanzpartner",
      project: t('cases.ambulanzpartner.project', { ns: 'credentials' }),
      who: t('cases.ambulanzpartner.who', { ns: 'credentials' }),
      what: t('cases.ambulanzpartner.what', { ns: 'credentials' }),
      how: t('cases.ambulanzpartner.how', { ns: 'credentials' }),
      logo: "/images/credentials/ambulanzpartner.webp",
      industry: "Healthcare",
      duration: "2 weeks",
      dataVolume: "10,000+ records",
      challenge: t('cases.ambulanzpartner.challenge', { ns: 'credentials' }),
      solution: t('cases.ambulanzpartner.solution', { ns: 'credentials' }),
      outcome: t('cases.ambulanzpartner.outcome', { ns: 'credentials' })
    },

    {
      company: "Impact Tank",
      project: t('cases.impactTank.project', { ns: 'credentials' }),
      who: t('cases.impactTank.who', { ns: 'credentials' }),
      what: t('cases.impactTank.what', { ns: 'credentials' }),
      how: t('cases.impactTank.how', { ns: 'credentials' }),
      logo: "/images/credentials/impact-tank-logo.png",
      industry: "Social Impact/Conservation",
      duration: "6 weeks",
      dataVolume: "Environmental monitoring data streams",
      challenge: t('cases.impactTank.challenge', { ns: 'credentials' }),
      solution: t('cases.impactTank.solution', { ns: 'credentials' }),
      outcome: t('cases.impactTank.outcome', { ns: 'credentials' })
    } ,
    /* {
      company: "Nedbank",
      project: "Client Data Validation & Migration",
      who: "Nedbank is one of the four largest banks in southern Africa, serving 7 million retail and wholesale clients.",
      what: "A new version of their retail client banking & payment application was developed. All migrated client data had to be cleansed.",
      how: "Label Ladder's team was trained as subject matter experts and used TestFlight to test the mobile iOS application.",
      logo: "/images/credentials/nedbank-logo.jpg",
      industry: "Banking & Finance",
      duration: "6 weeks",
      dataVolume: "7M+ client records"
    } */
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionHeading
          title={t('credentials.title')}
          subtitle={t('credentials.subtitle')}
          centered
        />

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {cases.map((caseStudy, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Header with Logo and Company Info */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 relative mr-4 flex-shrink-0">
                    <Image 
                      src={caseStudy.logo} 
                      alt={`${caseStudy.company} Logo`} 
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary transition-colors">
                      {caseStudy.company}
                    </h3>
                    <p className="text-sm text-gray-500">{caseStudy.industry}</p>
                  </div>
                </div>
                <h4 className="font-semibold text-secondary mb-2">{caseStudy.project}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {caseStudy.what}
                </p>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {/* <div className="text-left">
                    <div className="text-lg font-bold text-primary">{caseStudy.duration}</div>
                    <div className="text-xs text-gray-500">{t('credentials.cases.duration')}</div>
                  </div> */}

                  <div className="text-left">
                    <div className="text-lg font-bold text-primary">{t('credentials.cases.challenge')}</div>
                    <div className="text-xs text-gray-500">{caseStudy.challenge}</div>
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-bold text-primary">{t('credentials.cases.solution')}</div>
                    <div className="text-xs text-gray-500">{caseStudy.solution}</div>
                  </div>
                  {/* <div className="text-left">
                    <div className="text-lg font-bold text-primary">{t('credentials.cases.outcome')}</div>
                    <div className="text-xs text-gray-500">{caseStudy.outcome}</div>
                  </div> */}
                </div>
                
                
                
              </div>
            </div>
          ))}
        </div>
        
                
        <div className="mt-12 text-center">
          <Button href="/credentials/" variant="primary" size="lg">
            {t('credentials.cta')}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CredentialsSection;