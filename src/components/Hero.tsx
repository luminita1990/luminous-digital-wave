import { ArrowDown, Download } from "lucide-react";
import logo1 from "@/assets/logo1.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                {/* Înlocuiește textul cu logo-ul */}
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={logo1} 
                    alt="D&L Logo" 
                    className="w-266 h-266 object-contain" 
                  />
                </div>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-blue-500 rounded-full animate-bounce flex items-center justify-center">
              <span className="text-2xl">👋</span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
        Nu ai vânzări?{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
          Poate nu ai sistemul potrivit?
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-300 mb-4">
        Noi îți construim site-ul și îți aducem clienți direct pe el.
        </h2>
        
        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
        Uită de această problemă!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
       
        </div>

        <div className="animate-bounce">
          <a href="#about" className="inline-block text-blue-400 hover:text-blue-300 transition-colors duration-300">
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;