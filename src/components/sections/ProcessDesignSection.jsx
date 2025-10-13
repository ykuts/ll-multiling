import { useEffect, useRef } from 'react';
import Container from "../ui/Container";
import Image from "next/image";
import { Trans, useTranslation } from "next-i18next";

const ProcessDesignSection = () => {
  const { t } = useTranslation('approach');
  const cardsRef = useRef([]);

  useEffect(() => {
    // Выравниваем высоту всех карточек после рендера
    const alignCardHeights = () => {
      if (cardsRef.current.length > 0 && window.innerWidth >= 1024) { // только на desktop
        // Сбрасываем минимальную высоту
        cardsRef.current.forEach(card => {
          if (card) card.style.minHeight = 'auto';
        });

        // Получаем максимальную высоту
        const heights = cardsRef.current.map(card => card?.offsetHeight || 0);
        const maxHeight = Math.max(...heights);

        // Устанавливаем одинаковую высоту для всех
        cardsRef.current.forEach(card => {
          if (card) card.style.minHeight = `${maxHeight}px`;
        });
      } else {
        // На мобильных сбрасываем высоту
        cardsRef.current.forEach(card => {
          if (card) card.style.minHeight = 'auto';
        });
      }
    };

    // Выравниваем при загрузке и смене языка
    alignCardHeights();

    // Выравниваем при изменении размера окна
    window.addEventListener('resize', alignCardHeights);

    return () => {
      window.removeEventListener('resize', alignCardHeights);
    };
  }, [t]); // пересчитываем при смене языка

  return (
    <section className="py-16 bg-primary text-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('processDesign.title')}
          </h2>
          <p className="text-xl text-accent max-w-3xl mx-auto">
            {t('processDesign.subtitle')}
          </p>
        </div>

        {/* Process Flow */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4">

          {/* Step 1: Needs Assessment */}
          <div 
            ref={el => cardsRef.current[0] = el}
            className="bg-white text-primary rounded-lg p-4 w-full lg:w-72 relative flex flex-col"
          >
            <div className="text-center mb-3">
              <h3 className="text-xl lg:text-base font-bold text-primary mb-1">{t('processDesign.needsAssessment.title1')}</h3>
              <h3 className="text-xl lg:text-base font-bold text-primary">{t('processDesign.needsAssessment.title2')}</h3>
            </div>

            <p className="text-base lg:text-xs mb-3">
              {t('processDesign.needsAssessment.description')}
            </p>

            <ul className="text-base lg:text-xs space-y-1 flex-grow">
              <li>• <Trans
                i18nKey="processDesign.needsAssessment.items.purpose"
                ns="approach"
                components={{ strong: <strong /> }}
              /></li>
              <li>• <Trans
                i18nKey="processDesign.needsAssessment.items.methods"
                ns="approach"
                components={{ strong: <strong /> }}
              /></li>
              <li>• <Trans
                i18nKey="processDesign.needsAssessment.items.gaps"
                ns="approach"
                components={{ strong: <strong /> }}
              /></li>
            </ul>
          </div>

          {/* Arrow 1 */}
          <div className="hidden lg:block">
            <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <div className="lg:hidden flex flex-col items-center space-y-4">
            <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6 text-white transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Step 2: Custom Annotation Design */}
          <div 
            ref={el => cardsRef.current[1] = el}
            className="bg-white text-primary rounded-lg p-4 w-full lg:w-72 relative flex flex-col"
          >
            <div className="text-center mb-3">
              <h3 className="text-xl lg:text-base font-bold text-primary mb-0.5">{t('processDesign.customDesign.title1')}</h3>
              <h3 className="text-xl lg:text-base font-bold text-primary mb-0.5">{t('processDesign.customDesign.title2')}</h3>
              <h3 className="text-xl lg:text-base font-bold text-primary">{t('processDesign.customDesign.title3')}</h3>
            </div>

            <p className="text-base lg:text-xs mb-3">
              {t('processDesign.customDesign.description')}
            </p>

            <ul className="text-base lg:text-xs space-y-1 flex-grow">
              <li>• <Trans
                i18nKey="processDesign.customDesign.items.workflows"
                ns="approach"
                components={{ strong: <strong /> }}
              /></li>
              <li>• <Trans
                i18nKey="processDesign.customDesign.items.quality"
                ns="approach"
                components={{ strong: <strong /> }}
              /></li>
              <li>• <Trans
                i18nKey="processDesign.customDesign.items.scalable"
                ns="approach"
                components={{ strong: <strong /> }}
              /></li>
            </ul>
          </div>

          {/* Arrow 2 */}
          <div className="hidden lg:block">
            <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <div className="lg:hidden flex flex-col items-center space-y-4">
            <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6 text-white transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Step 3: Future-Proofed Data Architecture */}
          <div 
            ref={el => cardsRef.current[2] = el}
            className="bg-white text-primary rounded-lg p-4 w-full lg:w-72 relative flex flex-col"
          >
            <div className="text-center mb-3">
              <h3 className="text-xl lg:text-base font-bold text-primary mb-0.5">{t('processDesign.architecture.title1')}</h3>
              <h3 className="text-xl lg:text-base font-bold text-primary mb-0.5">{t('processDesign.architecture.title2')}</h3>
              <h3 className="text-xl lg:text-base font-bold text-primary">{t('processDesign.architecture.title3')}</h3>
            </div>

            <p className="text-base lg:text-xs mb-3">
              {t('processDesign.architecture.description')}
            </p>

            <ul className="text-base lg:text-xs space-y-1 flex-grow">
              <li>• <Trans i18nKey="processDesign.architecture.items.integrates" ns="approach" components={{ strong: <strong /> }} /></li>
              <li>• <Trans i18nKey="processDesign.architecture.items.supports" ns="approach" components={{ strong: <strong /> }} /></li>
              <li>• <Trans i18nKey="processDesign.architecture.items.reduces" ns="approach" components={{ strong: <strong /> }} /></li>
            </ul>
          </div>

          {/* Arrow 3 */}
          <div className="hidden lg:block">
            <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <div className="lg:hidden flex flex-col items-center space-y-4">
            <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6 text-white transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Step 4: Human in the Loop */}
          <div 
            ref={el => cardsRef.current[3] = el}
            className="bg-white text-primary rounded-lg p-4 w-full lg:w-72 relative flex flex-col"
          >
            <div className="text-center mb-3">
              <h3 className="text-xl lg:text-base font-bold text-primary mb-0.5">{t('processDesign.humanInLoop.title1')}</h3>
              <h3 className="text-xl lg:text-base font-bold text-primary mb-0.5">{t('processDesign.humanInLoop.title2')}</h3>
              <h3 className="text-xl lg:text-base font-bold text-primary">{t('processDesign.humanInLoop.title3')}</h3>
            </div>

            <p className="text-base lg:text-xs mb-3">
              {t('processDesign.humanInLoop.description')}
            </p>

            <ul className="text-base lg:text-xs space-y-1 flex-grow">
              <li>• <Trans i18nKey="processDesign.humanInLoop.items.skilled" ns="approach" components={{ strong: <strong /> }} /></li>
              <li>• <Trans i18nKey="processDesign.humanInLoop.items.supported" ns="approach" components={{ strong: <strong /> }} /></li>
              <li>• <Trans i18nKey="processDesign.humanInLoop.items.improving" ns="approach" components={{ strong: <strong /> }} /></li>
            </ul>
          </div>

          {/* Arrow 4 */}
          <div className="hidden lg:block">
            <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <div className="lg:hidden flex flex-col items-center space-y-4">
            <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6 text-white transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Final Result */}
          <div 
            ref={el => cardsRef.current[4] = el}
            className="bg-primary border-4 border-white rounded-lg p-4 w-full lg:w-72 relative flex flex-col"
          >
            <div className="text-center mb-4">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Image
                  src="/images/icons/result.png"
                  alt="Result Icon"
                  width={64}
                  height={64}
                  className="text-primary"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('processDesign.results.title')}</h3>
            </div>

            <div className="text-center flex-grow flex flex-col justify-center">
              <p className="text-accent text-base lg:text-xs font-medium leading-relaxed">
                <Trans i18nKey="processDesign.results.description" ns="approach" components={{ strong: <strong className="text-white" /> }} />
              </p>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default ProcessDesignSection;