
import { CheckCircle } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "Close More Group Deals Faster",
      description: "Advanced technology platform streamlines your sales process from quote to close",
      highlight: "3x Faster"
    },
    {
      title: "Instant Quote Generation & Comparison", 
      description: "Generate multiple carrier quotes in seconds, not hours, giving you competitive edge in client meetings",
      highlight: "Real-time"
    },
    {
      title: "Expert Underwriting Support On-Demand",
      description: "Access specialized underwriting expertise for complex group cases without the overhead",
      highlight: "24/7 Available"
    },
    {
      title: "Client-Ready Presentations at Your Fingertips",
      description: "Professional quote comparisons and proposals that impress prospects and accelerate decisions",
      highlight: "Auto-generated"
    },
    {
      title: "Advanced Market Solutions",
      description: "Navigate challenging group insurance placements with technology-backed expert guidance",
      highlight: "Expert-backed"
    },
    {
      title: "Strategic Lead Origination Engine",
      description: "Proprietary prospecting algorithms and market intelligence deliver qualified group insurance opportunities directly to your pipeline",
      highlight: "AI-powered"
    },
    {
      title: "Performance Marketing Amplification",
      description: "Comprehensive digital marketing support including LinkedIn campaigns, content marketing, and thought leadership positioning to establish market authority",
      highlight: "Full-service"
    }
  ];

  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose Our <span className="text-brand-blue">Digital MGA Platform</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your group insurance business with cutting-edge technology and expert support.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-blue/20 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-brand-blue transition-colors">
                      {benefit.title}
                    </h3>
                    <span className="bg-brand-light-blue text-brand-blue px-2 py-1 rounded-full text-xs font-medium">
                      {benefit.highlight}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
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
