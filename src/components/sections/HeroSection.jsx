import Container from '../ui/Container';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-accent"></div>
      </div>
      
      <Container>
        <div className="max-w-3xl relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Behind every smart model is smarter data preparation
          </h1>
          <p className="text-xl mb-8 text-accent">
            We provide end-to-end data processing and annotation services — not just to label your data, but to transform it into a powerful asset that drives smarter decisions.
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
  );
};

export default HeroSection;