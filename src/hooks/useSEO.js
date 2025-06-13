import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const useSEO = () => {
  const router = useRouter();
  const [pageViews, setPageViews] = useState(0);
  const [isBot, setIsBot] = useState(false);

  useEffect(() => {
    // Determine if the visitor is a bot
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

    // Increment the page view counter
    setPageViews(prev => prev + 1);
  }, [router.asPath]);

  // Function to send custom events
  const trackCustomEvent = (eventName, properties = {}) => {
    if (typeof window !== 'undefined' && window.gtag && !isBot) {
      window.gtag('event', eventName, properties);
    }
  };

  // Function to track time on page
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

  // Function to track scroll
  const trackScrollDepth = () => {
    let maxScroll = 0;
    
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Send events at key points
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