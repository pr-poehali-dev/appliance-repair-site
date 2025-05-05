
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold mb-4">
              <span className="text-accent">Тех</span>Ремонт
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Профессиональный ремонт бытовой техники с гарантией качества.
              Работаем по всему городу с 2013 года.
            </p>
          </div>
          
          {/* Ссылки на разделы */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Разделы сайта</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-300 hover:text-accent transition-colors">Главная</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-accent transition-colors">Услуги</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-accent transition-colors">О компании</a></li>
              <li><a href="#prices" className="text-gray-300 hover:text-accent transition-colors">Цены</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-accent transition-colors">Отзывы</a></li>
              <li><a href="#contacts" className="text-gray-300 hover:text-accent transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          {/* Услуги */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Наши услуги</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Ремонт стиральных машин</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Ремонт холодильников</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Ремонт плит</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Ремонт посудомоечных машин</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Ремонт микроволновых печей</a></li>
            </ul>
          </div>
          
          {/* Контакты */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">ул. Примерная, 123, г. Москва</li>
              <li><a href="tel:+74951234567" className="text-gray-300 hover:text-accent transition-colors">+7 (495) 123-45-67</a></li>
              <li><a href="mailto:info@techremont.ru" className="text-gray-300 hover:text-accent transition-colors">info@techremont.ru</a></li>
              <li className="text-gray-300">Пн-Пт: 9:00 - 20:00</li>
              <li className="text-gray-300">Сб-Вс: 10:00 - 18:00</li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        {/* Нижняя часть футера */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} ТехРемонт. Все права защищены.
          </p>
          
          <div className="flex flex-col md:flex-row mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left">
            <a href="#" className="text-gray-300 hover:text-accent transition-colors text-sm">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-300 hover:text-accent transition-colors text-sm">
              Условия использования
            </a>
            <a href="#" className="text-gray-300 hover:text-accent transition-colors text-sm">
              Карта сайта
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
