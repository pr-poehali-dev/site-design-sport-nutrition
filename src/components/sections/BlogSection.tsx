import Icon from '@/components/ui/icon';

const BLOG_POSTS = [
  { id: 1, title: 'Как выбрать протеин для набора мышечной массы', excerpt: 'Разбираем основные виды протеина, их отличия и применение в зависимости от ваших целей.', date: '24 апреля 2026', category: 'Питание', readTime: '5 мин', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80' },
  { id: 2, title: 'BCAA: нужны ли они вам на самом деле?', excerpt: 'Научный взгляд на аминокислоты с разветвлённой цепью — факты без маркетинга.', date: '17 апреля 2026', category: 'Добавки', readTime: '7 мин', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80' },
  { id: 3, title: 'Предтренировочные комплексы: за и против', excerpt: 'Когда предтренировочник реально помогает, а когда от него лучше отказаться.', date: '10 апреля 2026', category: 'Тренинг', readTime: '6 мин', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80' },
];

export default function BlogSection() {
  return (
    <>
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
    </>
  );
}
