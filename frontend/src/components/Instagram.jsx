import { Instagram as InstagramIcon, Play } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

export const Instagram = () => {
  // Mock Instagram reels data
  const reels = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1715322554946-1b22a9800aec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjB0b29sc3xlbnwwfHx8fDE3NjM2NTI2MDJ8MA&ixlib=rb-4.1.0&q=85',
      title: 'Tornillos de Precisión',
      likes: '245'
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1455165814004-1126a7199f9b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZ3xlbnwwfHx8fDE3NjM1NzcwNzR8MA&ixlib=rb-4.1.0&q=85',
      title: 'Proceso de Manufactura',
      likes: '312'
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZ3xlbnwwfHx8fDE3NjM1NzcwNzR8MA&ixlib=rb-4.1.0&q=85',
      title: 'Instalaciones Modernas',
      likes: '189'
    },
    {
      id: 4,
      thumbnail: 'https://images.unsplash.com/photo-1715322554946-1b22a9800aec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjB0b29sc3xlbnwwfHx8fDE3NjM2NTI2MDJ8MA&ixlib=rb-4.1.0&q=85',
      title: 'Calidad Garantizada',
      likes: '421'
    }
  ];

  return (
    <section id="instagram" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full">
            <InstagramIcon className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Síguenos en Instagram</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Nuestros Últimos
            <span className="block text-primary">Reels & Videos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mantente al día con nuestros productos, proyectos y novedades en nuestra comunidad de Instagram
          </p>
        </div>

        {/* Reels Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reels.map((reel) => (
            <Card
              key={reel.id}
              className="group relative overflow-hidden cursor-pointer border-border/50 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-elegant"
            >
              <div className="relative aspect-[9/16] overflow-hidden">
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-semibold text-sm mb-1">{reel.title}</p>
                    <div className="flex items-center gap-2 text-xs">
                      <span>❤️ {reel.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-elegant hover:shadow-hover transition-all duration-300"
            onClick={() => window.open('https://www.instagram.com/tornillosmarferca/?hl=es-la', '_blank')}
          >
            <InstagramIcon className="mr-2 h-5 w-5" />
            Seguir en Instagram
          </Button>
        </div>

        {/* Info Banner */}
        <div className="mt-16 bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-8 border border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Únete a nuestra comunidad
              </h3>
              <p className="text-muted-foreground">
                Más de 5,000 seguidores confían en nosotros. Comparte tus proyectos y etiquétanos @tonilleriamarferca
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5K+</div>
                <div className="text-sm text-muted-foreground">Seguidores</div>
              </div>
              <div className="w-px bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Posts</div>
              </div>
              <div className="w-px bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Engagement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};