import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import BookingModal from "@/components/BookingModal";

const Teachers = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const teachers = [
    {
      name: "Анна Петрова",
      title: "Главный хореограф",
      experience: "8 лет",
      styles: ["Современные танцы", "Джаз-фанк", "Контемпорари"],
      achievements: [
        'Победитель конкурса "Танцы России"',
        "Мастер спорта по бальным танцам",
      ],
      description:
        "Анна — талантливый хореограф с международным опытом. Создает уникальные постановки, вдохновляющие на творчество.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Михаил Иванов",
      title: "Инструктор по хип-хопу",
      experience: "6 лет",
      styles: ["Хип-хоп", "Брейк-данс", "Popping"],
      achievements: [
        "Чемпион России по брейк-дансу",
        "Участник Battle of the Year",
      ],
      description:
        "Михаил привносит энергию улиц в студию. Его занятия — это не просто танцы, это культура и философия движения.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "София Козлова",
      title: "Специалист по латиноамериканским танцам",
      experience: "10 лет",
      styles: ["Латина", "Бальные танцы", "Сальса"],
      achievements: [
        "Мастер спорта международного класса",
        "Призер чемпионата Европы",
      ],
      description:
        "София обучалась в лучших школах Латинской Америки. Она научит вас не только технике, но и передаст страсть танца.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Дмитрий Волков",
      title: "Инструктор по брейк-дансу",
      experience: "7 лет",
      styles: ["Брейк-данс", "Акробатика", "Freeze"],
      achievements: [
        "Winner Red Bull BC One Moscow",
        'Основатель команды "Street Warriors"',
      ],
      description:
        "Дмитрий — мастер экстремальных движений. Его уроки развивают не только тело, но и характер.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
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
                Преподаватели
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Познакомьтесь с нашей командой профессионалов
            </p>
          </div>

          {/* Teachers Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover-scale animate-scale-in group hover:shadow-2xl hover:shadow-primary/20"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: "both",
                }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-48 flex-shrink-0">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-48 md:h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 font-montserrat group-hover:text-primary transition-colors duration-300">
                      {teacher.name}
                    </h3>
                    <p className="text-primary font-semibold mb-4 font-open-sans group-hover:glow">
                      {teacher.title}
                    </p>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Icon name="Clock" size={16} />
                        <span>Опыт: {teacher.experience}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-400 mb-2 font-open-sans">
                        Специализация:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {teacher.styles.map((style, styleIndex) => (
                          <Badge
                            key={styleIndex}
                            className="bg-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 cursor-default"
                          >
                            {style}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4">
                      {teacher.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-sm text-gray-400 mb-2">Достижения:</p>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {teacher.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2">
                            <Icon
                              name="Star"
                              size={12}
                              className="text-primary mt-1 flex-shrink-0"
                            />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      className="bg-primary hover:bg-primary/90 w-full"
                      onClick={() => setIsBookingOpen(true)}
                    >
                      Записаться к {teacher.name.split(" ")[0]}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center pb-20 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-6">
              Готовы начать обучение?
            </h2>
            <p className="text-gray-300 mb-8">
              Выберите преподавателя и запишитесь на первое занятие
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg hover-scale"
              onClick={() => setIsBookingOpen(true)}
            >
              Записаться на занятие
            </Button>
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

export default Teachers;
