import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and company info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image 
                src="/images/logo-white.png" 
                alt="Label Ladder Logo" 
                width={160} 
                height={35}
                className="mb-4"
              />
            </Link>
            <p className="text-accent text-sm max-w-xs">
              We provide end-to-end data processing and annotation services to transform your data into a powerful asset.
            </p>
            {/* <div className="text-sm text-accent">
              <p>Swiss-Namibian company with offices in:</p>
              <p>Zürich, Switzerland & Windhoek, Namibia</p>
            </div> */}
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-accent hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-accent hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/approach" className="text-accent hover:text-white transition">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/credentials" className="text-accent hover:text-white transition">
                  Credentials
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#annotation" className="text-accent hover:text-white transition">
                  Text Annotation
                </Link>
              </li>
              <li>
                <Link href="/services#image" className="text-accent hover:text-white transition">
                  Image Annotation
                </Link>
              </li>
              <li>
                <Link href="/services#video" className="text-accent hover:text-white transition">
                  Video Annotation
                </Link>
              </li>
              <li>
                <Link href="/services#audio" className="text-accent hover:text-white transition">
                  Audio Annotation
                </Link>
              </li>
              <li>
                <Link href="/services#processing" className="text-accent hover:text-white transition">
                  Data Processing
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-accent">
                <span className="block">Email:</span>
                <a href="mailto:hello@labelladder.com" className="hover:text-white transition">
                  hello@labelladder.com
                </a>
              </li>
              <li className="text-accent">
                <span className="block">Website:</span>
                <a href="https://www.labelladder.com" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">
                  www.labelladder.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-accent/30 text-center text-sm text-accent ">
          <p className='p-footer'>&copy; {currentYear} Label Ladder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;