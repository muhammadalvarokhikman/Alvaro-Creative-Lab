import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Brain, 
  Code, 
  Database, 
  GitBranch, 
  Mail, 
  ExternalLink, 
  ChevronDown,
  TrendingUp,
  BarChart3,
  Zap,
  Target,
  Cpu,
  Network
} from 'lucide-react';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      title: "Time Series Forecasting Suite",
      description: "Comprehensive forecasting models including ARIMA, Exponential Smoothing, and Moving Averages for financial and business data prediction.",
      tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "Time Series"
    },
    {
      title: "Sentiment Analysis Engine",
      description: "Advanced NLP pipeline for social media sentiment analysis using transformer models and real-time data processing.",
      tech: ["Python", "Transformers", "PyTorch", "NLTK"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      category: "NLP"
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Interactive dashboard for business intelligence with machine learning-powered insights and automated reporting.",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      category: "Analytics"
    },
    {
      title: "Deep Learning Classification",
      description: "CNN-based image classification system with transfer learning and model optimization for production deployment.",
      tech: ["TensorFlow", "Keras", "OpenCV", "Docker"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      category: "Deep Learning"
    }
  ];

  const skills = [
    { name: "Python", level: 95, icon: <Code className="w-5 h-5" /> },
    { name: "Machine Learning", level: 90, icon: <Brain className="w-5 h-5" /> },
    { name: "Deep Learning", level: 85, icon: <Network className="w-5 h-5" /> },
    { name: "Data Analysis", level: 92, icon: <BarChart3 className="w-5 h-5" /> },
    { name: "SQL/NoSQL", level: 88, icon: <Database className="w-5 h-5" /> },
    { name: "MLOps", level: 80, icon: <Cpu className="w-5 h-5" /> }
  ];

  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.2 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.3 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold gradient-text"
            >
              🧠 Alvaro's Lab
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Projects', 'Skills', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6 gradient-text">
              ML Engineer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transforming data into intelligent solutions through machine learning, 
              deep learning, and advanced analytics
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'MLOps'].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20 neon-border"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="animate-bounce"
          >
            <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of machine learning solutions solving real-world problems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="project-card p-6 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-neon-blue group-hover:text-white transition-colors">
                  <span className="text-sm font-medium">View Project</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} id="skills" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 gradient-text">Technical Expertise</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proficient in cutting-edge technologies and methodologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center mb-4">
                  <div className="text-neon-blue mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  <span className="ml-auto text-neon-blue font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={skillsInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                    className="skill-bar h-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 gradient-text">Let's Collaborate</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Ready to turn your data into actionable insights? Let's discuss your next ML project.
            </p>
            
            <motion.a
              href="mailto:alvaro@example.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-semibold text-lg neon-border"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 mr-3" />
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Alvaro's Creative Lab. Turning data into insights, and insights into action.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;