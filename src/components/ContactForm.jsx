import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+58 412-880-5446',
      link: 'tel:+584128805446'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contacto@marferca.com',
      link: 'mailto:contacto@marferca.com'
    },
    {
      icon: MapPin,
      title: 'Dirección',
      value: 'Av Bolívar de Flor Amarillo, CC El Alboral, local #46, Valencia, Carabobo, Venezuela',
      link: null
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Por favor completa todos los campos requeridos');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Por favor ingresa un email válido');
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission (prototype)
    setTimeout(() => {
      toast.success('¡Mensaje enviado con éxito! Te contactaremos pronto.', {
        icon: <CheckCircle2 className="h-5 w-5" />
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary">Contáctanos</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Solicita tu
            <span className="block text-primary">Cotización Ahora</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte con tus necesidades de tornillería industrial
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors duration-300 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Business Hours */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Horario de Atención</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/80">Lunes - Viernes:</span>
                  <span className="font-semibold text-foreground">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/80">Sábados:</span>
                  <span className="font-semibold text-foreground">8:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/80">Domingos:</span>
                  <span className="font-semibold text-foreground">Cerrado</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Envíanos un Mensaje</CardTitle>
              <CardDescription>
                Completa el formulario y te responderemos a la brevedad posible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Juan Pérez"
                      required
                      className="focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="juan@ejemplo.com"
                      required
                      className="focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+58 412-345-6789"
                      className="focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Cotización de productos"
                      className="focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe tus necesidades o solicitud..."
                    rows={6}
                    required
                    className="focus:ring-primary focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover:shadow-hover transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary-foreground border-t-transparent mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};