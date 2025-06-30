
import { Code, Palette, Search, TrendingUp, Smartphone, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "1️⃣ Descoperire & Strategie",
      description: "",
      features: [
        "Te cunoaștem, înțelegem ce vinzi și cui te adresezi",
        "Analizăm piața, concurența și identificăm publicul ideal",
        "Creăm strategia de promovare: unde, cui și cum vindem"
      ],
      price: "",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "2️⃣ Creare site profesional (100% adaptat strategiei)",
      description: "",
      features: [
        "Construim un site care vinde, nu doar ,,arată bine'' ",
        "Design curat, ușor de folosit și optimizat pentru mobil",
        "Scriem textele captivante și alegem imagini care atrag",
      ],
      price: "",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "3️⃣ Creăm conținut publicitar (vizual + text)",
      description: "",
      features: [
        "Design bannere și vizuale calitative pentru reclame",
        "Mesaje clare, autentice care atrag clienții",
        "Titluri atractive care convertesc vizitatorii în clienți"
      ],
      price: "",
      gradient: "from-pink-500 to-rose-400"
    },
    {
      icon: <Palette className="w-42 h-42" />,
      title: "4️⃣ Lansăm Reclamele",
      description: "",
      features: [
        "Creăm campanii bine gândite, targetate pe Facebook & Instagram",
        "Direcționăm oamenii direct pe site-ul tău",
        "Testăm, analizăm și optimizăm continuu timp de 8 săptămâni",
      ],
      price: "",
      gradient: "from-cyan-500 to-blue-400"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "5️⃣ Timp de 8 săptămâni — scalezi cu noi",
      description: "",
      features: [
        "În primele 2-4 săptămâni validăm audiența și site-ul",
        "În următoarele 4 săptămâni, creștem bugetul și vânzările",
        "Vezi rezultate reale, clienți constanți, cereri, vânzări",
        
      ],
      price: "",
      gradient: "from-orange-500 to-yellow-400"
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: "🔒 Ce obții lucrând cu noi:",
      description: "",
      features: [
        "Un site care vinde (nu doar o pagină frumoasă)",
        "Reclame create cu strategie, testate și optimizate",
        "Timp câștigat — pentru că nu mai alergi tu după clienți",
        "O afacere care funcționează 24/7 — și aduce profit",
      ],
      price: "",
      gradient: "from-green-500 to-emerald-400"
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Serviciile noastre <br />
            <br />
            Cum funcționează tot procesul (pas cu pas):
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-400 text-center leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-700">
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                  </div>

                  <Button
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-medium transition-all duration-300`}
                    asChild
                  >
                    <a href="#contact">Află mai multe</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ai nevoie de un pachet personalizat?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Combină serviciile noastre pentru rezultate maxime. Oferim pachete complete adaptate nevoilor tale specifice.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="#contact">Discută cu Noi</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
