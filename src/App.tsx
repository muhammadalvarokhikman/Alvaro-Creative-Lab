import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Brain, Github, Linkedin, Mail, Terminal, Code2, Database, Network, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
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
      description: "Achieved 85% accuracy in Indonesian text classification using fine-tuned BERT model",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tech: ["PyTorch", "Transformers", "BERT"]
    },
    {
      title: "Computer Vision RAG System",
      description: "Developed a Retrieval-Augmented Generation system for enhanced image understanding",
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tech: ["OpenAI", "Langchain", "CLIP"]
    },
    {
      title: "ASL Education & Detection",
      description: "AI-powered system for ASL learning and agricultural quality control",
      image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tech: ["TensorFlow", "OpenCV", "ResNet"]
    },
    {
      title: "AI-Powered Healthcare Analytics",
      description: "Developed predictive models for early disease detection using medical imaging",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tech: ["PyTorch", "Medical Imaging", "CNN"]
    },
    {
      title: "Autonomous Drone Navigation",
      description: "Implemented real-time object detection and path planning for drone navigation",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tech: ["YOLO", "ROS", "Path Planning"]
    },
    {
      title: "NLP for Legal Documents",
      description: "Created an AI system for analyzing and summarizing legal documents",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tech: ["BERT", "NLP", "Transformers"]
    }
  ];

  const skills = [
    { name: "Python", level: 95 },
    { name: "TensorFlow", level: 90 },
    { name: "PyTorch", level: 85 },
    { name: "Hugging Face", level: 88 },
    { name: "RAG Systems", level: 92 },
    { name: "Computer Vision", level: 87 }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-[#00f3ff]/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[#00f3ff] font-bold text-xl"
            >
              We Are Interconnected
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-8"
            >
              <a href="#about" className="text-gray-300 hover:text-[#00f3ff] transition-colors">About</a>
              <a href="#projects" className="text-gray-300 hover:text-[#00f3ff] transition-colors">Projects</a>
              <a href="#skills" className="text-gray-300 hover:text-[#00f3ff] transition-colors">Skills</a>
              <a href="#contact" className="text-gray-300 hover:text-[#00f3ff] transition-colors">Contact</a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        id="about"
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      >
        {/* Futuristic Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f3ff10_1px,transparent_1px),linear-gradient(to_bottom,#00f3ff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#00f3ff] rounded-full filter blur-[128px] opacity-20" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#9d00ff] rounded-full filter blur-[128px] opacity-20" />
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#0a0a0a] to-[#0a0a0a] opacity-90" />
          <div className="absolute inset-0">
            <div className="absolute left-1/4 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#00f3ff20] to-transparent animate-pulse" style={{ animationDelay: '0s' }} />
            <div className="absolute left-2/4 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#00f3ff20] to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute left-3/4 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#00f3ff20] to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 text-left"
            >
              <h2 className="text-3xl font-bold mb-4 text-[#00f3ff]">Muhammad Alvaro Khikman</h2>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                ML Engineer
              </h1>
              <p className="text-xl text-gray-400 mb-8">
              "Code, Data, and the Future: All Connected"
              </p>
              <Brain className="w-16 h-16 text-[#00f3ff] mb-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 bg-black/30 p-8 rounded-xl border border-[#00f3ff]/10 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#00f3ff]">About Me</h3>
              <p className="text-gray-300 mb-4">
              Hello, I'm Alvaro, focused on machine learning with a passion for building intelligent models
              to solve real-world problems and uncover meaningful insights from data.
              I specialize in designing, training, and deploying solutions that simplify complexity,
              drive innovation, and create impactful results. 
              </p>
              <p className="text-gray-300">
                My expertise spans across Computer Vision and Natural Language Processing,
                with a particular focus on developing scalable AI 
                solutions for real-world problems.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 gradient-text text-center">
            Projects & Portfolio
          </h2>
          <div className="relative">
            <button 
              onClick={() => scrollProjects('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-[#00f3ff] hover:bg-black/80 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scrollProjects('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-[#00f3ff] hover:bg-black/80 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div 
              ref={projectsRef}
              className="flex overflow-x-auto hide-scrollbar gap-8 pb-4 px-8"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="project-card rounded-xl p-6 neon-border flex-none w-[400px] cursor-pointer group"
                  style={{ scrollSnapAlign: 'start' }}
                  onClick={handleProjectClick}
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#00f3ff] transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#00f3ff]/10 rounded-full text-[#00f3ff] text-sm group-hover:bg-[#00f3ff]/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              Click on any project to view more details on Kaggle
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 gradient-text text-center">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/30 p-6 rounded-lg"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-[#00f3ff]">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="skill-bar"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 gradient-text">
            Let's Connect
          </h2>
          <div className="flex justify-center gap-8">
            <a 
              href="https://github.com/muhammadalvarokhikman" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#00f3ff] hover:text-[#9d00ff] transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
            <a 
              href="https://linkedin.com/in/muhammadalvarokhikman" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#00f3ff] hover:text-[#9d00ff] transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a 
              href="mailto:muhammadalvarokhikman01@gmail.com"
              className="text-[#00f3ff] hover:text-[#9d00ff] transition-colors"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#00f3ff]/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Muhammad Alvaro Khikman. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;