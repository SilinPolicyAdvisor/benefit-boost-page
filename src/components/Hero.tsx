import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
      {/* Background decorative elements with parallax */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-brand-light-pink rounded-full blur-3xl opacity-30 transition-transform duration-75"
        style={{ transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)` }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-brand-light-blue rounded-full blur-3xl opacity-30 transition-transform duration-75"
        style={{ transform: `translateY(${-scrollY * 0.2}px) rotate(${-scrollY * 0.1}deg)` }}
      ></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-brand-magenta rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `translateY(${scrollY * (0.1 + Math.random() * 0.2)}px)`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 scroll-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight hover:scale-105 transition-transform duration-300">
                Sell Group Health Insurance{" "}
                <span className="brand-blue relative">
                  Smarter
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-magenta animate-pulse"></div>
                </span>{" "}
                with a Digital MGA
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in animation-delay-300">
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
                <div 
                  key={index} 
                  className="flex items-start gap-3 hover:translate-x-4 hover:scale-105 transition-all duration-500 scroll-slide-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0 animate-bounce" style={{ animationDelay: `${index * 200}ms` }} />
                  <span className="text-muted-foreground hover:text-brand-blue transition-colors duration-300">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 scroll-bounce-in">
              <Button 
                size="lg" 
                className="bg-brand-magenta hover:bg-brand-magenta/90 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-1 group"
              >
                <span className="group-hover:animate-pulse">Schedule a Call</span>
              </Button>
            </div>
          </div>
          
          <div className="relative scroll-scale-in">
            <div 
              className="bg-gradient-to-br from-brand-light-pink to-brand-light-blue rounded-2xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:rotate-1"
              style={{ transform: `translateY(${scrollY * -0.1}px)` }}
            >
              <div className="space-y-6">
                <div className="aspect-video bg-white rounded-lg shadow-inner flex items-center justify-center">
                  <p className="text-gray-600 text-center px-4 text-sm">
                    [Image: Modern broker dashboard showing group benefits comparison interface with multiple carrier options, digital enrollment forms, and automated workflow tools - clean, professional interface with the brand's magenta and blue color scheme]
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-center">Digital MGA Platform</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white p-3 rounded-lg border border-gray-100">
                      <div className="font-medium brand-magenta">AI Comparisons</div>
                      <div className="text-gray-600">Instant insights</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-gray-100">
                      <div className="font-medium brand-blue">Multi-Carrier</div>
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
