import { Code, Palette, Target, TrendingUp } from "lucide-react";
import team1 from "@/assets/team1.png";
import team2 from "@/assets/team2.png";

const About = () => {
  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Social Media Strategy", level: 95 },
    { name: "Instagram & Facebook Marketing", level: 93 },
    { name: "Content Creation", level: 90 },
  ];

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Creez experiențe web moderne și responsive cu React, HTML5, CSS3 și JavaScript.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Social Media Marketing",
      description: "Dezvolt strategii eficiente de Marketing online.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & UX",
      description: "Combin designul atractiv cu funcționalitatea pentru rezultate optimale.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Conținut Social Media",
      description: "Setez campanii targetate pe Instagram,Facebook și site care transformă vizitatorii în cumpărători.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Despre Noi
            </span>
          </h2>

        {/* Cele 2 poze una lângă alta */}
        <div className="flex justify-center gap-8 mb-6 flex-wrap">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-400 shadow-md">
              <img src={team1} alt="Luminița" className="w-full h-full object-cover"/>
            </div>
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-cyan-400 shadow-md">
              <img src={team2} alt="Diana" className="w-full h-full object-cover" />
            </div>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Noi te luăm de la 0 și te ducem la un sistem funcțional care îți aduce clienți constant.
            <br />
            Nu promitem miracole. Construim rezultate reale.
          </p>
        </div>

        {/* Experiență și Skills */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Experiența Noastră</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-xl font-semibold mb-2">Frontend Developer - Luminița</h4>
                <p className="text-gray-300 mb-2">2+ ani experiență</p>
                <p className="text-gray-400">
                  ✅ Realizez site-uri moderne, rapide și ușor de folosit, folosind React și Tailwind CSS. <br />
                  ✅ Pun accent pe un design plăcut și o experiență bună pentru utilizatori.
                </p>
              </div>

              <div className="border-l-4 border-cyan-400 pl-6">
                <h4 className="text-xl font-semibold mb-2">Social Media Expert - Diana</h4>
                <p className="text-gray-300 mb-2">2+ ani experiență</p>
                <p className="text-gray-400">
                  ✅ Creez reclame targetate care apar exact în fața clientului tău ideal. <br />
                  ✅ Direcționez traficul direct spre site-ul tău, astfel încât potențialii clienți să vadă, să cunoască și să cumpere. <br />
                  ✅ Construiesc campanii cu scop clar: creștere, atragere de clienți sau vânzare imediată.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Abilitățile Noastre</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-blue-500/50"
            >
              <div className="text-blue-400 mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-3 text-white">{item.title}</h4>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
