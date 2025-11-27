import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '584128805446'; // Replace with actual WhatsApp number
  const defaultMessage = '¡Hola! Me gustaría obtener más información sobre sus productos.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
        {/* Tooltip/Message Bubble */}
        {isOpen && (
          <div className="bg-card border border-border rounded-lg shadow-xl p-4 max-w-xs animate-scaleIn">
            <div className="flex items-start justify-between mb-2">
              <p className="text-sm font-semibold text-foreground">¿Necesitas ayuda?</p>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Chatea con nosotros en WhatsApp para atención inmediata
            </p>
            <Button
              onClick={handleWhatsAppClick}
              size="sm"
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
            >
              Iniciar Chat
            </Button>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-elegant hover:shadow-hover transition-all duration-300 flex items-center justify-center transform hover:scale-110"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-8 w-8 text-white" />
          
          {/* Pulse Animation */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
          
          {/* Notification Badge */}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full flex items-center justify-center text-xs font-bold text-destructive-foreground border-2 border-background">
            1
          </span>
        </button>
      </div>
    </>
  );
};