
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
                Connect with AI Tools & Expertise to{" "}
                <span className="text-blue-600">Sell Group Insurance</span>{" "}
                <span className="text-cyan-600">Smarter</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Access our AI-powered tools, expert support, and digital marketing expertise to close deals faster and grow your group benefits business.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                "AI-powered plan comparisons — show clients the best options instantly",
                "Conversational AI tools to engage prospects effectively",
                "Expert underwriting support and digital marketing expertise"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Schedule a Call
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600 text-center px-4">
                    [Image: Professional insurance broker using AI tools on laptop, modern office setting with charts and data visualizations in background]
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-center">AI-Powered Broker Platform</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="font-medium text-blue-800">Conversational AI</div>
                      <div className="text-blue-600">Engage prospects</div>
                    </div>
                    <div className="bg-cyan-50 p-3 rounded-lg">
                      <div className="font-medium text-cyan-800">Quote Comparison</div>
                      <div className="text-cyan-600">Multiple carriers</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="font-medium text-green-800">Expert Support</div>
                      <div className="text-green-600">24/7 available</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <div className="font-medium text-purple-800">Digital Marketing</div>
                      <div className="text-purple-600">Lead generation</div>
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
