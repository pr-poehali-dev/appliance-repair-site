
import React from 'react';
import { Clock, Award, Package, Shield } from 'lucide-react';

const AdvantagesSection: React.FC = () => {
  const advantages = [
    {
      icon: <Clock className="h-12 w-12 text-accent" />,
      title: 'Выезд в день обращения',
      description: 'Мастер приедет в удобное для вас время в день обращения'
    },
    {
      icon: <Award className="h-12 w-12 text-accent" />,
      title: 'Сертифицированные мастера',
      description: 'Наши специалисты имеют профильное образование и сертификаты'
    },
    {
      icon: <Package className="h-12 w-12 text-accent" />,
      title: 'Оригинальные запчасти',
      description: 'Используем только оригинальные комплектующие с гарантией'
    },
    {
      icon: <Shield className="h-12 w-12 text-accent" />,
      title: 'Фиксированная цена',
      description: 'Стоимость ремонта не изменится после диагностики'
    }
  ];

  return (
    <section id="advantages" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Наши преимущества
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {advantage.title}
              </h3>
              <p className="text-secondary">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
