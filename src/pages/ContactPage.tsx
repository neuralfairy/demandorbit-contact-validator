import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Calendar,
  ArrowRight,
  Headphones
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const handleSalesInquiry = () => {
    window.open("https://salescentri.com/contact/sales-inquiry", "_blank");
  };

  const handleSupportRequest = () => {
    window.open("https://salescentri.com/contact/support-request", "_blank");
  };

  const handleBookDemo = () => {
    window.open("https://salescentri.com/get-started/book-demo", "_blank");
  };

  const handleLiveChat = () => {
    window.open("https://salescentri.com/contact/support-request/live-chat", "_blank");
  };

  const handlePartnerInquiry = () => {
    window.open("https://salescentri.com/contact/partnerships/partner-inquiry", "_blank");
  };

  const contactOptions = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Sales Inquiry",
      description: "Speak with our sales team about your needs",
      action: "Contact Sales",
      handler: handleSalesInquiry
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Technical Support",
      description: "Get help with your account or technical issues",
      action: "Get Support",
      handler: handleSupportRequest
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Schedule Demo",
      description: "Book a personalized demo of our platform",
      action: "Book Demo",
      handler: handleBookDemo
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      action: "Start Chat",
      handler: handleLiveChat
    }
  ];

  const officeInfo = {
    address: "Charlotte, NC",
    phone: "Available through contact forms",
    email: "Available through contact forms",
    hours: "Monday - Friday, 9:00 AM - 6:00 PM EST"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Get in
              <span className="text-primary block">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Have questions about our Contact Validator? Need help with your account? 
              Our team is here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactOptions.map((option, index) => (
              <Card 
                key={index}
                className="text-center border-0 shadow-professional hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {option.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {option.description}
                  </p>
                  <Button 
                    variant="cta" 
                    className="w-full"
                    onClick={option.handler}
                  >
                    {option.action}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Charlotte Office
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're proud to be based in Charlotte, North Carolina, serving customers 
                worldwide from the heart of the Carolinas.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground">{officeInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">{officeInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">{officeInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Business Hours</h3>
                    <p className="text-muted-foreground">{officeInfo.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-professional p-8">
              <h3 className="text-xl font-semibold mb-6">
                Quick Contact Options
              </h3>
              <div className="space-y-4">
                <Button 
                  variant="cta" 
                  className="w-full justify-start"
                  onClick={() => window.open("https://salescentri.com/contact/sales-inquiry/request-quote", "_blank")}
                >
                  <Phone className="h-4 w-4" />
                  Request a Quote
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.open("https://salescentri.com/contact/support-request/submit-ticket", "_blank")}
                >
                  <Mail className="h-4 w-4" />
                  Submit Support Ticket
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.open("https://salescentri.com/get-started/calendly", "_blank")}
                >
                  <Calendar className="h-4 w-4" />
                  Schedule Call
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={handlePartnerInquiry}
                >
                  <MessageCircle className="h-4 w-4" />
                  Partner Inquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Self-Service Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions and learn more about our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-professional hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">FAQ</h3>
                <p className="text-muted-foreground mb-4">
                  Common questions about Contact Validator
                </p>
                <Button 
                  variant="outline"
                  onClick={() => window.location.href = '/faq'}
                >
                  View FAQ
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-professional hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Documentation</h3>
                <p className="text-muted-foreground mb-4">
                  Complete guides and API documentation
                </p>
                <Button 
                  variant="outline"
                  onClick={() => window.open("https://salescentri.com/docs/user-guide", "_blank")}
                >
                  View Docs
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-professional hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Tutorials</h3>
                <p className="text-muted-foreground mb-4">
                  Step-by-step tutorials and webinars
                </p>
                <Button 
                  variant="outline"
                  onClick={() => window.open("https://salescentri.com/resources/tutorials-webinars", "_blank")}
                >
                  Watch Tutorials
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Interested in partnering with Demandorbit? We offer various partnership 
              opportunities for integration partners, resellers, and affiliates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-professional">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Integration Partners</h3>
                <p className="text-muted-foreground mb-4">
                  Build integrations with our API and join our partner ecosystem.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => window.open("https://salescentri.com/contact/partnerships/integration-requests", "_blank")}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-professional">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Reseller Program</h3>
                <p className="text-muted-foreground mb-4">
                  Join our partner network and earn commissions on referrals.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => window.open("https://salescentri.com/company/partners-affiliates", "_blank")}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Have more questions? Our team is standing by to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="xl" 
              onClick={() => window.open("https://salescentri.com/get-started/free-trial", "_blank")}
              className="bg-white text-primary hover:bg-white/90"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleBookDemo}
              className="border-white text-white hover:bg-white/10"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;