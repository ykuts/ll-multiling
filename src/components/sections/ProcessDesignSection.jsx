import Container from "../ui/Container";
import Image from "next/image";

const ProcessDesignSection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Designing the Process
          </h2>
          <p className="text-xl text-accent max-w-3xl mx-auto">
            We follow a thoughtful approach to designing a solution that fits your needs
          </p>
        </div>

        {/* Process Flow */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4">
          
          {/* Step 1: Needs Assessment */}
          <div className="bg-white text-primary rounded-lg p-4 w-full lg:w-72 h-96 relative flex flex-col">
            <div className="text-center mb-3">
              <h3 className="text-xl lg:text-base font-bold text-primary mb-1">NEEDS</h3>
              <h3 className="text-xl lg:text-base font-bold text-primary">ASSESSMENT</h3>
            </div>
            
            <p className="text-base lg:text-xs mb-3">
              We start by understanding your data, models, and business goals. 
              Our in-house data professionals work with your team to identify:
            </p>
            
            <ul className="text-base lg:text-xs space-y-1 flex-grow">
              <li>• The real <strong>purpose</strong> of the dataset</li>
              <li>• The best <strong>annotation methods</strong> for model performance</li>
              <li>• Gaps in <strong>data quality or structure</strong> that may impact outcomes</li>
            </ul>
          </div>

          {/* Arrow 1 */}
          <div className="hidden lg:block">
            <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <div className="lg:hidden flex flex-col items-center space-y-4">
            <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6 text-white transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Step 2: Custom Annotation Design */}
          <div className="bg-white text-primary rounded-lg p-4 w-full lg:w-72 h-96 relative flex flex-col">
            <div className="text-center mb-3">
              <h3 className="text-xl lg:text-base font-bold text-primary mb-0.5">CUSTOM</h3>
              <h3 className="text-xl lg:text-base font-bold text-primary mb-0.5">ANNOTATION</h3>
              <h3 className="text-xl lg:text-base font-bold text-primary">DESIGN</h3>
            </div>
            
            <p className="text-base lg:text-xs mb-3">
              We don't apply a one-size-fits-all approach. We design:
            </p>
            
            <ul className="text-base lg:text-xs space-y-1 flex-grow">
              <li>• <strong>Annotation workflows</strong> tailored to your use case</li>
              <li>• <strong>Quality control protocols</strong> aligned with your accuracy targets</li>
              <li>• <strong>Scalable pipelines</strong> that support growth and evolving needs</li>
            </ul>
          </div>

          {/* Arrow 2 */}
          <div className="hidden lg:block">
            <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <div className="lg:hidden flex flex-col items-center space-y-4">
            <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6 text-white transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Step 3: Future-Proofed Data Architecture */}
          <div className="bg-white text-primary rounded-lg p-4 w-full lg:w-72 h-96 relative flex flex-col">
            <div className="text-center mb-3">
              <h3 className="text-xl lg:text-base font-bold text-primary mb-0.5">FUTURE-PROOFED</h3>
              <h3 className="text-xl lg:text-base font-bold text-primary mb-0.5">DATA</h3>
              <h3 className="text-xl lg:text-base font-bold text-primary">ARCHITECTURE</h3>
            </div>
            
            <p className="text-base lg:text-xs mb-3">
              We think ahead. Our approach ensures your labelled data:
            </p>
            
            <ul className="text-base lg:text-xs space-y-1 flex-grow">
              <li>• <strong>Integrates seamlessly</strong> into ML/AI pipelines</li>
              <li>• <strong>Supports model retraining</strong> and versioning</li>
              <li>• <strong>Reduces the need</strong> for costly rework later</li>
            </ul>
          </div>

          {/* Arrow 3 */}
          <div className="hidden lg:block">
            <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <div className="lg:hidden flex flex-col items-center space-y-4">
            <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6 text-white transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Step 4: Human in the Loop */}
          <div className="bg-white text-primary rounded-lg p-4 w-full lg:w-72 h-96 relative flex flex-col">
            <div className="text-center mb-3">
              <h3 className="text-xl lg:text-base font-bold text-primary mb-0.5">HUMAN IN THE</h3>
              <h3 className="text-xl lg:text-base font-bold text-primary mb-0.5">LOOP,</h3>
              <h3 className="text-xl lg:text-base font-bold text-primary">ALWAYS</h3>
            </div>
            
            <p className="text-base lg:text-xs mb-3">
              Our workforce is trained beyond basic labelling – they are:
            </p>
            
            <ul className="text-base lg:text-xs space-y-1 flex-grow">
              <li>• <strong>Skilled in domain-specific</strong> annotation</li>
              <li>• <strong>Supported by data experts</strong> to ensure precision</li>
              <li>• <strong>Continuously improving</strong> through feedback loops</li>
            </ul>
          </div>

          {/* Arrow 4 */}
          <div className="hidden lg:block">
            <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <div className="lg:hidden flex flex-col items-center space-y-4">
            <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6 text-white transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Final Result */}
          <div className="bg-primary border-4 border-white rounded-lg p-4 w-full lg:w-72 h-96 relative flex flex-col">
            <div className="text-center mb-4">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Image
                  src="/images/icons/result.png"
                  alt="Result Icon"
                  width={64}
                  height={64}
                  className="text-primary"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">THE RESULTS</h3>
            </div>
            
            <div className="text-center flex-grow flex flex-col justify-center">
              <p className="text-accent text-base lg:text-xs font-medium leading-relaxed">
                Not just "labelled data", but a <strong className="text-white">strategic data asset</strong> that powers <strong className="text-white">long-term machine learning</strong> and <strong className="text-white">operational success</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Arrows */}
        {/* <div className="lg:hidden flex flex-col items-center mt-8 space-y-4">
          {[1, 2, 3, 4].map((arrow) => (
            <div key={arrow} className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6 text-white transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          ))}
        </div> */}
      </Container>
    </section>
  );
};

export default ProcessDesignSection;