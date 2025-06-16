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
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-montserrat">
            <span className="bg-gradient-to-r from-primary via-light-purple to-white bg-clip-text text-transparent block animate-glow">
              DANCE
            </span>
            <span
              className="bg-gradient-to-r from-white via-light-purple to-primary bg-clip-text text-transparent block animate-slide-in-right"
              style={{ animationDelay: "0.3s", animationFillMode: "both" }}
            >
              STUDIO
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl mb-8 text-gray-300 animate-slide-up font-open-sans"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            Почувствуй ритм. Открой себя. Танцуй с нами.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in"
            style={{ animationDelay: "0.9s", animationFillMode: "both" }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg hover-scale transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
              onClick={() => setIsBookingOpen(true)}
            >
              Записаться на занятие
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-dark-purple px-8 py-4 text-lg hover-scale transition-all duration-300"
            >
              Смотреть видео
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 text-primary/30 animate-float hidden md:block">
          <Icon name="Music" size={32} />
        </div>
        <div
          className="absolute top-1/3 right-10 text-light-purple/30 animate-float hidden md:block"
          style={{ animationDelay: "1s" }}
        >
          <Icon name="Heart" size={24} />
        </div>
        <div
          className="absolute bottom-1/4 left-1/4 text-white/20 animate-bounce-subtle hidden md:block"
          style={{ animationDelay: "2s" }}
        >
          <Icon name="Star" size={20} />
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
                className="text-center animate-scale-in hover-scale group cursor-pointer"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: "both",
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                  <Icon
                    name={stat.icon as any}
                    size={24}
                    className="text-white group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 font-montserrat group-hover:text-primary transition-colors">
                  {stat.title}
                </h3>
                <p className="text-gray-300 font-open-sans">{stat.subtitle}</p>
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
