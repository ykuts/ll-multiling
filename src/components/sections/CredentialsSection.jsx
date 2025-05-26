import Container from '../ui/Container';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import Image from 'next/image';

const CredentialsSection = () => {
  const cases = [
    {
      company: "Adaire",
      project: "Project Management Data Migration",
      who: "Adaire is a software development company based in Namibia and serving clients across Germany and Switzerland.",
      what: "Adaire was transitioning to a new project management tool and required manual data migration services.",
      how: "Project data was downloaded from Azure DevOps, adjusted to the correct format, then manually imported into Jira.",
      logo: "/images/credentials/adaire.png",
      industry: "Software Development",
      duration: "2 weeks",
      dataVolume: "5,000+ records"
    },
    {
      company: "Nedbank",
      project: "Client Data Validation & Migration",
      who: "Nedbank is one of the four largest banks in southern Africa, serving 7 million retail and wholesale clients.",
      what: "A new version of their retail client banking & payment application was developed. All migrated client data had to be cleansed.",
      how: "Label Ladder's team was trained as subject matter experts and used TestFlight to test the mobile iOS application.",
      logo: "/images/credentials/nedbank-logo.jpg",
      industry: "Banking & Finance",
      duration: "6 weeks",
      dataVolume: "7M+ client records"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionHeading
          title="Credentials"
          subtitle="See how we've helped other organizations solve their data challenges."
          centered
        />

        {/* Client Logos Banner */}
        {/* <div className="mt-8 mb-12">
          <div className="flex justify-center items-center space-x-8 md:space-x-12 opacity-70">
            {cases.map((caseStudy, index) => (
              <div key={index} className="h-12 w-24 relative grayscale hover:grayscale-0 transition-all duration-300">
                <Image 
                  src={caseStudy.logo} 
                  alt={`${caseStudy.company} Logo`} 
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div> */}

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {cases.map((caseStudy, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Header with Logo and Company Info */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 relative mr-4 flex-shrink-0">
                    <Image 
                      src={caseStudy.logo} 
                      alt={`${caseStudy.company} Logo`} 
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary transition-colors">
                      {caseStudy.company}
                    </h3>
                    <p className="text-sm text-gray-500">{caseStudy.industry}</p>
                  </div>
                </div>
                <h4 className="font-semibold text-secondary mb-2">{caseStudy.project}</h4>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{caseStudy.duration}</div>
                    <div className="text-xs text-gray-500">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{caseStudy.dataVolume}</div>
                    <div className="text-xs text-gray-500">Data Volume</div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {caseStudy.what}
                </p>
                
                {/* <div className="flex justify-between items-center">
                  <span className="text-secondary font-medium text-sm hover:underline cursor-pointer">
                    View Case Study →
                  </span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="mt-12 space-y-8">
            <div className="flex flex-wrap gap-6">
          {cases.map((caseStudy, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md flex-1 min-w-80">
              
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{caseStudy.company}</h3>
                  <p className="font-semibold text-secondary mb-4">{caseStudy.project}</p>
                </div> */}
                {/* <div className="md:col-span-2">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-primary mb-2">WHO</h4>
                    <p className="text-gray-600">{caseStudy.who}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-primary mb-2">WHAT</h4>
                    <p className="text-gray-600">{caseStudy.what}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">HOW</h4>
                    <p className="text-gray-600">{caseStudy.how}</p>
                  </div>
                </div> */}
              {/* </div>
            
          ))}
          </div>
        </div> */}
        
        <div className="mt-12 text-center">
          <Button href="/credentials" variant="primary" size="lg">
            View All Case Studies
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CredentialsSection;