import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const ChallengeSection = () => {
  const challenges = [
    {
      title: "TIME",
      description: "Project time spent on data preparation often delays projects or reduces overall productivity."
    },
    {
      title: "QUALITY",
      description: "Low-quality and misleading data leads to inaccurate predictions, unreliable models and financial losses."
    },
    {
      title: "COSTS",
      description: "Managing in-house data processing, labelling and annotation is costly and time-consuming."
    },
    {
      title: "SCALABILITY",
      description: "Some projects require rapid scaling, while others may need specialized annotations for niche applications."
    },
    {
      title: "INTEGRATION",
      description: "Integrating data with existing AI/ML workflows or pipelines can create process and technical bottlenecks."
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
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">{challenge.title}</h3>
              <p className="text-gray-600">
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