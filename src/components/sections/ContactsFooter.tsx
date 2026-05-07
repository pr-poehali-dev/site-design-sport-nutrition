import Icon from '@/components/ui/icon';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyIcon = any;

const CATEGORIES_FOOTER = [
  { name: 'Протеин' },
  { name: 'Гейнеры' },
  { name: 'Аминокислоты' },
  { name: 'Витамины' },
  { name: 'Жиросжигатели' },
];

export default function ContactsFooter() {
  return (
    <>
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
                {CATEGORIES_FOOTER.map(cat => (
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
    </>
  );
}