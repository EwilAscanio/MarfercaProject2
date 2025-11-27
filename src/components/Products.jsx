import { Wrench, Settings, Package, Boxes, Hammer, Drill } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export const Products = () => {
  const products = [
    {
      icon: Wrench,
      title: 'Tornillos Industriales',
      description: 'Amplia variedad de tornillos para construcción y manufactura. Acero inoxidable y galvanizados.',
      features: ['Resistencia garantizada', 'Diversos tamaños', 'Certificación ISO']
    },
    {
      icon: Settings,
      title: 'Tuercas y Arandelas',
      description: 'Tuercas hexagonales, cuadradas y de seguridad. Arandelas planas y de presión.',
      features: ['Alta precisión', 'Material premium', 'Gran inventario']
    },
    {
      icon: Package,
      title: 'Pernos y Espárragos',
      description: 'Pernos de anclaje, estructurales y especializados. Espárragos de todas las medidas.',
      features: ['Calidad superior', 'Entrega inmediata', 'Precios competitivos']
    },
    {
      icon: Boxes,
      title: 'Remaches y Clavos',
      description: 'Remaches pop, estructurales y decorativos. Clavos de acero para diversas aplicaciones.',
      features: ['Fácil instalación', 'Durabilidad', 'Variedad de acabados']
    },
    {
      icon: Hammer,
      title: 'Anclajes y Fijaciones',
      description: 'Sistemas de anclaje para concreto, metal y madera. Fijaciones químicas y mecánicas.',
      features: ['Máxima seguridad', 'Certificados', 'Asesoría técnica']
    },
    {
      icon: Drill,
      title: 'Accesorios Especiales',
      description: 'Abrazaderas, grapas, pasadores y accesorios especializados para industria.',
      features: ['Soluciones integrales', 'Stock permanente', 'Envío rápido']
    }
  ];

  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary">Nuestros Productos</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Amplio Catálogo de
            <span className="block text-primary">Tornillería Industrial</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos soluciones completas en tornillería y accesorios industriales para todos los sectores
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-primary/30 bg-card"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors duration-300"
                  >
                    Solicitar Información
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-12 border border-primary/20">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            ¿No encuentras lo que buscas?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contamos con un amplio inventario adicional. Contáctanos para solicitar productos específicos o cotizaciones personalizadas.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover:shadow-hover transition-all duration-300"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Solicitar Cotización Personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};