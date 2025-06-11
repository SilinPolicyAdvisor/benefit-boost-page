
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const Benefits = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => {
              const newVisible = [...prev];
              newVisible[parseInt(entry.target.getAttribute('data-index') || '0')] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll('.benefit-item');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      title: "Close More Group Deals Faster",
      description: "Advanced technology platform streamlines your sales process from quote to close",
      highlight: "3x Faster",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Instant Quote Generation & Comparison", 
      description: "Generate multiple carrier quotes in seconds, not hours, giving you competitive edge in client meetings",
      highlight: "Real-time",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Expert Underwriting Support On-Demand",
      description: "Access specialized underwriting expertise for complex group cases without the overhead",
      highlight: "24/7 Available",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Client-Ready Presentations at Your Fingertips",
      description: "Professional quote comparisons and proposals that impress prospects and accelerate decisions",
      highlight: "Auto-generated",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Advanced Market Solutions",
      description: "Navigate challenging group insurance placements with technology-backed expert guidance",
      highlight: "Expert-backed",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Strategic Lead Origination Engine",
      description: "Proprietary prospecting algorithms and market intelligence deliver qualified group insurance opportunities directly to your pipeline",
      highlight: "AI-powered",
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Performance Marketing Amplification",
      description: "Comprehensive digital marketing support including LinkedIn campaigns, content marketing, and thought leadership positioning to establish market authority",
      highlight: "Full-service",
      color: "from-rose-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="benefits">
      {/* Crazy animated background */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-20 h-20 rounded-full opacity-5 animate-spin"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, #D81671, #16B2E4)`,
              animationDuration: `${10 + Math.random() * 20}s`,
              animationDirection: Math.random() > 0.5 ? 'normal' : 'reverse',
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 hover:scale-105 transition-transform duration-300">
            Why Choose Our <span className="brand-blue animate-pulse">Digital MGA Platform</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your group insurance business with cutting-edge technology and expert support.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              data-index={index}
              className={`benefit-item group bg-white p-8 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:border-brand-blue/20 hover:scale-105 hover:rotate-1 ${
                visibleItems[index] ? 'animate-bounce' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-brand-blue transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <span className={`bg-gradient-to-r ${benefit.color} text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg hover:scale-110 transition-transform duration-300`}>
                      {benefit.highlight}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
