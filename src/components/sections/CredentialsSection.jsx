import Container from '../ui/Container';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

const CredentialsSection = () => {
  const cases = [
    {
      company: "Adaire",
      project: "Project Management Data Migration",
      who: "Adaire is a software development company based in Namibia and serving clients across Germany and Switzerland.",
      what: "Adaire was transitioning to a new project management tool and required manual data migration services.",
      how: "Project data was downloaded from Azure DevOps, adjusted to the correct format, then manually imported into Jira."
    },
    {
      company: "Nedbank",
      project: "Client Data Validation & Migration",
      who: "Nedbank is one of the four largest banks in southern Africa, serving 7 million retail and wholesale clients.",
      what: "A new version of their retail client banking & payment application was developed. All migrated client data had to be cleansed.",
      how: "Label Ladder's team was trained as subject matter experts and used TestFlight to test the mobile iOS application."
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
        
        <div className="mt-12 space-y-8">
            <div className="flex flex-wrap gap-6">
          {cases.map((caseStudy, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md flex-1 min-w-80">
              
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{caseStudy.company}</h3>
                  <p className="font-semibold text-secondary mb-4">{caseStudy.project}</p>
                </div>
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
              </div>
            
          ))}
          </div>
        </div>
        
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