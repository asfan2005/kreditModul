import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaTelegram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Asosiy ma'lumot */}
          <div className="text-center md:text-left space-y-4">
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
            <h5 className="text-xl font-semibold mb-6">Foydali havolalar</h5>
            <ul className="space-y-4">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition duration-300 text-base sm:text-lg">
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a href="/courses" className="text-gray-300 hover:text-white transition duration-300 text-base sm:text-lg">
                  O'quv kurslari
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition duration-300 text-base sm:text-lg">
                  Bog'lanish
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-300 hover:text-white transition duration-300 text-base sm:text-lg">
                  Ko'p so'raladigan savollar
                </a>
              </li>
            </ul>
          </div>

          {/* Aloqa ma'lumotlari */}
          <div className="text-center md:text-left">
            <h5 className="text-xl font-semibold mb-6">Biz bilan bog'lanish</h5>
            <div className="space-y-4">
              <a 
                href="https://maps.app.goo.gl/aEhE2YqwgAZVP7Ha6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300 flex items-center justify-center md:justify-start group"
              >
                <FaMapMarkerAlt className="mr-3 text-2xl group-hover:text-blue-400" />
                <span className="text-base sm:text-lg">Buxoro shahri, M.Iqbol ko'chasi, 11-uy</span>
              </a>
              <a 
                href="tel:+998918218195" 
                className="text-gray-300 hover:text-white transition duration-300 flex items-center justify-center md:justify-start group"
              >
                <FaPhone className="mr-3 text-2xl group-hover:text-green-400" />
                <span className="text-base sm:text-lg">+998 91 821 81 95</span>
              </a>
              <a 
                href="mailto:asfan.webdeloper@gmail.com"
                className="text-gray-300 hover:text-white transition duration-300 flex items-center justify-center md:justify-start group"
              >
                <FaEnvelope className="mr-3 text-2xl group-hover:text-red-400" />
                <span className="text-base sm:text-lg">asfan.webdeloper@gmail.com</span>
              </a>
            </div>
            
            {/* Ijtimoiy tarmoqlar */}
            <div className="mt-8 flex justify-center md:justify-start space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-blue-500 transition duration-300">
                <FaFacebookF className="text-2xl sm:text-3xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-blue-400 transition duration-300">
                <FaTwitter className="text-2xl sm:text-3xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-pink-500 transition duration-300">
                <FaInstagram className="text-2xl sm:text-3xl" />
              </a>
              <a href="https://t.me/OrifjonRustamovich" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-blue-500 transition duration-300">
                <FaTelegram className="text-2xl sm:text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;