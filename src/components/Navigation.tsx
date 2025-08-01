import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, CheckCircle } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const handleBookDemo = () => {
    window.open("https://salescentri.com/get-started/book-demo", "_blank");
  };

  const handleFreeTrial = () => {
    window.open("https://salescentri.com/get-started/free-trial", "_blank");
  };

  return (
    <>
      {/* Trust Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
        <div className="flex items-center justify-center gap-2">
          <CheckCircle className="h-4 w-4" />
          <span>Trusted by 500+ businesses • 99.9% accuracy rate • SOC 2 Certified</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl text-foreground">
                  Demandorbit
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" onClick={handleBookDemo}>
                Book Demo
              </Button>
              <Button variant="cta" onClick={handleFreeTrial}>
                Start Free Trial
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={handleBookDemo}
                >
                  Book Demo
                </Button>
                <Button
                  variant="cta"
                  className="w-full"
                  onClick={handleFreeTrial}
                >
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;