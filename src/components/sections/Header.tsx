import Icon from '@/components/ui/icon';

const NAV_LINKS = [
  { label: 'Главная', href: '#home' },
  { label: 'Каталог', href: '#catalog' },
  { label: 'О компании', href: '#about' },
  { label: 'Блог', href: '#blog' },
  { label: 'Контакты', href: '#contacts' },
];

interface HeaderProps {
  cartCount: number;
  cartPulse: boolean;
  mobileMenuOpen: boolean;
  addToCart: () => void;
  setMobileMenuOpen: (v: boolean) => void;
}

export default function Header({ cartCount, cartPulse, mobileMenuOpen, addToCart, setMobileMenuOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--brand-dark)] border-b-2 border-[var(--brand-red)]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[var(--brand-red)] flex items-center justify-center"
            style={{ clipPath: 'polygon(0 0, 80% 0, 100% 20%, 100% 100%, 20% 100%, 0 80%)' }}>
            <span className="text-white font-oswald font-bold text-xs">PF</span>
          </div>
          <span className="font-oswald font-bold text-white text-xl tracking-widest">
            POWER<span className="text-[var(--brand-red)]">FUEL</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a key={link.label} href={link.href} className="nav-link text-gray-300 hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button onClick={addToCart} className="relative text-white hover:text-[var(--brand-red)] transition-colors">
            <Icon name="ShoppingCart" size={22} />
            {cartCount > 0 && (
              <span className={`absolute -top-2 -right-2 bg-[var(--brand-red)] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center ${cartPulse ? 'cart-badge-pulse' : ''}`}>
                {cartCount}
              </span>
            )}
          </button>
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--brand-gray)] border-t border-gray-700 px-4 py-4">
          {NAV_LINKS.map(link => (
            <a key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)}
              className="block font-oswald font-medium uppercase tracking-wider text-gray-300 hover:text-[var(--brand-red)] py-3 border-b border-gray-700 last:border-0">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}