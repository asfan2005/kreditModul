import React, { useState, useEffect } from 'react';
import { FaStar, FaCertificate, FaUserGraduate, FaBook, FaTimes } from 'react-icons/fa';
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

    // Yangi state'lar qo'shamiz
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [showSuccess, setShowSuccess] = useState(false);

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

    // Modal uchun funksiyalar
    const openModal = (teacher) => {
        setSelectedTeacher(teacher);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTeacher(null);
        document.body.style.overflow = 'unset';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form yuborilgandan so'ng
        setShowSuccess(true);
        
        // 3 sekunddan keyin modallarni yopamiz
        setTimeout(() => {
            setShowSuccess(false);
            closeModal();
            // Barcha inputlarni tozalash
            setFormData({
                name: '',
                phone: '',
                email: '',
                message: ''
            });
        }, 3000);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
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
                                                <button 
                                                    onClick={() => openModal(teacher)}
                                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                                                >
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

            {/* Modal komponenti */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={closeModal}></div>
                    
                    <div className="flex items-center justify-center min-h-screen px-4 py-6">
                        {showSuccess ? (
                            // Muvaffaqiyatli yuborilgan xabar
                            <div className="bg-white rounded-xl shadow-2xl p-6 transform transition-all max-w-md w-full">
                                <div className="text-center">
                                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                        <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="mt-4 text-lg font-medium text-gray-900">Sizning arizangiz qabul qilindi!</h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Adminlar tez orada siz bilan bog'lanishadi.
                                    </p>
                                    <div className="mt-4 flex justify-center">
                                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // Mavjud modal formasi
                            <div className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 transform transition-all">
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                                >
                                    <FaTimes size={24} />
                                </button>

                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                        Kursga yozilish
                                    </h3>
                                    {selectedTeacher && (
                                        <div className="flex items-center space-x-4 mb-4">
                                            <img
                                                src={selectedTeacher.image}
                                                alt={selectedTeacher.name}
                                                className="w-16 h-16 rounded-full object-cover"
                                            />
                                            <div>
                                                <p className="font-semibold text-lg">{selectedTeacher.name}</p>
                                                <p className="text-gray-600">{selectedTeacher.course}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Ismingiz</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-700 mb-2">Telefon raqam</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 mb-2">Xabar</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            rows="3"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300"
                                    >
                                        Yuborish
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Oqituvchi;