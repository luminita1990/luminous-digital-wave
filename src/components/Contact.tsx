
import { useState } from "react";
import { Send, Mail, Phone, MapPin, Linkedin, Instagram, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Configurează EmailJS cu datele tale
      const result = await emailjs.send(
        'service_fv4q5ns', // Înlocuiește cu Service ID-ul tău de la EmailJS
        'template_xcw87ad', // Înlocuiește cu Template ID-ul tău de la EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email, // 👈 Acest câmp e esențial
          subject: formData.subject,
          message: formData.message,
          to_name: 'Diana & Luminița',
          
        },
        'bBFn5-eYZDUzy7b6P' // Înlocuiește cu Public Key-ul tău de la EmailJS
      );

      // const result = await emailjs.send(
      //   import.meta.env.VITE_EMAILJS_SERVICE_ID,
      //   import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      //   {
      //     from_name: formData.name,
      //     from_email: formData.email,
      //     subject: formData.subject,
      //     message: formData.message,
      //     to_name: 'Diana & Luminița',
      //   },
      //   import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      // );
      

      if (result.status === 200) {
        toast({
          title: "Mesaj trimis cu succes!",
          description: "Îți vom răspunde în cel mai scurt timp posibil.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Eroare la trimiterea mesajului",
        description: "Te rugăm să încerci din nou sau să ne contactezi direct.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "contact.dlsystems@gmail.com",
      gradient: "from-blue-500 to-cyan-400"
    },
    // {
    //   icon: <Phone className="w-6 h-6" />,
    //   title: "Telefon",
    //   content: "+40 712",
    //   gradient: "from-purple-500 to-pink-400"
    // },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Locație",
      content: "Europa",
      gradient: "from-orange-500 to-yellow-400"
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/luminita-learscaia-3747762a3/",
      color: "hover:text-blue-400"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      url: "https://www.instagram.com/dianaa_target?igsh=bmJwZ2VtbXd5a3F6&utm_source=qr",
      color: "hover:text-pink-400"
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/luminita1990",
      color: "hover:text-gray-400"
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Să Vorbim
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Gata să îți transformi prezența digitală? Contactează-ne pentru o consultație gratuită!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                Trimite-ne un Mesaj
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nume *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                      placeholder="Numele tău"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                      placeholder="email@exemplu.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Vă rugăm să indicați un număr de telefon *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                    placeholder=""
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mesaj *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                    placeholder="Descrie-ne proiectul tău..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-medium py-3 transition-all duration-300 transform hover:scale-105"
                >
                  {isLoading ? (
                    "Se trimite..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Trimite Mesajul
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Informații de Contact
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors duration-300">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.gradient} flex items-center justify-center`}>
                      <div className="text-white">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{info.title}</h4>
                      <p className="text-gray-300">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Urmărește-ne
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-blue-500/50`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-2xl p-6 border border-blue-500/20">
              <h4 className="text-xl font-bold mb-3 text-white">
                Consultație Gratuită
              </h4>
              <p className="text-gray-300 mb-4">
                Oferim o consultație gratuită de 30 de minute pentru a discuta despre proiectul tău și cum te putem ajuta.
              </p>
              <Button 
                className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white"
                asChild
              >
                <a href="mailto:contact.dlsystems@gmail.com">Programează Consultația</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
