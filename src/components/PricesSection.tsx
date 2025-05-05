
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
    <section id="prices" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          Тарифы и гарантии
        </h2>
        <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
          Фиксированные цены на наиболее распространенные виды работ.
          На все услуги предоставляется гарантия до 12 месяцев.
        </p>
        
        {/* Табы с категориями */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {priceCategories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === index ? "default" : "outline"}
              className={`${
                activeCategory === index 
                  ? "bg-primary text-white" 
                  : "border-primary text-primary"
              }`}
              onClick={() => setActiveCategory(index)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        {/* Таблица с  ценами */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <Table>
            <TableHeader className="bg-primary">
              <TableRow>
                <TableHead className="text-white">Услуга</TableHead>
                <TableHead className="text-white text-right">Цена</TableHead>
                <TableHead className="text-white text-right">Время выполнения</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {priceCategories[activeCategory].items.map((item, index) => (
                <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <TableCell className="font-medium">{item.service}</TableCell>
                  <TableCell className="text-right">{item.price} ₽</TableCell>
                  <TableCell className="text-right">{item.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {/* Информация о гарантии */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-primary mb-4">Наши гарантии</h3>
          <ul className="list-disc list-inside space-y-2 text-secondary mb-4">
            <li>Гарантия на работу до 12 месяцев</li>
            <li>Гарантия на запчасти от производителя</li>
            <li>Фиксированная стоимость после диагностики</li>
            <li>Выдаем все необходимые документы и чеки</li>
          </ul>
          <p className="text-secondary">
            Если в течение гарантийного срока возникнут проблемы, мы бесплатно устраним неисправность.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricesSection;
