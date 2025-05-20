import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-primary to-secondary text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Behind every smart model is smarter data preparation
            </h1>
            <p className="text-xl mb-8 text-accent">
              We provide end-to-end data processing and annotation services to transform your data into a powerful asset.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/services" variant="white" size="lg">
                Our Services
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                Get in Touch
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            title="About Label Ladder"
            subtitle="We combine Swiss precision and data excellence with Namibian talent and agility to deliver high-quality, scalable data solutions."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-secondary">
              <h3 className="text-xl font-bold text-primary mb-3">High-Quality Data Services</h3>
              <p className="text-gray-600">
                Quality control processes for in-house data labelers ensure accurate and high-quality processed data.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-secondary">
              <h3 className="text-xl font-bold text-primary mb-3">Skilled Talent Pool</h3>
              <p className="text-gray-600">
                A group of trained and experienced annotators facilitating transformation of raw data.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-secondary">
              <h3 className="text-xl font-bold text-primary mb-3">A Venture Built on Impact</h3>
              <p className="text-gray-600">
                Label Ladder is based on empowerment, where 1,000 Namibians are trained with digital skills.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-secondary">
              <h3 className="text-xl font-bold text-primary mb-3">Cost-Effective Service</h3>
              <p className="text-gray-600">
                Reducing overhead costs associated with hiring, training, and maintaining an in-house team.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button href="/about" variant="primary" size="lg">
              Learn More About Us
            </Button>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <SectionHeading
            title="Our Services"
            subtitle="High-quality data annotation and processing services to transform your raw data into valuable assets."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold text-primary mb-3">Text Annotation</h3>
              <p className="text-gray-600 mb-4">
                Character recognition, transcription, article qualification, and content moderation services.
              </p>
              <Button href="/services#text" variant="outline" size="sm">
                Learn More
              </Button>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold text-primary mb-3">Image Annotation</h3>
              <p className="text-gray-600 mb-4">
                Image annotation, labelling, shape recognition, and image segmentation services.
              </p>
              <Button href="/services#image" variant="outline" size="sm">
                Learn More
              </Button>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold text-primary mb-3">Video Annotation</h3>
              <p className="text-gray-600 mb-4">
                Transcription and sequencing services for video content.
              </p>
              <Button href="/services#video" variant="outline" size="sm">
                Learn More
              </Button>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold text-primary mb-3">Audio Annotation</h3>
              <p className="text-gray-600 mb-4">
                Speech-to-text and sentiment analysis for audio content.
              </p>
              <Button href="/services#audio" variant="outline" size="sm">
                Learn More
              </Button>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold text-primary mb-3">Data Entry</h3>
              <p className="text-gray-600 mb-4">
                Manual or automatic input, update, or maintenance of data in a digital format.
              </p>
              <Button href="/services#processing" variant="outline" size="sm">
                Learn More
              </Button>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold text-primary mb-3">Data Processing</h3>
              <p className="text-gray-600 mb-4">
                Data validation, cleansing, and migration services.
              </p>
              <Button href="/services#processing" variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button href="/services" variant="primary" size="lg">
              View All Services
            </Button>
          </div>
        </Container>
      </section>

      {/* Approach Section */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            title="Our Approach"
            subtitle="We follow a thoughtful approach to designing a solution that fits your needs."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl mr-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-primary">Needs Assessment</h3>
              </div>
              <p className="text-gray-600 ml-16">
                We start by understanding your data, models, and business goals. Our in-house data professionals work with your team to identify the real purpose of the dataset.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl mr-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-primary">Custom Annotation Design</h3>
              </div>
              <p className="text-gray-600 ml-16">
                We don't apply a one-size-fits-all approach. We design annotation workflows tailored to your use case and quality control protocols aligned with your accuracy targets.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl mr-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-primary">Future-Proofed Data Architecture</h3>
              </div>
              <p className="text-gray-600 ml-16">
                We think ahead. Our approach ensures your labelled data integrates seamlessly into ML/AI pipelines and supports model retraining and versioning.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl mr-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-primary">Human in the Loop, Always</h3>
              </div>
              <p className="text-gray-600 ml-16">
                Our workforce is trained beyond basic labelling – they are skilled in domain-specific annotation and continuously improving through feedback loops.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button href="/approach" variant="primary" size="lg">
              Learn More About Our Approach
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to unlock the full potential of your data?
            </h2>
            <p className="text-xl mb-8 text-accent">
              Let us help you transform your data into a powerful asset that drives smarter decisions, streamlined operations, and real competitive edge.
            </p>
            <Button href="/contact" variant="white" size="lg">
              Contact Us Today
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}