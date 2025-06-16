import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import BookingModal from "@/components/BookingModal";

const Schedule = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const scheduleData = [
    {
      time: "10:00",
      monday: "Хип-хоп (Михаил)",
      tuesday: "",
      wednesday: "Современные (Анна)",
      thursday: "",
      friday: "Брейк-данс (Дмитрий)",
      saturday: "Латина (София)",
      sunday: "",
    },
    {
      time: "11:30",
      monday: "",
      tuesday: "Бальные (София)",
      wednesday: "",
      thursday: "Джаз-фанк (Анна)",
      friday: "",
      saturday: "Хип-хоп (Михаил)",
      sunday: "Современные (Анна)",
    },
    {
      time: "13:00",
      monday: "Латина (София)",
      tuesday: "Хип-хоп (Михаил)",
      wednesday: "Брейк-данс (Дмитрий)",
      thursday: "Современные (Анна)",
      friday: "Джаз-фанк (Анна)",
      saturday: "",
      sunday: "Бальные (София)",
    },
    {
      time: "14:30",
      monday: "",
      tuesday: "Современные (Анна)",
      wednesday: "",
      thursday: "Латина (София)",
      friday: "",
      saturday: "Джаз-фанк (Анна)",
      sunday: "",
    },
    {
      time: "16:00",
      monday: "Джаз-фанк (Анна)",
      tuesday: "",
      wednesday: "Хип-хоп (Михаил)",
      thursday: "",
      friday: "Современные (Анна)",
      saturday: "Брейк-данс (Дмитрий)",
      sunday: "Хип-хоп (Михаил)",
    },
    {
      time: "17:30",
      monday: "Брейк-данс (Дмитрий)",
      tuesday: "Латина (София)",
      wednesday: "Бальные (София)",
      thursday: "Хип-хоп (Михаил)",
      friday: "Латина (София)",
      saturday: "",
      sunday: "Джаз-фанк (Анна)",
    },
    {
      time: "19:00",
      monday: "Современные (Анна)",
      tuesday: "Джаз-фанк (Анна)",
      wednesday: "Латина (София)",
      thursday: "Брейк-данс (Дмитрий)",
      friday: "Бальные (София)",
      saturday: "Современные (Анна)",
      sunday: "",
    },
    {
      time: "20:30",
      monday: "",
      tuesday: "",
      wednesday: "Хип-хоп (Михаил)",
      thursday: "",
      friday: "",
      saturday: "Латина (София)",
      sunday: "",
    },
  ];

  const filters = [
    { id: "all", label: "Все" },
    { id: "hip-hop", label: "Хип-хоп" },
    { id: "contemporary", label: "Современные" },
    { id: "latin", label: "Латина" },
    { id: "ballroom", label: "Бальные" },
    { id: "jazz-funk", label: "Джаз-фанк" },
    { id: "breakdance", label: "Брейк-данс" },
  ];

  const days = [
    "Время",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];

  return (
    <div className="min-h-screen bg-dark-purple">
      <Navigation />

      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-primary to-light-purple bg-clip-text text-transparent">
                Расписание
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Выбери удобное время и начни танцевать уже сегодня
            </p>
          </div>

          {/* Filters */}
          <div
            className="flex flex-wrap justify-center gap-3 mb-8 animate-slide-up"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            {filters.map((filter, index) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter.id)}
                className={`hover-scale transition-all duration-300 ${
                  selectedFilter === filter.id
                    ? "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30"
                    : "border-primary text-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Schedule Grid */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 animate-fade-in">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    {days.map((day) => (
                      <th
                        key={day}
                        className="text-white font-semibold p-4 text-center border-b border-primary/20"
                      >
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {scheduleData.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-white/5 transition-colors"
                    >
                      <td className="text-primary font-semibold p-4 text-center">
                        {row.time}
                      </td>
                      <td className="p-4 text-center">
                        {row.monday && (
                          <Badge
                            className="bg-primary/20 text-primary hover:bg-primary hover:text-white cursor-pointer hover-scale transition-all duration-300 hover:shadow-md"
                            onClick={() => setIsBookingOpen(true)}
                          >
                            {row.monday}
                          </Badge>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.tuesday && (
                          <Badge
                            className="bg-primary/20 text-primary hover:bg-primary hover:text-white cursor-pointer hover-scale transition-all duration-300 hover:shadow-md"
                            onClick={() => setIsBookingOpen(true)}
                          >
                            {row.tuesday}
                          </Badge>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.wednesday && (
                          <Badge
                            className="bg-primary/20 text-primary hover:bg-primary hover:text-white cursor-pointer hover-scale transition-all duration-300 hover:shadow-md"
                            onClick={() => setIsBookingOpen(true)}
                          >
                            {row.wednesday}
                          </Badge>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.thursday && (
                          <Badge
                            className="bg-primary/20 text-primary hover:bg-primary hover:text-white cursor-pointer hover-scale transition-all duration-300 hover:shadow-md"
                            onClick={() => setIsBookingOpen(true)}
                          >
                            {row.thursday}
                          </Badge>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.friday && (
                          <Badge
                            className="bg-primary/20 text-primary hover:bg-primary hover:text-white cursor-pointer hover-scale transition-all duration-300 hover:shadow-md"
                            onClick={() => setIsBookingOpen(true)}
                          >
                            {row.friday}
                          </Badge>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.saturday && (
                          <Badge
                            className="bg-primary/20 text-primary hover:bg-primary hover:text-white cursor-pointer hover-scale transition-all duration-300 hover:shadow-md"
                            onClick={() => setIsBookingOpen(true)}
                          >
                            {row.saturday}
                          </Badge>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.sunday && (
                          <Badge
                            className="bg-primary/20 text-primary hover:bg-primary hover:text-white cursor-pointer hover-scale transition-all duration-300 hover:shadow-md"
                            onClick={() => setIsBookingOpen(true)}
                          >
                            {row.sunday}
                          </Badge>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pb-20">
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

export default Schedule;
