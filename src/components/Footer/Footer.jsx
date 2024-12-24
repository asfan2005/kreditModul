import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaTelegram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
  // Havola bosilganda sahifa yangilanishini oldini olish
  const handleClick = (e) => {
    e.preventDefault();
    // Bu yerda kerakli logikani qo'shishingiz mumkin
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-20 h-20 bg-blue-500/10 rounded-full -top-10 -left-10 animate-pulse"></div>
        <div className="absolute w-32 h-32 bg-purple-500/10 rounded-full -bottom-16 -right-16 animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Asosiy ma'lumot */}
          <div className="text-center md:text-left space-y-4 transform transition duration-500 hover:scale-105">
            <h4 className="text-xl sm:text-2xl font-bold leading-tight">
              KREDIT-MODUL TIZIMIDA TALABALARNING MUSTAQIL TA'LIMINI TASHKIL ETISHNING NAZARIY ASOSLARI
            </h4>
            <p className="text-gray-300 text-base sm:text-lg">
              Ta'lim jarayonlarini samarali boshqarish va nazorat qilish tizimi
            </p>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Barcha huquqlar himoyalangan
            </p>
          </div>

          {/* Foydali havolalar */}
          <div className="text-center md:text-left">
            <h5 className="text-xl font-semibold mb-6 relative inline-block">
              Foydali havolalar
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h5>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#" 
                  onClick={handleClick}
                  className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">Biz haqimizda</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={handleClick}
                  className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">O'quv kurslari</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={handleClick}
                  className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">Bog'lanish</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={handleClick}
                  className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">Ko'p so'raladigan savollar</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Aloqa ma'lumotlari */}
          <div className="text-center md:text-left">
            <h5 className="text-xl font-semibold mb-6">Biz bilan bog'lanish</h5>
            <div className="space-y-4">
              <a 
                href="#" 
                onClick={handleClick}
                className="text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center md:justify-start group hover:bg-gray-800/50 p-2 rounded-lg"
              >
                <FaMapMarkerAlt className="mr-3 text-2xl group-hover:text-blue-400 transform group-hover:scale-110 transition-all duration-300" />
                <span className="text-base sm:text-lg group-hover:translate-x-1 transition-transform duration-300">
                  Buxoro shahri, M.Iqbol ko'chasi, 11-uy
                </span>
              </a>
              <a 
                href="tel:+998918218195" 
                className="text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center md:justify-start group hover:bg-gray-800/50 p-2 rounded-lg"
              >
                <FaPhone className="mr-3 text-2xl group-hover:text-green-400 transform group-hover:scale-110 transition-all duration-300" />
                <span className="text-base sm:text-lg group-hover:translate-x-1 transition-transform duration-300">+998 91 821 81 95</span>
              </a>
              <a 
                href="mailto:asfan.webdeloper@gmail.com"
                className="text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center md:justify-start group hover:bg-gray-800/50 p-2 rounded-lg"
              >
                <FaEnvelope className="mr-3 text-2xl group-hover:text-red-400 transform group-hover:scale-110 transition-all duration-300" />
                <span className="text-base sm:text-lg group-hover:translate-x-1 transition-transform duration-300">asfan.webdeloper@gmail.com</span>
              </a>
            </div>
            
            {/* Ijtimoiy tarmoqlar */}
            <div className="mt-8 flex justify-center md:justify-start space-x-6">
              <a 
                href="#" 
                onClick={handleClick}
                className="text-gray-300 hover:text-blue-500 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              >
                <FaFacebookF className="text-2xl sm:text-3xl" />
              </a>
              <a 
                href="#" 
                onClick={handleClick}
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              >
                <FaTwitter className="text-2xl sm:text-3xl" />
              </a>
              <a 
                href="#" 
                onClick={handleClick}
                className="text-gray-300 hover:text-pink-500 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              >
                <FaInstagram className="text-2xl sm:text-3xl" />
              </a>
              <a 
                href="#" 
                onClick={handleClick}
                className="text-gray-300 hover:text-blue-500 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              >
                <FaTelegram className="text-2xl sm:text-3xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm animate-pulse">
            &copy; {new Date().getFullYear()} Barcha huquqlar himoyalangan
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;