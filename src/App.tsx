import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Brain, 
  Code, 
  Database, 
  GitBranch, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  ChevronDown,
  Zap,
  Target,
  Award,
  BookOpen,
  Users,
  Calendar,
  MapPin,
  Building,
  GraduationCap,
  Briefcase
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-2xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-2xl font-bold gradient-text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              🧠 Alvaro's Lab
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {['About', 'Projects', 'Experience', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-neon-blue ${
                    activeSection === item.toLowerCase() ? 'text-neon-blue' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ opacity }}
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neon-green/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </motion.div>

        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="gradient-text">Machine Learning</span>
              <br />
              <span className="text-white">Engineer</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transforming data into intelligent solutions through cutting-edge AI and machine learning technologies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button 
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-blue/25 neon-border"
            >
              <span className="flex items-center gap-2">
                Explore Projects
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-lg transition-all duration-300 hover:border-neon-blue hover:text-neon-blue hover:scale-105 backdrop-blur-sm"
            >
              Get In Touch
            </button>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="w-8 h-8 text-neon-blue" />
        </motion.div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    { name: 'Python', level: 95, icon: <Code className="w-5 h-5" /> },
    { name: 'Machine Learning', level: 90, icon: <Brain className="w-5 h-5" /> },
    { name: 'Deep Learning', level: 85, icon: <Zap className="w-5 h-5" /> },
    { name: 'Data Science', level: 88, icon: <Database className="w-5 h-5" /> },
    { name: 'TensorFlow/PyTorch', level: 82, icon: <GitBranch className="w-5 h-5" /> },
    { name: 'SQL & NoSQL', level: 80, icon: <Database className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate Machine Learning Engineer with expertise in developing intelligent systems 
            that solve real-world problems. I specialize in deep learning, natural language processing, 
            and computer vision, with a strong foundation in statistical analysis and data engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-neon-blue">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Started my journey in data science and quickly fell in love with the power of machine learning. 
                I've worked on diverse projects ranging from predictive analytics to computer vision applications.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently focused on advancing AI research and developing production-ready ML systems 
                that create meaningful impact in various industries.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-neon-purple">Philosophy</h3>
              <p className="text-gray-300 leading-relaxed">
                "Data is the new oil, but insights are the refined fuel that powers innovation." 
                I believe in creating AI solutions that are not just technically sound but also 
                ethically responsible and practically valuable.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-neon-blue">{skill.icon}</div>
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-neon-blue font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full skill-bar"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.2 * index }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "Time Series Forecasting Suite",
      description: "Comprehensive forecasting models including ARIMA, Exponential Smoothing, and advanced deep learning approaches for accurate time series predictions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tech: ["Python", "TensorFlow", "ARIMA", "LSTM"],
      category: "Time Series Analysis",
      models: [
        { name: "Simple Moving Average", image: "/assets/simple_moving_average.png" },
        { name: "Simple Exponential Smoothing", image: "/assets/simple_exponential_smoothing.png" },
        { name: "Double Exponential Smoothing", image: "/assets/double_exponential_smoothing.png" },
        { name: "Triple Exponential Smoothing", image: "/assets/triple_exponential_smoothing.png" },
        { name: "ARIMA Model", image: "/assets/ARIMA.png" }
      ]
    },
    {
      title: "Sentiment Analysis Engine",
      description: "Advanced NLP system for real-time sentiment analysis with multi-language support and emotion detection capabilities.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      tech: ["Python", "BERT", "Transformers", "Flask"],
      category: "Natural Language Processing",
      models: [
        { name: "Sentiment Analysis Results", image: "/assets/sentiment_analysist.png" }
      ]
    },
    {
      title: "Computer Vision Pipeline",
      description: "End-to-end computer vision solution for object detection, classification, and image segmentation using state-of-the-art deep learning models.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
      tech: ["PyTorch", "OpenCV", "YOLO", "ResNet"],
      category: "Computer Vision"
    },
    {
      title: "Recommendation System",
      description: "Hybrid recommendation engine combining collaborative filtering and content-based approaches for personalized user experiences.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tech: ["Scikit-learn", "Pandas", "NumPy", "Redis"],
      category: "Machine Learning"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of machine learning projects that demonstrate expertise 
            across various domains and cutting-edge technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, inView }: { project: any; index: number; inView: boolean }) => {
  const [showModels, setShowModels] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="project-card p-8 rounded-3xl border border-white/10 group"
    >
      <div className="relative overflow-hidden rounded-2xl mb-6">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-neon-blue/20 backdrop-blur-sm rounded-full text-sm font-medium text-neon-blue border border-neon-blue/30">
            {project.category}
          </span>
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-3 group-hover:text-neon-blue transition-colors duration-300">
        {project.title}
      </h3>
      
      <p className="text-gray-300 mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech: string) => (
          <span 
            key={tech}
            className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.models && (
        <div className="space-y-4">
          <button
            onClick={() => setShowModels(!showModels)}
            className="flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors duration-300"
          >
            <Target className="w-4 h-4" />
            <span className="font-medium">View Model Results</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showModels ? 'rotate-180' : ''}`} />
          </button>

          {showModels && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-4 mt-4"
            >
              {project.models.map((model: any, modelIndex: number) => (
                <div key={modelIndex} className="bg-black/30 rounded-xl p-4 border border-white/10">
                  <img 
                    src={model.image} 
                    alt={model.name}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <p className="text-sm font-medium text-gray-300">{model.name}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      )}

      <div className="flex gap-4 mt-6">
        <button className="flex-1 px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/25">
          <span className="flex items-center justify-center gap-2">
            View Details
            <ExternalLink className="w-4 h-4" />
          </span>
        </button>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: "Google Cloud Arcade Facilitator 2025",
      organization: "Google Cloud Facilitator Program",
      period: "Jul 2025 - Present",
      location: "Remote",
      type: "Participant",
      description: "Google Cloud Arcade Facilitator 2025 is a coding scholarship program from Google Cloud with a gamification concept to add or improve the skills of digital talent in the fields of cloud computing, artificial intelligence, machine learning, and data engineering.",
      skills: ["Google Cloud Platform (GCP)", "Artificial Intelligence (AI)", "Cloud Computing"],
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=600&fit=crop",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Member Computanion and Data Science Research",
      organization: "Faculty of Science and Agricultural Technology",
      period: "Feb 2024 - Present",
      location: "Semarang, Central Java, Indonesia",
      type: "Research Member",
      description: "As part of the Faculty of Science and Agricultural Technology at Universitas Muhammadiyah Semarang, focuses on research and development in computing and data science.",
      skills: ["Teamwork", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Artificial Intelligence Training (elevAIte with Dicoding)",
      organization: "Microsoft & Dicoding",
      period: "January 2025 - May 2025",
      location: "Remote",
      type: "Participant",
      description: "elevAIte with Dicoding is a comprehensive training program in Artificial Intelligence organized by Microsoft to support the mission of ASEAN Digital Masterplan 2025, preparing digital talents who are proficient in AI in the ASEAN region, including Indonesia.",
      skills: ["Machine Learning", "Data Science", "Artificial Intelligence (AI)"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Google Cloud AI Study Jam: #JuaraGCP Season 11",
      organization: "Google Cloud",
      period: "January 2025 - March 2025",
      location: "Remote",
      type: "Participant",
      description: "#JuaraGCP is an online self-paced learning program for Google Cloud, specifically designed for developers in Indonesia. This program provides access to Google Cloud labs and encourages learning with the support of a supportive community.",
      skills: ["Artificial Intelligence (AI)"],
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Teaching Assistant - Computation Statistics 1",
      organization: "University",
      period: "September 2024 - March 2025",
      location: "On-site",
      type: "Teaching Assistant",
      description: "As a Teaching Assistant for the course 'Computation Statistics 1' in Semester 3, 2024, my primary responsibilities include preparing course materials and providing tutorial sessions to support students in understanding the computational methods used in statistical analysis.",
      skills: ["Data Analyst"],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: "Machine Learning Co-Hort",
      organization: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
      period: "2024",
      location: "Remote",
      type: "Co-Hort",
      description: "Co-Hort of the Bangkit 2024 Batch 2 for the Machine Learning Learning Path, as part of the Independent Study Program (MSIB) of the Merdeka Campus 2024.",
      skills: ["Machine Learning", "Data Science", "Data Analyst"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey through various roles and programs that have shaped my expertise 
            in machine learning, data science, and artificial intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience, index, inView }: { experience: any; index: number; inView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="project-card p-6 rounded-3xl border border-white/10 group h-full flex flex-col"
    >
      <div className="relative overflow-hidden rounded-2xl mb-6">
        <img 
          src={experience.image} 
          alt={experience.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-neon-blue/20 backdrop-blur-sm rounded-full text-sm font-medium text-neon-blue border border-neon-blue/30">
            {experience.icon}
            <span>{experience.type}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 group-hover:text-neon-blue transition-colors duration-300 line-clamp-2">
          {experience.title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-neon-purple">
            <Building className="w-4 h-4" />
            <span className="text-sm font-medium">{experience.organization}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{experience.period}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{experience.location}</span>
          </div>
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed text-sm flex-1">
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {experience.skills.map((skill: string) => (
            <span 
              key={skill}
              className="px-2 py-1 bg-white/10 rounded-full text-xs font-medium backdrop-blur-sm border border-white/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const CertificationsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const certifications = [
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2024",
      description: "Comprehensive certification covering TensorFlow fundamentals, neural networks, and production ML systems.",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=400&h=300&fit=crop"
    },
    {
      title: "AWS Machine Learning Specialty",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Advanced certification in ML engineering, model deployment, and cloud-based AI solutions.",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=400&h=300&fit=crop"
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera - Andrew Ng",
      date: "2023",
      description: "5-course specialization covering neural networks, CNN, RNN, and deep learning best practices.",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=400&h=300&fit=crop"
    },
    {
      title: "Google Cloud Professional ML Engineer",
      issuer: "Google Cloud",
      date: "2023",
      description: "Professional certification in designing and implementing ML solutions on Google Cloud Platform.",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Certifications</span> & Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications that validate my expertise in machine learning, 
            cloud computing, and artificial intelligence technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="project-card p-8 rounded-3xl border border-white/10 group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={cert.badge} 
                    alt={cert.title}
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-neon-blue/30"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-neon-blue" />
                    <span className="text-sm font-medium text-neon-blue">{cert.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-neon-blue transition-colors duration-300">
                    {cert.title}
                  </h3>
                  
                  <p className="text-neon-purple font-medium mb-3">{cert.issuer}</p>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on exciting ML projects or discuss opportunities? 
            I'd love to hear from you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <a 
              href="mailto:alvaro@example.com"
              className="group p-6 rounded-2xl border border-white/10 hover:border-neon-blue/50 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-8 h-8 text-neon-blue mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-300 text-sm">alvaro@example.com</p>
            </a>

            <a 
              href="https://github.com/alvaro"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-white/10 hover:border-neon-purple/50 transition-all duration-300 hover:scale-105"
            >
              <Github className="w-8 h-8 text-neon-purple mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold mb-2">GitHub</h3>
              <p className="text-gray-300 text-sm">@alvaro</p>
            </a>

            <a 
              href="https://linkedin.com/in/alvaro"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-white/10 hover:border-neon-green/50 transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-8 h-8 text-neon-green mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold mb-2">LinkedIn</h3>
              <p className="text-gray-300 text-sm">@alvaro</p>
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-400 mb-4">
              "Turning data into insights, and insights into action."
            </p>
            <p className="text-sm text-gray-500">
              © 2024 Alvaro's Creative Lab. Built with React & Tailwind CSS.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default App;