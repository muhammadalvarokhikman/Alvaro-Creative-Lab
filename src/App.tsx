import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Brain, Github, Linkedin, Mail, ChevronLeft, ChevronRight, ExternalLink, Sparkles, Code, Database, Cpu, Award, Eye, EyeOff, MousePointer2, Zap, Star, Rocket } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

function App() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [typedText, setTypedText] = useState('');
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const projectsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Typewriter effect for hero subtitle
  const fullText = "Code, Data, and the Future: All Connected";
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Real-time clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Easter egg trigger
  const handleLogoClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount >= 4) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 3000);
      setClickCount(0);
    }
  };

  const scrollProjects = (direction: 'left' | 'right') => {
    if (projectsRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      projectsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank');
  };

  const mlProjects = [
    {
      title: "IndoBERT Text Classification",
      description: "Achieved 85% accuracy in Indonesian text classification using fine-tuned BERT model with advanced preprocessing techniques",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tech: ["PyTorch", "Transformers", "BERT"],
      category: "NLP",
      url: "https://www.kaggle.com/muhammadalvaro"
    },
    {
      title: "Computer Vision RAG System",
      description: "Developed a sophisticated Retrieval-Augmented Generation system for enhanced multimodal understanding",
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tech: ["OpenAI", "Langchain", "CLIP"],
      category: "Computer Vision",
      url: "https://www.kaggle.com/muhammadalvaro"
    },
    {
      title: "ASL Education & Detection",
      description: "AI-powered system for American Sign Language learning with real-time gesture recognition capabilities",
      image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tech: ["TensorFlow", "OpenCV", "ResNet"],
      category: "Computer Vision",
      url: "https://www.kaggle.com/muhammadalvaro"
    },
    {
      title: "AI-Powered Healthcare Analytics",
      description: "Developed predictive models for early disease detection using advanced medical imaging analysis",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tech: ["PyTorch", "Medical Imaging", "CNN"],
      category: "Healthcare AI",
      url: "https://www.kaggle.com/muhammadalvaro"
    },
    {
      title: "Sentiment Analysis",
      description: "Advanced sentiment analysis of Indonesian political discourse using state-of-the-art NLP techniques",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tech: ["BERT", "NLP", "Transformers"],
      category: "NLP",
      url: "https://www.kaggle.com/code/muhammadalvaro/sentiment-analysis-of-presiden-prabowo-menjawab"
    },
    {
      title: "NLP for Legal Documents",
      description: "Created an intelligent AI system for analyzing, summarizing and extracting insights from legal documents",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tech: ["BERT", "NLP", "Transformers"],
      category: "Legal Tech",
      url: "https://www.kaggle.com/muhammadalvaro"
    }
  ];

  const timeSeriesProjects = [
    {
      title: "Simple Moving Average",
      description: "Implementation of Simple Moving Average for time series forecasting with comprehensive analysis and visualization",
      image: "/assets/simple_moving_average.png",
      tech: ["Python", "Pandas", "Matplotlib"],
      category: "Time Series",
      url: "https://www.kaggle.com/code/muhammadalvaro/simple-moving-average-in-python"
    },
    {
      title: "Simple Exponential Smoothing",
      description: "Advanced exponential smoothing techniques for accurate time series prediction and trend analysis",
      image: "/assets/simple_exponential_smoothing.png",
      tech: ["Python", "Statsmodels", "NumPy"],
      category: "Forecasting",
      url: "https://www.kaggle.com/code/muhammadalvaro/simple-exponential-smoothing-in-python"
    },
    {
      title: "Double Exponential Smoothing",
      description: "Holt's method implementation for time series with trend components and seasonal patterns",
      image: "/assets/double_exponential_smoothing.png",
      tech: ["Python", "Scipy", "Plotly"],
      category: "Forecasting",
      url: "https://www.kaggle.com/code/muhammadalvaro/double-exponential-smoothing-in-python"
    },
    {
      title: "Triple Exponential Smoothing",
      description: "Holt-Winters method for complex time series with trend and seasonal components",
      image: "/assets/triple_exponential_smoothing.png",
      tech: ["Python", "Statsmodels", "Seaborn"],
      category: "Forecasting",
      url: "https://www.kaggle.com/code/muhammadalvaro/triple-exponential-smoothing-in-python"
    },
    {
      title: "ARIMA Model",
      description: "AutoRegressive Integrated Moving Average model for sophisticated time series forecasting",
      image: "/assets/ARIMA.png",
      tech: ["Python", "ARIMA", "Statsmodels"],
      category: "Advanced Forecasting",
      url: "https://www.kaggle.com/code/muhammadalvaro/arima-in-python"
    }
  ];

  const skills = [
    { 
      name: "Python", 
      level: 90, 
      icon: Code,
      details: []
    },
    { 
      name: "TensorFlow", 
      level: 90, 
      icon: Brain,
      details: []
    },
    { 
      name: "PyTorch", 
      level: 85, 
      icon: Cpu,
      details: []
    },
    { 
      name: "Unsupervised Learning", 
      level: 80, 
      icon: Database,
      details: [
        "K-Means Clustering",
        "Hierarchical Clustering", 
        "DBSCAN",
        "Gaussian Mixture Model (GMM)",
        "PCA – Principal Component Analysis",
        "t-SNE – t-Distributed Stochastic Neighbor Embedding",
        "Autoencoder",
        "Isolation Forest",
        "Self-Organizing Map (SOM)",
        "Spectral Clustering"
      ]
    },
    { 
      name: "Supervised Learning", 
      level: 90, 
      icon: Sparkles,
      details: [
        "➤ Classification:",
        "• Logistic Regression",
        "• Decision Tree Classifier",
        "• Random Forest Classifier",
        "• K-Nearest Neighbors (KNN)",
        "• Support Vector Machine (SVM)",
        "• Naive Bayes",
        "• Gradient Boosting (XGBoost, LightGBM, CatBoost)",
        "• Neural Network Classifier",
        "",
        "➤ Regression:",
        "• Linear Regression",
        "• Ridge Regression",
        "• Lasso Regression",
        "• SVR – Support Vector Regression",
        "• Decision Tree Regressor",
        "• Random Forest Regressor",
        "• Gradient Boosting Regressor",
        "• Neural Network Regressor"
      ]
    },
    { 
      name: "Neural Networks", 
      level: 90, 
      icon: Brain,
      details: [
        "Feedforward Neural Network (FNN)",
        "Multilayer Perceptron (MLP)",
        "Convolutional Neural Network (CNN)",
        "Recurrent Neural Network (RNN)",
        "Long Short-Term Memory (LSTM)",
        "Gated Recurrent Unit (GRU)",
        "Transformer",
        "Bidirectional LSTM (BiLSTM)"
      ]
    }
  ];

  const certifications = [
    {
      title: "Browser-based Models with TensorFlow.js",
      date: "Nov 2024",
      url: "https://coursera.org/share/edd3b281bafcafb14e937c8ca3d17208"
    },
    {
      title: "Custom Models, Layers, and Loss Functions with TensorFlow",
      date: "Nov 2024", 
      url: "https://coursera.org/share/145856427b3503fb25f62926f225b0a2"
    },
    {
      title: "Device-based Models with TensorFlow Lite",
      date: "Nov 2024",
      url: "https://coursera.org/share/ba1b9f19cf31db26c38326d13fe5abfb"
    },
    {
      title: "Natural Language Processing in TensorFlow",
      date: "Nov 2024",
      url: "https://coursera.org/share/94b22a963083b20e9d9f183f8fb36fa2"
    },
    {
      title: "Sequences, Time Series and Prediction",
      date: "Nov 2024",
      url: "https://coursera.org/share/4e3e6a45f5cabdcc849eced37ef85b1d"
    },
    {
      title: "Advanced Learning Algorithms",
      date: "Oct 2024",
      url: "https://coursera.org/share/cb3ea7a586815373bf15777e0d579ec6"
    },
    {
      title: "Stanford University & DeepLearning.AI Machine Learning Specialization",
      date: "Oct 2024",
      url: "https://coursera.org/share/4394e4af26308bff28ab49a880eba58e"
    },
    {
      title: "Linear Algebra for Machine Learning and Data Science",
      date: "Oct 2024",
      url: "https://coursera.org/share/9d5f6cf446419831e2a2930655541193"
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      date: "Oct 2024",
      url: "https://coursera.org/share/94b2f9c89822ad1f09b9a33487f1bbff"
    },
    {
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      date: "Oct 2024",
      url: "https://coursera.org/share/a2c299ee089bd1e230316f1487f0b762"
    }
  ];

  // Enhanced animation variants with smoother transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a] text-white overflow-x-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 2 : 1
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-full h-full bg-[#00f3ff] rounded-full opacity-80" />
      </motion.div>

      {/* Easter Egg Animation */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="text-8xl"
            >
              🚀
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="absolute mt-32 text-2xl font-bold bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] bg-clip-text text-transparent"
            >
              Ready for Launch! 🌟
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00f3ff] rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Ultra Smooth Navbar with Real-time Clock */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2
        }}
        className="fixed top-0 left-0 right-0 z-40 bg-black/10 backdrop-blur-2xl border-b border-white/5"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <motion.div 
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
              }}
              onClick={handleLogoClick}
              className="text-[#00f3ff] font-bold text-2xl tracking-wide cursor-pointer"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <span className="bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] bg-clip-text text-transparent">
                We Are Interconnected
              </span>
            </motion.div>
            
            {/* Real-time Clock */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="hidden md:flex items-center gap-2 text-sm text-gray-400"
            >
              <Zap className="w-4 h-4 text-[#00f3ff]" />
              <span>{currentTime.toLocaleTimeString()}</span>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex gap-10"
            >
              {['About', 'Projects', 'Skills', 'Certifications', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    color: '#00f3ff',
                    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                  }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="text-gray-300 hover:text-[#00f3ff] transition-all duration-500 font-medium tracking-wide relative group"
                >
                  {item}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#00f3ff] to-[#9d00ff]"
                    initial={{ width: 0 }}
                    whileHover={{ 
                      width: '100%',
                      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                    }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Ultra Smooth Hero Section with Typewriter Effect */}
      <motion.section
        id="about"
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        style={{ y: yTransform }}
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,243,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,243,255,0.02)_1px,transparent_1px)] bg-[size:6rem_6rem]" />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.2, 0.05],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f3ff] rounded-full filter blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.05, 0.15, 0.05],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-[#9d00ff] rounded-full filter blur-[140px]"
          />
        </div>

        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: 1.2, 
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="lg:w-1/2 text-left space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 1,
                  delay: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="space-y-2"
              >
                <motion.h2 
                  className="text-2xl font-light text-[#00f3ff] tracking-wider flex items-center gap-2"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Star className="w-6 h-6" />
                  Hello, I'm
                </motion.h2>
                <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                  <motion.span 
                    className="bg-gradient-to-r from-white via-[#00f3ff] to-[#9d00ff] bg-clip-text text-transparent"
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    style={{ backgroundSize: '200% 200%' }}
                  >
                    Muhammad
                  </motion.span>
                  <br />
                  <motion.span 
                    className="bg-gradient-to-r from-[#9d00ff] via-[#00f3ff] to-white bg-clip-text text-transparent"
                    animate={{ 
                      backgroundPosition: ['100% 50%', '0% 50%', '100% 50%']
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: 0.5
                    }}
                    style={{ backgroundSize: '200% 200%' }}
                  >
                    Alvaro
                  </motion.span>
                </h1>
                <motion.h3 
                  className="text-3xl font-light text-gray-300 tracking-wide flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  <Rocket className="w-8 h-8 text-[#9d00ff]" />
                  Machine Learning Engineer
                </motion.h3>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 1,
                  delay: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="text-xl text-gray-400 leading-relaxed max-w-lg font-mono"
              >
                "{typedText}"
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-[#00f3ff]"
                >
                  |
                </motion.span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 1,
                  delay: 0.9,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="flex items-center gap-4"
              >
                <motion.div variants={floatingVariants} animate="animate">
                  <Brain className="w-20 h-20 text-[#00f3ff]" />
                </motion.div>
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#00f3ff] to-transparent"></div>
                <motion.div 
                  className="text-sm text-gray-400 leading-relaxed"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  Transforming complex data<br />
                  into intelligent solutions
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: 1.2, 
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="lg:w-1/2"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="relative"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#00f3ff]/10 to-[#9d00ff]/10 rounded-3xl blur-xl"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                />
                <div className="relative bg-black/30 backdrop-blur-2xl p-10 rounded-3xl border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-3 mb-8">
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-red-500"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-yellow-500"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    />
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-green-500"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    />
                    <span className="text-gray-400 text-sm ml-4">About Me</span>
                  </div>
                  
                  <motion.div 
                    className="space-y-6 text-gray-300 leading-relaxed"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.p variants={itemVariants} className="text-lg">
                      Hello, I'm <span className="text-[#00f3ff] font-semibold">Alvaro</span>, focused on machine learning with a passion for building intelligent models to solve real-world problems and uncover meaningful insights from data.
                    </motion.p>
                    <motion.p variants={itemVariants}>
                      I specialize in designing, training, and deploying solutions that simplify complexity, drive innovation, and create impactful results.
                    </motion.p>
                    <motion.p variants={itemVariants}>
                      My expertise spans across <span className="text-[#9d00ff] font-semibold">Computer Vision</span> and <span className="text-[#00f3ff] font-semibold">Natural Language Processing</span>, with a particular focus on developing scalable AI solutions for real-world problems.
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Ultra Smooth Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <motion.span 
                className="bg-gradient-to-r from-[#00f3ff] via-[#9d00ff] to-[#00f3ff] bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Projects & Portfolio
              </motion.span>
            </h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Explore my collection of machine learning projects and AI innovations
            </motion.p>
          </motion.div>

          {/* Machine Learning & AI Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Brain className="w-8 h-8 text-[#00f3ff]" />
              </motion.div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] bg-clip-text text-transparent">
                Machine Learning & AI
              </h3>
            </div>
            <p className="text-gray-400 mb-8 max-w-3xl">
              Advanced AI solutions and machine learning models for complex problem-solving and intelligent automation
            </p>

            <div className="relative">
              <motion.button 
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: 'rgba(0, 243, 255, 0.2)',
                  transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollProjects('left')}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 backdrop-blur-xl p-4 rounded-full text-[#00f3ff] border border-[#00f3ff]/20 shadow-2xl transition-all duration-500"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button 
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: 'rgba(0, 243, 255, 0.2)',
                  transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollProjects('right')}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 backdrop-blur-xl p-4 rounded-full text-[#00f3ff] border border-[#00f3ff]/20 shadow-2xl transition-all duration-500"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>

              <div 
                ref={projectsRef}
                className="flex overflow-x-auto hide-scrollbar gap-8 pb-8 px-12 scroll-smooth"
                style={{ scrollSnapType: 'x mandatory' }}
              >
                {mlProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={{ 
                      y: -15,
                      scale: 1.02,
                      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                    }}
                    viewport={{ once: true }}
                    className="flex-none w-[420px] cursor-pointer group"
                    style={{ scrollSnapAlign: 'start' }}
                    onClick={() => handleProjectClick(project.url)}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <div className="relative bg-gradient-to-br from-black/30 to-black/50 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 group-hover:border-[#00f3ff]/30">
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-[#00f3ff]/5 to-[#9d00ff]/5 opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                      />
                      
                      <div className="relative overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover"
                          whileHover={{ 
                            scale: 1.15,
                            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
                          }}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <motion.div 
                          className="absolute top-4 right-4"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-[#00f3ff] text-sm border border-[#00f3ff]/20">
                            {project.category}
                          </span>
                        </motion.div>
                        <motion.div 
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                          <motion.div 
                            className="bg-black/80 backdrop-blur-sm p-4 rounded-full"
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <ExternalLink className="w-8 h-8 text-[#00f3ff]" />
                          </motion.div>
                        </motion.div>
                      </div>

                      <div className="p-8 space-y-6">
                        <motion.h3 
                          className="text-2xl font-bold group-hover:text-[#00f3ff]"
                          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                          {project.title}
                        </motion.h3>
                        <motion.p 
                          className="text-gray-400 group-hover:text-gray-300 leading-relaxed"
                          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                          {project.description}
                        </motion.p>
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech, i) => (
                            <motion.span
                              key={i}
                              className="px-4 py-2 bg-[#00f3ff]/10 rounded-full text-[#00f3ff] text-sm border border-[#00f3ff]/20 group-hover:bg-[#00f3ff]/20 group-hover:border-[#00f3ff]/40"
                              whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.2 }
                              }}
                              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Time Series & Analytics Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Database className="w-8 h-8 text-[#9d00ff]" />
              </motion.div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-[#9d00ff] to-[#00f3ff] bg-clip-text text-transparent">
                Time Series & Analytics
              </h3>
            </div>
            <p className="text-gray-400 mb-8 max-w-3xl">
              Advanced forecasting models and time series analysis for predictive analytics and trend identification
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {timeSeriesProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.03,
                    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                  }}
                  viewport={{ once: true }}
                  className="cursor-pointer group"
                  onClick={() => handleProjectClick(project.url)}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="relative bg-gradient-to-br from-black/30 to-black/50 backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/10 shadow-xl transition-all duration-700 group-hover:border-[#9d00ff]/30">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-[#9d00ff]/5 to-[#00f3ff]/5 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                    
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        whileHover={{ 
                          scale: 1.1,
                          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
                        }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <motion.div 
                        className="absolute top-3 right-3"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full text-[#9d00ff] text-xs border border-[#9d00ff]/20">
                          {project.category}
                        </span>
                      </motion.div>
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      >
                        <motion.div 
                          className="bg-black/80 backdrop-blur-sm p-3 rounded-full"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <ExternalLink className="w-6 h-6 text-[#9d00ff]" />
                        </motion.div>
                      </motion.div>
                    </div>

                    <div className="p-6 space-y-4">
                      <motion.h4 
                        className="text-lg font-bold group-hover:text-[#9d00ff] line-clamp-2"
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      >
                        {project.title}
                      </motion.h4>
                      <motion.p 
                        className="text-gray-400 group-hover:text-gray-300 text-sm leading-relaxed line-clamp-3"
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      >
                        {project.description}
                      </motion.p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="px-3 py-1 bg-[#9d00ff]/10 rounded-full text-[#9d00ff] text-xs border border-[#9d00ff]/20 group-hover:bg-[#9d00ff]/20 group-hover:border-[#9d00ff]/40"
                            whileHover={{ 
                              scale: 1.05,
                              transition: { duration: 0.2 }
                            }}
                            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 text-lg">
              Click on any project to explore more details on 
              <span className="text-[#00f3ff] font-semibold ml-1">Kaggle</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ultra Smooth Skills Section with Expandable Details */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <motion.span 
                className="bg-gradient-to-r from-[#9d00ff] via-[#00f3ff] to-[#9d00ff] bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Skills & Expertise
              </motion.span>
            </h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Technologies and frameworks I use to bring ideas to life
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              const [isExpanded, setIsExpanded] = useState(false);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.03,
                    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                  }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#00f3ff]/10 to-[#9d00ff]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                  <div className="relative bg-black/30 backdrop-blur-2xl p-8 rounded-2xl border border-white/10 shadow-xl transition-all duration-500 group-hover:border-[#00f3ff]/30">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div 
                        className="p-3 bg-gradient-to-r from-[#00f3ff]/20 to-[#9d00ff]/20 rounded-xl"
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 360,
                          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
                        }}
                      >
                        <IconComponent className="w-8 h-8 text-[#00f3ff]" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                        <motion.span 
                          className="text-[#00f3ff] font-semibold"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      {skill.details.length > 0 && (
                        <motion.button
                          onClick={() => setIsExpanded(!isExpanded)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onMouseEnter={() => setIsHovering(true)}
                          onMouseLeave={() => setIsHovering(false)}
                          className="p-2 rounded-lg bg-[#00f3ff]/10 text-[#00f3ff] hover:bg-[#00f3ff]/20 transition-all duration-300"
                        >
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {isExpanded ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </motion.div>
                        </motion.button>
                      )}
                    </div>
                    
                    <div className="relative mb-4">
                      <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 2, 
                            delay: 0.5,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] rounded-full relative overflow-hidden"
                        >
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {isExpanded && skill.details.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="mt-4 p-4 bg-black/20 rounded-xl border border-[#00f3ff]/10"
                        >
                          <div className="space-y-2 text-sm text-gray-300">
                            {skill.details.map((detail, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05, duration: 0.3 }}
                                className={`${detail.startsWith('➤') ? 'font-semibold text-[#00f3ff] mt-3' : 
                                          detail.startsWith('•') ? 'ml-4 text-gray-400' : 
                                          detail === '' ? 'h-2' : 'text-gray-300'}`}
                              >
                                {detail}
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <motion.span 
                className="bg-gradient-to-r from-[#00f3ff] via-[#9d00ff] to-[#00f3ff] bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Certifications
              </motion.span>
            </h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Professional certifications and achievements in machine learning and AI
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.05,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => window.open(cert.url, '_blank')}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#00f3ff]/10 to-[#9d00ff]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
                <div className="relative bg-black/30 backdrop-blur-2xl p-6 rounded-2xl border border-white/10 shadow-xl transition-all duration-500 group-hover:border-[#00f3ff]/30">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 bg-gradient-to-r from-[#00f3ff]/20 to-[#9d00ff]/20 rounded-xl flex-shrink-0"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 360,
                        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
                      }}
                    >
                      <Award className="w-6 h-6 text-[#00f3ff]" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <motion.h3 
                        className="text-lg font-bold text-white group-hover:text-[#00f3ff] mb-2 line-clamp-2"
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      >
                        {cert.title}
                      </motion.h3>
                      <div className="flex items-center justify-between">
                        <motion.span 
                          className="text-[#9d00ff] font-semibold text-sm"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {cert.date}
                        </motion.span>
                        <motion.div 
                          className="opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.3 }}
                        >
                          <ExternalLink className="w-4 h-4 text-[#00f3ff]" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 text-lg">
              Click on any certification to view the credential on 
              <span className="text-[#9d00ff] font-semibold ml-1">Coursera</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ultra Smooth Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                <motion.span 
                  className="bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Let's Connect
                </motion.span>
              </h2>
              <motion.p 
                className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Ready to collaborate on the next breakthrough in AI and machine learning?
              </motion.p>
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
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -10,
                    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                  }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: true }}
                  className="group relative"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#00f3ff]/20 to-[#9d00ff]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                  <div className="relative bg-black/30 backdrop-blur-2xl p-6 rounded-2xl border border-white/10 shadow-xl group-hover:border-[#00f3ff]/30 transition-all duration-500">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <social.icon className="w-10 h-10 text-[#00f3ff] group-hover:text-white transition-colors duration-500" />
                    </motion.div>
                    <motion.span 
                      className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 whitespace-nowrap"
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      {social.label}
                    </motion.span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ultra Smooth Footer */}
      <footer className="py-12 border-t border-white/5 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true }}
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
