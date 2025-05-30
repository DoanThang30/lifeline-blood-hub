
import { FileText, Calendar, Heart } from "lucide-react";

const DonationSteps = () => {
  const steps = [
    {
      number: "1",
      icon: FileText,
      title: "Registration",
      description: "Fill out the registration form with your basic information and health details. Make sure you are eligible to donate."
    },
    {
      number: "2", 
      icon: Calendar,
      title: "Health Screening",
      description: "Choose a donation center or a mobile blood unit event. Get a free medical check-up near you and help save the lives."
    },
    {
      number: "3",
      icon: Heart,
      title: "Donation",
      description: "Visit the donation center on your scheduled day. The actual blood donation process is only 8-12 minutes. That's it!"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">How to donate blood ?</h2>
        
        <div className="flex justify-center mb-12">
          <div className="w-16 h-1 bg-red-600"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-white border-4 border-red-600 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-red-600">{step.number}</span>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <IconComponent className="h-4 w-4 text-red-600" />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Heart with pulse animation */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center text-red-600">
            <div className="w-16 h-1 bg-red-600 mr-4"></div>
            <Heart className="h-8 w-8 animate-pulse" />
            <div className="w-16 h-1 bg-red-600 ml-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSteps;
