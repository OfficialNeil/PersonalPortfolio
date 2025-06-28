import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Cpu, BookOpen, Rocket } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.6,
        ease: "easeOut"
      },
    }),
  };

  const strengths = [
    {
      icon: <Code size={28} className="text-white sm:w-9 sm:h-9" />,
      title: 'Full-Stack Development',
      description: 'Building robust, scalable web applications with modern frameworks and cutting-edge technologies.',
    },
    {
      icon: <Cpu size={28} className="text-white sm:w-9 sm:h-9" />,
      title: 'Machine Learning',
      description: 'Creating intelligent systems that learn, adapt, and provide meaningful insights from complex data.',
    },
    {
      icon: <BookOpen size={28} className="text-white sm:w-9 sm:h-9" />,
      title: 'Research & Innovation',
      description: 'Exploring new methodologies to solve complex problems in AI, security, and web technologies.',
    },
    {
      icon: <Rocket size={28} className="text-white sm:w-9 sm:h-9" />,
      title: 'Performance Optimization',
      description: 'Delivering lightning-fast, efficient solutions that scale and perform under any conditions.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-[#111111] relative">
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed px-4">
            I'm a passionate developer and researcher dedicated to creating innovative solutions that bridge 
            the gap between cutting-edge technology and real-world applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full flex"
          >
            <div className="card glow-hover w-full flex flex-col">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">My Journey</h3>
              <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base flex-grow">
                <p>
                  I am a rising second-year at the University of Virginia pursuing a Bachelor of Science in 
                  Computer Science and Systems Engineering, where I'm building a strong foundation in both 
                  theoretical and practical aspects of computing.
                </p>
                <p>
                  My passion lies in the cybersecurity realm, where I've earned my CCNA and Security+ 
                  certifications, demonstrating my commitment to understanding network infrastructure and 
                  security principles at a professional level.
                </p>
                <p>
                  Currently, I'm diving deep into the applicability of AI/ML systems, exploring how these 
                  cutting-edge technologies can be integrated with cybersecurity to create more intelligent 
                  and adaptive security solutions for the future.
                </p>
                <p className="text-gray-400 italic">
                  Thank you for taking the time to view my portfolio webpage. I hope you enjoy exploring 
                  my work and learning more about my journey in technology!
                </p>
              </div>
            </div>
          </motion.div>

          <div ref={ref}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={index}
                  className="card glow-hover group cursor-pointer"
                >
                  <div className="mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {strength.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-gray-200 transition-colors">
                    {strength.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed text-sm sm:text-base">
                    {strength.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;