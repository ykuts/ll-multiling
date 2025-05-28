import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const useSEO = () => {
  const router = useRouter();
  const [pageViews, setPageViews] = useState(0);
  const [isBot, setIsBot] = useState(false);

  useEffect(() => {
    // Определяем, является ли посетитель ботом
    const userAgent = navigator.userAgent.toLowerCase();
    const botPatterns = [
      'googlebot', 'bingbot', 'slurp', 'duckduckbot', 
      'baiduspider', 'yandexbot', 'facebookexternalhit',
      'twitterbot', 'linkedinbot', 'whatsapp'
    ];
    
    const isBotDetected = botPatterns.some(pattern => 
      userAgent.includes(pattern)
    );
    setIsBot(isBotDetected);

    // Увеличиваем счетчик просмотров страницы
    setPageViews(prev => prev + 1);
  }, [router.asPath]);

  // Функция для отправки пользовательских событий
  const trackCustomEvent = (eventName, properties = {}) => {
    if (typeof window !== 'undefined' && window.gtag && !isBot) {
      window.gtag('event', eventName, properties);
    }
  };

  // Функция для отслеживания времени на странице
  const trackTimeOnPage = () => {
    const startTime = Date.now();
    
    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackCustomEvent('time_on_page', {
        value: timeSpent,
        page_path: router.asPath
      });
    };
  };

  // Функция для отслеживания скролла
  const trackScrollDepth = () => {
    let maxScroll = 0;
    
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Отправляем события на ключевых точках
        if ([25, 50, 75, 90].includes(scrollPercent)) {
          trackCustomEvent('scroll_depth', {
            scroll_depth: scrollPercent,
            page_path: router.asPath
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  };

  return {
    pageViews,
    isBot,
    trackCustomEvent,
    trackTimeOnPage,
    trackScrollDepth
  };
};