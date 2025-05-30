
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/472fd819-5de4-425c-a8ac-d26a72d34426.png')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            EVERY<br />
            <span className="text-red-600">DROP</span><br />
            COUNTS
          </h1>
          
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-md"
          >
            Donate Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
