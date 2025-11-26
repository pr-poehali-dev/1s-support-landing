import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState, useRef } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const services = [
    { icon: "RefreshCw", title: "Обновление платформ и баз 1С", desc: "Регулярные обновления без доработок" },
    { icon: "Database", title: "Резервные копии", desc: "Создание и обслуживание бэкапов" },
    { icon: "Landmark", title: "Банк-клиент", desc: "Настройка и обмен данными" },
    { icon: "FileCheck", title: "Классификаторы и патчи", desc: "Обновление справочников" },
    { icon: "Search", title: "Поиск документов", desc: "Помощь в навигации по 1С" },
    { icon: "Settings", title: "Настройка интерфейса", desc: "Права доступа и UI" },
    { icon: "MessageCircle", title: "Консультации", desc: "Помощь по новым функциям" },
    { icon: "Scale", title: "Мониторинг законодательства", desc: "Отслеживание изменений" },
    { icon: "Server", title: "Аренда сервера", desc: "Опциональный хостинг" },
    { icon: "Mail", title: "Удалённый доступ", desc: "Настройка AnyDesk, почты" },
  ];

  const steps = [
    { num: "01", icon: "FileText", title: "Заявка", desc: "Оставляете контакт на сайте" },
    { num: "02", icon: "Search", title: "Аудит", desc: "Бесплатно проверяем конфигурацию" },
    { num: "03", icon: "FileSignature", title: "Договор", desc: "Фиксируем объём и цену" },
    { num: "04", icon: "Plug", title: "Подключение", desc: "Настраиваем доступ и сервисы" },
    { num: "05", icon: "HeadphonesIcon", title: "Поддержка", desc: "Работаем 24/7, отчитываемся" },
  ];

  const benefits = [
    { icon: "BadgePercent", title: "Цена", desc: "На 30% ниже среднерыночной" },
    { icon: "Clock", title: "Скорость", desc: "Реагируем в течение дня" },
    { icon: "Shield", title: "Надёжность", desc: "Бэкапы + мониторинг 24/7" },
    { icon: "Award", title: "Эксперты", desc: "Сертифицированные консультанты" },
    { icon: "Smartphone", title: "Гибкость", desc: "Удалённая поддержка, любые каналы" },
    { icon: "FileCheck", title: "Прозрачность", desc: "Отчёты по запросу" },
  ];

  const faq = [
    { q: "Что, если мне нужно больше часов?", a: "Докупаете по сниженной часовой ставке от 800 руб./час." },
    { q: "Есть ли пробный период?", a: "Первый месяц — промо-период с постоплатой." },
    { q: "Как вы обеспечиваете безопасность данных?", a: "Резервное копирование, контроль доступа, NDA по запросу." },
    { q: "Можно ли расторгнуть договор?", a: "Да, с уведомлением за 14 дней без штрафов." },
    { q: "Поддерживаете ли старые версии 1С?", a: "Да, работаем с любыми конфигурациями и версиями." },
  ];

  const testimonials = [
    { name: "Александр М.", company: "ООО «Торговый Дом»", text: "Перешли на сопровождение от этой компании полгода назад. Экономия бюджета 40%, а скорость реакции выше." },
    { name: "Елена К.", company: "ИП Консалтинг", text: "Сократили время закрытия отчётности на 40% благодря правильным настройкам и консультациям." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-primary via-primary to-[#0c0e16] text-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Сопровождение 1С<br />от 2 500 ₽/мес
            </h1>
            <p className="text-xl text-blue-100">
              Без скрытых платежей, с поддержкой 24/7
            </p>
            <p className="text-lg text-blue-200">
              Обновления, резервные копии, помощь экспертов — в одном фиксированном платеже
            </p>
            <div className="flex gap-4 pt-4">
              <Button size="lg" onClick={scrollToForm} className="bg-accent hover:bg-accent/90 text-white font-semibold">
                Подключить сопровождение
              </Button>
            </div>
          </div>
          <Card className="bg-white/95 backdrop-blur animate-fade-in" ref={formRef}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Оставить заявку</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-gray-300"
                />
                <Input
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border-gray-300"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-gray-300"
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-semibold">
                  Получить консультацию
                </Button>
              </form>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Ответим в течение 1 часа
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Что входит в ежемесячное сопровождение
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="border-2 hover:border-accent transition-colors duration-300">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon} className="text-accent" size={24} />
                  </div>
                  <h4 className="font-semibold text-foreground">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Как это работает
          </h2>
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center space-y-4">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center mb-2">
                    <Icon name={step.icon} className="text-white" size={32} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.num}
                  </div>
                </div>
                <h4 className="font-bold text-lg text-foreground">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Тарифы и цены
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-accent shadow-lg">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Базовый</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-accent">2 500 ₽</span>
                    <span className="text-muted-foreground">/месяц</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "1 час поддержки в месяц",
                    "До 3 обращений",
                    "Обновления и резервные копии",
                    "Помощь в навигации по 1С",
                    "Отчётность по работам",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" className="text-accent mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button onClick={scrollToForm} className="w-full bg-accent hover:bg-accent/90 text-white font-semibold">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Дополнительно</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">от 800 ₽</span>
                    <span className="text-muted-foreground">/час</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Доработка конфигураций",
                    "Перенос данных",
                    "Интеграция с другими системами",
                    "Обучение сотрудников",
                    "Аудит безопасности",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Plus" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button onClick={scrollToForm} variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white font-semibold">
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-lg text-primary font-semibold mt-8">
            Фиксированная цена — без скрытых платежей
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Почему мы
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="border-2 hover:border-accent transition-colors duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name={benefit.icon} className="text-accent" size={32} />
                  </div>
                  <h4 className="font-bold text-xl text-foreground">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border-2 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Отзывы клиентов
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <Card key={idx} className="border-2">
                <CardContent className="p-8 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-foreground italic">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Наши гарантии
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "ShieldCheck", title: "Возврат средств", desc: "Если не справились за 24 часа" },
              { icon: "BadgeCheck", title: "Фиксированная цена", desc: "Без скрытых доплат" },
              { icon: "Lock", title: "Конфиденциальность", desc: "Подписываем NDA по запросу" },
              { icon: "Award", title: "Сертификация", desc: "Все специалисты имеют сертификаты 1С" },
            ].map((g, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name={g.icon} className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{g.title}</h4>
                  <p className="text-blue-100">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-accent">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl mb-8 text-blue-50">
            Оставьте заявку, и мы свяжемся с вами в течение часа
          </p>
          <Card className="bg-white">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                <Input
                  placeholder="Ваше имя"
                  className="border-gray-300"
                />
                <Input
                  placeholder="Телефон"
                  className="border-gray-300"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="border-gray-300"
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold text-lg py-6">
                  Получить консультацию
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">1С Сопровождение</h3>
              <p className="text-blue-200">Профессиональное сопровождение 1С для вашего бизнеса</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-blue-200">
                <li>Обновление 1С</li>
                <li>Резервное копирование</li>
                <li>Консультации</li>
                <li>Настройка систем</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-blue-200">
                <li>О нас</li>
                <li>Отзывы</li>
                <li>Вакансии</li>
                <li>Блог</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-blue-200">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@1c-support.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 1
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-blue-200">
            <p>© 2024 1С Сопровождение. Все права защищены.</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
              <span>•</span>
              <a href="#" className="hover:text-accent transition-colors">Договор оферты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;