import { useState } from 'react';
import Icon from '@/components/ui/icon';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyIcon = any;

const HERO_IMAGE = 'https://cdn.poehali.dev/projects/89130207-c519-4eae-ab6f-c84c25d6ee0a/files/af02c5e3-224f-4681-8b90-57e458264720.jpg';

const NAV_LINKS = [
  { label: 'Главная', href: '#home' },
  { label: 'Каталог', href: '#catalog' },
  { label: 'О компании', href: '#about' },
  { label: 'Блог', href: '#blog' },
  { label: 'Контакты', href: '#contacts' },
];

const CATEGORIES = [
  { name: 'Протеин', icon: '💪', count: 48 },
  { name: 'Гейнеры', icon: '⚡', count: 24 },
  { name: 'Аминокислоты', icon: '🔬', count: 36 },
  { name: 'Витамины', icon: '🌿', count: 30 },
  { name: 'Жиросжигатели', icon: '🔥', count: 22 },
  { name: 'Предтреники', icon: '⚙️', count: 18 },
];

const PRODUCTS = [
  {
    id: 1,
    name: 'Whey Protein Pro',
    category: 'Протеин',
    price: 2890,
    oldPrice: 3490,
    weight: '900 г',
    flavor: 'Шоколад',
    badge: 'Хит продаж',
    badgeColor: 'red',
    rating: 4.9,
    reviews: 312,
    img: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&q=80',
  },
  {
    id: 2,
    name: 'Mass Gainer Elite',
    category: 'Гейнер',
    price: 3290,
    oldPrice: null,
    weight: '2 кг',
    flavor: 'Ваниль',
    badge: 'Новинка',
    badgeColor: 'green',
    rating: 4.7,
    reviews: 89,
    img: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=400&q=80',
  },
  {
    id: 3,
    name: 'BCAA Complex 8:1:1',
    category: 'Аминокислоты',
    price: 1490,
    oldPrice: 1890,
    weight: '300 г',
    flavor: 'Арбуз',
    badge: 'Скидка 20%',
    badgeColor: 'red',
    rating: 4.8,
    reviews: 156,
    img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80',
  },
  {
    id: 4,
    name: 'Pre-Workout STORM',
    category: 'Предтренировочный',
    price: 2190,
    oldPrice: null,
    weight: '500 г',
    flavor: 'Цитрус',
    badge: null,
    badgeColor: null,
    rating: 4.6,
    reviews: 204,
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
  },
  {
    id: 5,
    name: 'Creatine Monohydrate',
    category: 'Креатин',
    price: 890,
    oldPrice: 1190,
    weight: '500 г',
    flavor: 'Без вкуса',
    badge: 'Топ выбор',
    badgeColor: 'green',
    rating: 5.0,
    reviews: 421,
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
  },
  {
    id: 6,
    name: 'Omega-3 Premium',
    category: 'Витамины',
    price: 1190,
    oldPrice: null,
    weight: '90 капсул',
    flavor: 'Нейтральный',
    badge: null,
    badgeColor: null,
    rating: 4.9,
    reviews: 178,
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80',
  },
];

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Как выбрать протеин для набора мышечной массы',
    excerpt: 'Разбираем основные виды протеина, их отличия и применение в зависимости от ваших целей.',
    date: '24 апреля 2026',
    category: 'Питание',
    readTime: '5 мин',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
  },
  {
    id: 2,
    title: 'BCAA: нужны ли они вам на самом деле?',
    excerpt: 'Научный взгляд на аминокислоты с разветвлённой цепью — факты без маркетинга.',
    date: '17 апреля 2026',
    category: 'Добавки',
    readTime: '7 мин',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
  },
  {
    id: 3,
    title: 'Предтренировочные комплексы: за и против',
    excerpt: 'Когда предтренировочник реально помогает, а когда от него лучше отказаться.',
    date: '10 апреля 2026',
    category: 'Тренинг',
    readTime: '6 мин',
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
  },
];

