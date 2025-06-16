import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import BookingModal from "@/components/BookingModal";

const Prices = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const subscriptions = [
    {
      name: "Starter",
      price: "3 500",
      originalPrice: "4 200",
      period: "4 занятия",
      duration: "1 месяц",
      features: [
        "Любые групповые занятия",
        "Заморозка абонемента",
        "Скидка на мерч 5%",
        "Доступ в раздевалки",
      ],
      popular: false,
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "Premium",
      price: "6 500",
      originalPrice: "8 000",
      period: "8 занятий",
      duration: "1 месяц",
      features: [
        "Любые групповые занятия",
        "2 индивидуальных занятия",
        "Заморозка абонемента",
        "Скидка на мерч 10%",
        "Доступ в раздевалки",
        "Приоритетная запись",
      ],
      popular: true,
      color: "from-primary to-light-purple",
    },
    {
      name: "Unlimited",
      price: "9 500",
      originalPrice: "12 000",
      period: "Безлимит",
      duration: "1 месяц",
      features: [
        "Безлимитные групповые занятия",
        "4 индивидуальных занятия",
        "Участие в мастер-классах",
        "Заморозка абонемента",
        "Скидка на мерч 15%",
        "VIP раздевалка",
        "Приоритетная запись",
        "Персональный куратор",
      ],
      popular: false,
      color: "from-yellow-500 to-orange-600",
    },
  ];

  const singleClasses = [
    {
      name: "Групповое занятие",
      price: "1 200",
      description: "Разовое посещение группового класса",
    },
    {
      name: "Пробное занятие",
      price: "800",
      description: "Первое занятие со скидкой 30%",
    },
    {
      name: "Индивидуальное занятие",
      price: "3 500",
      description: "60 минут персонального обучения",
    },
    {
      name: "Парное занятие",
      price: "5 000",
      description: "60 минут для двоих учеников",
    },
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
                Цены
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Выберите подходящий тарифный план
            </p>
            <Badge className="bg-primary/20 text-primary text-lg px-4 py-2">
              🎉 Скидка 20% на первый абонемент для новых учеников
            </Badge>
          </div>

          {/* Subscription Plans */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8 animate-fade-in">
              Абонементы
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {subscriptions.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-500 hover-scale animate-scale-in group hover:shadow-2xl ${
                    plan.popular
                      ? "border-primary scale-105 shadow-lg shadow-primary/30"
                      : "border-transparent hover:border-primary/50 hover:shadow-primary/20"
                  }`}
                  style={{
                    animationDelay: `${index * 0.15}s`,
                    animationFillMode: "both",
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
                      <Badge className="bg-primary text-white px-4 py-1 shadow-lg">
                        Популярный
                      </Badge>
                    </div>
                  )}

                  <div
                    className={`text-center mb-6 p-6 rounded-xl bg-gradient-to-br ${plan.color} group-hover:scale-105 transition-transform duration-300`}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2 font-montserrat">
                      {plan.name}
                    </h3>
                    <div className="text-white/80 mb-4">
                      <span className="text-sm line-through animate-fade-in">
                        {plan.originalPrice} ₽
                      </span>
                    </div>
                    <div className="text-white">
                      <span className="text-4xl font-bold font-montserrat animate-glow">
                        {plan.price}
                      </span>
                      <span className="text-lg"> ₽</span>
                    </div>
                    <p className="text-white/90 mt-2 font-open-sans">
                      {plan.period}
                    </p>
                    <p className="text-white/70 text-sm font-open-sans">
                      {plan.duration}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <Icon
                          name="Check"
                          size={16}
                          className="text-primary mt-1 flex-shrink-0"
                        />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90"
                        : "bg-white/10 hover:bg-primary hover:text-white border border-primary text-primary"
                    }`}
                    onClick={() => setIsBookingOpen(true)}
                  >
                    Выбрать план
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Single Classes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8 animate-fade-in">
              Разовые занятия
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {singleClasses.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover-scale animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-primary">
                      {item.price} ₽
                    </span>
                  </div>
                  <Button
                    className="w-full mt-4 bg-primary/20 text-primary hover:bg-primary hover:text-white"
                    onClick={() => setIsBookingOpen(true)}
                  >
                    Записаться
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Special Offers */}
          <div className="bg-gradient-to-r from-primary/20 to-light-purple/20 rounded-2xl p-8 mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-white text-center mb-6">
              Специальные предложения
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Icon
                    name="Gift"
                    size={24}
                    className="text-primary flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Приведи друга
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Получите скидку 15% на абонемент, если приведете друга на
                      занятие
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Icon
                    name="Users"
                    size={24}
                    className="text-primary flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Семейная скидка
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Скидка 20% на второй абонемент для членов одной семьи
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pb-20 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-6">
              Остались вопросы о тарифах?
            </h2>
            <p className="text-gray-300 mb-8">
              Свяжитесь с нами, и мы поможем выбрать идеальный план
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg hover-scale"
                onClick={() => setIsBookingOpen(true)}
              >
                Записаться на пробное
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg hover-scale"
              >
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
};

export default Prices;
