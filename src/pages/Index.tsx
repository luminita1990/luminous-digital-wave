
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
// import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <Services />
      <About />
      {/* <Portfolio /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
