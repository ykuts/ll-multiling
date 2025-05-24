import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Image from 'next/image';

const ChallengeSection = () => {
  const challenges = [
    {
      title: "TIME",
      description: "Project time spent on data preparation often delays projects or reduces overall productivity.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: "QUALITY",
      description: "Low-quality and misleading data leads to inaccurate predictions, unreliable models and financial losses.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "COSTS",
      description: "Managing in-house data processing, labelling and annotation is costly and time-consuming.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
          <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: "SCALABILITY",
      description: "Some projects require rapid scaling, while others may need specialized annotations for niche applications.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
          <polyline points="3.27,6.96 12,12.01 20.73,6.96" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: "INTEGRATION",
      description: "Integrating data with existing AI/ML workflows or pipelines can create process and technical bottlenecks.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
          <path d="M8 2v4" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 2v4" stroke="currentColor" strokeWidth="2"/>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 10h18" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 14h.01" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 14h.01" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 14h.01" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 18h.01" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 18h.01" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 18h.01" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Your Challenge"
          subtitle="Organizations that make data-driven decisions or use machine-learning models face various challenges."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
          {challenges.map((challenge, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-primary group"
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <div className="bg-primary/90 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                        {challenge.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-3 text-center">{challenge.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ChallengeSection;