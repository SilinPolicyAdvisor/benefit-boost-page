
import { MessageSquare, Search, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('features');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: MessageSquare,
      title: "Conversational AI Tools",
      description: "Engage prospects with intelligent chatbots and automated follow-up systems",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Search,
      title: "Quote Comparison Maker", 
      description: "Generate and compare quotes from multiple carriers in a professional format",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileText,
      title: "Automated Proposal Generator",
      description: "Create client-ready presentations and proposals with AI assistance",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Expert Network Access",
      description: "Connect with underwriting experts and digital marketing specialists",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-light-blue/20 to-brand-light-pink/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(22,178,228,0.1),transparent_70%)] animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(216,22,113,0.1),transparent_70%)] animate-pulse animation-delay-1000"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 hover:scale-105 transition-transform duration-300">
            AI Tools & Expertise at <span className="brand-blue animate-pulse">Your Fingertips</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our comprehensive suite of AI-powered tools and connect with industry experts to transform your group insurance sales process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group p-6 rounded-xl bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 scroll-slide-in hover:scale-110 hover:-rotate-1 ${
                isVisible ? 'animate-bounce' : ''
              }`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                transform: isVisible ? `translateY(0)` : `translateY(50px)`,
                transition: `all 0.6s ease ${index * 0.1}s`
              }}
            >
              <div className="mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-brand-magenta transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Updated demo section with crazy effects */}
        <div className="bg-gradient-to-r from-brand-light-pink to-brand-light-blue rounded-2xl p-8 scroll-scale-in hover:scale-105 transition-all duration-500 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="scroll-slide-in">
              <h3 className="text-2xl font-bold text-foreground mb-4 hover:text-brand-magenta transition-colors duration-300">
                See Our Tools in Action
              </h3>
              <p className="text-muted-foreground mb-6">
                Watch how brokers are using our AI tools to streamline their sales process and grow their business with expert support.
              </p>
              <Button className="bg-brand-magenta hover:bg-brand-magenta/90 text-white hover:scale-110 hover:rotate-1 transition-all duration-300 shadow-lg hover:shadow-brand-magenta/25">
                Schedule a Demo Call
              </Button>
            </div>
            <div className="aspect-video bg-white rounded-lg shadow-2xl flex items-center justify-center hover:scale-105 hover:shadow-3xl transition-all duration-500 scroll-bounce-in">
              <p className="text-gray-600 text-center px-4 animate-pulse">
                [Image: Split screen showing broker on video call with AI tools interface, dashboard with analytics, quote comparisons, and chat interface visible]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
