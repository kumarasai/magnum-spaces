import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Phone, Award, Users, Home, Lightbulb, Sofa, Sparkles, ArrowRight, Menu, X, Mail, MapPin, Clock, Star, Quote, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import magnum from '../src/assets/magnum.png'

const InteriorDesignWebsite = () => {
  const [activeService, setActiveService] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Handle scroll for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Navigation items
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  // Smooth scroll function
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Projects data
  const projects = [
    { id: 1, title: "Modern Minimalist Living", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80", category: "Residential" },
    { id: 2, title: "Luxury Penthouse Suite", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", category: "Luxury" },
    { id: 3, title: "Contemporary Office Space", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", category: "Commercial" },
    { id: 4, title: "Scandinavian Bedroom", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80", category: "Residential" },
    { id: 5, title: "Industrial Loft Design", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", category: "Modern" },
    { id: 6, title: "Elegant Dining Space", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", category: "Luxury" },
    { id: 7, title: "Cozy Reading Nook", image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80", category: "Residential" },
    { id: 8, title: "Modern Kitchen Design", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80", category: "Modern" },
  ];

  // Services data
  const services = [
    {
      icon: <Home className="w-12 h-12" />,
      title: "Residential Design",
      description: "Transform your house into a dream home with personalized interior solutions",
      features: ["Space Planning", "Custom Furniture", "Color Consultation"]
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Lighting Design",
      description: "Illuminate your space with perfect ambiance and functional lighting solutions",
      features: ["Ambient Lighting", "Task Lighting", "Accent Features"]
    },
    {
      icon: <Sofa className="w-12 h-12" />,
      title: "Furniture Selection",
      description: "Curated furniture pieces that blend comfort with sophisticated aesthetics",
      features: ["Custom Pieces", "Luxury Brands", "Space Optimization"]
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Complete Renovation",
      description: "Full-scale transformations from concept to completion with attention to detail",
      features: ["Project Management", "Quality Control", "Timely Delivery"]
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed", icon: <Award className="w-8 h-8" /> },
    { number: "5+", label: "Years Experience", icon: <Users className="w-8 h-8" /> },
  ];

  // Customer reviews data
  const reviews = [
    {
      id: 1,
      name: "John",
      role: "Homeowner",
      image: "",
      rating: 5,
      review: "Absolutely transformed our living space! The attention to detail and creative vision exceeded all our expectations. Every corner of our home now tells a story.",
      project: "Modern Villa Renovation"
    },
    {
      id: 2,
      name: "Michael",
      role: "Business Owner",
      image: "",
      rating: 5,
      review: "Professional, punctual, and incredibly talented. They understood our brand identity and created an office space that inspires our team every single day.",
      project: "Corporate Office Design"
    },
    {
      id: 3,
      name: "Venkat",
      role: "Interior Enthusiast",
      image: "",
      rating: 5,
      review: "From concept to completion, the journey was seamless. Their innovative approach to space planning turned our small apartment into a spacious, luxurious retreat.",
      project: "Luxury Apartment"
    },
    {
      id: 4,
      name: "Ravi",
      role: "Restaurant Owner",
      image: "",
      rating: 5,
      review: "The ambiance they created has significantly elevated our customer experience. Our restaurant now has a distinct personality that keeps guests coming back.",
      project: "Fine Dining Restaurant"
    },
    {
      id: 5,
      name: "Kumar",
      role: "Homeowner",
      image: "",
      rating: 5,
      review: "Impeccable taste and flawless execution. They listened to our needs and delivered beyond our wildest dreams. Our home is now a masterpiece!",
      project: "Penthouse Suite"
    },
    {
      id: 6,
      name: "Robert ",
      role: "Hotel Manager",
      image: "0",
      rating: 5,
      review: "Outstanding work on our boutique hotel. The designs are timeless, elegant, and have received incredible feedback from our guests. Truly exceptional!",
      project: "Boutique Hotel"
    }
  ];

  return (
    <div ref={containerRef} className={`overflow-x-hidden transition-colors duration-700 ${
      isDarkTheme 
        ? 'bg-black text-white' 
        : 'bg-white text-black'
    }`}>
      {/* Header Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? isDarkTheme 
              ? 'bg-black/95 backdrop-blur-lg shadow-lg shadow-yellow-500/10' 
              : 'bg-white/95 backdrop-blur-lg shadow-lg shadow-yellow-500/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
  whileHover={{ scale: 1.05 }}
  className="flex items-center gap-2 cursor-pointer"
  onClick={() => scrollToSection('#home')}
>
  {/* Your Logo Image */}
  <img 
    src={magnum}
    alt="LuxeInterior Logo" 
    className="h-12 w-auto lg:w-auto"
  />
  
  
</motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`font-medium transition-colors duration-300 relative group ${
                    isDarkTheme ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-600'
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              ))}
              <motion.a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full flex items-center gap-2 shadow-lg shadow-yellow-500/30"
              >
                <Phone className="w-4 h-4" />
                Contact
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 ${isDarkTheme ? 'text-white' : 'text-black'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden backdrop-blur-lg border-t border-yellow-500/20 ${
                isDarkTheme ? 'bg-black/98' : 'bg-white/98'
              }`}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`block w-full text-left font-medium py-2 transition-colors duration-300 ${
                      isDarkTheme ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-600'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full text-center"
                >
                  Contact Us
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section with Video */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
            poster="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
          >
            {/* Replace this URL with your actual interior design showreel video */}
            <source src="https://www.pexels.com/download/video/7578540/" type="video/mp4" />
            {/* Fallback for older browsers */}
            <source src="https://www.pexels.com/download/video/7578540/" type="video/mp4" />
          </video>
          {/* Cinematic overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          {/* Theme Toggle Button - Light from Top */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute top-24 right-8 md:right-16"
          >
            {/* Light Beam Effect */}
            <AnimatePresence>
              {!isDarkTheme && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 200, opacity: 0.3 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-16 left-1/2 -translate-x-1/2 w-32 bg-gradient-to-b from-yellow-200 via-yellow-100 to-transparent"
                  style={{
                    clipPath: 'polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)',
                    filter: 'blur(20px)'
                  }}
                />
              )}
            </AnimatePresence>
            
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className={`relative group w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                isDarkTheme 
                  ? 'bg-zinc-900 border-2 border-yellow-500/30 shadow-lg shadow-yellow-500/20' 
                  : 'bg-yellow-400 border-2 border-yellow-600 shadow-2xl shadow-yellow-500/60'
              }`}
            >
              {/* Pulsing Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: isDarkTheme ? [0.3, 0.6, 0.3] : [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`absolute inset-0 rounded-full ${
                  isDarkTheme ? 'bg-yellow-500/20' : 'bg-yellow-300/50'
                }`}
              />
              
              {/* Light Bulb Icon */}
              <motion.div
                animate={{ 
                  rotate: isDarkTheme ? 0 : 180,
                }}
                transition={{ duration: 0.5 }}
              >
                <Lightbulb 
                  className={`w-8 h-8 relative z-10 transition-all duration-500 ${
                    isDarkTheme ? 'text-yellow-500' : 'text-black'
                  }`}
                  fill={isDarkTheme ? 'none' : 'currentColor'}
                />
              </motion.div>

              {/* Tooltip */}
              <div className={`absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isDarkTheme 
                  ? 'bg-white text-black' 
                  : 'bg-black text-white'
              }`}>
                {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
              </div>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              <span className={isDarkTheme ? 'text-white' : 'text-black'}>Crafting</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
                Timeless Spaces
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`text-xl md:text-2xl mb-12 max-w-2xl ${
              isDarkTheme ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Where luxury meets functionality in perfect harmony
          </motion.p>

          <motion.a
            href="https://wa.me/+918919772282"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-lg rounded-full overflow-hidden shadow-2xl shadow-yellow-500/50"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Phone className="w-6 h-6" />
              Call Us Now
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-yellow-400 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section - Dual Row Infinite Scroll */}
      <section id="projects" className={`py-32 overflow-hidden transition-colors duration-700 ${
        isDarkTheme 
          ? 'bg-gradient-to-b from-black via-zinc-950 to-black' 
          : 'bg-gradient-to-b from-white via-gray-50 to-white'
      }`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 px-4"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className={isDarkTheme ? 'text-white' : 'text-black'}>Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Portfolio</span>
          </h2>
          <p className={`text-xl ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>Spaces that inspire and elevate everyday living</p>
        </motion.div>

        {/* First Row - Scroll Right */}
        <div className="mb-8 overflow-hidden">
          <motion.div
            animate={{ x: [0, -2400] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-6"
          >
            {[...projects, ...projects, ...projects].map((project, index) => (
              <motion.div
                key={`row1-${index}`}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative flex-shrink-0 w-[400px] h-[500px] rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-4 py-1 bg-yellow-500 text-black text-sm font-bold rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Scroll Left */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: [-2400, 0] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-6"
          >
            {[...projects.slice().reverse(), ...projects.slice().reverse(), ...projects.slice().reverse()].map((project, index) => (
              <motion.div
                key={`row2-${index}`}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative flex-shrink-0 w-[400px] h-[500px] rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-4 py-1 bg-yellow-500 text-black text-sm font-bold rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section - Creative Presentation */}
      <section id="services" className={`py-32 px-4 relative overflow-hidden transition-colors duration-700 ${
        isDarkTheme 
          ? 'bg-gradient-to-b from-black via-zinc-900 to-black' 
          : 'bg-gradient-to-b from-white via-gray-100 to-white'
      }`}>
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className={isDarkTheme ? 'text-white' : 'text-black'}>Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Services</span>
          </h2>
          <p className={`text-xl ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>Excellence in every detail</p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} isDarkTheme={isDarkTheme} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-32 px-4 transition-colors duration-700 ${
        isDarkTheme 
          ? 'bg-gradient-to-b from-black via-zinc-950 to-black' 
          : 'bg-gradient-to-b from-white via-gray-50 to-white'
      }`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className={isDarkTheme ? 'text-white' : 'text-black'}>Our </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Journey</span>
            </h2>
            <p className={`text-xl ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>Building trust through excellence</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className={`relative rounded-3xl p-12 text-center border transition-colors duration-700 ${
                  isDarkTheme 
                    ? 'bg-gradient-to-br from-zinc-900 to-black border-yellow-500/20' 
                    : 'bg-gradient-to-br from-white to-gray-50 border-yellow-500/30'
                }`}>
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="inline-block text-yellow-400 mb-6"
                  >
                    {stat.icon}
                  </motion.div>
                  <h3 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
                    {stat.number}
                  </h3>
                  <p className={`text-2xl font-medium ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Team Section */}
<section className={`py-32 px-4 transition-colors duration-700 ${
  isDarkTheme 
    ? 'bg-gradient-to-b from-black via-zinc-900 to-black' 
    : 'bg-gradient-to-b from-white via-gray-100 to-white'
}`}>
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl md:text-7xl font-bold mb-6">
        <span className={isDarkTheme ? 'text-white' : 'text-black'}>Meet Our </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Team</span>
      </h2>
      <p className={`text-xl max-w-3xl mx-auto ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
        Passionate designers dedicated to transforming your vision into reality
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Team Member 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="group relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-600/0 group-hover:from-yellow-400/10 group-hover:to-yellow-600/10 rounded-3xl blur-xl transition-all duration-500" />
        
        <div className={`relative rounded-3xl overflow-hidden transition-all duration-700 border ${
          isDarkTheme 
            ? 'bg-gradient-to-br from-zinc-900 to-black border-yellow-500/20 group-hover:border-yellow-500/40' 
            : 'bg-gradient-to-br from-white to-gray-50 border-yellow-500/30 group-hover:border-yellow-500/50'
        }`}>
          {/* Image */}
          <div className="relative h-80 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
              alt="Sarah Mitchell"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* Social Icons Overlay */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:bg-yellow-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:bg-yellow-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Info */}
          <div className="p-8">
            <h3 className={`text-2xl font-bold mb-2 ${isDarkTheme ? 'text-white' : 'text-black'}`}>
              Praveen
            </h3>
            <p className="text-yellow-400 font-semibold mb-4">Lead Designer</p>
            <p className={`leading-relaxed ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quos nemo architecto possimus nihil omnis consectetur laborum 
            </p>
          </div>
        </div>
      </motion.div>

      {/* Team Member 2 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="group relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-600/0 group-hover:from-yellow-400/10 group-hover:to-yellow-600/10 rounded-3xl blur-xl transition-all duration-500" />
        
        <div className={`relative rounded-3xl overflow-hidden transition-all duration-700 border ${
          isDarkTheme 
            ? 'bg-gradient-to-br from-zinc-900 to-black border-yellow-500/20 group-hover:border-yellow-500/40' 
            : 'bg-gradient-to-br from-white to-gray-50 border-yellow-500/30 group-hover:border-yellow-500/50'
        }`}>
          <div className="relative h-80 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80"
              alt="Michael Chen"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:bg-yellow-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:bg-yellow-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div className="p-8">
            <h3 className={`text-2xl font-bold mb-2 ${isDarkTheme ? 'text-white' : 'text-black'}`}>
              Name Here
            </h3>
            <p className="text-yellow-400 font-semibold mb-4">Creative Director</p>
            <p className={`leading-relaxed ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quos nemo architecto possimus nihil omnis consectetur laborum 
            </p>
          </div>
        </div>
      </motion.div>

      {/* Team Member 3 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="group relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-600/0 group-hover:from-yellow-400/10 group-hover:to-yellow-600/10 rounded-3xl blur-xl transition-all duration-500" />
        
        <div className={`relative rounded-3xl overflow-hidden transition-all duration-700 border ${
          isDarkTheme 
            ? 'bg-gradient-to-br from-zinc-900 to-black border-yellow-500/20 group-hover:border-yellow-500/40' 
            : 'bg-gradient-to-br from-white to-gray-50 border-yellow-500/30 group-hover:border-yellow-500/50'
        }`}>
          <div className="relative h-80 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
              alt="Emma Rodriguez"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:bg-yellow-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:bg-yellow-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div className="p-8">
            <h3 className={`text-2xl font-bold mb-2 ${isDarkTheme ? 'text-white' : 'text-black'}`}>
             Name Here
            </h3>
            <p className="text-yellow-400 font-semibold mb-4">Project Manager</p>
            <p className={`leading-relaxed ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quos nemo architecto possimus nihil omnis consectetur laborum 
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Customer Reviews Section */}
      <section id="reviews" className={`py-32 px-4 overflow-hidden transition-colors duration-700 ${
        isDarkTheme 
          ? 'bg-gradient-to-b from-black via-zinc-950 to-black' 
          : 'bg-gradient-to-b from-white via-gray-50 to-white'
      }`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className={isDarkTheme ? 'text-white' : 'text-black'}>Client </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Reviews</span>
          </h2>
          <p className={`text-xl ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>Hear what our clients say about their experience</p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-600/0 group-hover:from-yellow-400/10 group-hover:to-yellow-600/10 rounded-3xl blur-xl transition-all duration-500" />
                
                {/* Review Card */}
                <div className={`relative rounded-3xl p-8 h-full transition-all duration-700 border ${
                  isDarkTheme 
                    ? 'bg-gradient-to-br from-zinc-900 to-black border-yellow-500/20 group-hover:border-yellow-500/40' 
                    : 'bg-gradient-to-br from-white to-gray-50 border-yellow-500/30 group-hover:border-yellow-500/50'
                }`}>
                  {/* Quote Icon */}
                  <div className={`absolute top-6 right-6 transition-colors duration-500 ${
                    isDarkTheme 
                      ? 'text-yellow-400/20 group-hover:text-yellow-400/40' 
                      : 'text-yellow-400/30 group-hover:text-yellow-400/50'
                  }`}>
                    <Quote className="w-12 h-12" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className={`mb-6 leading-relaxed italic ${
                    isDarkTheme ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    "{review.review}"
                  </p>

                  {/* Project Name */}
                  <div className="mb-6 pb-6 border-b border-yellow-500/20">
                    <span className="text-yellow-400 text-sm font-semibold">
                      {review.project}
                    </span>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                      <img
                        src={review.image}
                        alt={review.name}
                        className="relative w-14 h-14 rounded-full object-cover border-2 border-yellow-400/50"
                      />
                    </div>
                    <div>
                      <h4 className={`font-bold group-hover:text-yellow-400 transition-colors duration-300 ${
                        isDarkTheme ? 'text-white' : 'text-black'
                      }`}>
                        {review.name}
                      </h4>
                      <p className={`text-sm ${isDarkTheme ? 'text-gray-500' : 'text-gray-600'}`}>{review.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="relative mt-20 text-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block"
            >
              <div className="flex items-center gap-2 text-yellow-400">
                <Star className="w-6 h-6 fill-yellow-400" />
                <span className="text-2xl font-bold">5.0</span>
                <Star className="w-6 h-6 fill-yellow-400" />
              </div>
            </motion.div>
            <p className={isDarkTheme ? 'text-gray-400 mt-2' : 'text-gray-600 mt-2'}>Average rating from 250+ happy clients</p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section id="contact" className={`py-24 px-4 transition-colors duration-700 ${
        isDarkTheme 
          ? 'bg-gradient-to-t from-zinc-950 to-black' 
          : 'bg-gradient-to-t from-gray-50 to-white'
      }`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className={isDarkTheme ? 'text-white' : 'text-black'}>Ready to Transform</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Your Space?
            </span>
          </h2>
          <p className={`text-xl mb-12 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
            Let's create something extraordinary together
          </p>
          <motion.a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-lg rounded-full shadow-2xl shadow-yellow-500/50"
          >
            <Phone className="w-6 h-6" />
            Start Your Project
            <ArrowRight className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </section>

      {/* Comprehensive Footer */}
      <footer className={`border-t border-yellow-500/20 transition-colors duration-700 ${
        isDarkTheme 
          ? 'bg-gradient-to-b from-black to-zinc-950' 
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}>
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
             <motion.div
  whileHover={{ scale: 1.05 }}
  className="flex items-center gap-2 cursor-pointer"
  onClick={() => scrollToSection('#home')}
>
  {/* Your Logo Image */}
  <img 
    src={magnum}
    alt="LuxeInterior Logo" 
    className="h-12 w-auto my-5"
  />
  
  
</motion.div>
              <p className={`mb-6 leading-relaxed ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                Transforming spaces into timeless masterpieces. We bring your vision to life with creativity, precision, and passion.
              </p>
              {/* Social Media */}
              <div className="flex gap-4">
                {[
                  { icon: <Facebook className="w-5 h-5" />, href: "#" },
                  { icon: <Instagram className="w-5 h-5" />, href: "#" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                  { icon: <Twitter className="w-5 h-5" />, href: "#" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 border border-yellow-500/20 hover:border-yellow-500/50 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isDarkTheme 
                        ? 'bg-gradient-to-br from-zinc-800 to-zinc-900 text-gray-400 hover:text-yellow-400' 
                        : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600 hover:text-yellow-600'
                    }`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={`transition-colors duration-300 flex items-center gap-2 group ${
                        isDarkTheme ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-600'
                      }`}
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#services"
                      className={`transition-colors duration-300 flex items-center gap-2 group ${
                        isDarkTheme ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-600'
                      }`}
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Get In Touch
              </h3>
              <ul className="space-y-4">
                <li className={`flex items-start gap-3 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                  <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>Vijayawada , Andhra Pradesh</span>
                </li>
                <li className={`flex items-start gap-3 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <a href="tel:+1234567890" className={`transition-colors duration-300 block ${
                      isDarkTheme ? 'hover:text-yellow-400' : 'hover:text-yellow-600'
                    }`}>
                      +91 891 977 2282
                    </a>
                    <a href="https://wa.me/1234567890" className={`transition-colors duration-300 text-sm block mt-1 ${
                      isDarkTheme ? 'hover:text-yellow-400' : 'hover:text-yellow-600'
                    }`}>
                      WhatsApp Available
                    </a>
                  </div>
                </li>
                <li className={`flex items-start gap-3 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <a href="mailto:hello@luxeinterior.com" className={`transition-colors duration-300 ${
                    isDarkTheme ? 'hover:text-yellow-400' : 'hover:text-yellow-600'
                  }`}>
                    magnumspaces@gmail.com
                  </a>
                </li>
                <li className={`flex items-start gap-3 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Clock className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm">Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Section */}
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-500/20">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className={`text-sm ${isDarkTheme ? 'text-gray-500' : 'text-gray-600'}`}>
                © 2024 LuxeInterior. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className={`transition-colors duration-300 ${
                  isDarkTheme ? 'text-gray-500 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-600'
                }`}>
                  Privacy Policy
                </a>
                <a href="#" className={`transition-colors duration-300 ${
                  isDarkTheme ? 'text-gray-500 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-600'
                }`}>
                  Terms of Service
                </a>
                <a href="#" className={`transition-colors duration-300 ${
                  isDarkTheme ? 'text-gray-500 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-600'
                }`}>
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Service Card Component with Creative Animation
const ServiceCard = ({ service, index, isDarkTheme }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-600/0 group-hover:from-yellow-400/20 group-hover:to-yellow-600/20 rounded-3xl blur-xl transition-all duration-500" />
      
      {/* Card Content */}
      <div className={`relative rounded-3xl p-10 h-full transition-all duration-700 border ${
        isDarkTheme 
          ? 'bg-gradient-to-br from-zinc-900 to-black border-yellow-500/20 group-hover:border-yellow-500/50' 
          : 'bg-gradient-to-br from-white to-gray-50 border-yellow-500/30 group-hover:border-yellow-500/60'
      }`}>
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="text-yellow-400 mb-6 inline-block"
        >
          {service.icon}
        </motion.div>
        
        <h3 className={`text-3xl font-bold mb-4 group-hover:text-yellow-400 transition-colors duration-300 ${
          isDarkTheme ? 'text-white' : 'text-black'
        }`}>
          {service.title}
        </h3>
        
        <p className={`mb-6 text-lg leading-relaxed ${
          isDarkTheme ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {service.description}
        </p>
        
        <div className="space-y-3">
          {service.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full" />
              <span className={isDarkTheme ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="absolute bottom-8 right-8 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ x: 5 }}
        >
          <ArrowRight className="w-8 h-8" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InteriorDesignWebsite;