import React from 'react';

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
    <section id="advantages" className="py-24 relative gradient-bg">
      <div className="texture-overlay"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
          Наши преимущества
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="card relative p-8 rounded-xl text-center transform transition-all duration-500 hover:-translate-y-2 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-5">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1e40af] to-[#f97316] p-1 shadow-lg shadow-[#f97316]/20 flex items-center justify-center">
                    {React.cloneElement(advantage.icon as React.ReactElement, { className: "h-10 w-10 text-white" })}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-300">
                  {advantage.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e40af] to-[#f97316] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;