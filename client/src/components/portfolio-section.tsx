import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PortfolioSection() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tag: "Digital Transformation",
      tagColor: "bg-professional-accent",
      title: "Enterprise Digital Modernization",
      description: "Spearheaded a comprehensive digital transformation for a multinational corporation, implementing cloud infrastructure and automation solutions that reduced operational costs by 40%.",
      timeline: "6-month timeline"
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tag: "Market Expansion",
      tagColor: "bg-green-500",
      title: "Global Market Entry Strategy",
      description: "Developed and executed market entry strategies for emerging economies, resulting in successful expansion into 8 new markets and 200% revenue growth.",
      timeline: "12-month timeline"
    },
    {
      image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tag: "Innovation",
      tagColor: "bg-blue-500",
      title: "Innovation Lab Setup",
      description: "Established corporate innovation labs focusing on emerging technologies, leading to 15 patents and 3 breakthrough product launches.",
      timeline: "9-month timeline"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tag: "Organizational Design",
      tagColor: "bg-purple-500",
      title: "Organizational Restructuring",
      description: "Led comprehensive organizational restructuring initiative that improved operational efficiency by 35% while maintaining employee satisfaction scores above 85%.",
      timeline: "4-month timeline"
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
