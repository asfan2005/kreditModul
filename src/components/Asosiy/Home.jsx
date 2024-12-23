import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaGraduationCap, FaChartLine, FaUsers, FaClipboardCheck } from "react-icons/fa";
import { motion } from "framer-motion";

function Asosiy() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      icon: (
        <div className="relative flex justify-center items-center w-full md:w-auto">
          <FaGraduationCap className="text-[52px] xs:text-[56px] sm:text-[60px] md:text-[64px] lg:text-[68px] mb-[24px] text-blue-500" />
          <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 bg-blue-200 rounded-full animate-ping" />
          <div className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-300 rounded-full animate-bounce" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse" />
        </div>
      ),
      title: "KREDIT-MODUL TIZIMIDA TALABALAR MUSTAQIL TA'LIMINI TASHKIL ETISH",
      subtitle: "Nazariy asoslar va innovatsion yondashuvlar",
      description: "Kredit-modul tizimining zamonaviy ta'limdagi o'rni, mustaqil ta'limni tashkil etishning ilmiy-nazariy asoslari va innovatsion metodlari bilan tanishing.",
      buttonText: "Batafsil ma'lumot",
      route: "/nazariyAsoslar",
      background: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
      overlayColor: "rgba(0, 0, 0, 0.4)"
    },
    {
      icon: (
        <div className="relative flex justify-center items-center w-full md:w-auto">
          <FaChartLine className="text-[52px] xs:text-[56px] sm:text-[60px] md:text-[64px] lg:text-[68px] mb-[24px] text-green-500" />
          <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-green-200 rounded-full animate-ping" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-300 rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-green-500/20 rounded-full animate-pulse" />
        </div>
      ),
      title: "PEDAGOGIK SHART-SHAROITLARNI TAKOMILLASHTIRISH",
      subtitle: "Zamonaviy ta'lim muhitini yaratish",
      description: "Kredit-modul tizimida talabalar mustaqil ta'limini samarali tashkil etish uchun zarur bo'lgan pedagogik shart-sharoitlar va ularni takomillashtirish yo'llari.",
      buttonText: "Batafsil ko'rish",
      route: "/pedagogikShart",
      background: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80",
      overlayColor: "rgba(0, 0, 0, 0.4)"
    },
    {
      icon: (
        <div className="relative flex justify-center items-center w-full md:w-auto">
          <FaUsers className="text-[52px] xs:text-[56px] sm:text-[60px] md:text-[64px] lg:text-[68px] mb-[24px] text-purple-500" />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-purple-200 rounded-full animate-ping" />
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-purple-300 rounded-full animate-bounce" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse" />
        </div>
      ),
      title: "TAJRIBA-SINOV ISHLARI VA NATIJALAR",
      subtitle: "Amaliy tadqiqotlar va yutuqlar",
      description: "Kredit-modul tizimida olib borilgan tajriba-sinov ishlarining natijalari, erishilgan yutuqlar va kelgusi rejalar tahlili.",
      buttonText: "Natijalarni ko'rish",
      route: "/tajribaSinov",
      background: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80",
      overlayColor: "rgba(0, 0, 0, 0.4)"
    },
    {
      icon: (
        <div className="relative flex justify-center items-center w-full md:w-auto">
          <FaClipboardCheck className="text-[52px] xs:text-[56px] sm:text-[60px] md:text-[64px] lg:text-[68px] mb-[24px] text-red-500" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-200 rounded-full animate-ping" />
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-red-300 rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-red-500/20 rounded-full animate-pulse" />
        </div>
      ),
      title: "SUN'IY INTELLEKT ASOSIDA BAHOLASH",
      subtitle: "Innovatsion baholash tizimi",
      description: "Zamonaviy AI texnologiyalari yordamida talabalar bilimini xolisona baholash, individual tavsiyalar va rivojlanish yo'nalishlarini aniqlash.",
      buttonText: "Baholashni boshlash",
      route: "/aiBaholash",
      background: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      overlayColor: "rgba(0, 0, 0, 0.4)"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="relative w-full h-screen sm:h-[600px] md:h-[650px] lg:h-[700px] overflow-hidden bg-fixed" 
      style={{ 
        backgroundImage: `url('${slides[currentSlide].background}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: 'all 0.7s ease-in-out',
      }}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-[1px]" 
        style={{ transition: 'background 0.7s ease-in-out' }}
      />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 h-full relative z-10 flex flex-col justify-between pb-12"
      >
        <div className="flex flex-col items-start justify-start mt-16 sm:mt-20 md:mt-24 ml-4 sm:ml-10">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-3xl"
          >
            <div className="flex mb-[24px] sm:mb-[28px]">
              {slides[currentSlide].icon}
            </div>
            <h2 className="text-[18px] sm:text-[20px] md:text-[22px] text-white font-semibold mb-[12px] sm:mb-[16px] animate-fadeIn">
              {slides[currentSlide].subtitle}
            </h2>
            <h1 className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] font-bold mb-[28px] text-white leading-[1.2] animate-slideIn">
              {slides[currentSlide].title}
            </h1>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] mb-[36px] text-gray-100 leading-[1.8] animate-fadeIn">
              {slides[currentSlide].description}
            </p>
            <button 
              onClick={() => navigate(slides[currentSlide].route)}
              className="relative px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold 
                hover:scale-105 transform transition duration-300 shadow-xl group overflow-hidden"
            >
              <span className="relative z-10 text-[16px] sm:text-[18px]">{slides[currentSlide].buttonText}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>
        </div>

        <div className="flex justify-center space-x-3 mt-auto">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-500 relative overflow-hidden
                ${currentSlide === index 
                  ? "w-10 sm:w-12 h-1.5 sm:h-2 bg-white rounded-full" 
                  : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/40 rounded-full hover:bg-white/60"}
              `}
            >
              {currentSlide === index && (
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500" 
                  style={{
                    width: '100%',
                    animation: 'progressBar 5s linear'
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const styles = `
  @keyframes float {
    0% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(180deg); }
    100% { transform: translateY(0) rotate(360deg); }
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .animate-fadeIn {
    animation: fadeIn 0.8s ease-out;
  }

  .animate-slideIn {
    animation: slideIn 0.8s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideIn {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes progressBar {
    0% { width: 0; }
    100% { width: 100%; }
  }
`;

export default Asosiy;