// hooks/useSmoothSnapScroll.js
import { useEffect, useRef, useState } from 'react';

export const useSmoothSnapScroll = (sections = [], options = {}) => {
  const {
    threshold = 0.5, // Когда считать секцию "активной"
    snapThreshold = 100, // Расстояние для автоматической фиксации
    animationDuration = 800, // Длительность анимации в мс
    easing = 'easeInOutCubic' // Тип анимации
  } = options;

  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const isAnimatingRef = useRef(false);

  // Функции анимации
  const easingFunctions = {
    easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    easeOutQuart: t => 1 - (--t) * t * t * t,
    easeInOutQuint: t => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t
  };

  // Плавная прокрутка к элементу
  const smoothScrollTo = (element, duration = animationDuration) => {
    if (!element || isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    const start = window.pageYOffset;
    const target = element.offsetTop - 80; // Учитываем высоту хедера
    const distance = target - start;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easingFunctions[easing](progress);
      
      window.scrollTo(0, start + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        isAnimatingRef.current = false;
      }
    };

    requestAnimationFrame(animateScroll);
  };

  // Определение ближайшей секции
  const findNearestSection = () => {
    const scrollTop = window.pageYOffset + window.innerHeight * threshold;
    let nearestSection = 0;
    let minDistance = Infinity;

    sections.forEach((sectionId, index) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementTop = element.offsetTop;
        const distance = Math.abs(scrollTop - elementTop);
        
        if (distance < minDistance) {
          minDistance = distance;
          nearestSection = index;
        }
      }
    });

    return nearestSection;
  };

  // Обработчик скролла
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking && !isAnimatingRef.current) {
        requestAnimationFrame(() => {
          setIsScrolling(true);
          
          // Определяем активную секцию
          const nearest = findNearestSection();
          setActiveSection(nearest);

          // Очищаем предыдущий таймаут
          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
          }

          // Устанавливаем таймаут для snap-эффекта
          scrollTimeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
            
            // Проверяем, нужно ли сделать snap
            const currentSection = sections[nearest];
            const element = document.getElementById(currentSection);
            
            if (element) {
              const elementTop = element.offsetTop - 80;
              const currentScroll = window.pageYOffset;
              const distance = Math.abs(currentScroll - elementTop);
              
              // Если расстояние меньше порога, делаем snap
              if (distance < snapThreshold) {
                smoothScrollTo(element, 600);
              }
            }
          }, 150); // Задержка перед snap

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [sections, snapThreshold, threshold]);

  // Функция для навигации к секции
  const scrollToSection = (sectionIndex) => {
    if (sectionIndex >= 0 && sectionIndex < sections.length) {
      const element = document.getElementById(sections[sectionIndex]);
      if (element) {
        smoothScrollTo(element);
        setActiveSection(sectionIndex);
      }
    }
  };

  return {
    activeSection,
    isScrolling,
    scrollToSection
  };
};