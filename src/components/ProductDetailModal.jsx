import { X, ShoppingCart, Share2, Printer, CheckCircle2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { toast } from 'sonner';

export const ProductDetailModal = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Enlace copiado al portapapeles');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleQuote = () => {
    toast.success('Producto agregado a cotización', {
      description: `${product.name} - $${product.price.toFixed(2)}`,
      icon: <CheckCircle2 className="h-5 w-5" />
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <DialogTitle className="text-2xl font-bold text-foreground pr-8">
              {product.name}
            </DialogTitle>
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-4">
          {/* Left Column - Image */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden border border-border bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                {product.featured && (
                  <Badge className="bg-accent text-accent-foreground">
                    Destacado
                  </Badge>
                )}
                <Badge
                  className={`${
                    product.stock === 'En stock'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-warning text-foreground'
                  }`}
                >
                  {product.stock}
                </Badge>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="flex-1"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Compartir
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrint}
                className="flex-1"
              >
                <Printer className="h-4 w-4 mr-2" />
                Imprimir
              </Button>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Price and Description */}
            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-primary">${product.price.toFixed(2)}</span>
                <span className="text-sm text-muted-foreground">USD</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{product.unit}</p>
              <p className="text-foreground leading-relaxed">{product.description}</p>
            </div>

            <Separator />

            {/* Technical Specifications */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Especificaciones Técnicas</h3>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-start py-2 border-b border-border/50 last:border-0">
                    <span className="text-sm font-medium text-foreground/70 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}:
                    </span>
                    <span className="text-sm font-semibold text-foreground text-right max-w-[60%]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Features/Benefits */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">Características</h3>
              <ul className="space-y-2">
                <li className="flex items-start text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Alta calidad y durabilidad garantizada</span>
                </li>
                <li className="flex items-start text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Certificado bajo normas internacionales</span>
                </li>
                <li className="flex items-start text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Disponibilidad inmediata en stock</span>
                </li>
                <li className="flex items-start text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Asesoría técnica incluida</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                onClick={handleQuote}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover:shadow-hover transition-all duration-300"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Solicitar Cotización
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                Respuesta en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};