import { Link } from "wouter";
import { HardHat, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-accent p-2 rounded-lg">
                <HardHat className="h-6 w-6 text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                ALSAHRAA ALSAMITAH <span className="text-accent">BUILDING CONTRACTING LLC</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed max-w-xs">
              Building the future with excellence, integrity, and innovation. Your trusted partner for construction and manpower solutions in the UAE.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">Our Services</Link></li>
              <li><Link href="/manpower" className="text-primary-foreground/70 hover:text-accent transition-colors">Manpower Supply</Link></li>
              <li><Link href="/careers" className="text-primary-foreground/70 hover:text-accent transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">General Contracting</Link></li>
              <li><Link href="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">Civil Engineering</Link></li>
              <li><Link href="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">MEP Works</Link></li>
              <li><Link href="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">Interior Fit-out</Link></li>
              <li><Link href="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">Renovation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70">
                  P.O. Box 12345, Business Bay,<br />Dubai, United Arab Emirates
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span className="text-primary-foreground/70">+971 4 000 0000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span className="text-primary-foreground/70">info@alsahraalsamitah.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 mt-8 text-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} ALSAHRAA ALSAMITAH BUILDING CONTRACTING LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
