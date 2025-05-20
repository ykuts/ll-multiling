import Container from '../ui/Container';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

const AboutSection = () => {
  const features = [
    {
      title: "HIGH-QUALITY DATA SERVICES",
      description: "Quality control processes for in-house data labelers ensure accurate and high-quality processed data, avoiding common crowdsourcing inconsistency issues."
    },
    {
      title: "SKILLED TALENT POOL",
      description: "A group of trained and experienced annotators facilitating transformation of raw data to enable the proper functioning of machine-learning systems."
    },
    {
      title: "A VENTURE BUILT ON IMPACT",
      description: "Label Ladder is based on empowerment, where 1,000 Namibians are trained with digital skills, supporting economic development and youth employment."
    },
    {
      title: "COST-EFFECTIVE SERVICE",
      description: "Leveraging a specialized external provider reduces the overhead costs associated with hiring, training, and maintaining an in-house team."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title="About Label Ladder"
          subtitle="We are a Swiss-Namibian company with offices in Zürich and Windhoek."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md border-t-4 border-secondary">
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button href="/about" variant="primary" size="lg">
            Learn More About Us
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;