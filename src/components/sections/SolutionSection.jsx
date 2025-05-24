import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Image from 'next/image';

const SolutionSection = () => {
  const solutions = [
    {
      title: "SPEED",
      description: "We deploy trained teams quickly and deliver results fast — without compromising quality.",
      icon: "/images/icons/speed.png"
    },
    {
      title: "SCALE",
      description: "From pilot to enterprise volumes, our model adapts seamlessly to your evolving data needs.",
      icon: "/images/icons/scale.png"
    },
    {
      title: "SAVINGS",
      description: "We offer cost-effective services by combining smart design with high-quality local talent.",
      icon: "/images/icons/savings.png"
    },
    {
      title: "EFFICIENCY",
      description: "Our optimized workflows reduce friction, eliminate rework, and accelerate your data readiness.",
      icon: "/images/icons/efficiency.png"
    },
    {
      title: "RELIABILITY",
      description: "Swiss standards ensure consistent accuracy, data security, and dependable delivery every time.", 
      icon: "/images/icons/reliability.png"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionHeading
          title="Our Solution"
          subtitle="WE COMBINE SWISS PRECISION AND DATA EXCELLENCE WITH NAMIBIAN TALENT AND AGILITY TO DELIVER HIGH-QUALITY, SCALABLE DATA SOLUTIONS THAT ARE BOTH GLOBALLY COMPETITIVE AND LOCALLY GROUNDED"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-primary group"
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={solution.icon}
                    alt={`${solution.title} Icon`}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-3 text-center">{solution.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SolutionSection;