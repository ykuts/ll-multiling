import Container from '../ui/Container';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CredentialsSection = () => {
  const { t } = useTranslation('home', 'credentials');
  const [activeCategory, setActiveCategory] = useState('all');
  const [swiperKey, setSwiperKey] = useState(0);

  const categories = [
    { id: 'all', name: 'Alle' },
    { id: 'software', name: 'Software & IT' },
    { id: 'automotive', name: 'Automotive / Mobilität' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'impact', name: 'Social Impact / Nachhaltigkeit' }
  ];

  const cases = [
    {
      company: "Adaire",
      category: 'software',
      industry: "Software Development",
      project: "Projektmanagement-Datenmigration",
      description: "Wir stellten sicher, dass beim Umstieg auf ein neues Tool die Daten vollständig und korrekt übertragen wurden.",
      logo: "/images/credentials/adaire.png"
    },
    {
      company: "Digital Divine Data",
      category: 'automotive',
      industry: "Automotive / Mobilität",
      project: "Autonomes Fahren",
      description: "Bilder für KI-Systeme präzise aufbereitet, damit Fahrzeuge Objekte zuverlässig erkennen.",
      logo: "/images/credentials/ddd.webp"
    },
    {
      company: "Ambulanzpartner",
      category: 'healthcare',
      industry: "Healthcare",
      project: "Gesundheitsdatenverarbeitung",
      description: "Patientendaten bereinigt und strukturiert, um eine bessere Versorgung zu ermöglichen.",
      logo: "/images/credentials/ambulanzpartner.webp"
    },
    {
      company: "Impact Tank",
      category: 'impact',
      industry: "Social Impact / Nachhaltigkeit",
      project: "Umweltschutz",
      description: "Datenpipeline für Wildtier-Monitoring aufgebaut, damit Umwelteinflüsse in Echtzeit gemessen werden können.",
      logo: "/images/credentials/impact-tank-logo.png"
    }
  ];

  const filteredCases = activeCategory === 'all' 
    ? cases 
    : cases.filter(c => c.category === activeCategory);

  // Пересоздаем Swiper при смене категории
  useEffect(() => {
    setSwiperKey(prev => prev + 1);
  }, [activeCategory]);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionHeading
          title={t('credentials.title')}
          subtitle={t('credentials.subtitle')}
          centered
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-12 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Cases Swiper with Side Arrows */}
        <div className="relative max-w-7xl mx-auto">
          {/* Left Arrow */}
          <button className="swiper-button-prev-custom absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Swiper */}
          <div className="px-2 md:px-0">
            <Swiper
              key={swiperKey}
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{ 
                clickable: true,
                el: '.swiper-pagination-custom'
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              className="pb-12"
            >
              {filteredCases.map((caseStudy, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col">
                    {/* Logo and Company */}
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 relative mr-4 flex-shrink-0 bg-gray-50 rounded-lg p-1">
                        <Image 
                          src={caseStudy.logo} 
                          alt={`${caseStudy.company} Logo`} 
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary">{caseStudy.company}</h3>
                        <p className="text-xs text-gray-500">{caseStudy.industry}</p>
                      </div>
                    </div>

                    {/* Project Title */}
                    <h4 className="font-semibold text-secondary mb-3 text-base">
                      {caseStudy.project}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                      {caseStudy.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination */}
            <div className="swiper-pagination-custom flex justify-center gap-2 mt-4"></div>
          </div>

          {/* Right Arrow */}
          <button className="swiper-button-next-custom absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
                
        <div className="mt-12 text-center">
          <Button href="/credentials/" variant="primary" size="lg">
            Mehr Erfolgsgeschichten entdecken
          </Button>
        </div>
      </Container>

      <style jsx global>{`
        .swiper-slide {
          height: auto;
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: var(--color-primary, #003366);
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default CredentialsSection;