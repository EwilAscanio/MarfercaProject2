import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'Inicio', href: '#home' },
      { name: 'Productos', href: '#products' },
      { name: 'Catalogo', href: '#catalogo' },
      { name: 'Instagram', href: '#instagram' },
      { name: 'Contacto', href: '#contact' }
    ],
    services: [
      { name: 'Tornillería Industrial', href: '#products' },
      { name: 'Cotizaciones', href: '#contact' },
      { name: 'Asesoría Técnica', href: '#contact' },
      { name: 'Envíos', href: '#contact' }
    ]
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-secondary-foreground tracking-tight">Tonillería</span>
                <span className="text-xs font-semibold text-primary">Marferca C.A.</span>
              </div>
            </div>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              Líderes en suministro de tornillería y accesorios industriales en Venezuela. Calidad garantizada y servicio excepcional desde hace más de 15 años.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+584128805446"
                className="flex items-center space-x-3 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+58 412-880-5446</span>
              </a>
              <a
                href="mailto:contacto@marferca.com"
                className="flex items-center space-x-3 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>contacto@marferca.com</span>
              </a>
              <div className="flex items-center space-x-3 text-secondary-foreground/80">
                <MapPin className="h-5 w-5" />
                <span>Valencia Edo. Venezuela</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-secondary-foreground mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold text-secondary-foreground mb-4">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © {currentYear} Tonillería Marferca C.A. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:contacto@marferca.com"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:+584128805446"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};