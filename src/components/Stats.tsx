
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
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-light-blue to-brand-light-pink opacity-50"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            Trusted by Canada's Leading Group Benefits Brokers
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join thousands of successful brokers who are growing their group benefits business with our platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 shadow-lg">
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-brand-blue group-hover:text-brand-magenta transition-colors">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-1 text-gray-900">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
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
