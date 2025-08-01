import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  Shield, 
  Zap, 
  Target,
  BarChart3,
  Globe,
  Clock,
  Database,
  ArrowRight
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FeaturesPage = () => {
  const handleStartTrial = () => {
    window.open("https://salescentri.com/get-started/free-trial", "_blank");
  };

  const handleInteractiveDemo = () => {
    window.open("https://salescentri.com/solutions/use-case-navigator/demo", "_blank");
  };

  const features = [
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Real-time Email Verification",
      description: "Validate email addresses instantly with our advanced AI-powered validation engine.",
      benefits: [
        "99.9% accuracy rate guaranteed",
        "Sub-second response times",
        "Catch-all and role account detection",
        "Disposable email identification"
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance and advanced data protection.",
      benefits: [
        "SOC 2 Type II certified",
        "GDPR and CCPA compliant",
        "256-bit SSL encryption",
        "Zero data retention policy"
      ]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Bulk Processing",
      description: "Process thousands of contacts simultaneously with our high-speed validation engine.",
      benefits: [
        "Up to 100,000 emails per batch",
        "Parallel processing technology",
        "CSV and Excel file support",
        "Real-time progress tracking"
      ]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Smart Risk Scoring",
      description: "Advanced algorithms assess email deliverability risk for better decision making.",
      benefits: [
        "Proprietary risk scoring algorithm",
        "Deliverability predictions",
        "Spam trap detection",
        "Domain reputation analysis"
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and insights to optimize your email campaigns.",
      benefits: [
        "Detailed validation reports",
        "Performance metrics tracking",
        "Data quality insights",
        "Export capabilities"
      ]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Coverage",
      description: "Validate email addresses worldwide with support for international domains.",
      benefits: [
        "200+ country support",
        "International domain validation",
        "Multilingual email formats",
        "Regional compliance standards"
      ]
    }
  ];

  const integrations = [
    "Salesforce", "HubSpot", "Marketo", "Pardot", "Mailchimp", "Constant Contact",
    "Pipedrive", "Zoho", "ActiveCampaign", "ConvertKit", "SendGrid", "Campaign Monitor"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Contact Validator
              <span className="text-primary block">Features</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Comprehensive contact validation platform with enterprise-grade features 
              designed to maximize your outbound success rate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={handleStartTrial}>
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={handleInteractiveDemo}>
                Try Interactive Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-professional hover:shadow-card transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-primary flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API & Integrations */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with your existing tools and workflows. RESTful API and pre-built integrations available.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Popular Integrations</h3>
              <div className="grid grid-cols-2 gap-4">
                {integrations.map((integration, index) => (
                  <div 
                    key={index}
                    className="bg-background p-4 rounded-lg border border-border text-center font-medium hover:shadow-md transition-all duration-200"
                  >
                    {integration}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button 
                  variant="cta" 
                  onClick={() => window.open("https://salescentri.com/solutions/psa-suite/integrations", "_blank")}
                >
                  View All Integrations
                </Button>
              </div>
            </div>

            <div className="card-professional p-8">
              <div className="flex items-center space-x-4 mb-6">
                <Database className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold">RESTful API</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Full-featured API for custom integrations and automated workflows.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>RESTful JSON API</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Webhook support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>SDKs available</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Comprehensive documentation</span>
                </li>
              </ul>
              <Button 
                variant="outline" 
                onClick={() => window.open("https://salescentri.com/docs/api-reference", "_blank")}
              >
                View API Docs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Performance You Can Trust
            </h2>
            <p className="text-xl text-muted-foreground">
              Industry-leading performance metrics backed by enterprise infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-professional">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">
                  &lt; 500ms
                </div>
                <div className="text-muted-foreground">
                  Average response time
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-professional">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">
                  99.9%
                </div>
                <div className="text-muted-foreground">
                  Accuracy guarantee
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-professional">
              <CardContent className="p-8">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">
                  99.99%
                </div>
                <div className="text-muted-foreground">
                  Uptime SLA
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the Difference
          </h2>
          <p className="text-xl mb-8 opacity-90">
            See how our advanced features can transform your contact validation process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="xl" 
              onClick={handleStartTrial}
              className="bg-white text-primary hover:bg-white/90"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleInteractiveDemo}
              className="border-white text-white hover:bg-white/10"
            >
              Try Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturesPage;