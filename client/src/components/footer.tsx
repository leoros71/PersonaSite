import { Linkedin, Twitter, Github, Mail } from "lucide-react";

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-professional-dark text-white py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="font-playfair font-bold text-2xl text-professional-accent mb-4" data-testid="footer-logo">
              Leopoldo Rossi
            </div>
            <p className="text-gray-300 mb-4" data-testid="footer-description">
              Financial Technology Expert specializing in electronic trading systems and algorithmic trading solutions.
            </p>
            <div className="flex space-x-4" data-testid="footer-social-links">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-300 hover:text-professional-accent transition-colors duration-300"
                    data-testid={`footer-social-${social.label.toLowerCase()}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4" data-testid="footer-quick-links-title">
              Quick Links
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(link.href)}
                  className="block text-gray-300 hover:text-professional-accent transition-colors duration-300 text-left"
                  data-testid={`footer-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4" data-testid="footer-contact-title">
              Contact Info
            </h4>
            <div className="space-y-2 text-gray-300" data-testid="footer-contact-info">
              <div>Pisa, Italy</div>
              <div>rossi.leopoldo@gmail.com</div>
              <div>+39 389 9215666</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300" data-testid="footer-copyright">
          <p>&copy; 2024 Leopoldo Rossi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
