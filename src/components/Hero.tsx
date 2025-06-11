
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-200/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Sell Group Health Insurance{" "}
                <span className="text-blue-600">Smarter</span> with a{" "}
                <span className="text-cyan-600">Digital MGA</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Close deals faster, save time, and grow your group benefits business with our AI-powered platform.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                "AI-powered plan comparisons — show clients the best options instantly",
                "Quick quotes from top carriers, all in one platform",
                "Paperless enrolment & smart forms save you hours"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Start Free Demo
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300">
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Quote Comparison</h3>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Live Data
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { carrier: "Carrier A", premium: "$2,340", savings: "Best Value" },
                    { carrier: "Carrier B", premium: "$2,580", savings: "Premium" },
                    { carrier: "Carrier C", premium: "$2,720", savings: "Standard" }
                  ].map((quote, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border hover:border-blue-300 transition-colors">
                      <div>
                        <div className="font-medium">{quote.carrier}</div>
                        <div className="text-sm text-muted-foreground">{quote.savings}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">{quote.premium}</div>
                        <div className="text-sm text-muted-foreground">per month</div>
                      </div>
                    </div>
                  ))}
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
