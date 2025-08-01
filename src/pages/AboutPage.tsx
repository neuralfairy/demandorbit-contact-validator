import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Target, Award, ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const handleJoinTeam = () => {
    window.open("https://salescentri.com/company/careers", "_blank");
  };

  const handleContactUs = () => {
    window.open("https://salescentri.com/contact", "_blank");
  };

  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security First",
      description: "We prioritize data security and privacy in everything we do, maintaining the highest industry standards."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Accuracy Obsessed",
      description: "Our commitment to 99.9% accuracy drives continuous innovation and improvement in our validation technology."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Success",
      description: "We measure our success by our customers' success, providing unparalleled support and service."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our platform, from technology to customer experience."
    }
  ];

  const stats = [
    { number: "2018", label: "Founded" },
    { number: "500+", label: "Enterprise Clients" },
    { number: "50M+", label: "Emails Validated" },
    { number: "99.9%", label: "Accuracy Rate" }
  ];

  const certifications = [
    "SOC 2 Type II",
    "GDPR Compliant",
    "CCPA Compliant",
    "ISO 27001",
    "HIPAA Ready",
    "Enterprise Security"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About
              <span className="text-primary block">Demandorbit Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We're dedicated to helping businesses improve their outbound success through 
              advanced contact validation technology and uncompromising data quality.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Demandorbit Solutions, we believe that quality data is the foundation of successful 
                business relationships. Our mission is to provide the most accurate, secure, and 
                reliable contact validation platform in the industry.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Founded in 2018 in Charlotte, NC, we've grown from a small team of data scientists 
                to a trusted partner for over 500 enterprise clients worldwide. Our platform has 
                validated over 50 million email addresses with industry-leading accuracy.
              </p>
              <Button variant="cta" size="lg" onClick={handleContactUs}>
                Get in Touch
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 shadow-professional">
                  <CardContent className="p-6">
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and drive our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center border-0 shadow-professional hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced professionals dedicated to advancing contact validation technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-professional">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Sarah Chen</h3>
                <p className="text-primary font-medium mb-2">CEO & Co-Founder</p>
                <p className="text-muted-foreground text-sm">
                  Former VP of Data at Salesforce with 15+ years in enterprise software
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-professional">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Michael Rodriguez</h3>
                <p className="text-primary font-medium mb-2">CTO & Co-Founder</p>
                <p className="text-muted-foreground text-sm">
                  Machine learning expert with PhD in Computer Science from MIT
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-professional">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Jennifer Kim</h3>
                <p className="text-primary font-medium mb-2">VP of Customer Success</p>
                <p className="text-muted-foreground text-sm">
                  Customer success leader with track record at HubSpot and Marketo
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" onClick={handleJoinTeam}>
              Join Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Security & Compliance
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We take data security seriously. Our platform is built with enterprise-grade 
                security features and maintains compliance with industry standards.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>End-to-end encryption</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Zero data retention policy</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Regular security audits</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>24/7 security monitoring</span>
                </li>
              </ul>
              <Button 
                variant="cta" 
                onClick={() => window.open("https://salescentri.com/trust/security-privacy", "_blank")}
              >
                View Security Details
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-background p-4 rounded-lg border border-border text-center font-medium shadow-professional hover:shadow-card transition-all duration-200"
                >
                  <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Charlotte Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Proudly Based in Charlotte, NC
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We're proud to call Charlotte home and contribute to the thriving technology 
              ecosystem in the Queen City. Our headquarters serves as the hub for our 
              growing team of data scientists, engineers, and customer success professionals.
            </p>
            <div className="card-professional inline-block p-8">
              <div className="flex items-center justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">Charlotte, NC</div>
                  <div className="text-muted-foreground">Headquarters</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the hundreds of businesses that trust Demandorbit for their contact validation needs.
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
              onClick={handleContactUs}
              className="border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;