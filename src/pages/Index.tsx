
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import PricesSection from '@/components/PricesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* SEO-оптимизация */}
      <div className="hidden">
        <h1>Ремонт бытовой техники с гарантией | Стиральные машины, холодильники</h1>
        <p>
          Профессиональный ремонт бытовой техники с выездом на дом.
          Ремонт стиральных машин, холодильников, плит, микроволновок.
          Работаем с гарантией до 12 месяцев. Выезд мастера в день обращения.
        </p>
      </div>
      
      {/* Хедер */}
      <Header />
      
      {/* Основное содержимое */}
      <main>
        <HeroSection />
        <AdvantagesSection />
        <ServicesSection />
        <AboutSection />
        <PricesSection />
        <TestimonialsSection />
        <ContactsSection />
      </main>
      
      {/* Футер */}
      <Footer />
      
      {/* Кнопка прокрутки наверх - появляется при скролле */}
      <ScrollToTopButton />
    </div>
  );
};

// Компонент кнопки прокрутки наверх
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  // Функция для определения видимости кнопки
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Функция для прокрутки наверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 z-50 p-3 rounded-full bg-accent text-white shadow-lg hover:bg-accent/90 transition-all duration-300"
          aria-label="Прокрутить наверх"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default Index;
