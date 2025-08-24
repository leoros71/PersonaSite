import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rossi.leopoldo@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+39 389 9215666"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pisa, Italy"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-professional-navy text-white" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4" data-testid="contact-title">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="contact-subtitle">
            Ready to enhance your trading systems? Let's discuss how my expertise can optimize your financial technology infrastructure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-semibold mb-6" data-testid="contact-heading">
                Get In Touch
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8" data-testid="contact-description">
                I'm always interested in discussing new opportunities in financial technology. Whether you need expertise in electronic trading systems, algorithmic trading, or platform architecture, I'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center space-x-4" data-testid={`contact-info-${index}`}>
                    <div className="bg-professional-accent p-3 rounded-lg">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">{info.label}</div>
                      <div className="text-gray-300">{info.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="pt-8">
              <h4 className="font-semibold text-lg mb-4">Follow Me</h4>
              <div className="flex space-x-4" data-testid="contact-social-links">
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-professional-accent p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                  data-testid="contact-linkedin"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-professional-accent p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                  data-testid="contact-twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-professional-accent p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                  data-testid="contact-github"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm" data-testid="contact-form">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-professional-accent focus:border-transparent text-white placeholder-gray-300"
                    placeholder="John"
                    data-testid="input-firstname"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-professional-accent focus:border-transparent text-white placeholder-gray-300"
                    placeholder="Doe"
                    data-testid="input-lastname"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-professional-accent focus:border-transparent text-white placeholder-gray-300"
                  placeholder="john@company.com"
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-professional-accent focus:border-transparent text-white placeholder-gray-300"
                  placeholder="Project Discussion"
                  data-testid="input-subject"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-professional-accent focus:border-transparent text-white placeholder-gray-300"
                  placeholder="Tell me about your project..."
                  data-testid="textarea-message"
                />
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-professional-accent hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                data-testid="button-send-message"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
