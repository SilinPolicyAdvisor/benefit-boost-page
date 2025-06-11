
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const CTA = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-brand-magenta to-pink-900 text-white relative overflow-hidden">
      {/* Crazy background effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(232,30,99,0.2),transparent_50%)]"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(0,188,212,0.2),transparent_50%)]"></div>
      
      {/* Mouse-following effect */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-brand-blue/20 to-brand-magenta/20 rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              transform: `translateY(${scrollY * (0.1 + Math.random() * 0.4)}px)`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8 scroll-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight hover:scale-105 transition-transform duration-300">
            Ready to Connect with
            <span className="text-brand-blue animate-pulse"> AI Tools & Expert Support</span>?
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed scroll-slide-in">
            Join brokers who are leveraging our AI tools and expert network to close more deals and grow their group insurance business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 scroll-bounce-in">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-brand-blue to-cyan-500 hover:from-cyan-600 hover:to-brand-blue text-white px-12 py-6 text-lg font-semibold rounded-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 hover:scale-110 hover:rotate-1 group"
            >
              <span className="group-hover:animate-bounce">Schedule Your Call</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-12 py-6 text-lg font-semibold rounded-lg transition-all duration-500 backdrop-blur-sm hover:scale-110 hover:-rotate-1 hover:shadow-2xl"
            >
              View Our Tools
            </Button>
          </div>
          
          <div className="pt-8 border-t border-gray-700 mt-16 scroll-fade-in">
            <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">
              No setup fees • Expert consultation included • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
