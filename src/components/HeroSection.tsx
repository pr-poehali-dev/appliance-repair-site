
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
    <section id="hero" className="pt-24 md:pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Профессиональный ремонт бытовой техники в вашем городе
            </h1>
            <p className="text-xl text-secondary mb-8">
              Срочно, качественно, с гарантией до 12 месяцев
            </p>
            <div className="hidden md:block">
              <Button className="bg-accent hover:bg-accent/90 text-white text-lg py-6 px-8">
                Узнать стоимость ремонта
              </Button>
            </div>
          </div>
          
          <div className="md:w-5/12 w-full bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-4">Оставить заявку на ремонт</h3>
            
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
                className="w-full bg-accent hover:bg-accent/90 text-white py-3"
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
    </section>
  );
};

export default HeroSection;
