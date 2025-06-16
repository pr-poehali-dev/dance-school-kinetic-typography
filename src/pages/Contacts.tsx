import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", formData);
    // Здесь будет логика отправки формы
  };

  const contactInfo = [
    {
      icon: "MapPin",
      title: "Адрес",
      content: "ул. Танцевальная, 15\nМосква, 101000",
      link: "#",
    },
    {
      icon: "Phone",
      title: "Телефон",
      content: "+7 (495) 123-45-67\n+7 (985) 765-43-21",
      link: "tel:+74951234567",
    },
    {
      icon: "Mail",
      title: "Email",
      content: "info@dancestudio.ru\nbooking@dancestudio.ru",
      link: "mailto:info@dancestudio.ru",
    },
    {
      icon: "Clock",
      title: "Режим работы",
      content: "Пн-Пт: 10:00 - 22:00\nСб-Вс: 11:00 - 20:00",
    },
  ];

  const socialLinks = [
    { icon: "Instagram", name: "@dancestudio_moscow", link: "#" },
    { icon: "Facebook", name: "DanceStudio Moscow", link: "#" },
    { icon: "Youtube", name: "DanceStudio Channel", link: "#" },
    { icon: "MessageCircle", name: "Telegram канал", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-dark-purple">
      <Navigation />

      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-primary to-light-purple bg-clip-text text-transparent">
                Контакты
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <div className="animate-scale-in">
              <h2 className="text-3xl font-bold text-white mb-8">
                Наши контакты
              </h2>

              <div className="grid gap-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover-scale"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-lg">
                        <Icon
                          name={item.icon as any}
                          size={24}
                          className="text-primary"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 whitespace-pre-line">
                          {item.content}
                        </p>
                        {item.link && (
                          <a
                            href={item.link}
                            className="text-primary hover:text-light-purple transition-colors inline-block mt-2 story-link"
                          >
                            Связаться
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Мы в социальных сетях
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover-scale flex items-center gap-3"
                    >
                      <Icon
                        name={social.icon as any}
                        size={20}
                        className="text-primary"
                      />
                      <span className="text-gray-300 text-sm">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Напишите нам
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white">
                        Имя *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Ваше имя"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-white">
                        Телефон
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">
                      Сообщение *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                      placeholder="Расскажите, чем мы можем помочь..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 hover-scale"
                  >
                    Отправить сообщение
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Как нас найти
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-light-purple/20 rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Icon
                    name="MapPin"
                    size={48}
                    className="mx-auto mb-4 text-primary"
                  />
                  <p className="text-lg font-semibold mb-2">
                    Интерактивная карта
                  </p>
                  <p className="text-gray-300">ул. Танцевальная, 15, Москва</p>
                  <Button className="mt-4 bg-primary hover:bg-primary/90">
                    Построить маршрут
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="text-center pb-20 animate-fade-in">
            <div className="bg-gradient-to-r from-primary/20 to-light-purple/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Быстрая связь
              </h2>
              <p className="text-gray-300 mb-6">
                Нужна срочная консультация? Звоните прямо сейчас!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg hover-scale"
                >
                  <Icon name="Phone" size={20} />
                  Позвонить
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg hover-scale"
                >
                  <Icon name="MessageCircle" size={20} />
                  Написать в Telegram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
