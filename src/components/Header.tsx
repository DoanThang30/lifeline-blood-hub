
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-blood-red p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white animate-pulse-heart" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">LifeLine</h1>
              <p className="text-xs text-gray-500">Blood Hub</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blood-red transition-colors">
              Home
            </a>
            <a href="#donate" className="text-gray-700 hover:text-blood-red transition-colors">
              Donate
            </a>
            <a href="#request" className="text-gray-700 hover:text-blood-red transition-colors">
              Request Blood
            </a>
            <a href="#about" className="text-gray-700 hover:text-blood-red transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blood-red transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" className="border-blood-red text-blood-red hover:bg-blood-red hover:text-white">
              Sign In
            </Button>
            <Button className="bg-blood-red hover:bg-blood-red-dark">
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blood-red transition-colors">
                Home
              </a>
              <a href="#donate" className="text-gray-700 hover:text-blood-red transition-colors">
                Donate
              </a>
              <a href="#request" className="text-gray-700 hover:text-blood-red transition-colors">
                Request Blood
              </a>
              <a href="#about" className="text-gray-700 hover:text-blood-red transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blood-red transition-colors">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <Button variant="outline" className="border-blood-red text-blood-red hover:bg-blood-red hover:text-white">
                  Sign In
                </Button>
                <Button className="bg-blood-red hover:bg-blood-red-dark">
                  Donate Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
