
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import WhyDonate from "@/components/WhyDonate";
import DonationSteps from "@/components/DonationSteps";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <WhyDonate />
      <DonationSteps />
      <Footer />
    </div>
  );
};

export default Index;
