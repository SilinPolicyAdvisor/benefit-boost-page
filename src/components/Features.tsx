
import { CheckCircle, Search, FileText, MessageSquare } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Fast, compliant submissions with fewer errors",
      description: "Automated compliance checks ensure accurate submissions every time"
    },
    {
      icon: Search,
      title: "Automated renewals, billing & admin support", 
      description: "Streamline your administrative tasks with intelligent automation"
    },
    {
      icon: FileText,
      title: "Cross-sell HSAs, wellness, and more",
      description: "Expand your revenue with integrated ancillary products"
    },
    {
      icon: MessageSquare,
      title: "Expert support when you need it — we're here to help",
      description: "Access specialized underwriting expertise on-demand"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything You Need to <span className="text-blue-600">Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and support you need to excel in group insurance sales.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
};

export default Features;
