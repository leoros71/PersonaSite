import { TrendingUp, Building2, Code, Briefcase, GraduationCap } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      icon: TrendingUp,
      title: "ION Trading Specialist",
      company: "BBVA",
      period: "Feb 2023 - Present",
      description: "ION Marketview support & development of infrastructure. Providing specialized expertise in ION trading systems, architecture design, and platform optimization in hybrid work environment.",
      side: "right"
    },
    {
      icon: GraduationCap,
      title: "IT Teacher",
      company: "High School",
      period: "2020 - Feb 2022",
      description: "Teaching full-time Information Technology at high school level, developing curriculum and mentoring students in programming and computer science fundamentals.",
      side: "left"
    },
    {
      icon: Code,
      title: "E-Trading Architect",
      company: "Credit Agricole",
      period: "2010 - Aug 2017",
      description: "Managed architectural and technical projects for Fixed Income e-Trading platform across London, Paris, NY, Singapore, Tokyo, and Dubai. Led platform migrations and performance optimizations.",
      side: "right"
    },
    {
      icon: Building2,
      title: "Market Gateways & Trading Tools Developer",
      company: "ION Trading",
      period: "Mar 2001 - Mar 2010",
      description: "Managed complete lifecycle of market gateways and trading tools. Developed multi-threaded server applications for real-time financial data processing including LIFFE, CBOT, ICE, EURONEXT gateways.",
      side: "left"
    },
    {
      icon: Briefcase,
      title: "Software Engineer",
      company: "Microtest Srl",
      period: "1999 - Mar 2001",
      description: "Consultant at STMicroelectronics, programming testers in C language. Worked across Munich, Regensburg, and Toulouse design centers and production facilities.",
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
