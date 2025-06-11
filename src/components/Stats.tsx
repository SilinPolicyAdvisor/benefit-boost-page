
import { useEffect, useState } from "react";

const Stats = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('stats');
    if (section) observer.observe(section);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const stats = [
    {
      number: "650K+",
      label: "Policies Sold",
      description: "Through our platform",
      icon: "📊"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Rated by our advisors",
      icon: "⭐"
    },
    {
      number: "45%",
      label: "Faster Close Rate",
      description: "Compared to traditional methods",
      icon: "⚡"
    },
    {
      number: "24/7",
      label: "Expert Support",
      description: "Available when you need it",
      icon: "🎯"
    }
  ];

  return (
    <section id="stats" className="py-20 bg-gradient-to-r from-brand-blue to-cyan-500 text-white relative overflow-hidden">
      {/* Crazy background effects */}
      <div className="absolute inset-0 bg-blue-800/20 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      
      {/* Floating elements with parallax */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateY(${scrollY * (0.1 + Math.random() * 0.3)}px)`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
            Trusted by Canada's Leading Group Benefits Brokers
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join thousands of successful brokers who are growing their group benefits business with our platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center group hover:scale-110 transition-all duration-700 ${
                isVisible ? 'animate-bounce' : 'opacity-0 translate-y-10'
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:rotate-3 hover:shadow-2xl">
                <div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-white group-hover:text-yellow-300 transition-colors duration-300 hover:animate-pulse">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-1 text-blue-100 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
                <div className="text-sm text-blue-200 group-hover:text-blue-100 transition-colors duration-300">
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
