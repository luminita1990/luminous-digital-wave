
import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo1.png";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: "#home", label: "Acasă" },
    { href: "#about", label: "Despre noi" },
    // { href: "#portfolio", label: "Portofoliu" },
    { href: "#services", label: "Servicii" },
  ];

  const services = [
    "Dezvoltare Web",
    "Social Media Marketing",
    "Content Creation",
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <div className="w-20 h-20">
                  <img src={logo} alt="Logo Diana & Luminița" className="w-full h-full object-contain" />
                  </div>

                </div>
              </div>

              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Diana & Luminița
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Creăm identități digitale puternice pentru branduri prin strategii inovatoare de social media și
              dezvoltare web modernă. Transformăm viziunile în experiențe digitale memorabile.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <span>Făcut cu</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigare Rapidă</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servicii</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Diana & Luminița. Toate drepturile rezervate.
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Politica de Confidențialitate
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Termeni și Condiții
              </a>

              <Button
                onClick={scrollToTop}
                size="sm"
                className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
