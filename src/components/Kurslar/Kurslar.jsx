import React, { useState } from 'react'
import { FiUsers, FiClock, FiBook, FiTrendingUp, FiShield } from 'react-icons/fi'
import { SiJavascript, SiPython, SiReact, SiFigma, SiAdobexd, SiAndroidstudio, SiSwift, SiNodedotjs, SiBlender, SiUnity, SiDocker } from 'react-icons/si'

function Kurslar() {
  // States for filtering and viewing
  const [activeFilter, setActiveFilter] = useState('all')
  const [showAllCourses, setShowAllCourses] = useState(false)
  const [showFreeCourses, setShowFreeCourses] = useState(false)

  const courses = [
    {
      id: 1,
      title: "Frontend Development",
      description: "HTML, CSS, JavaScript va React frameworkini o'rganing",
      image: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
      duration: "6 oy",
      lessons: 48,
      instructor: "Jahongir Rahmonov",
      rating: 4.8,
      students: 1200,
      icon: <SiReact className="w-8 h-8 text-blue-500" />,
      level: "Boshlang'ich"
    },
    {
      id: 2,
      title: "Python Development",
      description: "Python dasturlash tili va Django frameworki",
      image: "https://www.python.org/static/community_logos/python-logo-master-v3-TM.png",
      duration: "8 oy",
      lessons: 64,
      instructor: "Aziz Rakhimov",
      rating: 4.9,
      students: 980,
      icon: <SiPython className="w-8 h-8 text-yellow-500" />,
      level: "O'rta"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Zamonaviy web va mobil ilovalar dizayni",
      image: "https://cdn.dribbble.com/users/2442115/screenshots/8699490/media/48bbda278683c7879bebd57f0e2f9271.gif",
      duration: "4 oy",
      lessons: 32,
      instructor: "Malika Karimova",
      rating: 4.7,
      students: 750,
      icon: <SiFigma className="w-8 h-8 text-purple-500" />,
      level: "Boshlang'ich"
    },
    {
      id: 4,
      title: "Android Development",
      description: "Java va Kotlin orqali Android ilovalar yaratish",
      image: "https://developer.android.com/static/images/social/android-developers.png",
      duration: "7 oy",
      lessons: 56,
      instructor: "Sardor Abdullayev",
      rating: 4.9,
      students: 850,
      icon: <SiAndroidstudio className="w-8 h-8 text-green-500" />,
      level: "O'rta"
    },
    {
      id: 5,
      title: "Data Science",
      description: "Ma'lumotlar tahlili va sun'iy intellekt asoslari",
      image: "https://www.dataquest.io/wp-content/uploads/2019/05/what-is-data-science-1.jpg",
      duration: "9 oy",
      lessons: 72,
      instructor: "Dilshod Tursunov",
      rating: 4.8,
      students: 620,
      icon: <SiPython className="w-8 h-8 text-blue-700" />,
      level: "Murakkab"
    },
    {
      id: 6,
      title: "Digital Marketing",
      description: "Raqamli marketing strategiyalari va SMM",
      image: "https://www.digitalmarketing.org/hubfs/digital-marketing-1.jpg",
      duration: "3 oy",
      lessons: 24,
      instructor: "Nodira Ismoilova",
      rating: 4.6,
      students: 940,
      icon: <FiTrendingUp className="w-8 h-8 text-red-500" />,
      level: "Boshlang'ich"
    },
    {
      id: 7,
      title: "iOS Development",
      description: "Swift dasturlash tili va iOS ilovalar yaratish",
      image: "https://developer.apple.com/swift/images/swift-og.png",
      duration: "8 oy",
      lessons: 64,
      instructor: "Bobur Alimov",
      rating: 4.9,
      students: 480,
      icon: <SiSwift className="w-8 h-8 text-orange-500" />,
      level: "O'rta"
    },
    {
      id: 8,
      title: "Backend Development",
      description: "Node.js va Express frameworkida backend dasturlash",
      image: "https://nodejs.org/static/images/logo-hexagon-card.png",
      duration: "7 oy",
      lessons: 56,
      instructor: "Akmal Karimov",
      rating: 4.8,
      students: 730,
      icon: <SiNodedotjs className="w-8 h-8 text-green-600" />,
      level: "O'rta"
    },
    {
      id: 9,
      title: "3D Modeling",
      description: "Blender va Maya dasturlarida 3D modellashtirish",
      image: "https://www.blender.org/wp-content/uploads/2020/07/blender_community_logo_white.png",
      duration: "6 oy",
      lessons: 48,
      instructor: "Kamola Saidova",
      rating: 4.7,
      students: 340,
      icon: <SiBlender className="w-8 h-8 text-orange-600" />,
      level: "O'rta"
    },
    {
      id: 10,
      title: "Cyber Security",
      description: "Kiberxavfsizlik va tarmoq xavfsizligi asoslari",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "8 oy",
      lessons: 64,
      instructor: "Rustam Xolmatov",
      rating: 4.9,
      students: 420,
      icon: <FiShield className="w-8 h-8 text-red-600" />,
      level: "Murakkab"
    },
    {
      id: 11,
      title: "Game Development",
      description: "Unity va C# orqali o'yinlar yaratish",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "9 oy",
      lessons: 72,
      instructor: "Temur Rashidov",
      rating: 4.8,
      students: 560,
      icon: <SiUnity className="w-8 h-8 text-gray-800" />,
      level: "O'rta"
    },
    {
      id: 12,
      title: "DevOps Engineering",
      description: "Docker, Kubernetes va CI/CD pipeline",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "7 oy",
      lessons: 56,
      instructor: "Jasur Umarov",
      rating: 4.9,
      students: 290,
      icon: <SiDocker className="w-8 h-8 text-blue-400" />,
      level: "Murakkab"
    }
  ];

  // Filter categories
  const categories = [
    { id: 'all', name: 'Barcha kurslar' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'design', name: 'Design' }
  ]

  // Filter courses based on category
  const getFilteredCourses = () => {
    if (activeFilter === 'all') return courses;
    
    return courses.filter(course => {
      switch(activeFilter) {
        case 'frontend':
          return course.title.toLowerCase().includes('frontend') || 
                 course.title.includes('React') || 
                 course.title.includes('JavaScript');
        case 'backend':
          return course.title.toLowerCase().includes('backend') || 
                 course.title.includes('Python') || 
                 course.title.includes('Node.js');
        case 'mobile':
          return course.title.includes('Android') || 
                 course.title.includes('iOS');
        case 'design':
          return course.title.includes('Design') || 
                 course.title.includes('UI/UX');
        default:
          return true;
      }
    });
  }

  // Get free courses (example: courses with duration <= 4 months)
  const getFreeCourses = () => {
    return courses.filter(course => 
      parseInt(course.duration) <= 4
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
            <div className="w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-30 -ml-20"></div>
          </div>
          
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
            100+ Professional kurslar
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Bizning 
            <span className="relative inline-block px-2">
              <span className="absolute inset-0 transform -skew-x-12 bg-blue-100"></span>
              <span className="relative text-blue-700">Kurslar</span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Zamonaviy kasb egasi bo'lish uchun professional kurslarimizdan birini tanlang
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <FiUsers className="w-5 h-5 text-blue-500" />
              <span>5000+ O'quvchilar</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <FiBook className="w-5 h-5 text-blue-500" />
              <span>12 Yo'nalishlar</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <FiClock className="w-5 h-5 text-blue-500" />
              <span>24/7 Qo'llab-quvvatlash</span>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mb-12">
            <button 
              onClick={() => {
                setShowAllCourses(true)
                setShowFreeCourses(false)
                setActiveFilter('all')
                // Scroll to courses section
                document.getElementById('courses-section').scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 
                       transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Kurslarni ko'rish
            </button>
            <button 
              onClick={() => {
                setShowFreeCourses(true)
                setShowAllCourses(false)
                setActiveFilter('all')
                document.getElementById('courses-section').scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-50 
                       transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 
                       border border-blue-100"
            >
              Bepul darslar
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300
                ${activeFilter === category.id 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div id="courses-section" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showFreeCourses ? getFreeCourses() : getFilteredCourses()).map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl 
                       transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg">
                  {course.icon}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
                    {course.level}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <FiClock className="w-5 h-5 text-gray-400" />
                      <span className="ml-2 text-gray-600">{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <FiBook className="w-5 h-5 text-gray-400" />
                      <span className="ml-2 text-gray-600">{course.lessons} dars</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={`https://ui-avatars.com/api/?name=${course.instructor}&background=random`}
                        alt={course.instructor}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{course.instructor}</p>
                        <p className="text-sm text-gray-500">O'qituvchi</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FiUsers className="w-5 h-5 text-gray-400" />
                      <span className="ml-2 text-gray-600">{course.students}</span>
                    </div>
                  </div>
                </div>

                <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Kursga yozilish</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {getFilteredCourses().length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-gray-600">
              Bu kategoriyada hozircha kurslar mavjud emas
            </h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default Kurslar