const STATS = [
  { value: '12+', label: 'лет на рынке' },
  { value: '500+', label: 'наименований товаров' },
  { value: '85 000+', label: 'довольных клиентов' },
  { value: '48 ч', label: 'доставка по России' },
];

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

      {/* HEADER */}
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

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[var(--brand-dark)]" style={{ paddingTop: '64px' }}>
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMAGE} alt="Hero" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-dark)] via-[var(--brand-dark)]/80 to-transparent" />
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/2 z-0 hidden lg:block">
          <div className="absolute inset-0 bg-[var(--brand-red)]/8"
            style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }} />
          <div className="absolute right-12 top-1/3 w-2 h-40 bg-[var(--brand-red)]" />
          <div className="absolute right-20 top-1/4 w-2 h-24 bg-[var(--brand-green)]" />
        </div>

        <div className="absolute inset-0 z-0 stripe-bg opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[var(--brand-red)]/20 border border-[var(--brand-red)]/40 px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-[var(--brand-red)] rounded-full animate-pulse" />
              <span className="font-oswald text-[var(--brand-red)] text-sm font-medium uppercase tracking-widest">Профессиональное питание</span>
            </div>

            <h1 className="font-oswald font-bold text-white uppercase leading-none mb-6"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', letterSpacing: '0.02em' }}>
              ТВОЙ ПУТЬ<br />
              <span className="text-[var(--brand-red)]">К ПОБЕДЕ</span><br />
              НАЧИНАЕТСЯ<br />
              <span className="text-[var(--brand-green)]">ЗДЕСЬ</span>
            </h1>

            <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-lg font-roboto font-light">
              Проверенное спортивное питание от ведущих мировых брендов. Более 500 позиций для профессионалов и начинающих.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#catalog">
                <button className="btn-red text-base">Перейти в каталог</button>
              </a>
              <a href="#about">
                <button className="btn-outline-white text-base">О компании</button>
              </a>
            </div>

            <div className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/10">
              {STATS.slice(0, 3).map(s => (
                <div key={s.label}>
                  <div className="font-oswald font-bold text-[var(--brand-red)] text-2xl">{s.value}</div>
                  <div className="text-gray-400 text-sm mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="font-oswald text-gray-500 text-xs uppercase tracking-widest">Листайте</span>
          <Icon name="ChevronDown" size={20} className="text-gray-500 animate-bounce" />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-[var(--brand-gray)] py-12 border-y-2 border-[var(--brand-green)]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map(cat => (
              <button key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex flex-col items-center gap-2 p-4 border transition-all duration-200 ${activeCategory === cat.name ? 'border-[var(--brand-red)] bg-[var(--brand-red)]/10' : 'border-gray-700 hover:border-[var(--brand-red)]/60 bg-transparent'}`}
                style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
                <span className="text-2xl">{cat.icon}</span>
                <span className="font-oswald font-medium text-white text-sm uppercase tracking-wide">{cat.name}</span>
                <span className="text-gray-500 text-xs">{cat.count} товаров</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-[var(--brand-red)] font-oswald font-medium uppercase tracking-widest text-sm mb-2">Ассортимент</p>
              <h2 className="section-title text-[var(--brand-dark)] section-title-line">Каталог товаров</h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-sm">Сортировка:</span>
              <select className="border border-gray-200 px-3 py-2 text-sm font-roboto bg-white focus:outline-none focus:border-[var(--brand-red)]">
                <option>Популярные</option>
                <option>По цене ↑</option>
                <option>По цене ↓</option>
                <option>Новинки</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="product-card">
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img src={product.img} alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  {product.badge && (
                    <div className={`absolute top-3 left-0 px-3 py-1 font-oswald font-semibold text-white text-xs uppercase tracking-wider ${product.badgeColor === 'red' ? 'bg-[var(--brand-red)]' : 'bg-[var(--brand-green)]'}`}>
                      {product.badge}
                    </div>
                  )}
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 flex items-center justify-center hover:bg-[var(--brand-red)] hover:text-white transition-colors group rounded-none">
                    <Icon name="Heart" size={16} className="text-gray-400 group-hover:text-white" />
                  </button>
                </div>

                <div className="p-5">
                  <div className="text-xs text-[var(--brand-red)] font-oswald font-medium uppercase tracking-wider mb-1">{product.category}</div>
                  <h3 className="font-oswald font-bold text-[var(--brand-dark)] text-lg mb-1">{product.name}</h3>
                  <div className="text-gray-500 text-sm mb-3">{product.weight} · {product.flavor}</div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Icon key={j} name="Star" size={12}
                          className={j < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'} />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{product.rating} ({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-oswald font-bold text-[var(--brand-dark)] text-2xl">
                        {product.price.toLocaleString()} ₽
                      </span>
                      {product.oldPrice && (
                        <span className="text-gray-400 text-sm line-through ml-2">
                          {product.oldPrice.toLocaleString()} ₽
                        </span>
                      )}
                    </div>
                    <button onClick={addToCart}
                      className="bg-[var(--brand-red)] hover:bg-[var(--brand-red-dark)] text-white w-10 h-10 flex items-center justify-center transition-colors"
                      style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}>
                      <Icon name="Plus" size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-red text-sm">Смотреть весь каталог</button>
          </div>
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="overflow-hidden">
        <div className="bg-[var(--brand-red)] relative overflow-hidden">
          <div className="absolute inset-0 stripe-bg opacity-20" />
          <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <div className="text-white/60 font-oswald uppercase tracking-widest text-sm mb-2">Специальное предложение</div>
                <h2 className="font-oswald font-bold text-white text-4xl md:text-5xl uppercase leading-tight">
                  СКИДКА 15%<br />НА ПЕРВЫЙ ЗАКАЗ
                </h2>
                <p className="text-white/80 mt-3 font-roboto">Используйте промокод при оформлении заказа</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 border-2 border-white/40 px-10 py-6 mb-4"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))' }}>
                  <div className="font-oswald font-bold text-white text-3xl tracking-widest">POWERFUEL15</div>
                </div>
                <button className="btn-outline-white text-sm">Скопировать промокод</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10"
                style={{ clipPath: 'polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 32px 100%, 0 calc(100% - 32px))' }}>
                <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&q=80"
                  alt="О компании" className="w-full h-96 object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[var(--brand-green)] z-0"
                style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}>
                <div className="flex flex-col items-center justify-center h-full text-white">
                  <span className="font-oswald font-bold text-3xl">12+</span>
                  <span className="text-xs text-white/80 uppercase tracking-wide text-center px-2">лет<br />опыта</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[var(--brand-red)] font-oswald font-medium uppercase tracking-widest text-sm mb-3">О нас</p>
              <h2 className="section-title text-[var(--brand-dark)] mb-6">
                ПИТАНИЕ<br />
                <span className="text-[var(--brand-red)]">ДЛЯ ЧЕМПИОНОВ</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 font-roboto">
                PowerFuel — это более 12 лет опыта в мире спортивного питания. Мы работаем только с проверенными производителями и гарантируем подлинность каждого продукта.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 font-roboto">
                Наша миссия — помочь каждому достичь своих спортивных целей, предоставив качественные добавки по честным ценам с профессиональными консультациями.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {STATS.map(stat => (
                  <div key={stat.label} className="border-l-4 border-[var(--brand-red)] pl-4">
                    <div className="font-oswald font-bold text-[var(--brand-dark)] text-2xl">{stat.value}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {[
                  { icon: 'ShieldCheck', text: 'Сертифицированная продукция с гарантией качества' },
                  { icon: 'Truck', text: 'Доставка по всей России от 48 часов' },
                  { icon: 'Headphones', text: 'Консультации профессиональных нутрициологов' },
                ].map(f => (
                  <div key={f.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[var(--brand-green)]/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={f.icon as AnyIcon} size={16} className="text-[var(--brand-green)]" />
                    </div>
                    <span className="text-gray-600 text-sm font-roboto">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 bg-[var(--brand-dark)] relative overflow-hidden">
        <div className="absolute inset-0 stripe-bg opacity-30" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <p className="text-[var(--brand-red)] font-oswald font-medium uppercase tracking-widest text-sm mb-3">Преимущества</p>
            <h2 className="section-title text-white">ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Award', title: 'Оригинальная продукция', desc: 'Прямые поставки от официальных производителей', color: 'red' },
              { icon: 'Truck', title: 'Быстрая доставка', desc: 'Доставляем по всей России за 48 часов', color: 'green' },
              { icon: 'CreditCard', title: 'Удобная оплата', desc: 'Карта, наличные, рассрочка на 6 месяцев', color: 'red' },
              { icon: 'RefreshCw', title: 'Возврат 30 дней', desc: 'Гарантия возврата без вопросов', color: 'green' },
            ].map((item, i) => (
              <div key={i}
                className="bg-[var(--brand-gray)] border border-gray-700 p-6 hover:border-[var(--brand-red)]/60 transition-all duration-300"
                style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)' }}>
                <div className={`w-12 h-12 flex items-center justify-center mb-4 ${item.color === 'red' ? 'bg-[var(--brand-red)]' : 'bg-[var(--brand-green)]'}`}
                  style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}>
                  <Icon name={item.icon as AnyIcon} size={20} className="text-white" />
                </div>
                <h3 className="font-oswald font-bold text-white text-lg mb-2 uppercase">{item.title}</h3>
                <p className="text-gray-400 text-sm font-roboto leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-[var(--brand-red)] font-oswald font-medium uppercase tracking-widest text-sm mb-2">Знания</p>
              <h2 className="section-title text-[var(--brand-dark)] section-title-line">Блог и статьи</h2>
            </div>
            <a href="#" className="text-[var(--brand-red)] font-oswald font-medium uppercase tracking-wider text-sm hover:text-[var(--brand-red-dark)] flex items-center gap-2">
              Все статьи <Icon name="ArrowRight" size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="bg-white overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.img} alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-3 left-3 bg-[var(--brand-red)] px-2 py-1">
                    <span className="font-oswald text-white text-xs font-medium uppercase tracking-wider">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3 font-roboto">
                    <span className="flex items-center gap-1"><Icon name="Calendar" size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Icon name="Clock" size={12} /> {post.readTime}</span>
                  </div>
                  <h3 className="font-oswald font-bold text-[var(--brand-dark)] text-lg leading-tight mb-3 group-hover:text-[var(--brand-red)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 font-roboto">{post.excerpt}</p>
                  <a href="#" className="font-oswald font-medium text-[var(--brand-red)] text-sm uppercase tracking-wider hover:text-[var(--brand-red-dark)] flex items-center gap-2">
                    Читать далее <Icon name="ArrowRight" size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16 bg-[var(--brand-green)] relative overflow-hidden">
        <div className="absolute inset-0 stripe-bg opacity-20" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <p className="text-white/70 font-oswald uppercase tracking-widest text-sm mb-3">Подписка</p>
          <h2 className="font-oswald font-bold text-white text-3xl md:text-4xl uppercase mb-4">
            ПОЛУЧАЙТЕ ЛУЧШИЕ ПРЕДЛОЖЕНИЯ
          </h2>
          <p className="text-white/80 mb-8 font-roboto">Подпишитесь на рассылку и получите скидку 10% на первый заказ</p>
          <div className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto">
            <input type="email" placeholder="Ваш email адрес"
              className="flex-1 px-5 py-3 font-roboto text-[var(--brand-dark)] focus:outline-none" />
            <button className="bg-[var(--brand-red)] hover:bg-[var(--brand-red-dark)] text-white font-oswald font-semibold uppercase tracking-widest px-8 py-3 transition-colors">
              Подписаться
            </button>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[var(--brand-red)] font-oswald font-medium uppercase tracking-widest text-sm mb-3">Связаться с нами</p>
            <h2 className="section-title text-[var(--brand-dark)] section-title-line inline-block">Контакты</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { icon: 'MapPin', title: 'Адрес', value: 'г. Москва, ул. Спортивная, 15', sub: 'Пн-Сб: 10:00 — 21:00' },
                { icon: 'Phone', title: 'Телефон', value: '+7 (800) 555-35-35', sub: 'Бесплатно по России' },
                { icon: 'Mail', title: 'Email', value: 'info@powerfuel.ru', sub: 'Ответим в течение часа' },
              ].map(c => (
                <div key={c.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--brand-red)] flex items-center justify-center flex-shrink-0"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}>
                    <Icon name={c.icon as AnyIcon} size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-oswald font-semibold text-[var(--brand-dark)] uppercase tracking-wide">{c.title}</div>
                    <div className="text-gray-700 font-roboto font-medium">{c.value}</div>
                    <div className="text-gray-400 text-sm font-roboto">{c.sub}</div>
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <div className="font-oswald font-semibold text-[var(--brand-dark)] uppercase tracking-wide mb-3">Соцсети</div>
                <div className="flex gap-3">
                  {[
                    { icon: 'MessageCircle', label: 'VK' },
                    { icon: 'Send', label: 'Telegram' },
                    { icon: 'Youtube', label: 'YouTube' },
                  ].map(s => (
                    <button key={s.label}
                      className="w-10 h-10 border-2 border-gray-200 hover:border-[var(--brand-red)] hover:bg-[var(--brand-red)] text-gray-500 hover:text-white flex items-center justify-center transition-all duration-200">
                      <Icon name={s.icon as AnyIcon} size={18} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8"
              style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)' }}>
              <h3 className="font-oswald font-bold text-[var(--brand-dark)] text-xl uppercase tracking-wide mb-6">Написать нам</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-oswald font-medium text-gray-500 uppercase tracking-wider block mb-1">Имя</label>
                    <input type="text" placeholder="Иван" className="w-full border border-gray-200 px-4 py-3 font-roboto focus:outline-none focus:border-[var(--brand-red)] text-sm" />
                  </div>
                  <div>
                    <label className="text-xs font-oswald font-medium text-gray-500 uppercase tracking-wider block mb-1">Телефон</label>
                    <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full border border-gray-200 px-4 py-3 font-roboto focus:outline-none focus:border-[var(--brand-red)] text-sm" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-oswald font-medium text-gray-500 uppercase tracking-wider block mb-1">Email</label>
                  <input type="email" placeholder="email@example.com" className="w-full border border-gray-200 px-4 py-3 font-roboto focus:outline-none focus:border-[var(--brand-red)] text-sm" />
                </div>
                <div>
                  <label className="text-xs font-oswald font-medium text-gray-500 uppercase tracking-wider block mb-1">Сообщение</label>
                  <textarea rows={4} placeholder="Ваш вопрос..." className="w-full border border-gray-200 px-4 py-3 font-roboto focus:outline-none focus:border-[var(--brand-red)] text-sm resize-none" />
                </div>
                <button className="btn-red w-full text-sm">Отправить сообщение</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--brand-dark)] border-t-2 border-[var(--brand-red)]">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[var(--brand-red)] flex items-center justify-center"
                  style={{ clipPath: 'polygon(0 0, 80% 0, 100% 20%, 100% 100%, 20% 100%, 0 80%)' }}>
                  <span className="text-white font-oswald font-bold text-xs">PF</span>
                </div>
                <span className="font-oswald font-bold text-white text-lg tracking-widest">
                  POWER<span className="text-[var(--brand-red)]">FUEL</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm font-roboto leading-relaxed">
                Профессиональное спортивное питание для тех, кто стремится к результату.
              </p>
            </div>

            <div>
              <h4 className="font-oswald font-bold text-white uppercase tracking-wider text-sm mb-4 border-b border-gray-700 pb-3">Каталог</h4>
              <ul className="space-y-2">
                {CATEGORIES.slice(0, 5).map(cat => (
                  <li key={cat.name}>
                    <a href="#catalog" className="text-gray-400 hover:text-[var(--brand-red)] text-sm font-roboto transition-colors">{cat.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-oswald font-bold text-white uppercase tracking-wider text-sm mb-4 border-b border-gray-700 pb-3">Информация</h4>
              <ul className="space-y-2">
                {['О компании', 'Доставка и оплата', 'Возврат товара', 'Блог', 'Контакты'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-[var(--brand-red)] text-sm font-roboto transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-oswald font-bold text-white uppercase tracking-wider text-sm mb-4 border-b border-gray-700 pb-3">Контакты</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-400 text-sm font-roboto">
                  <Icon name="Phone" size={14} className="text-[var(--brand-red)] flex-shrink-0" />
                  +7 (800) 555-35-35
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm font-roboto">
                  <Icon name="Mail" size={14} className="text-[var(--brand-red)] flex-shrink-0" />
                  info@powerfuel.ru
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm font-roboto">
                  <Icon name="Clock" size={14} className="text-[var(--brand-green)] flex-shrink-0" />
                  Пн-Сб: 10:00 — 21:00
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs font-roboto">© 2026 PowerFuel. Все права защищены.</p>
            <div className="flex gap-4">
              {['Политика конфиденциальности', 'Пользовательское соглашение'].map(item => (
                <a key={item} href="#" className="text-gray-500 hover:text-gray-300 text-xs font-roboto transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;