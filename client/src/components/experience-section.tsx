import { Briefcase, TrendingUp, Rocket } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      icon: Briefcase,
      title: "Senior Strategy Director",
      company: "Global Tech Solutions Inc.",
      period: "2021 - Present",
      description: "Led digital transformation initiatives for Fortune 500 clients, resulting in 35% average efficiency improvements and $50M+ in cost savings.",
      side: "right"
    },
    {
      icon: TrendingUp,
      title: "Business Strategy Manager",
      company: "Innovation Dynamics Corp.",
      period: "2018 - 2021",
      description: "Developed and executed strategic plans for emerging market expansion, achieving 150% revenue growth and market penetration in 12 new territories.",
      side: "left"
    },
    {
      icon: Rocket,
      title: "Project Manager",
      company: "StartUp Accelerator Hub",
      period: "2015 - 2018",
      description: "Managed cross-functional teams for high-impact projects, delivering solutions on time and under budget while maintaining exceptional quality standards.",
      side: "right"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white" data-testid="experience-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-professional-navy mb-4" data-testid="experience-title">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600" data-testid="experience-subtitle">
            A proven track record of delivering exceptional results across diverse industries.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-professional-accent h-full" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div 
                  key={index}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                  data-testid={`experience-item-${index}`}
                >
                  {exp.side === "right" && (
                    <div className="flex-1 md:pr-8 md:text-right">
                      <div className="bg-white p-6 rounded-xl shadow-lg ml-8 md:ml-0">
                        <h3 className="font-semibold text-xl text-professional-navy mb-2" data-testid={`experience-title-${index}`}>
                          {exp.title}
                        </h3>
                        <h4 className="text-professional-accent font-medium mb-3" data-testid={`experience-company-${index}`}>
                          {exp.company}
                        </h4>
                        <p className="text-gray-600 mb-3" data-testid={`experience-period-${index}`}>
                          {exp.period}
                        </p>
                        <p className="text-gray-700" data-testid={`experience-description-${index}`}>
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-professional-accent rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                  
                  {exp.side === "left" && (
                    <div className="flex-1 md:pl-8">
                      <div className="bg-white p-6 rounded-xl shadow-lg ml-8 md:ml-0">
                        <h3 className="font-semibold text-xl text-professional-navy mb-2" data-testid={`experience-title-${index}`}>
                          {exp.title}
                        </h3>
                        <h4 className="text-professional-accent font-medium mb-3" data-testid={`experience-company-${index}`}>
                          {exp.company}
                        </h4>
                        <p className="text-gray-600 mb-3" data-testid={`experience-period-${index}`}>
                          {exp.period}
                        </p>
                        <p className="text-gray-700" data-testid={`experience-description-${index}`}>
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {exp.side === "right" && <div className="flex-1 md:pl-8 hidden md:block" />}
                  {exp.side === "left" && <div className="flex-1 md:pr-8 hidden md:block" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
