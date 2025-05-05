import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Типы для структуры данных
type ServicePrice = {
  service: string;
  price: number;
  time: string;
};

type Category = {
  name: string;
  items: ServicePrice[];
};

const PricesSection: React.FC = () => {
  // Данные о ценах
  const priceCategories: Category[] = [
    {
      name: 'Стиральные машины',
      items: [
        { service: 'Диагностика', price: 500, time: '30-60 мин' },
        { service: 'Замена насоса', price: 1500, time: '1-2 часа' },
        { service: 'Замена подшипников', price: 3500, time: '3-4 часа' },
        { service: 'Замена ТЭНа', price: 1200, time: '1-2 часа' },
      ]
    },
    {
      name: 'Холодильники',
      items: [
        { service: 'Диагностика', price: 700, time: '30-60 мин' },
        { service: 'Заправка фреоном', price: 2500, time: '1-2 часа' },
        { service: 'Замена компрессора', price: 4500, time: '2-3 часа' },
        { service: 'Ремонт электроники', price: 2000, time: '1-2 часа' },
      ]
    },
  ];

  // Активная категория (по умолчанию - первая)
  const [activeCategory, setActiveCategory] = React.useState(0);

  return (
    <section id="prices" className="py-24 relative bg-[#0f172a]">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z" fill='%23f97316' fill-opacity='0.5' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '84px 48px'
        }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-6">
          Тарифы и гарантии
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          Фиксированные цены на наиболее распространенные виды работ.
          На все услуги предоставляется гарантия до 12 месяцев.
        </p>
        
        {/* Табы с категориями */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {priceCategories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === index ? "default" : "outline"}
              className={`$
                activeCategory === index 
                  ? "bg-gradient-to-r from-[#1e40af] to-[#f97316] text-white border-none" 
                  : "border-gray-500 text-gray-300 hover:border-[#f97316] hover:text-white"
              } px-8 py-3 transform transition-transform duration-200 ${activeCategory === index ? 'scale-105' : ''}`}
              onClick={() => setActiveCategory(index)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        {/* Таблица с ценами */}
        <div className="rounded-xl overflow-hidden shadow-2xl border border-[#374151]">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e40af] to-[#1e293b]">
                  <th className="text-white px-6 py-4 text-left font-semibold">Услуга</th>
                  <th className="text-white px-6 py-4 text-right font-semibold">Цена</th>
                  <th className="text-white px-6 py-4 text-right font-semibold">Время выполнения</th>
                </tr>
              </thead>
              <tbody>
                {priceCategories[activeCategory].items.map((item, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? "bg-[#1f2937]" : "bg-[#111827]"} hover:bg-[#374151] transition-colors`}> 
                    <td className="px-6 py-4 font-medium text-white">{item.service}</td>
                    <td className="px-6 py-4 text-right">
                      <span className="font-bold text-[#f97316]">{item.price} ₽</span>
                    </td>
                    <td className="px-6 py-4 text-right text-gray-300">{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Информация о гарантии */}
        <div className="mt-16 card p-8 bg-gradient-to-br from-[#1f2937] to-[#111827] border border-[#374151]">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-7/12">
              <h3 className="text-2xl font-semibold text-white mb-6 relative">
                <span className="gradient-text">Наши гарантии</span>
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-[#f97316] flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Гарантия на работу до 12 месяцев</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-[#f97316] flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Гарантия на запчасти от производителя</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-[#f97316] flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Фиксированная стоимость после диагностики</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-[#f97316] flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Выдаем все необходимые документы и чеки</span>
                </li>
              </ul>
              <p className="mt-6 text-gray-300 italic">
                Если в течение гарантийного срока возникнут проблемы, мы бесплатно устраним неисправность.
              </p>
            </div>
            <div className="md:w-5/12 flex items-center justify-center">
              <div className="w-48 h-48 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1e40af] to-[#f97316] opacity-20 animate-pulse"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#1e40af] to-[#f97316] p-1 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#111827] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white">100%</div>
                      <div className="text-sm text-gray-300">ГАРАНТИЯ</div>
                      <div className="text-sm text-[#f97316]">КАЧЕСТВА</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricesSection;