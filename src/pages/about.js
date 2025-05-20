import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import Image from 'next/image';

export default function About() {
  // Team data
  const team = [
    {
      name: 'Lorenzo Olivi',
      role: 'Co-founder & CEO',
      image: '/images/team/lorenzo.png',
    },
    {
      name: 'Marion Schleifer',
      role: 'Co-founder & CTO',
      image: '/images/team/marion.png',
    },
    {
      name: 'Natasha Bassingthwaighte',
      role: 'Project Oversight',
      image: '/images/team/natasha.png',
    },
    {
      name: 'Klaudia Iita',
      role: 'Operations',
      image: '/images/team/klaudia.png',
    },
  ];

  const labelers = [
    { name: 'Lavinia', image: '/images/team/lavinia.png' },
    { name: 'Paulus', image: '/images/team/paulus.png' },
    { name: 'Lucien', image: '/images/team/lucien.png' },
    { name: 'Marizungiruaije', image: '/images/team/marizungiruaije.png' },
    { name: 'Racheal', image: '/images/team/racheal.png' },
    { name: 'Almando', image: '/images/team/almando.png' },
    { name: 'Silver', image: '/images/team/silver.png' },
    { name: 'Elvino', image: '/images/team/elvino.png' },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Label Ladder
            </h1>
            <p className="text-xl mb-8 text-accent">
              We provide end-to-end data processing and annotation services — not just to label your data, but to transform it into a powerful asset.
            </p>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Who We Are"
                subtitle="Label Ladder is a Swiss-Namibian company with offices in Zürich and Windhoek."
              />
              <p className="text-gray-600 mb-6">
                Whether you're training AI models or managing complex datasets, our solutions are built to reduce operational costs, enhance data quality and usability, and enable faster, insight-driven decisions.
              </p>
              <p className="text-gray-600 mb-6">
                We combine Swiss precision and data excellence with Namibian talent and agility to deliver high-quality, scalable data solutions that are both globally competitive and locally grounded.
              </p>
              <p className="text-gray-600">
                Let us help you unlock the full potential of your data — with precision, purpose, and long-term impact.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/about/office.jpg" 
                alt="Label Ladder Office" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
      
      {/* Our Impact Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading
            title="Our Impact"
            subtitle="We are on a mission to upskill 1,000 Namibians by 2027, providing them with the necessary tools and knowledge to work in the data and AI industries."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
            <div className="order-2 md:order-1">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/images/about/impact.jpg" 
                  alt="Label Ladder Academy" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Label Ladder Academy
              </h3>
              <p className="text-gray-600 mb-6">
                Our project is supported by the Namibian Ministry of Information, Communication & Technology, and the Ministry of Sport, Youth and National Service.
              </p>
              <p className="text-gray-600 mb-6">
                Through our Label Ladder Academy program, we guarantee our employees a pathway to growth and employability in a globally competitive industry.
              </p>
              
              <h4 className="text-xl font-bold text-primary mb-4 mt-8">
                Core Teachings of the Academy:
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-white font-bold text-sm mr-3 mt-0.5">1</span>
                  <span>Intro to Data Work: Learn the basics of data annotation, digital tools, and working in tech</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-white font-bold text-sm mr-3 mt-0.5">2</span>
                  <span>Annotation Skills Training: Get hands-on with real data — images, text, audio, and video — using industry tools</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-white font-bold text-sm mr-3 mt-0.5">3</span>
                  <span>Quality & Review Certification: Train to become a quality checker or team lead with advanced annotation skills</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-white font-bold text-sm mr-3 mt-0.5">4</span>
                  <span>Project & Tech Skills: Learn how to manage data projects, use dashboards, and communicate with global teams</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-white font-bold text-sm mr-3 mt-0.5">5</span>
                  <span>Workplace Readiness & Soft Skills: Build confidence in communication, teamwork, time management, and professionalism</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Our Challenge Section */}
      <section className="py-16">
        <Container>
          <SectionHeading
            title="Your Challenge"
            subtitle="Organizations that make data-driven decisions or use machine-learning models face various challenges."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">Time</h3>
              <p className="text-gray-600">
                Project time spent on data preparation often delays projects or reduces overall productivity.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">Quality</h3>
              <p className="text-gray-600">
                Low-quality and misleading data leads to inaccurate predictions, unreliable models and financial losses.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">Costs</h3>
              <p className="text-gray-600">
                Managing in-house data processing, labelling and annotation is costly and time-consuming.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">Scalability</h3>
              <p className="text-gray-600">
                Some projects require rapid scaling, while others may need specialized annotations for niche applications.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">Integration</h3>
              <p className="text-gray-600">
                Integrating data with existing AI/ML workflows or pipelines can create process and technical bottlenecks.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Our Solution Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading
            title="Our Solution"
            subtitle="Label Ladder addresses these challenges through our unique approach and services."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-secondary">
              <h3 className="text-xl font-bold text-primary mb-3">Speed</h3>
              <p className="text-gray-600">
                We deploy trained teams quickly and deliver results fast — without compromising quality.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-secondary">
              <h3 className="text-xl font-bold text-primary mb-3">Scale</h3>
              <p className="text-gray-600">
                From pilot to enterprise volumes, our model adapts seamlessly to your evolving data needs.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-secondary">
              <h3 className="text-xl font-bold text-primary mb-3">Savings</h3>
              <p className="text-gray-600">
                We offer cost-effective services by combining smart design with high-quality local talent.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-secondary">
              <h3 className="text-xl font-bold text-primary mb-3">Efficiency</h3>
              <p className="text-gray-600">
                Our optimized workflows reduce friction, eliminate rework, and accelerate your data readiness.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-secondary">
              <h3 className="text-xl font-bold text-primary mb-3">Reliability</h3>
              <p className="text-gray-600">
                Swiss standards ensure consistent accuracy, data security, and dependable delivery every time.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <Container>
          <SectionHeading
            title="Meet the Team"
            subtitle="Well-rounded leaders and technologists, driven by a mission to empower our clients' data."
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <SectionHeading
              title="Our Labelers"
              subtitle="A dynamic and diverse group of data labelers and processors to deliver our mission."
              centered
            />
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mt-12">
              {labelers.map((labeler, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-32">
                    <Image 
                      src={labeler.image} 
                      alt={labeler.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-2 text-center">
                    <h3 className="font-medium text-primary">{labeler.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to work with us?
            </h2>
            <p className="text-xl mb-8 text-accent">
              Contact us today to learn more about how Label Ladder can help with your data annotation and processing needs.
            </p>
            <Button href="/contact" variant="white" size="lg">
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}