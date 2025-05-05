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
    <section id="about" className="py-24 relative bg-gradient-to-br from-[#111827] to-[#1e293b]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23f97316' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' /%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
          О компании
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Фото команды или мастерской с эффектом */}
          <div className="lg:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1e40af] to-[#f97316] opacity-30 group-hover:opacity-20 transition-opacity duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1581092921461-7031e8fbc825?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Наша команда технических специалистов" 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 border-[3px] border-[#f97316] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100"></div>
            </div>
          </div>
          
          {/* О компании текст */}
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-semibold text-white mb-6 relative">
              <span className="relative z-10">Мы знаем, как важна для вас надежная техника</span>
              <div className="absolute -z-10 top-1/2 left-0 transform -translate-y-1/2 w-12 h-12 bg-[#f97316] opacity-20 rounded-full blur-xl"></div>
            </h3>
            
            <p className="text-gray-300 mb-6 text-lg">
              Наша компания специализируется на профессиональном ремонте бытовой техники с 2013 года. 
              За время работы мы накопили огромный опыт в ремонте различных брендов и моделей 
              бытовой техники.
            </p>
            
            <p className="text-gray-300 mb-8 text-lg">
              Мы работаем только с сертифицированными мастерами, которые регулярно проходят 
              обучение и повышают свою квалификацию. Наша цель — вернуть вашу технику к жизни 
              в кратчайшие сроки и с максимальным качеством.
            </p>
            
            {/* Статистика с улучшенным дизайном */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="card p-5 bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-xl border border-[#374151] text-center hover:border-[#f97316] transform transition-all duration-300 hover:-translate-y-1">
                  <p className="text-4xl font-bold mb-2">
                    <span className="gradient-text">{stat.number}</span>
                  </p>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className="flex space-x-6">
              <Button 
                variant="outline" 
                className="border-gray-500 text-white hover:bg-[#1e40af] hover:border-[#1e40af] hover:text-white flex-1"
              >
                Наши сертификаты
              </Button>
              <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white shadow-lg shadow-[#f97316]/20 flex-1">
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