import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp,
  Star,
  ArrowRight,
  BarChart3,
  Target,
  Clock
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HomePage = () => {
  const [email, setEmail] = useState("");

  const handleStartTrial = () => {
    window.open("https://salescentri.com/get-started/free-trial", "_blank");
  };

  const handleBookDemo = () => {
    window.open("https://salescentri.com/get-started/book-demo", "_blank");
  };

  const handleGetPricing = () => {
    window.open("https://salescentri.com/pricing", "_blank");
  };

  const features = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Real-time Email Verification",
      description: "Validate email addresses instantly with 99.9% accuracy using advanced AI algorithms."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Data Security & Compliance",
      description: "SOC 2 certified with enterprise-grade security. GDPR and CCPA compliant."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Bulk Processing",
      description: "Process thousands of contacts simultaneously with our high-speed validation engine."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Smart Risk Scoring",
      description: "Advanced risk assessment to identify potentially problematic email addresses."
    }
  ];

  const stats = [
    { number: "99.9%", label: "Accuracy Rate" },
    { number: "500+", label: "Happy Clients" },
    { number: "50M+", label: "Emails Validated" },
    { number: "24/7", label: "Support" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechFlow Solutions",
      content: "Demandorbit improved our email delivery rate by 45%. The ROI was immediate and substantial.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Growth Dynamics",
      content: "Best contact validation platform we've used. The accuracy is unmatched and integration was seamless.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      company: "Scale Ventures",
      content: "Cut our bounce rate in half and saved countless hours. Essential tool for any sales team.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Validate Contacts.
                <span className="text-primary"> Boost Success.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Professional contact validation service that improves your outbound success rate by up to 45%. 
                Clean your data, reduce bounces, and accelerate revenue growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="hero" size="xl" onClick={handleStartTrial}>
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" onClick={handleBookDemo}>
                  Book a Demo
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>SOC 2 certified</span>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="card-professional p-8">
                <h3 className="text-xl font-semibold mb-4">Try Contact Validator</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Enter email to validate:
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@company.com"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <Button 
                    variant="cta" 
                    className="w-full" 
                    onClick={() => window.open("https://salescentri.com/solutions/use-case-navigator/demo", "_blank")}
                  >
                    Validate Email
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Try our interactive demo • No registration required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Demandorbit?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced contact validation technology trusted by sales teams worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-professional hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our customers say about their results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-professional animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Improve Your Contact Quality?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ businesses using Demandorbit to validate contacts and boost their success rates.
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
              onClick={handleGetPricing}
              className="border-white text-white hover:bg-white/10"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;