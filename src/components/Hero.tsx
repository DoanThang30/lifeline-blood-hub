
import { Button } from "@/components/ui/button";
import { Heart, Users, MapPin, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blood-red-light via-white to-blood-blue-light py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blood-red rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blood-blue rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blood-green rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-6 w-6 text-blood-red animate-pulse-heart" />
              <span className="text-blood-red font-semibold">Save Lives Today</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Every Drop
              <span className="block text-blood-red">Counts</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join our community of life-savers. Donate blood, save lives, and make a difference in your community. Your donation can help up to 3 people in need.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-blood-red hover:bg-blood-red-dark text-lg px-8 py-4">
                <Heart className="mr-2 h-5 w-5" />
                Donate Blood
              </Button>
              <Button size="lg" variant="outline" className="border-blood-red text-blood-red hover:bg-blood-red hover:text-white text-lg px-8 py-4">
                Find Blood
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blood-red-light rounded-lg mb-2 mx-auto">
                  <Users className="h-6 w-6 text-blood-red" />
                </div>
                <p className="text-2xl font-bold text-gray-900">50K+</p>
                <p className="text-sm text-gray-600">Donors</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blood-blue-light rounded-lg mb-2 mx-auto">
                  <Heart className="h-6 w-6 text-blood-blue" />
                </div>
                <p className="text-2xl font-bold text-gray-900">150K+</p>
                <p className="text-sm text-gray-600">Lives Saved</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blood-green-light rounded-lg mb-2 mx-auto">
                  <MapPin className="h-6 w-6 text-blood-green" />
                </div>
                <p className="text-2xl font-bold text-gray-900">200+</p>
                <p className="text-sm text-gray-600">Locations</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blood-red to-blood-red-dark rounded-2xl p-8 text-white">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4">
                  <Heart className="h-10 w-10 text-white animate-pulse-heart" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Blood Donation Drive</h3>
                <p className="text-white/90">Next drive in your area</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-white/80" />
                  <span>Tomorrow, 9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-white/80" />
                  <span>Community Center, Main Street</span>
                </div>
              </div>

              <Button className="w-full mt-6 bg-white text-blood-red hover:bg-gray-100">
                Reserve Your Slot
              </Button>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blood-blue rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blood-green rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
