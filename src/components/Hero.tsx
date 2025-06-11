
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light-pink rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-light-blue rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Sell Group Health Insurance{" "}
                <span className="text-brand-blue">Smarter</span> with a Digital MGA
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Close deals faster. Save time. Grow your group benefits business.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                "AI-powered plan comparisons — show clients the best options instantly",
                "Quick quotes from top carriers, all in one platform",
                "Paperless enrolment & smart forms save you hours",
                "Fast, compliant submissions with fewer errors",
                "Automated renewals, billing & admin support",
                "Cross-sell HSAs, wellness, and more",
                "Expert support when you need it — we're here to help"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-magenta hover:bg-brand-magenta/90 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Schedule a Call
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="bg-gradient-to-br from-brand-light-pink to-brand-light-blue rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="aspect-video bg-white rounded-lg shadow-inner flex items-center justify-center">
                  <p className="text-gray-600 text-center px-4 text-sm">
                    [Image: Modern broker dashboard showing group benefits comparison interface with multiple carrier options, digital enrollment forms, and automated workflow tools - clean, professional interface with the brand&apos;s magenta and blue color scheme]
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-center">Digital MGA Platform</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white p-3 rounded-lg border border-gray-100">
                      <div className="font-medium text-brand-magenta">AI Comparisons</div>
                      <div className="text-gray-600">Instant insights</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-gray-100">
                      <div className="font-medium text-brand-blue">Multi-Carrier</div>
                      <div className="text-gray-600">One platform</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-gray-100">
                      <div className="font-medium text-green-600">Paperless</div>
                      <div className="text-gray-600">Smart forms</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-gray-100">
                      <div className="font-medium text-purple-600">Automated</div>
                      <div className="text-gray-600">Admin support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
