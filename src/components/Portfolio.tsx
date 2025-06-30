
// import { ExternalLink, Github } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// const Portfolio = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "E-commerce Modern",
//       category: "Web Development",
//       description: "Platformă e-commerce completă cu React și integrare de plăți",
//       image: "/placeholder.svg?height=300&width=400",
//       tags: ["React", "Tailwind", "Stripe"],
//       liveUrl: "#",
//       githubUrl: "#",
//     },
//     {
//       id: 2,
//       title: "Campanie Instagram Brand Fashion",
//       category: "Social Media",
//       description: "Creștere organică de 300% în 6 luni pentru brand de fashion",
//       image: "/placeholder.svg?height=300&width=400",
//       tags: ["Instagram", "Content Strategy", "Influencer Marketing"],
//       liveUrl: "#",
//       githubUrl: "#",
//     },
//     {
//       id: 3,
//       title: "Dashboard Analytics",
//       category: "Web Development",
//       description: "Interface admin cu charts interactive și real-time data",
//       image: "/placeholder.svg?height=300&width=400",
//       tags: ["React", "Charts.js", "API Integration"],
//       liveUrl: "#",
//       githubUrl: "#",
//     },
//     {
//       id: 4,
//       title: "TikTok Viral Strategy",
//       category: "Social Media",
//       description: "10M+ views pentru campania de lansare produs tech",
//       image: "/placeholder.svg?height=300&width=400",
//       tags: ["TikTok", "Viral Marketing", "UGC"],
//       liveUrl: "#",
//       githubUrl: "#",
//     },
//     {
//       id: 5,
//       title: "Restaurant Website",
//       category: "Web Development",
//       description: "Site responsive cu sistem de rezervări și meniu online",
//       image: "/placeholder.svg?height=300&width=400",
//       tags: ["HTML5", "CSS3", "JavaScript"],
//       liveUrl: "#",
//       githubUrl: "#",
//     },
//     {
//       id: 6,
//       title: "Brand Identity Digital",
//       category: "Social Media",
//       description: "Identitate vizuală completă pentru startup tech",
//       image: "/placeholder.svg?height=300&width=400",
//       tags: ["Branding", "Visual Identity", "Social Templates"],
//       liveUrl: "#",
//       githubUrl: "#",
//     },
//   ];

//   const categories = ["Toate", "Web Development", "Social Media"];

//   return (
//     <section id="portfolio" className="py-20 px-4">
//       <div className="container mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
//               Portofoliul Nostru
//             </span>
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
//             Proiecte care demonstrează expertiza noastră în dezvoltarea web și strategiile de social media
//           </p>
          
//           <div className="flex justify-center gap-4 mb-12">
//             {categories.map((category) => (
//               <Button
//                 key={category}
//                 variant={category === "Toate" ? "default" : "outline"}
//                 className={category === "Toate" 
//                   ? "bg-blue-500 hover:bg-blue-600" 
//                   : "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900"
//                 }
//               >
//                 {category}
//               </Button>
//             ))}
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <Card key={project.id} className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group">
//               <div className="relative overflow-hidden">
//                 <img 
//                   src={project.image} 
//                   alt={project.title}
//                   className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
//                 <div className="absolute top-4 right-4">
//                   <span className="bg-blue-500/80 text-white px-3 py-1 rounded-full text-sm">
//                     {project.category}
//                   </span>
//                 </div>
//               </div>
              
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-400 mb-4 line-clamp-2">
//                   {project.description}
//                 </p>
                
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.tags.map((tag, index) => (
//                     <span 
//                       key={index}
//                       className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
                
//                 <div className="flex gap-3">
//                   <Button 
//                     size="sm" 
//                     className="bg-blue-500 hover:bg-blue-600 flex-1"
//                     asChild
//                   >
//                     <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                       <ExternalLink className="w-4 h-4 mr-2" />
//                       Live Demo
//                     </a>
//                   </Button>
                  
//                   {project.category === "Web Development" && (
//                     <Button 
//                       size="sm" 
//                       variant="outline" 
//                       className="border-gray-600 text-gray-300 hover:bg-gray-700"
//                       asChild
//                     >
//                       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                         <Github className="w-4 h-4" />
//                       </a>
//                     </Button>
//                   )}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;
