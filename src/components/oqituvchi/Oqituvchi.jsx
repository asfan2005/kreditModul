import React, { useState, useEffect } from 'react';
import { FaStar, FaCertificate, FaUserGraduate, FaBook } from 'react-icons/fa';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function Oqituvchi() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [teachers] = useState([
        {
            id: 1,
            name: "Aziz Rahimov",
            image: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg",
            rating: 4.8,
            certificate: ["IELTS 7.0", "CELTA"],
            course: "Web Development",
            students: 120,
            experience: "5 yil"
        },
        {
            id: 2,
            name: "Malika Karimova",
            image: "https://xsgames.co/randomusers/assets/avatars/female/1.jpg",
            rating: 4.9,
            certificate: ["IELTS 7.5", "Microsoft Certified"],
            course: "Frontend Development",
            students: 150,
            experience: "4 yil"
        },
        {
            id: 3,
            name: "Jamshid Nurmatov",
            image: "https://xsgames.co/randomusers/assets/avatars/male/2.jpg",
            rating: 4.7,
            certificate: ["AWS Certified", "React Expert"],
            course: "Backend Development",
            students: 135,
            experience: "6 yil"
        },
        {
            id: 4,
            name: "Nilufar Sobirova",
            image: "https://xsgames.co/randomusers/assets/avatars/female/2.jpg",
            rating: 4.9,
            certificate: ["Python Pro", "Data Science"],
            course: "Data Analytics",
            students: 180,
            experience: "5 yil"
        },
        {
            id: 5,
            name: "Sardor Aliyev",
            image: "https://xsgames.co/randomusers/assets/avatars/male/3.jpg",
            rating: 4.8,
            certificate: ["Java Expert", "Spring Boot"],
            course: "Java Development",
            students: 160,
            experience: "7 yil"
        },
        {
            id: 6,
            name: "Dilnoza Raxmatova",
            image: "https://xsgames.co/randomusers/assets/avatars/female/3.jpg",
            rating: 4.6,
            certificate: ["UI/UX Pro", "Figma Master"],
            course: "UI/UX Design",
            students: 140,
            experience: "4 yil"
        },
        {
            id: 7,
            name: "Bobur Maxmudov",
            image: "https://xsgames.co/randomusers/assets/avatars/male/4.jpg",
            rating: 4.9,
            certificate: ["Flutter Dev", "Mobile Expert"],
            course: "Mobile Development",
            students: 130,
            experience: "5 yil"
        },
        {
            id: 8,
            name: "Zarina Umarova",
            image: "https://xsgames.co/randomusers/assets/avatars/female/4.jpg",
            rating: 4.7,
            certificate: ["DevOps Pro", "AWS Advanced"],
            course: "DevOps Engineering",
            students: 110,
            experience: "6 yil"
        },
        {
            id: 9,
            name: "Rustam Qodirov",
            image: "https://xsgames.co/randomusers/assets/avatars/male/5.jpg",
            rating: 4.8,
            certificate: ["Node.js Expert", "MongoDB Pro"],
            course: "Backend Development",
            students: 145,
            experience: "5 yil"
        },
        {
            id: 10,
            name: "Kamola Yusupova",
            image: "https://xsgames.co/randomusers/assets/avatars/female/5.jpg",
            rating: 4.9,
            certificate: ["Angular Dev", "TypeScript Pro"],
            course: "Frontend Development",
            students: 170,
            experience: "4 yil"
        },
        {
            id: 11,
            name: "Akmal Sharipov",
            image: "https://xsgames.co/randomusers/assets/avatars/male/6.jpg",
            rating: 4.7,
            certificate: ["PHP Expert", "Laravel Pro"],
            course: "PHP Development",
            students: 125,
            experience: "6 yil"
        },
        {
            id: 12,
            name: "Sabina Alimova",
            image: "https://xsgames.co/randomusers/assets/avatars/female/6.jpg",
            rating: 4.8,
            certificate: ["QA Expert", "Testing Pro"],
            course: "Software Testing",
            students: 155,
            experience: "5 yil"
        }
    ]);

    // Avtomatik slayd almashtirish
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % Math.ceil(teachers.length / 4));
        }, 5000); // Har 5 sekundda

        return () => clearInterval(timer);
    }, [teachers.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(teachers.length / 4));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? Math.ceil(teachers.length / 4) - 1 : prev - 1));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative inline-block">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                        Bizning Professional
                    </span>
                    <br className="md:hidden" />
                    <span className="relative">
                        O'qituvchilarimiz
                        <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1C1 1 52.2882 3 100 3C147.712 3 199 1 199 1" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round"/>
                            <defs>
                                <linearGradient id="paint0_linear" x1="1" y1="1" x2="199" y2="1" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#2563EB"/>
                                    <stop offset="1" stopColor="#9333EA"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                </h1>
                <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
                    Tajribali mutaxassislar bilan birga kelajagingizni yarating
                </p>
                <div className="flex justify-center gap-2 mt-4">
                    <span className="h-1 w-12 bg-blue-600 rounded-full"></span>
                    <span className="h-1 w-3 bg-purple-600 rounded-full"></span>
                    <span className="h-1 w-3 bg-purple-600 rounded-full"></span>
                </div>
            </div>

            <div className="relative">
                <div className="overflow-hidden">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {[...Array(Math.ceil(teachers.length / 4))].map((_, slideIndex) => (
                            <div key={slideIndex} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full flex-shrink-0">
                                {teachers
                                    .slice(slideIndex * 4, (slideIndex + 1) * 4)
                                    .map((teacher) => (
                                        <div key={teacher.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                                            <div className="relative h-48 overflow-hidden">
                                                <img 
                                                    src={teacher.image} 
                                                    alt={teacher.name}
                                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                                    {teacher.name}
                                                </h3>
                                                <div className="flex items-center mb-3">
                                                    <FaStar className="text-yellow-400 mr-1" />
                                                    <span className="text-gray-700">{teacher.rating}</span>
                                                </div>
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    <FaCertificate className="text-blue-500" />
                                                    {teacher.certificate.map((cert, index) => (
                                                        <span key={index} className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded-full">
                                                            {cert}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="flex items-center mb-3">
                                                    <FaBook className="text-gray-600 mr-2" />
                                                    <span className="text-gray-700">{teacher.course}</span>
                                                </div>
                                                <div className="flex items-center mb-4">
                                                    <FaUserGraduate className="text-gray-600 mr-2" />
                                                    <span className="text-gray-700">{teacher.students} o'quvchi</span>
                                                </div>
                                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                                                    Kursga yozilish
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Slider dots */}
            <div className="flex justify-center mt-6 gap-2">
                {[...Array(Math.ceil(teachers.length / 4))].map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                            currentSlide === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
                        }`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Oqituvchi;