import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const SolutionSection = () => {
  const solutions = [
    {
      title: "SPEED",
      description: "We deploy trained teams quickly and deliver results fast — without compromising quality."
    },
    {
      title: "SCALE",
      description: "From pilot to enterprise volumes, our model adapts seamlessly to your evolving data needs."
    },
    {
      title: "SAVINGS",
      description: "We offer cost-effective services by combining smart design with high-quality local talent."
    },
    {
      title: "EFFICIENCY",
      description: "Our optimized workflows reduce friction, eliminate rework, and accelerate your data readiness."
    },
    {
      title: "RELIABILITY",
      description: "Swiss standards ensure consistent accuracy, data security, and dependable delivery every time."
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
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">{solution.title}</h3>
              <p className="text-gray-600">
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