
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-brand-magenta to-brand-blue bg-clip-text text-transparent">
              BenefitBoost
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-brand-blue transition-colors">
              Features
            </a>
            <a href="#benefits" className="text-gray-600 hover:text-brand-blue transition-colors">
              Benefits
            </a>
            <a href="#about" className="text-gray-600 hover:text-brand-blue transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-brand-blue transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-brand-magenta hover:bg-brand-magenta/90 text-white">
              Schedule a Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
