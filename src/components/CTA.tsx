
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-magenta/20 to-brand-blue/20"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(22,178,228,0.15),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-white">
            Ready to Connect with
            <span className="text-brand-blue"> AI Tools & Expert Support</span>?
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Join brokers who are leveraging our AI tools and expert network to close more deals and grow their group insurance business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-brand-blue hover:bg-blue-600 text-white px-12 py-6 text-lg font-semibold rounded-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              Schedule Your Call
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-12 py-6 text-lg font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm"
            >
              View Our Tools
            </Button>
          </div>
          
          <div className="pt-8 border-t border-gray-600 mt-16">
            <p className="text-gray-400 text-sm">
              No setup fees • Expert consultation included • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
