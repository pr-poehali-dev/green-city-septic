import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Leaf" size={24} className="text-white" />
              </div>
              <span className="text-xl font-heading font-bold text-nature-text">Зеленый Город</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-nature-text hover:text-primary transition-colors">Услуги</a>
              <a href="#installation" className="text-nature-text hover:text-primary transition-colors">Монтаж</a>
              <a href="#products" className="text-nature-text hover:text-primary transition-colors">Септики</a>
              <a href="#portfolio" className="text-nature-text hover:text-primary transition-colors">Портфолио</a>
              <a href="#contacts" className="text-nature-text hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary-700">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-50 to-nature-light">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-heading font-bold text-nature-text mb-6 leading-tight">
                Экологичные решения для вашего дома
              </h1>
              <p className="text-xl text-nature-text mb-8 opacity-80">
                Профессиональный монтаж и продажа автономных канализаций и септиков 
                по всему Ставропольскому краю и КМВ
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-primary hover:bg-primary-700">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Наши объекты
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/408dcf9b-8ee0-4ea7-91fd-d1c54b298f31.jpg" 
                alt="Септик в природной среде"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-nature-text">Гарантия</p>
                    <p className="text-sm text-muted-foreground">до 10 лет</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-nature-text mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный цикл работ по проектированию, монтажу и обслуживанию систем автономной канализации
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Wrench",
                title: "Монтаж септиков",
                description: "Профессиональная установка любых типов септических систем с гарантией качества"
              },
              {
                icon: "Droplets",
                title: "Обслуживание",
                description: "Регулярное техническое обслуживание и очистка автономных канализаций"
              },
              {
                icon: "Settings",
                title: "Ремонт и модернизация",
                description: "Ремонт существующих систем и их модернизация для повышения эффективности"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section id="installation" className="py-20 bg-primary-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/c6552fd5-c827-4515-9bdb-a7afaedd6b6b.jpg" 
                alt="Процесс монтажа септика"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-bold text-nature-text mb-6">
                Профессиональный монтаж
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Наша команда специалистов выполняет монтаж септических систем 
                с соблюдением всех технологических требований и экологических норм.
              </p>
              
              <div className="space-y-6">
                {[
                  { step: "01", title: "Выезд специалиста", desc: "Бесплатный осмотр участка и консультация" },
                  { step: "02", title: "Проектирование", desc: "Разработка индивидуального проекта" },
                  { step: "03", title: "Монтаж", desc: "Профессиональная установка за 1-2 дня" },
                  { step: "04", title: "Запуск системы", desc: "Тестирование и ввод в эксплуатацию" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-nature-text mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-nature-text mb-4">Наши септики</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий выбор экологичных септических систем для любых потребностей
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Локальные очистные сооружения",
                price: "от 150 000 ₽",
                features: ["Глубокая биологическая очистка", "Автоматическое управление", "Низкое энергопотребление"]
              },
              {
                title: "Септики накопительного типа",
                price: "от 80 000 ₽",
                features: ["Простота эксплуатации", "Надежная конструкция", "Доступная цена"]
              },
              {
                title: "Системы доочистки",
                price: "от 200 000 ₽",
                features: ["Максимальная степень очистки", "Соответствие СанПиН", "Экологическая безопасность"]
              }
            ].map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-heading text-center">{product.title}</CardTitle>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-primary">{product.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-primary shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary-700">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-nature-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-nature-text mb-4">Наши работы</h2>
            <p className="text-xl text-muted-foreground">
              Более 500 успешно реализованных проектов по всему Ставропольскому краю
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-primary-100 relative overflow-hidden">
                  <img 
                    src="/img/6f99790a-5dca-43e1-a535-1a2316eece7c.jpg" 
                    alt={`Проект ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-nature-text mb-2">Частный дом в Кисловодске</h3>
                  <p className="text-sm text-muted-foreground">Установка ЛОС для семьи из 4 человек</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-heading font-bold text-nature-text mb-6">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Работаем по всему Ставропольскому краю и КМВ. 
                Бесплатная консультация и выезд специалиста.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-nature-text">+7 (8793) 123-456</p>
                    <p className="text-muted-foreground">Звоните с 8:00 до 20:00</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-nature-text">г. Кисловодск</p>
                    <p className="text-muted-foreground">Работаем по всему СК и КМВ</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-nature-text">info@zeleniy-gorod.ru</p>
                    <p className="text-muted-foreground">Отвечаем в течение часа</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-center">Получить консультацию</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-nature-text mb-2">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-nature-text mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-nature-text mb-2">Тип объекта</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none">
                    <option>Частный дом</option>
                    <option>Дача</option>
                    <option>Коммерческий объект</option>
                  </select>
                </div>
                <Button className="w-full bg-primary hover:bg-primary-700" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-nature-dark text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Leaf" size={24} className="text-white" />
                </div>
                <span className="text-xl font-heading font-bold">Зеленый Город</span>
              </div>
              <p className="text-white/80">
                Экологичные решения для автономной канализации в КМВ и Ставропольском крае
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-white/80">
                <li>Монтаж септиков</li>
                <li>Обслуживание</li>
                <li>Ремонт систем</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/80">
                <li>+7 (8793) 123-456</li>
                <li>info@zeleniy-gorod.ru</li>
                <li>г. Кисловодск</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <Icon name="Phone" size={20} />
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <Icon name="Mail" size={20} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 Зеленый Город. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;