import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Adrien Perrachon",
      title: "eTrading Consultant",
      company: "Credit Agricole CIB",
      text: "I had the pleasure of working with Leopoldo for 3 years at Credit Agricole CIB. In addition to his uncontested expertise of ION MarketView, he is a forward thinking, meticulous and very professional person in the workplace. I highly recommend him.",
      relationship: "Worked together on the same team"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-professional-navy mb-4" data-testid="testimonials-title">
            Professional Recommendations
          </h2>
          <p className="text-xl text-gray-600" data-testid="testimonials-subtitle">
            What colleagues say about working with me.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg relative"
              data-testid={`testimonial-${index}`}
            >
              <div className="absolute top-4 left-8 text-professional-accent opacity-20">
                <Quote className="w-12 h-12" />
              </div>
              
              <div className="relative z-10">
                <p className="text-lg text-gray-700 leading-relaxed mb-6" data-testid={`testimonial-text-${index}`}>
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div>
                    <h4 className="font-semibold text-professional-navy" data-testid={`testimonial-name-${index}`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-professional-accent font-medium" data-testid={`testimonial-title-${index}`}>
                      {testimonial.title}
                    </p>
                    <p className="text-gray-600" data-testid={`testimonial-company-${index}`}>
                      {testimonial.company}
                    </p>
                    <p className="text-sm text-gray-500 mt-1" data-testid={`testimonial-relationship-${index}`}>
                      {testimonial.relationship}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            <span className="text-professional-accent font-semibold">ION MarketView</span> expertise validated by industry professionals
          </p>
        </div>
      </div>
    </section>
  );
}