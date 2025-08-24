import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PortfolioSection() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tag: "Algorithmic Trading",
      tagColor: "bg-professional-accent",
      title: "High Frequency Trading Platform",
      description: "Developed from scratch a custom trading platform in Java with simulation environment, live market data gateway to Borsa Italiana, and algorithmic trading capabilities with Monte Carlo simulation.",
      timeline: "2018-2020"
    },
    {
      image: "https://images.unsplash.com/photo-1642790551116-18e150f248e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tag: "Trading Infrastructure",
      tagColor: "bg-green-500",
      title: "CA-CIB Fixed Income Platform",
      description: "Managed architectural projects for global e-Trading platform across 6 regions. Migrated platform to tree architecture, optimized topology, and implemented performance monitoring systems.",
      timeline: "2010-2017"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tag: "Market Gateways",
      tagColor: "bg-blue-500",
      title: "ION Trading Gateways",
      description: "Developed multiple market gateways in C++ and Java for major exchanges including LIFFE, CBOT, ICE, EURONEXT. Implemented algorithmic trading components and real-time data processing systems.",
      timeline: "2001-2010"
    },
    {
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tag: "Innovation",
      tagColor: "bg-purple-500",
      title: "Nano-Electronic pH Sensor",
      description: "Designed and developed an innovative nano-electronic pH sensor during research at Durham University, resulting in published research and patent applications in molecular electronics.",
      timeline: "1999"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50" data-testid="portfolio-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-professional-navy mb-4" data-testid="portfolio-title">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600" data-testid="portfolio-subtitle">
            Strategic initiatives that transformed organizations and delivered measurable impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-testid={`portfolio-project-${index}`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover" 
                data-testid={`project-image-${index}`}
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span 
                    className={`${project.tagColor} text-white px-3 py-1 rounded-full text-sm font-medium`}
                    data-testid={`project-tag-${index}`}
                  >
                    {project.tag}
                  </span>
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-professional-navy mb-4" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500" data-testid={`project-timeline-${index}`}>
                    {project.timeline}
                  </div>
                  <button 
                    className="text-professional-accent hover:text-professional-navy font-medium transition-colors duration-300 flex items-center gap-2"
                    data-testid={`project-case-study-${index}`}
                  >
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-professional-navy hover:bg-professional-dark text-white px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105"
            data-testid="button-view-all-projects"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
