// components/SmoothScrollNavigation.jsx
import { useSmoothSnapScroll } from '../hooks/useSmoothSnapScroll';

const SmoothScrollNavigation = ({ sections, className = '' }) => {
  const { activeSection, isScrolling, scrollToSection } = useSmoothSnapScroll(
    sections.map(section => section.id),
    {
      threshold: 0.3, // Активная секция при 30% видимости
      snapThreshold: 120, // Snap при расстоянии меньше 120px
      animationDuration: 1000, // 1 секунда анимации
      easing: 'easeInOutCubic'
    }
  );

  return (
    <nav className={`fixed right-8 top-1/2 transform -translate-y-1/2 z-40 ${className}`}>
      <div className="flex flex-col space-y-3">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className={`
              group relative w-4 h-4 rounded-full border-2 transition-all duration-300
              ${activeSection === index 
                ? 'bg-secondary border-secondary scale-125' 
                : 'bg-transparent border-white hover:border-secondary hover:scale-110'
              }
              ${isScrolling ? 'animate-pulse' : ''}
            `}
            aria-label={`Scroll to ${section.name}`}
          >
            {/* Tooltip */}
            <span className="
              absolute right-8 top-1/2 transform -translate-y-1/2 
              bg-primary text-white px-3 py-1 rounded text-sm font-medium
              opacity-0 group-hover:opacity-100 transition-opacity duration-200
              whitespace-nowrap pointer-events-none
            ">
              {section.name}
            </span>
            
            {/* Active indicator */}
            {activeSection === index && (
              <span className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-25"></span>
            )}
          </button>
        ))}
      </div>
      
      {/* Progress indicator */}
      <div className="mt-6 w-0.5 h-20 bg-white/30 rounded-full overflow-hidden">
        <div 
          className="w-full bg-secondary transition-all duration-300 ease-out"
          style={{ 
            height: `${((activeSection + 1) / sections.length) * 100}%`,
            transform: isScrolling ? 'scaleY(1.1)' : 'scaleY(1)'
          }}
        />
      </div>
    </nav>
  );
};

export default SmoothScrollNavigation;