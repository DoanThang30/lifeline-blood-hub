
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-red-600" />
            <span className="text-xl font-bold text-gray-900">LifeLine</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              About Us
            </a>
            <a href="#find" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Find Blood
            </a>
            <a href="#register" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Register Now
            </a>
          </nav>

          {/* Login Button */}
          <div className="hidden md:flex">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              Log In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-gray-700"></div>
              <div className="w-full h-0.5 bg-gray-700"></div>
              <div className="w-full h-0.5 bg-gray-700"></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors">
                About Us
              </a>
              <a href="#find" className="text-gray-700 hover:text-red-600 transition-colors">
                Find Blood
              </a>
              <a href="#register" className="text-gray-700 hover:text-red-600 transition-colors">
                Register Now
              </a>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 mt-4">
                Log In
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
