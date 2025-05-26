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
      image: "/images/credentials/adaire.png",
      logo: "/images/credentials/adaire.png"
    },
    {
      company: "Nedbank",
      project: "Client Data Validation & Migration",
      description: "Data cleansing and feature testing for one of southern Africa's largest banks' new retail client application.",
      who: "Nedbank is one of the four largest banks in southern Africa, serving 7 million retail and wholesale clients across Namibia alone through its banking services and digital platforms.",
      what: "A new version of their retail client banking & payment application was developed. All migrated client data had to be cleansed, and all features of the application tested to ensure readiness for launch.",
      how: "Label Ladder's team was trained as subject matter experts and used TestFlight to test the mobile iOS application. All bugs or issues were logged and corrected by the bank's development team. User data was verified and cleaned, and dormant accounts were either verified or deleted.",
      image: "/images/credentials/nedbank.jpg",
      logo: "/images/credentials/nedbank-logo.jpg"
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative h-48">
                  <Image 
                    src={caseStudy.image} 
                    alt={`${caseStudy.company} Case Study`} 
                    fill
                    className="object-contain"
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
                      {/* <h3 className="text-lg font-bold text-white">{caseStudy.company}</h3> */}
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
                    className="object-contain"
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
      {/* <section className="py-16 bg-primary text-white">
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
      </section> */}
      
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
                  <span className="text-4xl text-primary">
                    {/* Placeholder for industry icons */}
                    {getIndustryIcon(industry)}
                  </span>
                </div>
                <h3 className="font-semibold text-2xl lg:text-xl text-primary">{industry}</h3>
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
  const industryIconMap = {
    'Finance': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-12 h-12 text-primary" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
</svg>

    ),
    'Healthcare': (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-primary">
<path d="M8.00006 16.1556C8.0567 17.1333 8.65299 19.2845 10.585 20.0667M11.5527 1.89444L5.91936 13.1613C3.65925 17.6816 6.94624 23 12 23C17.0538 23 20.3408 17.6815 18.0807 13.1613L12.4472 1.89443C12.2629 1.52591 11.737 1.52591 11.5527 1.89444Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>

    ),
    'E-commerce': (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-primary">
        <circle cx="8" cy="21" r="1" stroke="currentColor" strokeWidth="2"/>
        <circle cx="19" cy="21" r="1" stroke="currentColor" strokeWidth="2"/>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    'Software': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 text-primary">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
</svg>

    ),
    'Automotive': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black"  className="w-12 h-12 text-primary" stroke-width="1.5" stroke="currentColor">
        <path  d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
    ),
    'Manufacturing': (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-primary">
        <rect x="2" y="20" width="20" height="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="4" y="10" width="6" height="10" stroke="currentColor" strokeWidth="2"/>
        <rect x="14" y="4" width="6" height="16" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 2v4l6-2v4" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    'Logistics': (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-primary">
        <rect x="1" y="3" width="15" height="13" stroke="currentColor" strokeWidth="2"/>
        <polygon points="16,8 20,8 23,11 23,16 16,16" stroke="currentColor" strokeWidth="2"/>
        <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2"/>
        <path d="M5 8h6" stroke="currentColor" strokeWidth="2"/>
        <path d="M5 12h4" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    'Insurance': (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-primary">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    'Legal': (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-primary">
        <path d="M9 12h6" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 3v6" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 3h12" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 21h12" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 21V9h8v12" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    'Real Estate': (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-primary">
        <path d="M3 21h18" stroke="currentColor" strokeWidth="2"/>
        <path d="M5 21V7l8-4v18" stroke="currentColor" strokeWidth="2"/>
        <path d="M19 21V11l-6-4" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 9v.01" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 12v.01" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 15v.01" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 18v.01" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    'Education': (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 text-primary">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>

    ),
    'Energy': (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-primary">
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  };
  
  return industryIconMap[industry] || (
    <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-primary">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}