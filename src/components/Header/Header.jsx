import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    FaGraduationCap,
    FaBook,
    FaHome,
    FaChalkboardTeacher,
    FaClipboardList,
    FaUserGraduate,
    FaSignInAlt,
    FaBars,
    FaTimes,
    FaUser,
    FaLock,
    FaUserTie,
    FaEye,
    FaEyeSlash
} from 'react-icons/fa';

function Header() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [userType, setUserType] = useState('');
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const openLoginModal = () => {
        setIsMenuOpen(false);
        setIsLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
        // Reset form data when closing
        setLoginData({ username: '', password: '' });
        setUserType('');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!userType) {
            alert('Foydalanuvchi turini tanlang');
            return;
        }
        
        if (!loginData.username || !loginData.password) {
            alert('Login va parolni to\'ldiring');
            return;
        }

        // Log only username, password, and user type
        console.log(`Username: ${loginData.username}, Password: ${loginData.password}, User Type: ${userType}`);

        // Close modal and navigate
        closeLoginModal();
        switch(userType) {
            case 'student':
                navigate('/student-dashboard');
                break;
            case 'lecturer':
                navigate('/lecturer-dashboard');
                break;
            case 'manager':
                navigate('/manager-dashboard');
                break;
            default:
                break;
        }
    };

    // Secure password hashing function
    const hashPassword = (password) => {
        // Simple hash function (for demonstration - use a proper hashing library in production)
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return Math.abs(hash).toString(16);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleCoursesClick = (e) => {
        e.preventDefault();
        const isMobile = window.innerWidth < 768; // md breakpoint
        const scrollDistance = isMobile ? 3100 : 1650;
        
        window.scrollTo({
            top: scrollDistance,
            behavior: 'smooth'
        });
    };

    const handleTeachersClick = (e) => {
        e.preventDefault();
        const isMobile = window.innerWidth < 768;
        const scrollDistance = isMobile ? 11000 : 4700; // O'qituvchilar bo'limi uchun scroll masofasi
        
        window.scrollTo({
            top: scrollDistance,
            behavior: 'smooth'
        });
    };

    const handleNewsClick = (e) => {
        e.preventDefault();
        const isMobile = window.innerWidth < 768;
        const scrollDistance = isMobile ? 14100 : 5700; // Yangiliklar bo'limi uchun scroll masofasi
        
        window.scrollTo({
            top: scrollDistance,
            behavior: 'smooth'
        });
    };

    const menuItems = [
        { 
            to: "/", 
            icon: <FaHome />, 
            label: "Asosiy Sahifa",
            onClick: (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        },
        {
            icon: <FaBook />, 
            label: "Kurslar",
            onClick: handleCoursesClick
        },
        { 
            icon: <FaChalkboardTeacher />, 
            label: "O'qituvchilar",
            onClick: handleTeachersClick
        },
        { 
            icon: <FaClipboardList />, 
            label: "Yangiliklar",
            onClick: handleNewsClick
        },
        { to: "/students", icon: <FaUserGraduate />, label: "Talabalar" }
    ];

    const userTypes = [
        { value: 'student', label: 'Talaba', icon: <FaUserGraduate /> },
        { value: 'lecturer', label: 'Maruzachi', icon: <FaChalkboardTeacher /> },
        { value: 'manager', label: 'Menejer', icon: <FaUserTie /> }
    ];

    return (
        <>
            <header style={{
                height:"80px",
                padding:"10px"
            }} className="bg-white shadow-lg sticky top-0 z-50">
                <div className="w-full px-4 py-3 md:px-6 flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-3">
                        <FaGraduationCap className="text-blue-600 text-3xl md:text-4xl" />
                        <h1 className="text-xl md:text-2xl font-bold text-blue-800 tracking-tight">
                            Kredit Modul Tizimi
                        </h1>
                    </div>

                    {/* Mobile Menu Toggle - Show before 1300px */}
                    <button 
                        className="lg:hidden text-blue-800 text-2xl"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    {/* Navigation Menu - Desktop (Hidden before 1300px) */}
                    <nav className="hidden lg:flex space-x-4 xl:space-x-6 items-center justify-center flex-grow">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.to}
                                onClick={item.onClick || undefined}
                                className="text-blue-700 hover:bg-blue-100 px-2 py-2 rounded-md transition duration-300 flex items-center space-x-2 hover:text-blue-900"
                            >
                                {item.icon}
                                <span className="text-sm">{item.label}</span>
                            </Link>
                        ))}
                    </nav>
                    <div className="hidden lg:block">
                        <button
                        style={{
                            height:"45px"
                        }}
                            onClick={openLoginModal}
                            className="flex items-center justify-center px-4 py-2 
                                       bg-gradient-to-r from-blue-600 to-indigo-600 
                                       text-white font-medium rounded-xl 
                                       hover:from-blue-700 hover:to-indigo-700 
                                       focus:ring-4 focus:ring-blue-300 
                                       transition-all duration-300 
                                       text-sm"
                        >
                            <span>Ro'yxatdan o'tish</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu - Fullscreen Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-white z-50 lg:hidden overflow-hidden flex flex-col">
                    {/* Close Button */}
                    <button 
                        onClick={toggleMenu} 
                        className="absolute top-4 right-4 text-blue-800 text-3xl hover:text-blue-600 transition-colors"
                    >
                        <FaTimes />
                    </button>

                    {/* Menu Items */}
                    <div className="flex-grow overflow-y-auto px-6 pt-16 pb-24 space-y-4">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.to}
                                className="text-blue-700 hover:bg-blue-100 px-4 py-3 rounded-xl transition duration-300 
                                           flex items-center space-x-4 text-xl 
                                           transform hover:translate-x-4 hover:scale-105 
                                           shadow-sm hover:shadow-md 
                                           w-full"
                                onClick={(e) => {
                                    if (item.onClick) {
                                        item.onClick(e);
                                    }
                                    toggleMenu();
                                }}
                            >
                                <div className="text-2xl text-blue-600">{item.icon}</div>
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Bottom Navigation Bar */}
                    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t">
                        <div className="flex justify-around items-center py-3 px-4">
                            <button
                                onClick={openLoginModal}
                                className="flex flex-col items-center text-blue-700 hover:text-blue-900"
                            >
                                <FaSignInAlt className="text-2xl" />
                                <span className="text-xs mt-1">Kirish</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Login Modal */}
            {isLoginModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
                        {/* Close Button */}
                        <button 
                            onClick={closeLoginModal} 
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <FaTimes className="text-2xl" />
                        </button>

                        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
                            Kirish
                        </h2>

                        <form onSubmit={handleLogin}>
                            {/* User Type Selection */}
                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2 text-center">Foydalanuvchi turini tanlang</label>
                                <div className="grid grid-cols-3 gap-3">
                                    {userTypes.map((type) => (
                                        <button
                                            type="button"
                                            key={type.value}
                                            onClick={() => setUserType(type.value)}
                                            className={`flex flex-col items-center justify-center 
                                                        py-3 rounded-xl transition-all duration-300
                                                        ${userType === type.value 
                                                            ? 'bg-blue-600 text-white' 
                                                            : 'bg-gray-100 text-gray-600 hover:bg-blue-100'}`}
                                        >
                                            {type.icon}
                                            <span className="text-sm mt-2">{type.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Login Inputs */}
                            <div className="space-y-4">
                                <div className="relative">
                                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input 
                                        type="text" 
                                        name="username"
                                        value={loginData.username}
                                        onChange={handleInputChange}
                                        placeholder="Login" 
                                        className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-300"
                                    />
                                </div>
                                <div className="relative">
                                    <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input 
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={loginData.password}
                                        onChange={handleInputChange}
                                        placeholder="Parol" 
                                        className="w-full pl-10 pr-10 py-3 border rounded-xl focus:ring-2 focus:ring-blue-300"
                                    />
                                    {/* Password Visibility Toggle */}
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600"
                                    >
                                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                                    </button>
                                </div>
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="w-full mt-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 
                                           text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700
                                           transition-all duration-300 transform hover:scale-105"
                            >
                                Kirish
                            </button>

                            {/* Registration Link */}
                            <div className="text-center mt-4">
                                <span className="text-gray-600">Hisobingiz yo'qmi? </span>
                                <a href="#" className="text-blue-600 font-bold hover:underline">
                                    Ro'yxatdan o'ting
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;

