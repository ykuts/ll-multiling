import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Image from 'next/image';

export default function Services() {
  // Text Annotation Services
  const textServices = [
    {
      name: "Character recognition",
      description: "Converting printed or handwritten characters into machine-encoded text",
      price: "$0.005–$0.02 per character or $0.50–$2 per page",
      moq: "5,000 characters or 500 pages"
    },
    {
      name: "Transcription",
      description: "Converting spoken language into written text",
      price: "$1–$5 per minute",
      moq: "100 minutes"
    },
    {
      name: "Article qualification",
      description: "Classifying or scoring articles based on predefined criteria or relevance",
      price: "$0.50–$2 per article",
      moq: "500 articles"
    },
    {
      name: "Content moderation",
      description: "Reviewing and filtering content to ensure compliance with guidelines or policies",
      price: "$0.01–$0.10 per item or $10–$25 per hour",
      moq: "10,000 items or 40 hours"
    }
  ];

  // Image Annotation Services
  const imageServices = [
    {
      name: "Image annotation",
      description: "Tagging objects, attributes, or areas within images for machine learning",
      price: "$0.05–$0.50 per image or per object",
      moq: "1,000 images"
    },
    {
      name: "Image labelling",
      description: "Assigning labels or categories to whole images",
      price: "$0.02–$0.10 per image",
      moq: "2,000 images"
    },
    {
      name: "Shape recognition",
      description: "Identifying and tagging geometric shapes or object outlines in images",
      price: "$0.10–$1 per object",
      moq: "1,000 objects"
    },
    {
      name: "Image segmentation",
      description: "Pixel-level annotation dividing an image into meaningful parts or regions",
      price: "$0.50–$5 per image",
      moq: "500 images"
    }
  ];

  // Video Annotation Services
  const videoServices = [
    {
      name: "Transcription",
      description: "Converting video audio into written text",
      price: "$2–$6 per minute",
      moq: "100 minutes"
    },
    {
      name: "Sequencing",
      description: "Labelling or ordering actions, events, or scenes over time in video",
      price: "$5–$15 per minute",
      moq: "50 minutes"
    }
  ];

  // Audio Annotation Services
  const audioServices = [
    {
      name: "Speech-to-text",
      description: "Automatically or manually converting spoken words into text format",
      price: "$1–$5 per minute",
      moq: "100 minutes"
    },
    {
      name: "Sentiment analysis",
      description: "Classifying text or audio based on emotional tone (positive, negative, neutral)",
      price: "$0.02–$0.10 per item",
      moq: "5,000 items"
    }
  ];

  // Data Processing Services
  const dataProcessingServices = [
    {
      title: "Data Entry",
      description: "We manually or automatically input, update, or maintain data in a digital format — usually into databases, spreadsheets, CRMs, or other software systems.",
      tasks: [
        "Typing handwritten information in a spreadsheet",
        "Transferring data from PDFs or scans into a database",
        "Inputting survey responses or invoices into a system",
        "Transferring data from one system to another (e.g., Excel to Jira)"
      ]
    },
    {
      title: "Data Validation",
      description: "We ensure that the data collected, entered, or processed is correct, usable, and meaningful — whether it comes from humans or machines.",
      tasks: [
        "Format checks: Make sure the data is of the correct format",
        "Range checks: Make sure the data is within its determined limits",
        "Consistency checks: Make sure the data points are aligned semantically and structurally",
        "Completeness checks: Make sure that all required fields are present"
      ]
    },
    {
      title: "Data Cleansing",
      description: "Our teams' work improves the quality, reliability, and usability of data by correcting or removing inaccurate, incomplete, duplicated, or irrelevant data within a dataset.",
      tasks: [
        "Removing duplicates: Make sure an entry doesn't appear twice in a dataset",
        "Fixing typos: Make sure typos are fixed and noise is removed from the data",
        "Standardizing data: Make sure the data uses the same format and unit measures",
        "Eliminating outliers or errors: Remove unusable and incorrect data"
      ]
    },
    {
      title: "Data Migration",
      description: "Data migration is the process of moving data between systems (computing environments, storage system or format) while preserving data integrity and ensuring compatibility with the destination system.",
      tasks: [
        "Extract data from the source system",
        "Transform data into the format of the new system",
        "Cleaning and validating the data",
        "Entering the data into the new system",
        "Testing the data integrity in the new system"
      ]
    }
  ];

  // Service Type Cards
  const serviceTypes = [
    {
      title: "Text Annotation",
      description: "Converting text into structured, machine-readable formats through recognition, transcription, and qualification.",
      icon: "📝",
      href: "#text",
    },
    {
      title: "Image Annotation",
      description: "Adding metadata to images through tagging, labeling, segmentation and object recognition.",
      icon: "🖼️",
      href: "#image",
    },
    {
      title: "Video Annotation",
      description: "Enhancing video content with metadata through transcription and sequential labeling.",
      icon: "🎬",
      href: "#video",
    },
    {
      title: "Audio Annotation",
      description: "Converting audio to text and analyzing tone through speech recognition and sentiment analysis.",
      icon: "🔊",
      href: "#audio",
    },
    {
      title: "Data Processing",
      description: "Transforming raw data into useful formats through entry, validation, cleansing, and migration.",
      icon: "📊",
      href: "#processing",
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl mb-8 text-accent">
              High-quality data annotation and processing services to transform your raw data into valuable assets.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <Container>
          <SectionHeading
            title="Data Annotation & Processing Services"
            subtitle="We provide a comprehensive range of data services to meet your specific needs."
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {serviceTypes.map((service, index) => (
              <Card
                key={index}
                title={service.title}
                description={service.description}
                icon={<span className="text-4xl">{service.icon}</span>}
                href={service.href}
                variant="feature"
              />
            ))}
          </div>
        </Container>
      </section>
      
      {/* Text Annotation Section */}
      <section id="text" className="py-16 bg-gray-50">
        <Container>
          <SectionHeading
            title="Text Annotation Services"
            subtitle="Converting printed or spoken language into structured, machine-readable formats."
          />
          
          <div className="mt-12 overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Service</th>
                  <th className="px-6 py-4 text-left">Description</th>
                  <th className="px-6 py-4 text-left">Price Range</th>
                  <th className="px-6 py-4 text-left">Min. Order Quantity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {textServices.map((service, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-primary">{service.name}</td>
                    <td className="px-6 py-4 text-gray-600">{service.description}</td>
                    <td className="px-6 py-4 text-gray-600">{service.price}</td>
                    <td className="px-6 py-4 text-gray-600">{service.moq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>
      
      {/* Image Annotation Section */}
      <section id="image" className="py-16">
        <Container>
          <SectionHeading
            title="Image Annotation Services"
            subtitle="Adding metadata to images to make them recognizable and processable by machine learning systems."
          />
          
          <div className="mt-12 overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Service</th>
                  <th className="px-6 py-4 text-left">Description</th>
                  <th className="px-6 py-4 text-left">Price Range</th>
                  <th className="px-6 py-4 text-left">Min. Order Quantity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {imageServices.map((service, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-primary">{service.name}</td>
                    <td className="px-6 py-4 text-gray-600">{service.description}</td>
                    <td className="px-6 py-4 text-gray-600">{service.price}</td>
                    <td className="px-6 py-4 text-gray-600">{service.moq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>
      
      {/* Video Annotation Section */}
      <section id="video" className="py-16 bg-gray-50">
        <Container>
          <SectionHeading
            title="Video Annotation Services"
            subtitle="Enhancing video content with metadata for better analysis and understanding."
          />
          
          <div className="mt-12 overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Service</th>
                  <th className="px-6 py-4 text-left">Description</th>
                  <th className="px-6 py-4 text-left">Price Range</th>
                  <th className="px-6 py-4 text-left">Min. Order Quantity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {videoServices.map((service, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-primary">{service.name}</td>
                    <td className="px-6 py-4 text-gray-600">{service.description}</td>
                    <td className="px-6 py-4 text-gray-600">{service.price}</td>
                    <td className="px-6 py-4 text-gray-600">{service.moq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>
      
      {/* Audio Annotation Section */}
      <section id="audio" className="py-16">
        <Container>
          <SectionHeading
            title="Audio Annotation Services"
            subtitle="Converting audio content to structured formats and analyzing tone for better insights."
          />
          
          <div className="mt-12 overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Service</th>
                  <th className="px-6 py-4 text-left">Description</th>
                  <th className="px-6 py-4 text-left">Price Range</th>
                  <th className="px-6 py-4 text-left">Min. Order Quantity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {audioServices.map((service, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-primary">{service.name}</td>
                    <td className="px-6 py-4 text-gray-600">{service.description}</td>
                    <td className="px-6 py-4 text-gray-600">{service.price}</td>
                    <td className="px-6 py-4 text-gray-600">{service.moq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>
      
      {/* Data Processing Section */}
      <section id="processing" className="py-16 bg-gray-50">
        <Container>
          <SectionHeading
            title="Data Processing Services"
            subtitle="Transforming raw data into clean, structured, and usable formats for better decision-making."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {dataProcessingServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <h4 className="font-semibold text-secondary mb-2">
                  {service.title === "Data Migration" ? "Process:" : "Tasks:"}
                </h4>
                <ul className="space-y-2 text-gray-600">
                  {service.tasks.map((task, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-secondary text-white text-xs mr-3 mt-0.5">{i+1}</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Custom Solutions */}
      <section className="py-16">
        <Container>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <SectionHeading
                  title="Custom Solutions"
                  subtitle="Don't see exactly what you need? We can help."
                />
                <p className="text-gray-600 mb-6">
                  Every business has unique data challenges. Our team can work with you to develop custom data annotation and processing solutions tailored to your specific requirements.
                </p>
                <p className="text-gray-600 mb-8">
                  Whether you need a combination of services, specialized domain expertise, or a completely unique workflow, we can design a solution that meets your needs.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Request Custom Quote
                </Button>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/images/services/custom-solutions.jpg" 
                  alt="Custom Data Solutions" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your data?
            </h2>
            <p className="text-xl mb-8 text-accent">
              Contact us today to discuss your data annotation and processing needs and get a customized quote.
            </p>
            <Button href="/contact" variant="white" size="lg">
              Start Your Project
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}