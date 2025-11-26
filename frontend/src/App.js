import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { ProductCatalog } from './components/ProductCatalog';
import { Instagram } from './components/Instagram';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Products />
      <ProductCatalog />
      <Instagram />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;