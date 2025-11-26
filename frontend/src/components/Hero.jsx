import { ArrowRight, CheckCircle2, Shield, Clock } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = () => {
  const features = [
    { icon: Shield, text: 'Calidad Garantizada' },
    { icon: Clock, text: 'Entrega Rápida' },
    { icon: CheckCircle2, text: 'Mejores Precios' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZ3xlbnwwfHx8fDE3NjM1NzcwNzR8MA&ixlib=rb-4.1.0&q=85"
          alt="Industrial Manufacturing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 xl:py-24">
        <div className="grid lg:grid-cols-2 xl:gap-16 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4 animate-fadeInUp">
              <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
                <span className="text-sm font-semibold text-white">Líder en Tornillería Industrial</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-6xl font-bold leading-tight">
                Tonillería
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-white">
                  Marferca C.A.
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                Suministramos tornillos, tuercas y accesorios industriales de la más alta calidad para profesionales y empresas en toda Venezuela.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 animate-fadeInUp delay-200">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20"
                  >
                    <Icon className="h-5 w-5 text-accent-light" />
                    <span className="text-sm font-medium text-white">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row xl:gap-8 gap-4 animate-fadeInUp delay-300">
              <Button
                size="lg"
                onClick={() => scrollToSection('#products')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg px-8"
              >
                Ver Productos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-8"
              >
                Contactar Ahora
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-fadeInUp delay-400">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">15+</div>
                <div className="text-sm text-white/80 mt-1">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">500+</div>
                <div className="text-sm text-white/80 mt-1">Productos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">1000+</div>
                <div className="text-sm text-white/80 mt-1">Clientes Satisfechos</div>
              </div>
            </div>
          </div>

          {/* Right Content - Decorative Element */}
          <div className="hidden lg:block animate-fadeInUp delay-500">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-4">
                <img
                  src="/precision_tools.jpg"
                  alt="Herramientas de Precisión - Tornillería Marferca"
                  className="w-3/4 mx-auto h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center text-white/80">
          <span className="text-xs sm:text-sm mb-1 sm:mb-2">Desliza</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-white/50 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
