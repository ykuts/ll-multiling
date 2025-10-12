import { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const HeroSection = () => {
  const parallaxRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { t } = useTranslation('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Parallax effect calculation
  const parallaxOffset = scrollPosition * 0.4; // Adjust the effect speed here

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 md:py-32 text-white overflow-hidden">
      {/* Background Image with Overlay and Parallax */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          height: `calc(100% + ${parallaxOffset}px)`,
          top: `-${parallaxOffset}px`
        }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-80"></div> {/* Overlay - можно регулировать прозрачность */}
        <Image
          src="/images/hero/hero.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <Container>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-6">
            <div className="relative h-56 w-56 mx-auto">
              <Image
                src="/images/logo-white.png"
                alt="Label Ladder Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Brand Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wide">
            {t('hero.brandName')}
          </h1>

          {/* Main Tagline */}
          <h2 className="text-2xl md:text-4xl mb-4 text-white font-bold leading-tight">
            {t('hero.tagline1')}<br />
            {t('hero.tagline2')}
          </h2>

          {/* Supporting Messages */}
          <div className="space-y-3 mb-8 max-w-5xl mx-auto">
            <p className="text-lg md:text-xl text-accent font-medium">
              {t('hero.subtitle1')}
            </p>
            <p className="text-lg md:text-xl text-white/90">
              {t('hero.subtitle2')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/services/" variant="secondary" size="lg" className="w-48 sm:w-auto">
              {t('hero.btnServices')}
            </Button>
            <Button href="/contact/" variant="outline" size="lg" className="text-white border-white hover:bg-white/10 w-48 sm:w-auto">
              {t('hero.btnContact')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;