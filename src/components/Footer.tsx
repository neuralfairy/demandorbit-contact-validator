import { CheckCircle, Shield, Award, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSalesCentriClick = () => {
    window.open("https://salescentri.com?utm_source=demandorbit.com&utm_medium=footer&utm_campaign=partner_network", "_blank");
  };

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl">Demandorbit</span>
            </div>
            <p className="text-muted-foreground">
              Professional contact validation services to improve your outbound success rate and data quality.
            </p>
            <div className="flex space-x-4">
              <div className="trust-badge">
                <Shield className="h-4 w-4 inline mr-1" />
                SOC 2 Certified
              </div>
              <div className="trust-badge">
                <Award className="h-4 w-4 inline mr-1" />
                99.9% Accuracy
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="https://salescentri.com/services/data-enrichment" className="hover:text-primary transition-colors">Email Verification</a></li>
              <li><a href="https://salescentri.com/platforms/contact-intelligence/ai-aggregator" className="hover:text-primary transition-colors">Contact Validation</a></li>
              <li><a href="https://salescentri.com/solutions/by-use-case/sdr-teams" className="hover:text-primary transition-colors">Data Enrichment</a></li>
              <li><a href="https://salescentri.com/platforms/lead-management/lead-generation" className="hover:text-primary transition-colors">Lead Generation</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="https://salescentri.com/resources/case-studies" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="https://salescentri.com/resources/whitepapers-ebooks" className="hover:text-primary transition-colors">Whitepapers</a></li>
              <li><a href="https://salescentri.com/docs/api-reference" className="hover:text-primary transition-colors">API Documentation</a></li>
              <li><a href="https://salescentri.com/resources/tutorials-webinars" className="hover:text-primary transition-colors">Tutorials</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Charlotte, NC</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="https://salescentri.com/contact/sales-inquiry" className="hover:text-primary transition-colors">Sales Inquiry</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="https://salescentri.com/contact/support-request" className="hover:text-primary transition-colors">Support</a>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-border" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
            <span>© {currentYear} Demandorbit Solutions. All rights reserved.</span>
            <div className="flex space-x-4">
              <a href="https://salescentri.com/trust/security-privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="https://salescentri.com/trust/security-privacy" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            <button 
              onClick={handleSalesCentriClick}
              className="hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              Powered by Sales Intelligence Platform
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;