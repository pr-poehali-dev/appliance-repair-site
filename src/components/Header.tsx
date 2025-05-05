import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-[#111827] border-b border-[#374151] shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Логотип */}
          <div className="flex items-center">
            <a href="#" className="text-white font-bold text-2xl flex items-center">
              <span className="text-[#f97316] mr-1">Тех</span>Ремонт
              <span className="ml-2 text-xs bg-[#f97316] text-white px-2 py-1 rounded">24/7</span>
            </a>
          </div>

          {/* Мобильная кнопка меню */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 focus:outline-none"
              aria-label="Открыть меню"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>

          {/* Навигация для больших экранов */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-gray-300 hover:text-[#f97316] transition-colors">Главная</a>
            <a href="#services" className="text-gray-300 hover:text-[#f97316] transition-colors">Услуги</a>
            <a href="#about" className="text-gray-300 hover:text-[#f97316] transition-colors">О компании</a>
            <a href="#prices" className="text-gray-300 hover:text-[#f97316] transition-colors">Цены</a>
            <a href="#testimonials" className="text-gray-300 hover:text-[#f97316] transition-colors">Отзывы</a>
            <a href="#contacts" className="text-gray-300 hover:text-[#f97316] transition-colors">Контакты</a>
          </nav>

          {/* Кнопка заказать ремонт для больших экранов */}
          <div className="hidden md:block">
            <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white pulse-animation">
              Заказать ремонт
            </Button>
          </div>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#hero" 
                className="text-gray-300 hover:text-[#f97316] transition-colors"
                onClick={toggleMenu}
              >
                Главная
              </a>
              <a 
                href="#services" 
                className="text-gray-300 hover:text-[#f97316] transition-colors"
                onClick={toggleMenu}
              >
                Услуги
              </a>
              <a 
                href="#about" 
                className="text-gray-300 hover:text-[#f97316] transition-colors"
                onClick={toggleMenu}
              >
                О компании
              </a>
              <a 
                href="#prices" 
                className="text-gray-300 hover:text-[#f97316] transition-colors"
                onClick={toggleMenu}
              >
                Цены
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-300 hover:text-[#f97316] transition-colors"
                onClick={toggleMenu}
              >
                Отзывы
              </a>
              <a 
                href="#contacts" 
                className="text-gray-300 hover:text-[#f97316] transition-colors"
                onClick={toggleMenu}
              >
                Контакты
              </a>
              <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white w-full pulse-animation">
                Заказать ремонт
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;