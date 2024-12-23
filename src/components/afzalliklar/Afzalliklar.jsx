import React from 'react';
import { FaUserGraduate, FaBook, FaChartLine, FaNetworkWired, FaUserTie, FaMedal } from 'react-icons/fa';

function Afzalliklar() {
    const advantages = [
        {
            icon: <FaUserGraduate className="text-4xl text-blue-500 group-hover:text-white" />,
            title: "Moslashuvchan Ta'lim Tizimi",
            description: "O'z kelajagingizni o'zingiz yarating! Qiziqishlaringiz va maqsadlaringizga mos ravishda individual ta'lim yo'nalishingizni shakllantiring"
        },
        {
            icon: <FaBook className="text-4xl text-blue-500 group-hover:text-white" />,
            title: "Erkin O'qish Imkoniyati",
            description: "Vaqtingizni samarali boshqaring! O'zingizga qulay tezlikda va vaqtda bilim oling, mustaqil o'rganish orqali yuqori natijalarga erishing"
        },
        {
            icon: <FaChartLine className="text-4xl text-blue-500 group-hover:text-white" />,
            title: "Zamonaviy Ta'lim Tizimi",
            description: "Har bir modul - yangi imkoniyat! Tizimli va rejalashtirilgan ta'lim orqali bilimlaringizni bosqichma-bosqich mustahkamlang"
        },
        {
            icon: <FaNetworkWired className="text-4xl text-blue-500 group-hover:text-white" />,
            title: "Keng Qamrovli Bilim",
            description: "Turli sohalarni o'zaro bog'lang! Modullarni kombinatsiya qilish orqali keng qamrovli va chuqur bilimlarni egallash imkoniyatiga ega bo'ling"
        },
        {
            icon: <FaUserTie className="text-4xl text-blue-500 group-hover:text-white" />,
            title: "Shaxsiy Yondashuv",
            description: "Professional ustozlar yordami! Har bir talabaga individual yondashuv asosida o'quv jarayonini mukammal tashkil etish imkoniyati"
        },
        {
            icon: <FaMedal className="text-4xl text-blue-500 group-hover:text-white" />,
            title: "Adolatli Baholash",
            description: "Har bir yutuğingiz qadrlanadi! Kredit tizimi orqali bilim va ko'nikmalaringiz xolisona baholanib, yutuqlaringiz e'tirof etiladi"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-white to-blue-50">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
                    Kredit-modul tizimining zamonaviy afzalliklari
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
                    Kelajak ta'limining yangi imkoniyatlari bilan tanishing va o'z bilim olish yo'lingizni zamonaviy tarzda rejalashtiring
                </p>
                <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mt-8"></div>
                <div className="w-16 h-1 bg-blue-300 mx-auto rounded-full mt-1"></div>
                <div className="w-8 h-1 bg-blue-200 mx-auto rounded-full mt-1"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {advantages.map((item, index) => (
                    <div 
                        key={index} 
                        className="group p-6 bg-white rounded-xl shadow-lg hover:bg-blue-500 transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2"
                    >
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="p-4 bg-blue-50 rounded-full group-hover:bg-blue-400">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 group-hover:text-white">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Afzalliklar;