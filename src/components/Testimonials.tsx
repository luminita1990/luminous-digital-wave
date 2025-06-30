
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Andreea Popescu",
      rating: 5,
      text: "Colaborarea cu Diana și Luminița a fost exact ce aveam nevoie. Site-ul arată modern și funcționează impecabil, iar prezența mea pe social media a crescut vizibil. Sunt două fete muncitoare și serioase!",
      avatar: "AP",
      gradient: "from-pink-500 to-rose-400"
    },
    {
      id: 2,
      name: "Mihai Rusu",
      rating: 5,
      text: "Mi-a plăcut cât de repede au înțeles ce îmi doresc. Design-ul e clar, curat, iar pe Instagram am început să primesc mai multă interacțiune. Le recomand cu drag!",
      avatar: "MR",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      id: 3,
      name: "Vasile Maxian",
      rating: 5,
      text: "Echipa Diana & Luminița a livrat exact ce aveam nevoie: un site modern și o strategie de social media care funcționează. Profesionalism de top!",
      avatar: "VM",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      id: 4,
      name: "Adrian Mocanu",
      rating: 5,
      text: "Site-ul nostru funcționează perfect pe toate dispozitivele. Am înscrieri la consultații și deja azi am făcut una. Multumesc fetele mult de ajutor ! ",
      avatar: "AM",
      gradient: "from-orange-500 to-yellow-400"
    },
    {
      id: 5,
      role: "",
      company: "",
      name: "Elena Radu",
      rating: 5,
      text: "Multumesc pentru tot! A-ti reusit sa scoateți in evidentă toate punctele noastre forte in bannere și chiar avem m-ai multi clienti potențiali si urmăriori. Am ramas super uimita, Multumesc !",
      avatar: "ER",
      gradient: "from-green-500 to-emerald-400"
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Ce Spun Clienții
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Feedback-urile celor care au ales să colaboreze cu noi și au obținut rezultate excepționale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-full h-full text-blue-400" />
              </div>
              
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className={`bg-gradient-to-r ${testimonial.gradient} text-white font-bold`}>
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-blue-400">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ai fi următorul nostru success story?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Alătură-te comunității de clienți mulțumiți care au ales să își transforme prezența digitală cu ajutorul nostru.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">18</div>
                <div className="text-gray-400">Proiecte Finalizate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">98%</div>
                <div className="text-gray-400">Clienți Mulțumiți</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">2K</div>
                <div className="text-gray-400"> Impresii generate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
