import { Code2, TrendingUp, Zap, Database, Settings, Globe } from "lucide-react";

export default function SkillsSection() {
  const skills = [
    {
      icon: Code2,
      title: "Software Development",
      description: "Expert in C++, Java, and financial software development with 25+ years of experience.",
      tags: ["C/C++", "Java", "Multi-threading"]
    },
    {
      icon: TrendingUp,
      title: "Algorithmic Trading",
      description: "Developed custom trading platforms and algorithmic strategies for high-frequency trading.",
      tags: ["HFT", "Trading Algorithms", "Risk Management"]
    },
    {
      icon: Zap,
      title: "Electronic Trading Systems",
      description: "Deep expertise in ION Trading platforms and electronic trading infrastructure.",
      tags: ["ION Trading", "Market Gateways", "Real-time Processing"]
    },
    {
      icon: Database,
      title: "Financial Markets",
      description: "Extensive knowledge of futures, options, bonds, and derivatives across global markets.",
      tags: ["LIFFE", "EUREX", "Fixed Income"]
    },
    {
      icon: Settings,
      title: "System Architecture",
      description: "Designed and implemented large-scale distributed trading systems and platforms.",
      tags: ["Distributed Systems", "Performance Tuning", "Infrastructure"]
    },
    {
      icon: Globe,
      title: "Market Connectivity",
      description: "Built connections to major exchanges and electronic communication networks worldwide.",
      tags: ["Market Data", "FIX Protocol", "Trading APIs"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50" data-testid="skills-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-professional-navy mb-4" data-testid="skills-title">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600" data-testid="skills-subtitle">
            A comprehensive skill set built through years of strategic leadership and hands-on experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={skill.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                data-testid={`skill-card-${index}`}
              >
                <div className="text-professional-accent text-4xl mb-4">
                  <IconComponent className="w-10 h-10" />
                </div>
                <h3 className="font-semibold text-xl text-professional-navy mb-3" data-testid={`skill-title-${index}`}>
                  {skill.title}
                </h3>
                <p className="text-gray-600 mb-4" data-testid={`skill-description-${index}`}>
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2" data-testid={`skill-tags-${index}`}>
                  {skill.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
