import { useState } from 'react';
import Header from '@/components/sections/Header';
import MainSections from '@/components/sections/MainSections';
import BlogSection from '@/components/sections/BlogSection';
import ContactsFooter from '@/components/sections/ContactsFooter';

const Index = () => {
  const [cartCount, setCartCount] = useState(0);
  const [activeCategory, setActiveCategory] = useState('Все');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartPulse, setCartPulse] = useState(false);

  const addToCart = () => {
    setCartCount(c => c + 1);
    setCartPulse(true);
    setTimeout(() => setCartPulse(false), 400);
  };

  return (
    <div className="min-h-screen bg-white font-roboto">
      <Header
        cartCount={cartCount}
        cartPulse={cartPulse}
        mobileMenuOpen={mobileMenuOpen}
        addToCart={addToCart}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <MainSections
        addToCart={addToCart}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <BlogSection />
      <ContactsFooter />
    </div>
  );
};

export default Index;
