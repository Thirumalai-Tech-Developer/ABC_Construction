import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import logo from "@/images/logo.png"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone, HardHat, Building, Building2 } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/construction", label: "Construction" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled || location !== "/" 
          ? "bg-white/45 backdrop-blur-md shadow-sm border-border py-2 rounded-full" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className={
              cn(
                "bg-white p-2 rounded-full group-hover:bg-accent/90 transition-colors",
                scrolled || location !== "/" ? "bg-blue-200 bg-opacity-30 shadow-xl" : "bg-white bg-opacity-30 shadow-xl"
              )
            }>
              <img src={ logo } alt="logo" className="h-8 w-8" />
            </div>
            <span className={cn(
              "font-display font-bold text-xl tracking-tight p-0",
              scrolled || location !== "/" ? "text-primary" : "text-white"
            )}>
              ALSAHRAA ALSAMITAH<br /><span className=
              {cn(
              "text-opacity-45 p-0 text-sm",
              scrolled || location !== "/" ? "text-primary" : "text-black/60"
            )}>Building Contracting LLC</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent relative py-2",
                  location === link.href ? "text-accent font-semibold" : 
                  (scrolled || location !== "/" ? "text-primary/80" : "text-white/90")
                )}
              >
                {link.label}
                {location === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+971500000000" 
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                scrolled || location !== "/" ? "text-primary" : "text-white"
              )}
            >
              <Phone className="h-4 w-4 text-accent" />
              +971 55 471 2353
            </a>
            <Link href="/contact">
              <Button 
                variant={scrolled || location !== "/" ? "default" : "secondary"}
                className={cn(
                  "font-semibold",
                  !scrolled && location === "/" && "bg-white text-primary hover:bg-white/90"
                )}
              >
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className={cn("h-6 w-6", scrolled || location !== "/" ? "text-primary" : "text-white")} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-8">
                <nav className="flex flex-col gap-4">
                  {NAV_LINKS.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-accent py-2 border-b border-border/50",
                        location === link.href ? "text-accent" : "text-primary/80"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-4">
                  <a 
                    href="tel:+971500000000" 
                    className="flex items-center gap-2 text-primary font-medium"
                  >
                    <Phone className="h-4 w-4 text-accent" />
                    +971 50 000 0000
                  </a>
                  <Link href="/contact">
                    <Button className="w-full">Get a Quote</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
