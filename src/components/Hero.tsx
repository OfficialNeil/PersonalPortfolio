import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const easterEggRef = useRef<HTMLDivElement>(null);
  const [easterEggPosition, setEasterEggPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 3000);

    const handleMouseMove = (e: MouseEvent) => {
      const hero = document.getElementById('hero');
      if (hero) {
        const rect = hero.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    // Get easter egg position
    const updateEasterEggPosition = () => {
      if (easterEggRef.current) {
        const rect = easterEggRef.current.getBoundingClientRect();
        const hero = document.getElementById('hero');
        if (hero) {
          const heroRect = hero.getBoundingClientRect();
          setEasterEggPosition({
            x: rect.left - heroRect.left + rect.width / 2,
            y: rect.top - heroRect.top + rect.height / 2,
          });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', updateEasterEggPosition);
    updateEasterEggPosition();

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateEasterEggPosition);
    };
  }, []);

  const isEasterEggVisible = () => {
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - easterEggPosition.x, 2) +
      Math.pow(mousePosition.y - easterEggPosition.y, 2)
    );
    
    // Different radius zones for the spotlight
    const innerRadius = 200;
    const outerRadius = 400;
    
    if (distance > outerRadius) return 0; // Completely invisible
    if (distance < innerRadius) {
      // Full visibility in inner circle with smooth falloff towards edge
      return 1 - (distance / innerRadius) * 0.3;
    }
    // Gradual falloff in outer ring
    return 0.7 * (1 - (distance - innerRadius) / (outerRadius - innerRadius));
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black grid-bg">
      {/* Spotlight gradient */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] transition duration-500 mix-blend-soft-light"
        style={{
          background: `
            radial-gradient(
              800px circle at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0.07) 20%,
              rgba(255, 255, 255, 0.04) 30%,
              transparent 50%
            ),
            radial-gradient(
              600px circle at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(255, 255, 255, 0.15),
              transparent 40%
            )
          `
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-white/3 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[600px] h-80 sm:h-[600px] bg-white/2 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col items-center text-center relative z-10">
        {/* Easter egg text */}
        <div 
          ref={easterEggRef}
          className="absolute bottom-8 right-8 transition-all duration-300 select-none"
          style={{
            opacity: isEasterEggVisible(),
            transform: `scale(${0.95 + isEasterEggVisible() * 0.05})`,
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '14px',
            fontStyle: 'italic',
            textShadow: `0 0 ${10 * isEasterEggVisible()}px rgba(255, 255, 255, ${0.5 * isEasterEggVisible()})`,
          }}
        >
          You found this easter egg! 🎉
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Hi, I'm <span className="gradient-text">Neil Patel</span>
          </motion.h1>

          <motion.div 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4 min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem] lg:min-h-[4rem] flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <span className="text-gray-300">I am a </span>
            <TypeAnimation
              sequence={[
                'Developer',
                3000,
                'Engineer',
                3000,
                'Innovator',
                3000,
                'Problem Solver',
                3000,
                'Creator',
                3000,
                'Technologist',
                3000,
              ]}
              wrapper="span"
              className="gradient-text font-semibold ml-2"
              repeat={Infinity}
              cursor={true}
              style={{ 
                display: 'inline-block',
                borderRight: '3px solid #ffffff',
                animation: 'blink 1s infinite',
                paddingRight: '2px'
              }}
            />
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <Link to="contact" smooth={true} duration={500}>
              <button className="btn-primary w-full sm:w-auto">Get In Touch</button>
            </Link>
            <Link to="portfolio" smooth={true} duration={500}>
              <button className="btn-secondary w-full sm:w-auto">View My Work</button>
            </Link>
          </motion.div>

          <motion.div 
            className="flex justify-center gap-6 sm:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <a 
              href="https://github.com/OfficialNeil" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 p-2 sm:p-3 rounded-full hover:bg-white/10"
            >
              <Github size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a 
              href="https://www.linkedin.com/in/neilpatel06/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 p-2 sm:p-3 rounded-full hover:bg-white/10"
            >
              <Linkedin size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a 
              href="mailto:neil7221@gmail.com" 
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 p-2 sm:p-3 rounded-full hover:bg-white/10"
            >
              <Mail size={24} className="sm:w-7 sm:h-7" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <Link to="about" smooth={true} duration={500} className="cursor-pointer">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
          >
            <ChevronDown size={20} className="sm:w-6 sm:h-6" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;