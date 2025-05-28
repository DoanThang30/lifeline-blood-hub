
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DonationProcess from "@/components/DonationProcess";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <DonationProcess />
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;
