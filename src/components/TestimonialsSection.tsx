
import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Testimonial = {
  id: number;
  name: string;
  photo: string;
  text: string;
  rating: number;
  service: string;
  date: string;
};

const TestimonialsSection: React.FC = () => {
  // Данные отзывов
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Анна Соколова',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      text: 'Вызвала мастера для ремонта стиральной машины. Приехал в тот же день, быстро нашел причину поломки и все починил. Машинка снова работает как новая! Очень довольна обслуживанием.',
      rating: 5,
      service: 'Ремонт стиральной машины',
      date: '15.04.2025'
    },
    {
      id: 2,
      name: 'Дмитрий Петров',
      photo: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      text: 'Обращался по поводу ремонта холодильника. Мастер приехал с необходимыми запчастями и все отремонтировал за один визит. Цена соответствовала заявленной, никаких дополнительных платежей.',
      rating: 5,
      service: 'Ремонт холодильника',
      date: '02.04.2025'
    },
    {
      id: 3,
      name: 'Елена Смирнова',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      text: 'Сломалась посудомоечная машина, вызвала мастера из этой компании. Приятно удивило, что мастер смог починить технику в тот же день. Дал рекомендации по дальнейшей эксплуатации.',
      rating: 4,
      service: 'Ремонт посудомоечной машины',
      date: '28.03.2025'
    },
    {
      id: 4,
      name: 'Сергей Иванов',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      text: 'Обратился с проблемой в электрической плите. Мастер приехал в назначенное время, быстро выявил неисправность и починил. Прошло уже 3 месяца, все работает отлично.',
      rating: 5,
      service: 'Ремонт электроплиты',
      date: '10.03.2025'
    }
  ];

  // Состояние для текущего отображаемого слайда
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [slidesToShow, setSlidesToShow] = React.useState(3);

  // Обработка изменения размера окна
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    // Установка начального значения
    handleResize();

    // Добавление слушателя события изменения размера окна
    window.addEventListener('resize', handleResize);

    // Очистка слушателя при размонтировании компонента
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Функции для навигации по слайдеру
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      (prevSlide + 1) % (testimonials.length - slidesToShow + 1)
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? testimonials.length - slidesToShow : prevSlide - 1
    );
  };

  // Отрисовка звезд рейтинга
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          Отзывы наших клиентов
        </h2>
        <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
          Более 1000 довольных клиентов уже воспользовались нашими услугами. 
          Вот что они говорят о нашей работе.
        </p>
        
        {/* Слайдер с отзывами */}
        <div className="relative">
          {/* Кнопки навигации */}
          <div className="absolute inset-y-0 left-0 z-10 flex items-center">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white shadow-md border-gray-200"
              onClick={prevSlide}
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="absolute inset-y-0 right-0 z-10 flex items-center">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white shadow-md border-gray-200"
              onClick={nextSlide}
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Контейнер слайдера */}
          <div className="overflow-hidden mx-10">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className={`testimonial-card flex-shrink-0 p-4`}
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div className="bg-white rounded-lg shadow-md p-6 h-full">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.photo} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <p className="font-semibold text-primary">{testimonial.name}</p>
                        <div className="flex mt-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-secondary mb-4">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="text-sm text-gray-500 mt-auto">
                      <p>{testimonial.service}</p>
                      <p>{testimonial.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Индикаторы */}
        <div className="flex justify-center mt-8">
          {Array(testimonials.length - slidesToShow + 1).fill(0).map((_, i) => (
            <button
              key={i}
              className={`h-2 w-2 mx-1 rounded-full ${
                i === currentSlide ? 'bg-primary' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Перейти к отзыву ${i + 1}`}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-accent hover:bg-accent/90 text-white px-6">
            Оставить свой отзыв
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
