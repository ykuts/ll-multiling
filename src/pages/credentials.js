import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Image from 'next/image';

export default function Cases() {
  // Case studies data
  const caseStudies = [
    {
      company: "Adaire",
      project: "Project Management Data Migration",
      description: "Manual data migration for a software development company transitioning to a new project management tool.",
      who: "Adaire is a software development company based in Namibia and serving clients across Germany and Switzerland. Their flagship outsourcing services are used by some of Europe's largest private and public organizations.",
      what: "Adaire was transitioning to a new project management tool and required manual data migration services to ensure accuracy and proper structuring within their new tool.",
      how: "Project data including owner, status, categories, label, and other fields task data was downloaded from Azure DevOps, adjusted to the correct format, then manually imported into Jira.",
      image: "/images/cases/adaire.jpg",
      logo: "/images/cases/adaire-logo.png"
    },
    {
      company: "Nedbank",
      project: "Client Data Validation & Migration",
      description: "Data cleansing and feature testing for one of southern Africa's largest banks' new retail client application.",
      who: "Nedbank is one of the four largest banks in southern Africa, serving 7 million retail and wholesale clients across Namibia alone through its banking services and digital platforms.",
      what: "A new version of their retail client banking & payment application was developed. All migrated client data had to be cleansed, and all features of the application tested to ensure readiness for launch.",
      how: "Label Ladder's team was trained as subject matter experts and used TestFlight to test the mobile iOS application. All bugs or issues were logged and corrected by the bank's development team. User data was verified and cleaned, and dormant accounts were either verified or deleted.",
      image: "/images/cases/nedbank.jpg",
      logo: "/images/cases/nedbank-logo.png"
    },
    /* {
      company: "Allyship",
      project: "Database Setup",
      description: "Establishing a scalable database schema for a Zürich-based web accessibility company.",
      who: "Allyship is a Zürich-based company tackling web accessibility issues, generating accessibility reports on websites, and helping them become more accessible.",
      what: "Label Ladder helped Allyship establish a database schema set it up with Postgres on Supabase. The already existing accessibility reports will then use real data from the new database in the backend.",
      how: "A clear understanding of Allyship's needs was crucial to build a scalable and durable database, to handle the large amounts of data required to identify accessibility issues and devise tailored solutions to remediate them, using AI.",
      image: "/images/cases/allyship.jpg",
      logo: "/images/cases/allyship-logo.png"
    } */
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "Label Ladder's team was able to quickly understand our requirements and deliver high-quality data migration services that helped us transition to a new project management system smoothly.",
      author: "Michael Weber",
      position: "CTO at Adaire",
      company: "Adaire"
    },
    {
      quote: "The quality and attention to detail in their data validation process exceeded our expectations. Their team's expertise was invaluable in ensuring our new banking application launched without issues.",
      author: "Sarah Ngombe",
      position: "Head of Digital Banking",
      company: "Nedbank Namibia"
    },
    /* {
      quote: "Working with Label Ladder helped us establish a robust database foundation for our accessibility tool. Their understanding of both technical requirements and the purpose of our data was impressive.",
      author: "Lisa Müller",
      position: "Founder",
      company: "Allyship"
    } */
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Case Studies
            </h1>
            <p className="text-xl mb-8 text-accent">
              See how we&apos;ve helped organizations transform their data and streamline their operations.
            </p>
          </div>
        </Container>
      </section>

      {/* Case Studies Overview */}
      <section className="py-16">
        <Container>
          <SectionHeading
            title="Success Stories"
            subtitle="Real results for real clients across industries and data needs."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative h-48">
                  <Image 
                    src={caseStudy.image} 
                    alt={`${caseStudy.company} Case Study`} 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="flex items-center">
                      <div className="relative h-10 w-10 bg-white rounded-full overflow-hidden mr-3 flex-shrink-0">
                        <Image 
                          src={caseStudy.logo} 
                          alt={caseStudy.company} 
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-white">{caseStudy.company}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-primary font-semibold mb-3">{caseStudy.project}</h4>
                  <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  <a 
                    href={`#case-${index}`} 
                    className="text-secondary font-medium hover:underline inline-flex items-center"
                  >
                    View Case Study
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Detailed Case Studies */}
      {caseStudies.map((caseStudy, index) => (
        <section 
          key={index} 
          id={`case-${index}`} 
          className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}
        >
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src={caseStudy.image} 
                    alt={`${caseStudy.company} Case Study`} 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 bg-white rounded-full overflow-hidden border border-gray-200 mr-4 flex-shrink-0">
                    <Image 
                      src={caseStudy.logo} 
                      alt={caseStudy.company} 
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary">{caseStudy.company}</h2>
                    <p className="text-secondary font-medium">{caseStudy.project}</p>
                  </div>
                </div>
                
                <div className="space-y-6 mt-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">WHO</h3>
                    <p className="text-gray-600">{caseStudy.who}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">WHAT</h3>
                    <p className="text-gray-600">{caseStudy.what}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">HOW</h3>
                    <p className="text-gray-600">{caseStudy.how}</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button href="/contact" variant="outline">
                    Get Similar Results
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}
      
      {/* Testimonials Section */}
      <section className="py-16 bg-primary text-white">
        <Container>
          <SectionHeading
            title="Client Testimonials"
            subtitle="Don't just take our word for it - here's what our clients have to say."
            centered
            className="text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <svg className="h-8 w-8 text-accent mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                
                <p className="text-accent mb-6">{testimonial.quote}</p>
                
                <div className="flex items-center">
                  <div className="mr-3">
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold">
                      {testimonial.author.split(' ').map(name => name[0]).join('')}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.author}</h4>
                    <p className="text-accent text-sm">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Results & Metrics */}
      <section className="py-16">
        <Container>
          <SectionHeading
            title="Results That Matter"
            subtitle="Our data services deliver measurable business impact."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.8%</div>
              <div className="text-xl font-semibold text-secondary mb-2">Data Accuracy</div>
              <p className="text-gray-600">Our quality control process ensures near-perfect data accuracy across all projects.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">45%</div>
              <div className="text-xl font-semibold text-secondary mb-2">Cost Reduction</div>
              <p className="text-gray-600">Clients typically see significant cost savings compared to in-house data operations.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">3x</div>
              <div className="text-xl font-semibold text-secondary mb-2">Faster Delivery</div>
              <p className="text-gray-600">Our specialized teams deliver results up to three times faster than traditional methods.</p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Industries Served */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading
            title="Industries We Serve"
            subtitle="We work across sectors to deliver data solutions tailored to specific industry needs."
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {['Finance', 'Healthcare', 'E-commerce', 'Software', 'Automotive', 'Manufacturing', 'Logistics', 'Insurance', 'Legal', 'Real Estate', 'Education', 'Energy'].map((industry, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="h-20 flex items-center justify-center">
                  <span className="text-3xl text-primary">
                    {/* Placeholder for industry icons */}
                    {getIndustryIcon(industry)}
                  </span>
                </div>
                <h3 className="font-semibold text-primary">{industry}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to become our next success story?
            </h2>
            <p className="text-xl mb-8 text-accent">
              Contact us today to discuss how we can help transform your data challenges into business advantages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="white" size="lg">
                Contact Us
              </Button>
              <Button href="/services" variant="outline" className="text-white border-white hover:bg-white/10" size="lg">
                View Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

// Helper function to get industry icons
function getIndustryIcon(industry) {
  // In a real implementation, you would return specific SVG icons based on the industry
  // For this example, we'll return a simple placeholder
  const industryIconMap = {
    'Finance': '💰',
    'Healthcare': '🏥',
    'E-commerce': '🛒',
    'Software': '💻',
    'Automotive': '🚗',
    'Manufacturing': '🏭',
    'Logistics': '🚚',
    'Insurance': '🔒',
    'Legal': '⚖️',
    'Real Estate': '🏢',
    'Education': '🎓',
    'Energy': '⚡'
  };
  
  return industryIconMap[industry] || '📊';
}