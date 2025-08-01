import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Search, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const handleContactSupport = () => {
    window.open("https://salescentri.com/contact/support-request", "_blank");
  };

  const handleStartTrial = () => {
    window.open("https://salescentri.com/get-started/free-trial", "_blank");
  };

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Getting Started",
      faqs: [
        {
          question: "What is Contact Validator?",
          answer: "Contact Validator is a professional email verification service that validates email addresses in real-time to improve your outbound success rate. Our platform uses advanced AI algorithms to check email syntax, domain validity, and mailbox existence with 99.9% accuracy."
        },
        {
          question: "How do I get started?",
          answer: "Getting started is simple! Sign up for a free trial, upload your contact list or use our API, and start validating emails immediately. Our platform provides instant results and detailed reporting for each validation."
        },
        {
          question: "Do you offer a free trial?",
          answer: "Yes! We offer a 14-day free trial with 1,000 free validations. No credit card required to start. You can access all features of your selected plan during the trial period."
        },
        {
          question: "How accurate is the validation?",
          answer: "We guarantee 99.9% accuracy with our advanced validation engine. Our system performs multiple checks including syntax validation, domain verification, MX record lookup, and mailbox existence confirmation."
        }
      ]
    },
    {
      title: "Pricing & Plans",
      faqs: [
        {
          question: "What are your pricing plans?",
          answer: "We offer three main plans: Starter ($39/month for 5,000 validations), Professional ($129/month for 25,000 validations), and Enterprise (custom pricing for unlimited validations). Annual billing offers 25% savings."
        },
        {
          question: "Can I change my plan?",
          answer: "Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades take effect at your next billing cycle. You'll be charged or credited prorated amounts as needed."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and wire transfers for Enterprise plans. All payments are processed securely through our encrypted payment system."
        },
        {
          question: "Do you offer volume discounts?",
          answer: "Yes, we offer volume discounts for high-volume users and Enterprise customers. Contact our sales team to discuss custom pricing based on your specific validation volume requirements."
        }
      ]
    },
    {
      title: "Technical Questions",
      faqs: [
        {
          question: "How does the API work?",
          answer: "Our RESTful API allows you to integrate email validation directly into your applications. Simply make HTTP requests to our endpoints with email addresses and receive instant validation results in JSON format. We provide SDKs for popular programming languages."
        },
        {
          question: "What integrations are available?",
          answer: "We integrate with 50+ popular platforms including Salesforce, HubSpot, Marketo, Mailchimp, and more. We also offer Zapier integration and webhook support for custom workflows."
        },
        {
          question: "Can I validate emails in bulk?",
          answer: "Yes, you can upload CSV or Excel files for bulk validation. Our system can process up to 100,000 emails simultaneously with real-time progress tracking and detailed results reporting."
        },
        {
          question: "What file formats do you support?",
          answer: "We support CSV, Excel (.xlsx, .xls), and TXT file formats for bulk uploads. You can also use our API for real-time single email validation or custom integrations."
        }
      ]
    },
    {
      title: "Security & Compliance",
      faqs: [
        {
          question: "Is my data secure?",
          answer: "Absolutely. We're SOC 2 Type II certified and use bank-level security measures including 256-bit SSL encryption, secure data centers, and strict access controls. We also maintain a zero data retention policy."
        },
        {
          question: "Are you GDPR compliant?",
          answer: "Yes, we're fully GDPR and CCPA compliant. We process data according to strict privacy regulations and provide data processing agreements for Enterprise customers. We never store validated email addresses longer than necessary."
        },
        {
          question: "Do you store my email lists?",
          answer: "No, we have a zero data retention policy. Email addresses are validated in real-time and immediately discarded from our systems. We only retain validation metadata for reporting purposes."
        },
        {
          question: "What certifications do you have?",
          answer: "We maintain SOC 2 Type II certification, ISO 27001 compliance, and are GDPR/CCPA compliant. Our platform is also HIPAA-ready for healthcare customers with additional security requirements."
        }
      ]
    },
    {
      title: "Support & Training",
      faqs: [
        {
          question: "What support options are available?",
          answer: "We offer email support for all plans, live chat for Professional and Enterprise plans, and dedicated account management for Enterprise customers. Our support team is available 24/7 for critical issues."
        },
        {
          question: "Do you provide training?",
          answer: "Yes, we offer comprehensive onboarding, video tutorials, webinars, and documentation. Enterprise customers receive personalized training sessions and dedicated customer success management."
        },
        {
          question: "How quickly do you respond to support requests?",
          answer: "Response times vary by plan: Starter (24 hours), Professional (4 hours), Enterprise (1 hour). Critical issues receive immediate attention regardless of plan level."
        },
        {
          question: "Can I get help with integration?",
          answer: "Absolutely! Our technical support team can help with API integration, troubleshooting, and best practices. Enterprise customers receive dedicated technical account management and integration support."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Frequently Asked
              <span className="text-primary block">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Find answers to common questions about Contact Validator, our pricing, 
              security, and technical implementation.
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent shadow-professional"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-6">
                No questions found matching your search.
              </p>
              <Button variant="outline" onClick={() => setSearchTerm("")}>
                Clear Search
              </Button>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredFAQs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="animate-fade-in">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                    {category.title}
                  </h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex;
                      const isOpen = openItems.includes(globalIndex);
                      
                      return (
                        <Card 
                          key={faqIndex} 
                          className="border-0 shadow-professional hover:shadow-card transition-all duration-300"
                        >
                          <CardContent className="p-0">
                            <button
                              className="w-full text-left p-6 flex justify-between items-center hover:bg-muted/50 transition-colors duration-200"
                              onClick={() => toggleItem(globalIndex)}
                            >
                              <h3 className="text-lg font-semibold text-foreground pr-4">
                                {faq.question}
                              </h3>
                              {isOpen ? (
                                <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                              )}
                            </button>
                            {isOpen && (
                              <div className="px-6 pb-6">
                                <p className="text-muted-foreground leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you 
              get the most out of Contact Validator.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center border-0 shadow-professional">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                  <p className="text-muted-foreground mb-4">
                    Chat with our support team in real-time
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => window.open("https://salescentri.com/contact/support-request/live-chat", "_blank")}
                  >
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-professional">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                  <p className="text-muted-foreground mb-4">
                    Submit a detailed support request
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => window.open("https://salescentri.com/contact/support-request/submit-ticket", "_blank")}
                  >
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-professional">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Documentation</h3>
                  <p className="text-muted-foreground mb-4">
                    Browse our complete documentation
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => window.open("https://salescentri.com/docs/user-guide", "_blank")}
                  >
                    View Docs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Validate Your Contacts?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start your free trial today and see how Contact Validator can improve your outbound success rate.
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

export default FAQPage;