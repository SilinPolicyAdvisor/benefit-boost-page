
const Stats = () => {
  const stats = [
    {
      number: "650K+",
      label: "Policies Sold",
      description: "Through our platform"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Rated by our advisors"
    },
    {
      number: "45%",
      label: "Faster Close Rate",
      description: "Compared to traditional methods"
    },
    {
      number: "24/7",
      label: "Expert Support",
      description: "Available when you need it"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-magenta text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-black/10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Trusted by Canada's Leading Group Benefits Brokers
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join thousands of successful brokers who are growing their group benefits business with our platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-white group-hover:text-yellow-300 transition-colors">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-1 text-white">
                  {stat.label}
                </div>
                <div className="text-sm text-white/80">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
