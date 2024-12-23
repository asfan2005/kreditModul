import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const newsData = [
  {
    id: 1,
    title: "🎓 Kredit-Modul Tizimida Yangi O'quv Rejalar",
    date: "2024-03-20",
    image: "https://img.freepik.com/free-photo/young-students-learning-together-during-group-study_23-2149211066.jpg",
    description: "2024-2025 o'quv yili uchun kredit-modul tizimida yangilangan o'quv rejalar tasdiqlandi. Yangi reja bo'yicha talabalar ko'proq amaliy mashg'ulotlar va mustaqil ta'lim soatlariga ega bo'lishadi.",
    category: "O'quv Reja",
    author: "O'quv-uslubiy boshqarma"
  },
  { 
    id: 2,
    title: "💻 Masofaviy Ta'lim Platformasi Yangilandi",
    date: "2024-03-18",
    image: "https://img.freepik.com/free-photo/e-learning-education-student-university-concept_31965-6535.jpg",
    description: "Kredit-modul tizimida masofaviy ta'limni yanada samarali tashkil etish uchun LMS tizimi yangilandi. Endi barcha fanlar bo'yicha video ma'ruzalar va interaktiv topshiriqlar mavjud.",
    category: "Masofaviy Ta'lim",
    author: "Raqamli ta'lim markazi"
  },
  {
    id: 3,
    title: "📊 Kredit Tizimida Baholash Mezonlari",
    date: "2024-03-15",
    image: "https://img.freepik.com/free-photo/paperwork-classroom-academic-learning-teaching_53876-47519.jpg",
    description: "Talabalar bilimini baholashning yangi tizimi joriy etildi. Endi har bir fan bo'yicha reyting baholari ECTS tizimi asosida hisoblanadi va xalqaro standartlarga mos keladi.",
    category: "Baholash Tizimi",
    author: "Sifat nazorati bo'limi"
  },
  {
    id: 4,
    title: "👨‍🏫 Professor-O'qituvchilar Malaka Oshirishi",
    date: "2024-03-14",
    image: "https://img.freepik.com/free-photo/medium-shot-people-sitting-conference_23-2149214012.jpg",
    description: "Kredit-modul tizimida dars berish metodikasi bo'yicha professor-o'qituvchilar uchun maxsus malaka oshirish kurslari tashkil etildi. Kurslar xalqaro ekspertlar ishtirokida o'tkazilmoqda.",
    category: "Malaka oshirish",
    author: "Kadrlar bo'limi"
  },
  {
    id: 5,
    title: "🌐 Fanlararo Integratsiya Loyihasi",
    date: "2024-03-12",
    image: "https://img.freepik.com/free-photo/diverse-people-working-office_53876-104681.jpg",
    description: "Kredit-modul tizimida fanlararo integratsiyani kuchaytirish maqsadida yangi loyiha ishga tushirildi. Endi talabalar bir nechta fandan birlashtirilgan loyihalarni amalga oshirishi mumkin.",
    category: "Innovatsiya",
    author: "O'quv-uslubiy markaz"
  },
  {
    id: 6,
    title: "📱 Mobil Ilova Ishga Tushirildi",
    date: "2024-03-10",
    image: "https://img.freepik.com/free-photo/person-using-smartphone-app_23-2149410034.jpg",
    description: "Kredit-modul tizimini boshqarish uchun maxsus mobil ilova ishga tushirildi. Ilova orqali talabalar o'z kreditlarini kuzatish, dars jadvalini ko'rish va topshiriqlarni bajarish imkoniyatiga ega.",
    category: "Texnologiya",
    author: "IT markazi"
  },
  {
    id: 7,
    title: "🎯 Individual Ta'lim Trayektoriyasi",
    date: "2024-03-08",
    image: "https://img.freepik.com/free-photo/young-student-worker-watching-webinar_23-2149405190.jpg",
    description: "Har bir talaba uchun individual ta'lim trayektoriyasini shakllantirish tizimi ishga tushirildi. Bu tizim orqali talabalar o'z qiziqishlariga qarab fanlarni tanlash imkoniyatiga ega bo'lishadi.",
    category: "Ta'lim Tizimi",
    author: "O'quv-uslubiy bo'lim"
  },
  {
    id: 8,
    title: "📚 Elektron Kutubxona Yangiliklari",
    date: "2024-03-06",
    image: "https://img.freepik.com/free-photo/library-with-books_1063-98.jpg",
    description: "Kredit-modul tizimi uchun maxsus elektron kutubxona bazasi yaratildi. Unda barcha fanlar bo'yicha darsliklar, o'quv qo'llanmalar va video materiallar jamlangan.",
    category: "Kutubxona",
    author: "ARM markazi"
  }
];

function New() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === newsData.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleReadMore = (newsId) => {
    navigate(`/news/${newsId}`);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="text-center space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 tracking-tight leading-tight px-2 sm:px-4">
            <span className="text-blue-600">K</span>REDIT-MODUL TIZIMIDA 
            <br className="hidden sm:block" />
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium block mt-3 sm:mt-4 md:mt-5">
              talabalarning mustaqil ta'limini tashkil etishning nazariy asoslari
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light italic px-4">
            Kredit-modul tizimining zamonaviy yondashuvlari va imkoniyatlari bilan tanishing
          </p>

          <div className="w-24 sm:w-28 md:w-32 lg:w-36 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl bg-white">
          <div 
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {newsData.map((news) => (
              <div key={news.id} className="flex-shrink-0 w-full">
                <div className="relative group">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 md:p-9 lg:p-11 xl:p-13 pb-20 sm:pb-24">
                      <div className="flex flex-wrap items-center gap-4 mb-5 sm:mb-6">
                        <span className="bg-blue-500 text-white text-sm sm:text-base md:text-lg px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium">
                          {news.category}
                        </span>
                        <span className="text-gray-300 text-sm sm:text-base md:text-lg">
                          {news.author}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight">
                        {news.title}
                      </h2>
                      
                      <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 line-clamp-3 max-w-5xl">
                        {news.description}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
                        <div className="flex items-center text-white">
                          <svg
                            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                          <span className="text-base sm:text-lg md:text-xl">{news.date}</span>
                        </div>
                        
                        <button 
                          onClick={() => handleReadMore(news.id)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-7 sm:px-9 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-base sm:text-lg md:text-xl"
                        >
                          <span>Batafsil</span>
                          <svg
                            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M9 5l7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 sm:space-x-4 z-10">
            {newsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 sm:h-4 transition-all duration-300 rounded-full 
                  ${currentSlide === index 
                    ? 'w-10 sm:w-12 md:w-14 bg-blue-500' 
                    : 'w-3 sm:w-4 bg-white/50 hover:bg-white'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;