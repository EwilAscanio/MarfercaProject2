import { useState, useMemo } from 'react';
import { Search, Filter, X, Eye, ShoppingCart, Wrench, Settings, Package, Boxes, Hammer, Drill } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { ProductDetailModal } from './ProductDetailModal';

export const ProductCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Categorías
  const categories = [
    { id: 'all', name: 'Todos', icon: Package },
    { id: 'tornillos', name: 'Tornillos', icon: Wrench },
    { id: 'tuercas', name: 'Tuercas y Arandelas', icon: Settings },
    { id: 'pernos', name: 'Pernos y Espárragos', icon: Package },
    { id: 'remaches', name: 'Remaches y Clavos', icon: Boxes },
    { id: 'anclajes', name: 'Anclajes', icon: Hammer },
    { id: 'accesorios', name: 'Accesorios', icon: Drill }
  ];

  // Catálogo completo de productos con precios y especificaciones
  const products = [
    {
      id: 1,
      name: 'Tornillo Hexagonal M8 x 50mm',
      category: 'tornillos',
      price: 15.50,
      unit: 'paquete de 100 unidades',
      description: 'Tornillo hexagonal de acero galvanizado para uso industrial',
      image: 'https://images.unsplash.com/photo-1715322554946-1b22a9800aec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjB0b29sc3xlbnwwfHx8fDE3NjM2NTI2MDJ8MA&ixlib=rb-4.1.0&q=85',
      specifications: {
        material: 'Acero galvanizado',
        diametro: '8mm',
        longitud: '50mm',
        rosca: 'Métrica',
        clase: 'Clase 8.8',
        acabado: 'Galvanizado',
        norma: 'DIN 933 / ISO 4017'
      },
      stock: 'En stock',
      featured: true
    },
    {
      id: 2,
      name: 'Tornillo Autorroscante 4x40mm',
      category: 'tornillos',
      price: 8.75,
      unit: 'caja de 500 unidades',
      description: 'Tornillo autorroscante para madera y metal ligero',
      image: 'https://images.unsplash.com/photo-1455165814004-1126a7199f9b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZ3xlbnwwfHx8fDE3NjM1NzcwNzR8MA&ixlib=rb-4.1.0&q=85',
      specifications: {
        material: 'Acero al carbono',
        diametro: '4mm',
        longitud: '40mm',
        tipo: 'Autorroscante',
        cabeza: 'Philips',
        acabado: 'Zincado',
        aplicacion: 'Madera/Metal ligero'
      },
      stock: 'En stock',
      featured: true
    },
    {
      id: 3,
      name: 'Tuerca Hexagonal M10',
      category: 'tuercas',
      price: 12.00,
      unit: 'paquete de 200 unidades',
      description: 'Tuerca hexagonal de acero inoxidable',
      image: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZ3xlbnwwfHx8fDE3NjM1NzcwNzR8MA&ixlib=rb-4.1.0&q=85',
      specifications: {
        material: 'Acero inoxidable A2',
        diametro: '10mm',
        altura: '8mm',
        rosca: 'Métrica',
        tipo: 'Hexagonal',
        norma: 'DIN 934 / ISO 4032',
        resistencia: 'Alta resistencia'
      },
      stock: 'En stock',
      featured: false
    },
    {
      id: 4,
      name: 'Arandela Plana M12',
      category: 'tuercas',
      price: 7.50,
      unit: 'paquete de 300 unidades',
      description: 'Arandela plana para distribución de carga',
      image: 'https://images.unsplash.com/photo-1715322554946-1b22a9800aec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjB0b29sc3xlbnwwfHx8fDE3NjM2NTI2MDJ8MA&ixlib=rb-4.1.0&q=85',
      specifications: {
        material: 'Acero galvanizado',
        diametroInterno: '13mm',
        diametroExterno: '24mm',
        espesor: '2.5mm',
        tipo: 'Plana',
        norma: 'DIN 125 / ISO 7089',
        acabado: 'Galvanizado'
      },
      stock: 'En stock',
      featured: false
    },
    {
      id: 5,
      name: 'Perno de Anclaje M16 x 150mm',
      category: 'pernos',
      price: 45.00,
      unit: 'unidad',
      description: 'Perno de anclaje para concreto de alta resistencia',
      image: 'https://images.unsplash.com/photo-1455165814004-1126a7199f9b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZ3xlbnwwfHx8fDE3NjM1NzcwNzR8MA&ixlib=rb-4.1.0&q=85',
      specifications: {
        material: 'Acero al carbono',
        diametro: '16mm',
        longitud: '150mm',
        tipo: 'Anclaje mecánico',
        cargaMaxima: '5000 kg',
        acabado: 'Galvanizado en caliente',
        aplicacion: 'Concreto armado'
      },
      stock: 'En stock',
      featured: true
    },
    {
      id: 6,
      name: 'Espárrago Roscado M12 x 200mm',
      category: 'pernos',
      price: 28.50,
      unit: 'paquete de 10 unidades',
      description: 'Espárrago roscado en ambos extremos',
      image: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZ3xlbnwwfHx8fDE3NjM1NzcwNzR8MA&ixlib=rb-4.1.0&q=85',
      specifications: {
        material: 'Acero grado 8.8',
        diametro: '12mm',
        longitud: '200mm',
        rosca: 'Métrica completa',
        tipo: 'Doble rosca',
        norma: 'DIN 976',
        acabado: 'Zincado'
      },
      stock: 'En stock',
      featured: false
    },
    {
      id: 7,
      name: 'Remache Pop 4.8 x 16mm',
      category: 'remaches',
      price: 18.00,
      unit: 'caja de 1000 unidades',
      description: 'Remache ciego para uniones rápidas',
      image: 'https://images.unsplash.com/photo-1715322554946-1b22a9800aec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjB0b29sc3xlbnwwfHx8fDE3NjM2NTI2MDJ8MA&ixlib=rb-4.1.0&q=85',
      specifications: {
        material: 'Aluminio/Acero',
        diametro: '4.8mm',
        longitud: '16mm',
        tipo: 'Ciego (Pop)',
        rangoAgarre: '6-10mm',
        cabeza: 'Plana',
        acabado: 'Natural'
      },
      stock: 'En stock',
      featured: false
    },
    {
      id: 8,
      name: 'Clavo de Acero 3" x 12',
      category: 'remaches',
      price: 5.25,
      unit: 'kilogramo',
      description: 'Clavo de acero para construcción',
      image: 'https://images.unsplash.com/photo-1455165814004-1126a7199f9b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZ3xlbnwwfHx8fDE3NjM1NzcwNzR8MA&ixlib=rb-4.1.0&q=85',
      specifications: {
        material: 'Acero al carbono',
        longitud: '3 pulgadas',
        calibre: '12',
        tipo: 'Común',
        cabeza: 'Plana',
        punta: 'Diamante',
        acabado: 'Pulido'
      },
      stock: 'En stock',
      featured: false
    },
    {
      id: 9,
      name: 'Anclaje Químico M10 x 110mm',
      category: 'anclajes',
      price: 65.00,
      unit: 'kit completo',
      description: 'Sistema de anclaje químico para cargas pesadas',
      image: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZ3xlbnwwfHx8fDE3NjM1NzcwNzR8MA&ixlib=rb-4.1.0&q=85',
      specifications: {
        material: 'Resina epoxi + varilla acero',
        diametro: '10mm',
        profundidad: '110mm',
        tipo: 'Químico',
        cargaTrabajo: '3500 kg',
        tiempoCurado: '30 minutos',
        aplicacion: 'Concreto/Mampostería'
      },
      stock: 'Bajo stock',
      featured: true
    },
    {
      id: 10,
      name: 'Anclaje Expansion M8 x 60mm',
      category: 'anclajes',
      price: 22.00,
      unit: 'paquete de 50 unidades',
      description: 'Anclaje de expansión para concreto',
      image: 'https://images.unsplash.com/photo-1715322554946-1b22a9800aec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjB0b29sc3xlbnwwfHx8fDE3NjM2NTI2MDJ8MA&ixlib=rb-4.1.0&q=85',
      specifications: {
        material: 'Acero galvanizado',
        diametro: '8mm',
        longitud: '60mm',
        tipo: 'Mecánico expansión',
        perforacion: '10mm',
        carga: '800 kg',
        norma: 'DIN 1481'
      },
      stock: 'En stock',
      featured: false
    },
    {
      id: 11,
      name: 'Abrazadera Metalica 2"',
      category: 'accesorios',
      price: 9.50,
      unit: 'paquete de 25 unidades',
      description: 'Abrazadera metálica para tubería',
      image: 'https://images.unsplash.com/photo-1455165814004-1126a7199f9b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZ3xlbnwwfHx8fDE3NjM1NzcwNzR8MA&ixlib=rb-4.1.0&q=85',
      specifications: {
        material: 'Acero inoxidable',
        diametro: '2 pulgadas',
        ancho: '12mm',
        tipo: 'Sinfín',
        ajuste: 'Tornillo 8mm',
        presion: 'Media/Alta',
        aplicacion: 'Tuberías/Mangueras'
      },
      stock: 'En stock',
      featured: false
    },
    {
      id: 12,
      name: 'Kit de Grapas Industriales',
      category: 'accesorios',
      price: 32.00,
      unit: 'kit de 200 piezas',
      description: 'Surtido de grapas para uso industrial',
      image: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZ3xlbnwwfHx8fDE3NjM1NzcwNzR8MA&ixlib=rb-4.1.0&q=85',
      specifications: {
        material: 'Acero templado',
        tipos: 'Varios tamaños',
        longitudes: '6mm - 14mm',
        aplicacion: 'Madera/Tapicería',
        compatibilidad: 'Grapadoras industriales',
        acabado: 'Galvanizado',
        cantidad: '200 unidades mixtas'
      },
      stock: 'En stock',
      featured: false
    }
  ];

  // Filtrar productos
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory, products]);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section id="catalogo" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary">Catálogo Completo</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Explora Nuestro
            <span className="block text-primary">Catálogo Interactivo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuentra exactamente lo que necesitas con nuestro sistema de búsqueda y filtros avanzados
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar productos por nombre o descripción..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-12 h-14 text-base border-2 focus:border-primary transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-3 overflow-x-auto pb-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground whitespace-nowrap">
              <Filter className="h-4 w-4" />
              <span>Categorías:</span>
            </div>
            <div className="flex gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                      selectedCategory === category.id
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center text-sm text-muted-foreground">
            Mostrando <span className="font-semibold text-foreground">{filteredProducts.length}</span> productos
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-primary/30 bg-card flex flex-col"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.featured && (
                    <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                      Destacado
                    </Badge>
                  )}
                  <Badge
                    className={`absolute top-3 left-3 ${
                      product.stock === 'En stock'
                        ? 'bg-primary/90 text-primary-foreground'
                        : 'bg-warning/90 text-foreground'
                    }`}
                  >
                    {product.stock}
                  </Badge>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-bold text-foreground line-clamp-2">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">{product.unit}</p>
                    
                    {/* Key Specs Preview */}
                    <div className="pt-2 space-y-1">
                      <div className="flex items-center text-xs text-foreground/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        <span className="font-medium">Material:</span>
                        <span className="ml-1">{product.specifications.material}</span>
                      </div>
                      {product.specifications.diametro && (
                        <div className="flex items-center text-xs text-foreground/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                          <span className="font-medium">Diámetro:</span>
                          <span className="ml-1">{product.specifications.diametro}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="grid grid-cols-2 gap-2 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleViewDetails(product)}
                    className="group-hover:border-primary transition-colors"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    Detalles
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Cotizar
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <Search className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No se encontraron productos</h3>
            <p className="text-muted-foreground mb-4">
              Intenta con otros términos de búsqueda o selecciona una categoría diferente
            </p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              variant="outline"
            >
              Limpiar filtros
            </Button>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};