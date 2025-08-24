export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-professional-navy mb-4" data-testid="about-title">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="about-subtitle">
            Passionate about developing cutting-edge financial technology solutions and electronic trading systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="font-playfair text-3xl font-semibold text-professional-navy mb-6" data-testid="about-heading">
              Financial Technology Excellence
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed" data-testid="about-description-1">
              With over 25 years of experience in financial technology and software development, I specialize in electronic trading systems, algorithmic trading, and real-time financial data processing.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed" data-testid="about-description-2">
              My expertise spans from low-level C++ development to high-level system architecture, with deep knowledge of ION Trading platforms, financial markets protocols, and algorithmic trading strategies.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center" data-testid="stat-projects">
                <div className="text-3xl font-bold text-professional-accent mb-2">25+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center" data-testid="stat-clients">
                <div className="text-3xl font-bold text-professional-accent mb-2">20+</div>
                <div className="text-gray-600">Trading Gateways</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional workplace collaboration" 
              className="rounded-xl shadow-lg w-full h-auto" 
              data-testid="about-image"
            />
            
            <div className="absolute -bottom-6 -right-6 bg-professional-accent text-white p-6 rounded-xl shadow-lg" data-testid="experience-badge">
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
