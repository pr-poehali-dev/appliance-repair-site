import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HeroSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    model: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    model: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Очищаем ошибку при вводе
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      phone: '',
      model: ''
    };
    
    let isValid = true;
    
    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, введите ваше имя';
      isValid = false;
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Пожалуйста, введите ваш телефон';
      isValid = false;
    } else if (!/^\+?[0-9]{10,12}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Введите корректный номер телефона';
      isValid = false;
    }
    
    if (!formData.model.trim()) {
      newErrors.model = 'Пожалуйста, укажите модель техники';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Здесь будет отправка формы
      console.log('Форма отправлена:', formData);
      
      // Сбросить форму после отправки
      setFormData({
        name: '',
        phone: '',
        model: ''
      });
      
      // Показать сообщение пользователю
      alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
    }
  };

  return (
    <section id="hero" className="pt-24 md:pt-32 pb-24 hero-pattern relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Профессиональный <span className="gradient-text">ремонт бытовой техники</span> в вашем городе
            </h1>
            <p className="text-xl text-gray-300 mb-8 md:pr-12">
              Срочно, качественно, с гарантией до 12 месяцев. Выезд мастера в течение 60 минут!
            </p>
            <div className="hidden md:flex space-x-4">
              <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white text-lg py-6 px-8 shadow-lg shadow-[#f97316]/20">
                Узнать стоимость ремонта
              </Button>
              <Button variant="outline" className="border-gray-500 text-gray-300 hover:text-white hover:border-white">
                Наши работы
              </Button>
            </div>
          </div>
          
          <div className="md:w-5/12 w-full">
            <div className="card bg-gradient-to-br from-[#1f2937] to-[#111827] p-6 md:p-8 rounded-xl shadow-xl border border-[#374151]">
              <h3 className="text-xl font-semibold text-white mb-5 relative">
                <span className="gradient-text">Оставить заявку на ремонт</span>
                <span className="absolute -top-3 -right-3 bg-[#f97316] text-white text-xs px-2 py-1 rounded-lg">-20% скидка</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Ваш телефон"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                
                <div>
                  <Input
                    type="text"
                    name="model"
                    placeholder="Модель техники"
                    value={formData.model}
                    onChange={handleChange}
                    className="w-full p-3"
                  />
                  {errors.model && <p className="text-red-500 text-sm mt-1">{errors.model}</p>}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white py-3"
                >
                  Оставить заявку
                </Button>
                
                <p className="text-xs text-gray-500 text-center mt-3">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;