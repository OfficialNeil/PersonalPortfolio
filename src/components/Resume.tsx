import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Python', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Flask', level: 85 },
    { name: 'TensorFlow', level: 75 },
    { name: 'PyTorch', level: 70 },
    { name: 'SQL', level: 80 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Firebase', level: 75 },
    { name: 'Git', level: 85 },
  ];

  const experiences = [
    {
      title: 'Cyber Security Intern',
      company: 'Mandate Democracy Foundation',
      period: 'May 2025 - Aug. 2025',
      location: 'Richmond, VA (Remote)',
      description: 'Leading the deployment of a React Native referendum voting application across 50+ local townships and municipalities, enhancing civic participation and streamlining local democratic processes. Integrating an IBM\'s secure backend to safeguard voter data confidentiality and utilizing a HubSpot CRM for efficient stakeholder communication and user engagement tracking. Directing project management as lead intern, developing and managing comprehensive project timelines and deliverables, enabling timely execution and alignment across technical teams.'
    },
    {
      title: 'Full-Stack Development Intern',
      company: 'Virginia Discovery Museum',
      period: 'Jan. 2025 - May 2025',
      location: 'Charlottesville, VA',
      description: 'Engineered a full-stack volunteer management system using React and Firebase, enabling real-time tracking, shift scheduling, and automated approvals, reducing administrative task time by 11%. Optimized database structure and implemented Firebase Firestore with indexed queries, achieving sub-200ms response times for shift lookups and admin actions. Enhanced scalability and reliability through role-based authentication and dynamic UI rendering, resulting in a 40% reduction in manual coordination reported by museum staff.'
    },
    {
      title: 'Telemetry Subteam Lead',
      company: 'Virginia Solar Car',
      period: 'Jan. 2025 - May 2025',
      location: 'Charlottesville, VA',
      description: 'Developed and implemented real-time telemetry communication in C, leveraging XBee modules to securely transmit and receive critical data via Amazon IoT MQTT broker, significantly enhancing the solar car\'s remote monitoring capabilities.'
    },
    {
      title: 'Software Solutions Architect Intern',
      company: 'Procentrix LLC.',
      period: 'May 2024 - Aug 2024',
      location: 'Herndon, Virginia',
      description: 'Led a team of interns in the development of a Complaint Management System, streamlining operations for government entities and enhancing overall efficiency. Directed the development and implementation of solutions utilizing Microsoft PowerApps, PowerBi, and Power Automate (Flows) to address complex business challenges, resulting in optimized workflows and improved data management. Collaborated with cross-functional teams to deliver a comprehensive group project presentation to leadership, showcasing the innovative solutions developed during the internship program and highlighting their potential impact on government operations.'
    },
    {
      title: 'Computer Science Tutor',
      company: 'Self-Employed',
      period: 'Aug 2023 - Present',
      location: 'Haymarket, Virginia',
      description: 'Tutored over 10 students in computer science concepts, providing personalized 1-on-1 instruction to enhance their understanding of programming, algorithms, and problem-solving skills, resulting in improved academic performance and increased student confidence in coding.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science and Systems Engineering (Double Major)',
      institution: 'University of Virginia',
      period: '2024 - 2028',
      description: 'GPA: 3.97/4.0. Relevant Courses: Data Structures and Algorithms, Computer Systems and Organization, Machine Learning'
    }
  ];

  return (
    <section id="resume" className="py-16 sm:py-24 lg:py-32 bg-[#0a0a0a] relative">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Resume</h2>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4">
            My professional journey and technical expertise in building innovative solutions.
          </p>
          <a 
            href="/resume.pdf" 
            download="Neil_Patel_Resume.pdf"
            className="inline-flex items-center gap-2 sm:gap-3 btn-primary"
          >
            <Download size={16} className="sm:w-5 sm:h-5" />
            Download Resume
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16" ref={ref}>
          {/* Left Column - Experience */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6 sm:mb-8">
              <div className="p-2 sm:p-3 bg-white/10 rounded-lg mr-3 sm:mr-4">
                <Briefcase size={24} className="text-white sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Experience</h3>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="card glow-hover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">{exp.title}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                    <span className="font-medium text-gray-300">{exp.company}</span>
                    <span className="hidden sm:inline mx-3">•</span>
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  {exp.location && (
                    <div className="text-gray-400 mb-3 sm:mb-4 text-sm">
                      <span className="text-gray-500">{exp.location}</span>
                    </div>
                  )}
                  <ul className="text-gray-300 leading-relaxed text-sm sm:text-base space-y-1 sm:space-y-2">
                    {exp.description.split('. ').filter(item => item.trim()).map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-gray-500 mr-2 mt-1">•</span>
                        <span>{item.trim()}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Education & Skills */}
          <div className="space-y-12 lg:space-y-16">
            {/* Education */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="p-2 sm:p-3 bg-white/10 rounded-lg mr-3 sm:mr-4">
                  <GraduationCap size={24} className="text-white sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Education</h3>
              </div>
              
              <div className="space-y-6 sm:space-y-8">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index} 
                    className="card glow-hover"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                      <span className="font-medium text-gray-300">{edu.institution}</span>
                      <span className="hidden sm:inline mx-3">•</span>
                      <span className="text-sm">{edu.period}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="p-2 sm:p-3 bg-white/10 rounded-lg mr-3 sm:mr-4">
                  <Award size={24} className="text-white sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Skills</h3>
              </div>
              
              <div className="card glow-hover mb-6 sm:mb-8">
                <div className="grid gap-4 sm:gap-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-white text-sm sm:text-base">{skill.name}</span>
                        <span className="text-xs sm:text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-[#2a2a2a] rounded-full h-2 sm:h-3">
                        <motion.div 
                          className="bg-gradient-to-r from-white to-gray-400 h-2 sm:h-3 rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: 0.1 * index, ease: "easeOut" }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card glow-hover">
                <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Specializations</h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {['Machine Learning', 'AI Development', 'Data Science', 'Responsive Design', 'REST APIs', 'UI/UX Design', 'Agile Methodology', 'Cloud Computing', 'DevOps', 'Cybersecurity'].map((skill, index) => (
                    <motion.span 
                      key={index} 
                      className="skill-badge"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.05 * index }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;