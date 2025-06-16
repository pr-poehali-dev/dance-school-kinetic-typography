import { useState } from "react";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-purple">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-dark-purple/70 flex items-center justify-center">
            <div className="text-center text-white/50 animate-pulse">
              <Icon name="Play" size={64} />
              <p className="mt-4">Видео с танцами</p>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-[scale-in_1s_ease-out]">
            <span className="bg-gradient-to-r from-primary via-light-purple to-white bg-clip-text text-transparent block">
              DANCE
            </span>
            <span className="bg-gradient-to-r from-white via-light-purple to-primary bg-clip-text text-transparent block animate-[slide-in-right_1s_ease-out_0.3s_both]">
              STUDIO
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-[fade-in_1s_ease-out_0.6s_both]">
            Почувствуй ритм. Открой себя. Танцуй с нами.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fade-in_1s_ease-out_0.9s_both]">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg hover-scale"
              onClick={() => setIsBookingOpen(true)}
            >
              Записаться на занятие
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-dark-purple px-8 py-4 text-lg hover-scale"
            >
              Смотреть видео
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/70" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-dark-purple to-primary/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-fade-in">
            О нашей студии
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in">
            DanceStudio — это место, где рождается магия движения. Мы объединяем
            профессиональное обучение с творческой атмосферой, помогая каждому
            найти свой уникальный стиль танца.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "Users", title: "500+", subtitle: "Учеников" },
              { icon: "Award", title: "10+", subtitle: "Лет опыта" },
              { icon: "Star", title: "15+", subtitle: "Стилей танца" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-scale-in hover-scale"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                  <Icon
                    name={stat.icon as any}
                    size={24}
                    className="text-white"
                  />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {stat.title}
                </h3>
                <p className="text-gray-300">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Готов начать танцевать?
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-in">
            Запишись на пробное занятие и получи скидку 20% на первый абонемент
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg hover-scale"
            onClick={() => setIsBookingOpen(true)}
          >
            Записаться сейчас
          </Button>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
};

export default Index;
