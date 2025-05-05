
import React from 'react';
import { Button } from '@/components/ui/button';

type ServiceType = {
  icon: string;
  title: string;
  description: string;
  priceFrom: number;
};

const ServicesSection: React.FC = () => {
  const services: ServiceType[] = [
    {
      icon: '🧺',
      title: 'Ремонт стиральных машин',
      description: 'Устранение поломок любой сложности, замена деталей, очистка от накипи',
      priceFrom: 800
    },
    {
      icon: '❄️',
      title: 'Ремонт холодильников',
      description: 'Диагностика и устранение утечек, замена компрессора, ремонт системы охлаждения',
      priceFrom: 1000
    },
    {
      icon: '🍳',
      title: 'Ремонт плит',
      description: 'Ремонт электрических и газовых плит, замена конфорок, ремонт духовок',
      priceFrom: 700
    },
    {
      icon: '🍽️',
      title: 'Ремонт посудомоечных машин',
      description: 'Устранение течей, ремонт насосов, замена шлангов и уплотнителей',
      priceFrom: 900
    },
    {
      icon: '🔄',
      title: 'Ремонт микроволновых печей',
      description: 'Замена магнетрона, ремонт панели управления, устранение искрения',
      priceFrom: 600
    },
    {
      icon: '☕',
      title: 'Ремонт кофемашин',
      description: 'Чистка от накипи, ремонт помпы, настройка давления, устранение протечек',
      priceFrom: 750
    }
  ];

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          Наши услуги
        </h2>
        <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
          Мы ремонтируем все виды бытовой техники с гарантией на работу и запчасти. 
          Используем только оригинальные комплектующие от производителей.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card bg-white p-6 rounded-lg shadow-md transition-all duration-300"
            >
              <div className="text-4xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-secondary mb-4">
                {service.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">
                  от {service.priceFrom} ₽
                </span>
                <Button 
                  variant="outline" 
                  className="border-accent text-accent hover:bg-accent hover:text-white"
                >
                  Подробнее
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
            Узнать стоимость ремонта
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
