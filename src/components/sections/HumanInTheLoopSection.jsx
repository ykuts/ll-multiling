import Container from '../ui/Container';
import Image from 'next/image';

const HumanInTheLoopSection = () => {
  const whatWeDo = [
    {
      title: "Domain-Specific Training",
      description: "Annotators are trained in the nuances of the industry (legal, medical, retail, etc.)"
    },
    {
      title: "Human-AI Collaboration", 
      description: "Combine pre-annotations, model suggestions, and manual corrections"
    },
    {
      title: "Feedback-Driven Improvement",
      description: "Use performance reviews and disagreement analysis to continuously raise annotation quality"
    }
  ];

  const howWeDoIt = [
    {
      country: "Swiss",
      flag: "/images/icons/switzerland.png",
      description: "Our Swiss team sets review policies and manages continuous learning from model outcomes"
    },
    {
      country: "Namibian", 
      flag: "/images/icons/namibia.png",
      description: "Our Namibian team executes annotation with quality-first discipline, escalating ambiguities and refining work"
    }
  ];

  return (
    <section 
      className="relative py-16 md:py-24 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/images/approach/human.png')"
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/90"></div>
      
      <Container>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Human in the Loop
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-6">
                Smart Humans Training Smarter Machines
              </h3>
              <p className="text-gray-600 text-lg">
                We believe annotation is not a mechanical task — it's a cognitive skill. Our Human-in-the-Loop (HITL) model enables contextual, high-quality annotations.
              </p>
            </div>

            {/* What We Do */}
            <div>
              <h4 className="text-xl font-bold text-primary mb-6">WHAT WE DO:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {whatWeDo.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-primary text-white p-4 rounded-lg border-2 border-primary"
                  >
                    <h5 className="font-bold text-center mb-3 text-sm leading-tight">
                      {item.title}
                    </h5>
                    <p className="text-xs text-center leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How We Do It */}
            <div>
              <h4 className="text-xl font-bold text-primary mb-6">HOW WE DO IT:</h4>
              <div className="space-y-4">
                {howWeDoIt.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-primary text-white p-4 rounded-lg border-2 border-primary flex items-start"
                  >
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-8 rounded-full overflow-hidden bg-white flex items-center justify-center">
                        <Image
                          src={item.flag}
                          alt={`${item.country} Flag`}
                          width={32}
                          height={24}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section - Hidden on smaller screens to show background */}
          <div className="hidden lg:block relative">
            <div className="relative h-96 w-full">
              {/* This div can be used for additional styling or overlay if needed */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </Container>

      {/* Logo in bottom left */}
      <div className="absolute bottom-8 left-8 z-10">
        <Image
          src="/images/logo.png"
          alt="Label Ladder Logo"
          width={120}
          height={30}
          className="opacity-70"
        />
      </div>
    </section>
  );
};

export default HumanInTheLoopSection;