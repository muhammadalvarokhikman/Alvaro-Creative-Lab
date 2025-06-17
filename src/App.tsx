import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Brain, Github, Linkedin, Mail, ChevronLeft, ChevronRight, ExternalLink, Sparkles, Code, Database, Cpu } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

function App() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: 'left' | 'right') => {
    if (projectsRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      projectsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleProjectClick = () => {
    window.open('https://www.kaggle.com/muhammadalvaro', '_blank');
  };

  const projects = [
    {
      title: "IndoBERT Text Classification",
      description: "Achieved 85% accuracy in Indonesian text classification using fine-tuned BERT model with advanced preprocessing techniques",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tech: ["PyTorch", "Transformers", "BERT"],
      category: "NLP"
    },
    {
      title: "Computer Vision RAG System",
      description: "Developed a sophisticated Retrieval-Augmented Generation system for enhanced multimodal understanding",
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tech: ["OpenAI", "Langchain", "CLIP"],
      category: "Computer Vision"
    },
    {
      title: "ASL Education & Detection",
      description: "AI-powered system for American Sign Language learning with real-time gesture recognition capabilities",
      image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tech: ["TensorFlow", "OpenCV", "ResNet"],
      category: "Computer Vision"
    },
    {
      title: "AI-Powered Healthcare Analytics",
      description: "Developed predictive models for early disease detection using advanced medical imaging analysis",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tech: ["PyTorch", "Medical Imaging", "CNN"],
      category: "Healthcare AI"
    },
    {
      title: "Autonomous Drone Navigation",
      description: "Implemented real-time object detection and intelligent path planning for autonomous drone systems",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tech: ["YOLO", "ROS", "Path Planning"],
      category: "Robotics"
    },
    {
      title: "NLP for Legal Documents",
      description: "Created an intelligent AI system for analyzing, summarizing and extracting insights from legal documents",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tech: ["BERT", "NLP", "Transformers"],
      category: "Legal Tech"
    }
  ];

  const skills = [
    { name: "Python", level: 95, icon: Code },
    { name: "TensorFlow", level: 90, icon: Brain },
    { name: "PyTorch", level: 85, icon: Cpu },
    { name: "Hugging Face", level: 88, icon: Sparkles },
    { name: "RAG Systems", level: 92, icon: Database },
    { name: "Computer Vision", level: 87, icon: Brain }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a] text-white overflow-x-hidden">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00f3ff] rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Enhanced Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/5"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-[#00f3ff] font-bold text-2xl tracking-wide"
            >
              <span className="bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] bg-clip-text text-transparent">
                We Are Interconnected
              </span>
            </motion.div>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex gap-10"
            >
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, color: '#00f3ff' }}
                  className="text-gray-300 hover:text-[#00f3ff] transition-all duration-300 font-medium tracking-wide relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Hero Section */}
      <motion.section
        id="about"
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        {/* Sophisticated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:6rem_6rem]" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f3ff] rounded-full filter blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-[#9d00ff] rounded-full filter blur-[140px]"
          />
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/60" />
        </div>

        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="lg:w-1/2 text-left space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-2"
              >
                <h2 className="text-2xl font-light text-[#00f3ff] tracking-wider">Hello, I'm</h2>
                <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-[#00f3ff] to-[#9d00ff] bg-clip-text text-transparent">
                    Muhammad
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#9d00ff] via-[#00f3ff] to-white bg-clip-text text-transparent">
                    Alvaro
                  </span>
                </h1>
                <h3 className="text-3xl font-light text-gray-300 tracking-wide">Machine Learning Engineer</h3>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-xl text-gray-400 leading-relaxed max-w-lg"
              >
                "Code, Data, and the Future: All Connected"
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex items-center gap-4"
              >
                <Brain className="w-20 h-20 text-[#00f3ff]" />
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#00f3ff] to-transparent"></div>
                <div className="text-sm text-gray-400 leading-relaxed">
                  Transforming complex data<br />
                  into intelligent solutions
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00f3ff]/10 to-[#9d00ff]/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-black/40 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-gray-400 text-sm ml-4">About Me</span>
                  </div>
                  
                  <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p className="text-lg">
                      Hello, I'm <span className="text-[#00f3ff] font-semibold">Alvaro</span>, focused on machine learning with a passion for building intelligent models to solve real-world problems and uncover meaningful insights from data.
                    </p>
                    <p>
                      I specialize in designing, training, and deploying solutions that simplify complexity, drive innovation, and create impactful results.
                    </p>
                    <p>
                      My expertise spans across <span className="text-[#9d00ff] font-semibold">Computer Vision</span> and <span className="text-[#00f3ff] font-semibold">Natural Language Processing</span>, with a particular focus on developing scalable AI solutions for real-world problems.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00f3ff] via-[#9d00ff] to-[#00f3ff] bg-clip-text text-transparent">
                Projects & Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Explore my collection of machine learning projects and AI innovations
            </p>
          </motion.div>

          <div className="relative">
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 243, 255, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollProjects('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 backdrop-blur-sm p-4 rounded-full text-[#00f3ff] border border-[#00f3ff]/20 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 243, 255, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollProjects('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 backdrop-blur-sm p-4 rounded-full text-[#00f3ff] border border-[#00f3ff]/20 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            <div 
              ref={projectsRef}
              className="flex overflow-x-auto hide-scrollbar gap-8 pb-8 px-12"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="flex-none w-[420px] cursor-pointer group"
                  style={{ scrollSnapAlign: 'start' }}
                  onClick={handleProjectClick}
                >
                  <div className="relative bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00f3ff]/5 to-[#9d00ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-[#00f3ff] text-sm border border-[#00f3ff]/20">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="bg-black/80 backdrop-blur-sm p-4 rounded-full">
                          <ExternalLink className="w-8 h-8 text-[#00f3ff]" />
                        </div>
                      </div>
                    </div>

                    <div className="p-8 space-y-6">
                      <h3 className="text-2xl font-bold group-hover:text-[#00f3ff] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-[#00f3ff]/10 rounded-full text-[#00f3ff] text-sm border border-[#00f3ff]/20 group-hover:bg-[#00f3ff]/20 group-hover:border-[#00f3ff]/40 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 text-lg">
              Click on any project to explore more details on 
              <span className="text-[#00f3ff] font-semibold ml-1">Kaggle</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#9d00ff] via-[#00f3ff] to-[#9d00ff] bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Technologies and frameworks I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00f3ff]/10 to-[#9d00ff]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-[#00f3ff]/20 to-[#9d00ff]/20 rounded-xl">
                        <IconComponent className="w-8 h-8 text-[#00f3ff]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                        <span className="text-[#00f3ff] font-semibold">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] bg-clip-text text-transparent">
                  Let's Connect
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Ready to collaborate on the next breakthrough in AI and machine learning?
              </p>
            </div>

            <div className="flex justify-center gap-8">
              {[
                { icon: Github, href: "https://github.com/muhammadalvarokhikman", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/muhammadalvarokhikman", label: "LinkedIn" },
                { icon: Mail, href: "mailto:muhammadalvarokhikman01@gmail.com", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.icon !== Mail ? "_blank" : undefined}
                  rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00f3ff]/20 to-[#9d00ff]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-xl group-hover:border-[#00f3ff]/30 transition-all duration-300">
                    <social.icon className="w-10 h-10 text-[#00f3ff] group-hover:text-white transition-colors duration-300" />
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {social.label}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 border-t border-white/5 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-gray-400 text-lg"
          >
            © {new Date().getFullYear()} Muhammad Alvaro Khikman. Crafted with passion and precision.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

export default App;