import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, X, ArrowRight, Zap, Shield, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleStartTrial = () => {
    window.open("https://salescentri.com/get-started/free-trial", "_blank");
  };

  const handleContactSales = () => {
    window.open("https://salescentri.com/contact/sales-inquiry", "_blank");
  };

  const handleGetQuote = () => {
    window.open("https://salescentri.com/contact/sales-inquiry/request-quote", "_blank");
  };

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      price: isAnnual ? 29 : 39,
      period: "month",
      popular: false,
      features: [
        "5,000 validations/month",
        "Real-time API access",
        "Basic reporting",
        "Email support",
        "CSV upload/download",
        "99.9% accuracy guarantee"
      ],
      limitations: [
        "No bulk processing",
        "Limited integrations"
      ],
      cta: "Start Free Trial",
      action: handleStartTrial
    },
    {
      name: "Professional",
      description: "Ideal for growing sales teams",
      price: isAnnual ? 99 : 129,
      period: "month",
      popular: true,
      features: [
        "25,000 validations/month",
        "Bulk processing (up to 10k)",
        "Advanced analytics",
        "Priority support",
        "All integrations",
        "API webhooks",
        "Custom fields",
        "Team management"
      ],
      limitations: [],
      cta: "Start Free Trial",
      action: handleStartTrial
    },
    {
      name: "Enterprise",
      description: "For large organizations with high volume",
      price: "Custom",
      period: "",
      popular: false,
      features: [
        "Unlimited validations",
        "Advanced bulk processing",
        "Dedicated account manager",
        "SLA guarantees",
        "Custom integrations",
        "White-label options",
        "Advanced security",
        "Custom reporting"
      ],
      limitations: [],
      cta: "Contact Sales",
      action: handleContactSales
    }
  ];

  const faqs = [
    {
      question: "What's included in the free trial?",
      answer: "The free trial includes 1,000 free validations with full access to all features in your selected plan for 14 days."
    },
    {
      question: "How accurate is the validation?",
      answer: "We guarantee 99.9% accuracy with our advanced AI-powered validation engine that checks syntax, domain, and mailbox validity."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at your next billing cycle."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and wire transfers for Enterprise plans. All payments are processed securely."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Simple, Transparent
              <span className="text-primary block">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your contact validation needs. 
              All plans include our 99.9% accuracy guarantee and SOC 2 security.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  isAnnual ? 'bg-primary' : 'bg-muted'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Annual
                <span className="ml-1 text-primary font-semibold">(Save 25%)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative border-0 shadow-professional hover:shadow-card transition-all duration-300 ${
                  plan.popular ? 'scale-105 shadow-hero' : ''
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Zap className="h-4 w-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    {plan.name === "Starter" && <Users className="h-5 w-5 text-primary" />}
                    {plan.name === "Professional" && <Zap className="h-5 w-5 text-primary" />}
                    {plan.name === "Enterprise" && <Shield className="h-5 w-5 text-primary" />}
                    <CardTitle className="text-xl font-semibold">
                      {plan.name}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground">
                        /{plan.period}
                      </span>
                    )}
                  </div>
                  {isAnnual && plan.price !== "Custom" && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Billed annually
                    </p>
                  )}
                </CardHeader>
                
                <CardContent className="px-6 pb-6">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <X className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.popular ? "hero" : "cta"}
                    className="w-full"
                    onClick={plan.action}
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Enterprise Solutions
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Custom solutions for large organizations with specific requirements and high-volume needs.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Volume discounts available</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Dedicated account management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Custom SLA agreements</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>On-premise deployment options</span>
                </li>
              </ul>
              <Button variant="cta" size="lg" onClick={handleGetQuote}>
                Request Custom Quote
              </Button>
            </div>
            
            <div className="card-professional p-8">
              <h3 className="text-xl font-semibold mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact our sales team to discuss your specific requirements and get a customized quote.
              </p>
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.open("https://salescentri.com/get-started/book-demo", "_blank")}
                >
                  Schedule a Demo
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.open("https://salescentri.com/contact/sales-inquiry", "_blank")}
                >
                  Speak with Sales
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.open("https://salescentri.com/pricing/enterprise-custom", "_blank")}
                >
                  Enterprise Pricing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our pricing and plans
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-professional animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start your free trial today and experience the difference quality contact validation makes.
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
              onClick={() => window.open("https://salescentri.com/get-started/book-demo", "_blank")}
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

export default PricingPage;