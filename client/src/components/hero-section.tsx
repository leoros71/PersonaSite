import { ChevronDown, Linkedin, Twitter, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center bg-gradient-professional text-white relative overflow-hidden"
      data-testid="hero-section"
    >
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern office background" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="hero-title">
              Hello, I'm <span className="text-gradient">Leopoldo Rossi</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8" data-testid="hero-subtitle">
              E-Trading Architect & ION Trading Specialist
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed" data-testid="hero-description">
              Specializing in electronic trading systems, algorithmic trading solutions, and financial markets technology with 25+ years of experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={() => handleScrollToSection("#portfolio")}
                className="bg-professional-accent hover:bg-yellow-600 text-white px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105"
                data-testid="button-view-work"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => handleScrollToSection("#contact")}
                className="border-2 border-white hover:bg-white hover:text-professional-navy text-white px-8 py-3 font-semibold transition-all duration-300"
                data-testid="button-contact"
              >
                Get In Touch
              </Button>
            </div>
            
            <div className="flex space-x-6" data-testid="social-links">
              <a 
                href="#" 
                className="text-gray-300 hover:text-professional-accent transition-colors duration-300 transform hover:scale-110"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-professional-accent transition-colors duration-300 transform hover:scale-110"
                data-testid="link-twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-professional-accent transition-colors duration-300 transform hover:scale-110"
                data-testid="link-github"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-professional-accent transition-colors duration-300 transform hover:scale-110"
                data-testid="link-email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="lg:flex justify-center items-center animate-float">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800" 
              alt="Professional headshot" 
              className="rounded-full w-80 h-80 object-cover shadow-2xl border-4 border-white/20" 
              data-testid="hero-image"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => handleScrollToSection("#about")}
          className="text-white/70 hover:text-white transition-colors duration-300"
          data-testid="scroll-indicator"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
