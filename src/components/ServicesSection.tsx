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
      icon: '😺',
      title: 'Ремонт стиральных машин',
      description: 'Устранение поломок лbюбой сложности, замена деталей, очистка от накипи',
      priceFrom: 800
    },
    {
      icon: '🎏',
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
      icon: '🙍',
      title: 'Ремонт посудомоечных машин',
      description: 'Устранение течей, ремонт насосов, замена шлангов и уплотнителей',
      priceFrom: 900
    },
    {
      icon: '🜎',
      title: 'Ремонт микроволновых печей',
      description: 'Замена магнетрона, ремонт панели управления, устранение искрения',
      priceFrom: 600
    },
    {
      icon: '🎙',
      title: 'Ремонт кофемашин',
      description: 'Чистка от накипи, ремонт помпы, настройка давления, устранение протечек',
      priceFrom: 750
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-[#0f172a]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-6">
          Наши услуги
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          Мы ремонтируем все виды бытовой техники с гарантией на работу и запчасти. 
          Используем только оригинальные комплектующие от производителей.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card p-8 rounded-xl border border-[#374151] group"
            >
              <div className="text-4xl mb-5 transform transition-all duration-300 group-hover:scale-110">
                <div className="relative inline-block">
                  {service.icon}
                  <div className="absolute -right-2 -top-2 w-5 h-5 rounded-full bg-[#f97316]"></div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 min-h-[80px]">
                {service.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-medium text-white bg-gradient-to-r from-[#1e40af] to-[#f97316] p-2 rounded">
                  от {service.priceFrom} ₽
                </span>
                <Button 
                  variant="outline" 
                  className="border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white"
                >
                  Подробнее
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-6 text-lg shadow-lg shadow-[#f97316]/20">
            Узнать стоимость ремонта
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;