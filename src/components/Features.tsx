import { CheckCircle, MessageSquare, Search, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Conversational AI Tools",
      description: "Engage prospects with intelligent chatbots and automated follow-up systems"
    },
    {
      icon: Search,
      title: "Quote Comparison Maker", 
      description: "Generate and compare quotes from multiple carriers in a professional format"
    },
    {
      icon: FileText,
      title: "Automated Proposal Generator",
      description: "Create client-ready presentations and proposals with AI assistance"
    },
    {
      icon: Users,
      title: "Expert Network Access",
      description: "Connect with underwriting experts and digital marketing specialists"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            AI Tools & Expertise at <span className="text-blue-600">Your Fingertips</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our comprehensive suite of AI-powered tools and connect with industry experts to transform your group insurance sales process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image placeholder section */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                See Our Tools in Action
              </h3>
              <p className="text-muted-foreground mb-6">
                Watch how brokers are using our AI tools to streamline their sales process and grow their business with expert support.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Schedule a Demo Call
              </Button>
            </div>
            <div className="aspect-video bg-white rounded-lg shadow-lg flex items-center justify-center">
              <p className="text-gray-600 text-center px-4">
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
