import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  popupImage?: string;
  tags: string[];
  githubLink?: string;
  demoLink?: string;
  details: string;
}

const Portfolio = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      // Disable scroll on the <body> and <html>
      document.body.style.overflow = 'hidden';
      if (document.documentElement) {
        document.documentElement.style.overflow = 'hidden';
      }
    } else {
      // Restore scroll when modal closes
      document.body.style.overflow = '';
      if (document.documentElement) {
        document.documentElement.style.overflow = '';
      }
    }

    // Cleanup in case the component unmounts while modal is open
    return () => {
      document.body.style.overflow = '';
      if (document.documentElement) {
        document.documentElement.style.overflow = '';
      }
    };
  }, [selectedProject]);

  const projects: Project[] = [
    {
      id: 1,
      title: "XSS Machine Learning Model",
      description: "Engineered a reinforcement learning–based machine learning model in C++ to detect early on-site Cross-Site Scripting (XSS) attacks, achieving a detection accuracy of 96%.",
      image: "/xss.webp",
      tags: ["C++", "Python", "Machine Learning", "Reinforcement Learning", "Cybersecurity", "XSS Detection"],
      details: "Designed and trained the model to proactively identify malicious patterns in user input, enabling real-time prevention of XSS threats and strengthening overall web application security. This cutting-edge project implements advanced reinforcement learning techniques to analyze complex patterns in web requests and identifies potential malicious payloads with unprecedented accuracy. The system achieved a remarkable 96% detection accuracy with minimal false positives, making it a powerful tool for enhancing web application security."
    },
    {
      id: 2,
      title: "Political Bias Compass",
      description: "Developed a Flask-based web application in Python that analyzes political bias in news articles using a linear regression machine learning model, achieving 96% accuracy in sentiment analysis.",
      image: "/political-bias-compass.jpg",
      tags: ["Python", "Flask", "Machine Learning", "Linear Regression", "Sentiment Analysis", "Web Application"],
      githubLink: "https://github.com/aryanmhaskar/hoohacks",
      details: "Won \"Best Beginner Track\" at HooHacks 2025, outperforming 60+ teams by delivering a high-impact tool that visualizes ideological leanings and promotes media literacy. The Political Bias Compass leverages state-of-the-art machine learning to analyze text content and determine political bias with sophisticated reasoning. Built with a robust Flask backend and an intuitive web interface, this tool empowers users to understand the political perspective of the content they consume, achieving 96% accuracy in sentiment analysis."
    },
    {
      id: 3,
      title: "Machine Learning Object Detection Model",
      description: "Led a team to build a TensorFlow object detection model that identifies team props with 89.1% accuracy.",
      image: "/obj.webp",
      popupImage: "/redreal.png",
      tags: ["Python", "TensorFlow", "Object Detection", "Machine Learning", "Team Leadership"],
      details: "Spearheaded a visionary team effort to train cutting-edge mathematical models, empowering them to detect team props with precision using sophisticated TensorFlow algorithms. Orchestrated the scripting of a predictive object detection model, achieving an impressive prediction accuracy rate of 89.10%."
    },
    {
      id: 4,
      title: "HTL Stock Market",
      description: "Developed a TypeScript web application simulating a fantasy stock market where users trade athlete stocks based on real performance.",
      image: "/stock1.jpg",
      popupImage: "/stock.png",
      tags: ["TypeScript", "React", "Firebase", "Web Application", "Real-time Data"],
      demoLink: "https://htlstockmarket.netlify.app/",
      details: "Created an engaging fantasy stock market that allows users to buy and trade athlete \"stocks\" driven by real sports performance. Integrated Firebase for real-time data management, authentication, and stock transactions, supporting dynamic price adjustments. Launched in May 2025 and grew to 30+ active users, fostering weekly engagement through gameplay incentives and performance-based rankings."
    },
    {
      id: 5,
      title: "Battleship Prediction Model",
      description: "Implemented a predictive AI model that optimally selects next moves in Battleship using probability mapping and historical data.",
      image: "/battleship.jpg",
      popupImage: "/battleship1.png",
      tags: ["Python", "Machine Learning", "Probability", "AI", "Game Theory"],
      details: "Designed and implemented a predictive AI model to identify optimal next moves in the game of Battleship using historical shot data and probability mapping. Leveraged Python with advanced data structures and pattern recognition techniques to analyze hit/miss trends and adapt strategy dynamically. Achieved significant accuracy improvements over random play, demonstrating enhanced decision-making through machine-learned shot prioritization."
    }
  ];

  // Logic for slider arrows
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowLeftArrow(scrollLeft > 1);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };

    const checkArrows = () => {
      setTimeout(handleScroll, 150);
    };

    const container = scrollContainerRef.current;
    if (container) {
      checkArrows();
      window.addEventListener('resize', checkArrows);
      container.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('resize', checkArrows);
        if (container) {
          container.removeEventListener('scroll', handleScroll);
        }
      };
    }
  }, [inView, projects]);

  const setRefs = (node: HTMLDivElement | null) => {
    if (node) {
      (scrollContainerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      inViewRef(node);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      const scrollAmount = (containerWidth - 32) / 2; // 32px is the gap (gap-8)
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24 lg:py-32 bg-[#111111] relative">
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Portfolio</h2>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed px-4">
            A showcase of my recent projects and innovations. Each project represents a unique challenge 
            and demonstrates my commitment to creating impactful solutions.
          </p>
        </motion.div>

        <div className="relative group/slider px-12">
          {showLeftArrow && (
            <button 
              onClick={() => scroll('left')}
              className="absolute -left-12 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors focus:outline-none"
              aria-label="Scroll left"
            >
              <ChevronLeft size={28} />
            </button>
          )}
          <motion.div 
            ref={setRefs}
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="flex overflow-x-auto snap-x snap-mandatory gap-8 py-4 scrollbar-hide scroll-smooth will-change-scroll"
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id} 
                variants={item}
                className="card glow-hover cursor-pointer group w-[calc(50%-1rem)] min-w-[calc(50%-1rem)] flex-shrink-0 snap-start"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-lg mb-4 sm:mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 sm:p-6 text-white">
                      <p className="font-medium text-sm sm:text-base">Click to explore details</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white group-hover:text-gray-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="skill-badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {showRightArrow && (
            <button 
              onClick={() => scroll('right')}
              className="absolute -right-12 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors focus:outline-none"
              aria-label="Scroll right"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-start justify-center z-50 p-4 pt-8 sm:pt-16 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto my-4"
            >
              <div className="relative bg-gray-900">
                <img 
                  src={selectedProject.popupImage || selectedProject.image}
                  alt={selectedProject.title} 
                  className="w-full max-h-[60vh] object-contain rounded-t-xl"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white p-2 sm:p-3 rounded-full transition-colors"
                >
                  <X size={20} className="sm:w-6 sm:h-6" />
                </button>
                
                {selectedProject.githubLink && (
                  <a 
                    href={selectedProject.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 btn-primary text-sm sm:text-base flex items-center gap-2"
                  >
                    <Github size={16} className="sm:w-5 sm:h-5" />
                    <span>View Source Code</span>
                  </a>
                )}
                {selectedProject.demoLink && !selectedProject.githubLink && (
                  <a 
                    href={selectedProject.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 text-white p-2 sm:p-3 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
              
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">{selectedProject.title}</h3>
                
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className="skill-badge">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg">
                  <ul className="space-y-2 sm:space-y-3">
                    {selectedProject.details.split('. ').filter(item => item.trim()).map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-gray-500 mr-2 mt-1">•</span>
                        <span>{item.trim()}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;