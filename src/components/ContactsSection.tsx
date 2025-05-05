
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const ContactsSection: React.FC = () => {
  return (
    <section id="contacts" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Контакты
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Информация о контактах */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">Свяжитесь с нами</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-primary mb-1">Адрес</p>
                    <p className="text-secondary">ул. Примерная, 123, г. Москва, 123456</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-primary mb-1">Телефон</p>
                    <p className="text-secondary">
                      <a href="tel:+74951234567" className="hover:text-accent">+7 (495) 123-45-67</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-primary mb-1">Email</p>
                    <p className="text-secondary">
                      <a href="mailto:info@techremont.ru" className="hover:text-accent">info@techremont.ru</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-primary mb-1">Часы работы</p>
                    <p className="text-secondary">Пн-Пт: 9:00 - 20:00</p>
                    <p className="text-secondary">Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>
              
              {/* Социальные сети */}
              <div className="mt-8">
                <p className="font-medium text-primary mb-3">Мы в социальных сетях</p>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/80 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/80 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/80 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="bg-accent hover:bg-accent/90 text-white w-full">
                  Заказать обратный звонок
                </Button>
              </div>
            </div>
          </div>
          
          {/* Карта */}
          <div className="lg:w-1/2">
            <div className="h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.3978470759683!2d37.6173026160436!3d55.75610498055642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQvtCy0YHQutC40Lkg0JrRgNC10LzQu9GM!5e0!3m2!1sru!2sru!4v1588710177612!5m2!1sru!2sru" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Карта с нашим расположением"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
