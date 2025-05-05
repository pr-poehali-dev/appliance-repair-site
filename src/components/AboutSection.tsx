
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection: React.FC = () => {
  // Статистика компании
  const stats = [
    { number: '10+', label: 'лет опыта работы' },
    { number: '5000+', label: 'отремонтированных устройств' },
    { number: '97%', label: 'довольных клиентов' },
    { number: '1 год', label: 'гарантии на все работы' }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          О компании
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Фото команды или мастерской */}
          <div className="lg:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-7031e8fbc825?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Наша команда технических специалистов" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* О компании текст */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Мы знаем, как важна для вас надежная техника
            </h3>
            
            <p className="text-secondary mb-4">
              Наша компания специализируется на профессиональном ремонте бытовой техники с 2013 года. 
              За время работы мы накопили огромный опыт в ремонте различных брендов и моделей 
              бытовой техники.
            </p>
            
            <p className="text-secondary mb-6">
              Мы работаем только с сертифицированными мастерами, которые регулярно проходят 
              обучение и повышают свою квалификацию. Наша цель — вернуть вашу технику к жизни 
              в кратчайшие сроки и с максимальным качеством.
            </p>
            
            {/* Статистика */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl font-bold text-accent mb-1">{stat.number}</p>
                  <p className="text-secondary">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Наши сертификаты
              </Button>
              <Button className="bg-accent hover:bg-accent/90 text-white">
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
