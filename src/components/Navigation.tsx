import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/schedule", label: "Расписание" },
    { path: "/teachers", label: "Преподаватели" },
    { path: "/prices", label: "Цены" },
    { path: "/contacts", label: "Контакты" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-dark-purple/95 backdrop-blur-sm z-50 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-2xl font-bold text-white hover-scale transition-all duration-300 group"
          >
            <span className="bg-gradient-to-r from-primary to-light-purple bg-clip-text text-transparent font-montserrat group-hover:animate-glow">
              DanceStudio
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`story-link text-white hover:text-primary transition-all duration-300 font-open-sans font-medium relative group ${
                  location.pathname === item.path ? "text-primary" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.label}</span>
                {location.pathname === item.path && (
                  <span className="absolute inset-0 bg-primary/20 rounded-md -z-10 animate-fade-in"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-primary transition-colors"
          >
            <Icon name={isOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-purple/95">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-white hover:text-primary transition-colors duration-300 ${
                    location.pathname === item.path ? "text-primary" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
