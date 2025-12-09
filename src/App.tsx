import React, { useRef } from 'react';
import { Brain, Github, Linkedin, Mail, ChevronLeft, ChevronRight, ExternalLink, Sparkles, Code, Database, Cpu, TrendingUp, BarChart3, Award, CheckCircle } from 'lucide-react';

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const timeSeriesProjectsRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: 'left' | 'right') => {
    if (projectsRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      projectsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollTimeSeriesProjects = (direction: 'left' | 'right') => {
    if (timeSeriesProjectsRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      timeSeriesProjectsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleProjectClick = () => {
    window.open('https://www.kaggle.com/muhammadalvaro', '_blank');
  };

  const handleTimeSeriesProjectClick = (url: string) => {
    window.open(url, '_blank');
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
      title: "Breast Cancer Prediction System",
      description: "Built a machine-learning pipeline for early breast cancer diagnosis using PCA-based dimensionality reduction and a logistic regression classifier, deployed with a modern Streamlit web app UI.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tech: ["Python", "PCA", "Logistic Regression", "Streamlit"],
      category: "Healthcare Analytics",
      url: "https://breast-cancer-prediction-pca-logistic-regression.streamlit.app/"
    },
    {
      title: "Autonomous Drone Navigation",
      description: "Implemented real-time object detection and intelligent path planning for autonomous drone systems",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tech: ["YOLO", "ROS", "Path Planning"],
      category: "Robotics"
    },
    {
      title: "Sentiment Analysis",
      description: "Comprehensive sentiment analysis of President Prabowo's responses using advanced NLP techniques",
      image: "/assets/sentiment_analysist.png",
      tech: ["Python", "NLTK", "TextBlob"],
      category: "NLP",
      url: "https://www.kaggle.com/code/muhammadalvaro/sentiment-analysis-of-presiden-prabowo-menjawab"
    }
  ];

  const timeSeriesProjects = [
    {
      title: "Online Retail Analysis",
      description: "Online Retail Data Analysis & Customer Segmentation using RFM (Recency, Frequency, Monetary)",
      image: "/assets/online_retail_analysis.png",
      tech: ["Python", "Pandas", "Seaborn"],
      category: "Time Series",
      url: "https://github.com/muhammadalvarokhikman/Online-Retail-Analysis/tree/main"
    },
    {
      title: "Simple Moving Average",
      description: "Implementation of Simple Moving Average technique for time series forecasting and trend analysis in Python",
      image: "/assets/simple_moving_average.png",
      tech: ["Python", "Pandas", "NumPy"],
      category: "Time Series",
      url: "https://www.kaggle.com/code/muhammadalvaro/simple-moving-average-in-python"
    },
    {
      title: "Simple Exponential Smoothing",
      description: "Advanced exponential smoothing method for forecasting with weighted historical observations",
      image: "/assets/simple_exponential_smoothing.png",
      tech: ["Python", "Statsmodels", "Matplotlib"],
      category: "Forecasting",
      url: "https://www.kaggle.com/code/muhammadalvaro/simple-exponential-smoothing-in-python"
    },
    {
      title: "Double Exponential Smoothing",
      description: "Holt's linear trend method for time series with trend components and seasonal patterns",
      image: "/assets/double_exponential_smoothing.png",
      tech: ["Python", "Scipy", "Seaborn"],
      category: "Forecasting",
      url: "https://www.kaggle.com/code/muhammadalvaro/double-exponential-smoothing-in-python"
    },
    {
      title: "Triple Exponential Smoothing",
      description: "Holt-Winters method for complex time series with trend and seasonal components",
      image: "/assets/triple_exponential_smoothing.png",
      tech: ["Python", "Statsmodels", "Plotly"],
      category: "Forecasting",
      url: "https://www.kaggle.com/code/muhammadalvaro/triple-exponential-smoothing-in-python"
    },
    {
      title: "ARIMA Model",
      description: "AutoRegressive Integrated Moving Average model for sophisticated time series forecasting",
      image: "/assets/ARIMA.png",
      tech: ["Python", "ARIMA", "Statsmodels"],
      category: "Time Series",
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
        "Gaussian Mixture Model / GMM",
        "PCA – Principal Component Analysis",
        "t-SNE – t-Distributed Stochastic Neighbor Embedding",
        "Autoencoder",
        "Isolation Forest",
        "Self-Organizing Map / SOM",
        "Spectral Clustering"
      ]
    },
    {
      name: "Supervised Learning",
      level: 90,
      icon: Sparkles,
      details: [
        "➤ Klasifikasi (Classification):",
        "Logistic Regression",
        "Decision Tree Classifier",
        "Random Forest Classifier",
        "K-Nearest Neighbors / KNN",
        "Support Vector Machine / SVM",
        "Naive Bayes",
        "Gradient Boosting Classifier – XGBoost, LightGBM, CatBoost",
        "Neural Network Classifier",
        "",
        "➤ Regresi (Regression):",
        "Linear Regression",
        "Ridge Regression",
        "Lasso Regression",
        "SVR – Support Vector Regression",
        "Decision Tree Regressor",
        "Random Forest Regressor",
        "Gradient Boosting Regressor",
        "Neural Network Regressor"
      ]
    },
    {
      name: "Neural Network",
      level: 90,
      icon: Brain,
      details: [
        "Feedforward Neural Network / FNN",
        "Multilayer Perceptron / MLP",
        "Convolutional Neural Network / CNN",
        "Recurrent Neural Network / RNN",
        "Long Short-Term Memory / LSTM",
        "Gated Recurrent Unit / GRU",
        "Transformer",
        "Bidirectional LSTM / BiLSTM"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a] text-white overflow-x-hidden">
      {/* Simplified Background */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,243,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,243,255,0.02)_1px,transparent_1px)] bg-[size:6rem_6rem]" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-2xl border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="text-[#00f3ff] font-bold text-2xl tracking-wide">
              <span className="bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] bg-clip-text text-transparent">
                We Are Interconnected
              </span>
            </div>
            <div className="flex gap-10">
              {['About', 'Projects', 'Skills', 'Certifications', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-[#00f3ff] transition-colors duration-300 font-medium tracking-wide"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="about"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        {/* Simplified Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f3ff] opacity-10 rounded-full filter blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-[#9d00ff] opacity-10 rounded-full filter blur-[140px]" />
        </div>

        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2 text-left space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-light text-[#00f3ff] tracking-wider">
                  Hello, I'm
                </h2>
                <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-[#00f3ff] to-[#9d00ff] bg-clip-text text-transparent">
                    Muhammad
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#9d00ff] via-[#00f3ff] to-white bg-clip-text text-transparent">
                    Alvaro
                  </span>
                </h1>
                <h3 className="text-3xl font-light text-gray-300 tracking-wide">
                  Machine Learning Engineer
                </h3>
              </div>

              <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                "Code, Data, and the Future: All Connected"
              </p>

              <div className="flex items-center gap-4">
                <Brain className="w-20 h-20 text-[#00f3ff]" />
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#00f3ff] to-transparent"></div>
                <div className="text-sm text-gray-400 leading-relaxed">
                  Transforming complex data<br />
                  into intelligent solutions
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative">
                <div className="relative bg-black/30 backdrop-blur-2xl p-10 rounded-3xl border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
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
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00f3ff] via-[#9d00ff] to-[#00f3ff] bg-clip-text text-transparent">
                Projects & Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Explore my comprehensive collection of machine learning projects and AI innovations
            </p>
          </div>

          {/* Machine Learning & AI Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Brain className="w-8 h-8 text-[#00f3ff]" />
              <h3 className="text-3xl lg:text-4xl font-bold">
                <span className="bg-gradient-to-r from-[#00f3ff] via-[#9d00ff] to-[#00f3ff] bg-clip-text text-transparent">
                  Machine Learning & AI
                </span>
              </h3>
              <Sparkles className="w-8 h-8 text-[#9d00ff]" />
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Advanced AI systems, computer vision, and natural language processing solutions
            </p>
          </div>

          {/* First Row - ML & AI Projects */}
          <div className="relative mb-20">
            <button
              onClick={() => scrollProjects('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 backdrop-blur-xl p-4 rounded-full text-[#00f3ff] border border-[#00f3ff]/20 shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#00f3ff]/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollProjects('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 backdrop-blur-xl p-4 rounded-full text-[#00f3ff] border border-[#00f3ff]/20 shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#00f3ff]/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              ref={projectsRef}
              className="flex overflow-x-auto hide-scrollbar gap-8 pb-8 px-12 scroll-smooth"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-none w-[420px] cursor-pointer group"
                  style={{ scrollSnapAlign: 'start' }}
                  onClick={() => project.url ? handleTimeSeriesProjectClick(project.url) : handleProjectClick()}
                >
                  <div className="relative bg-gradient-to-br from-black/30 to-black/50 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-300 hover:border-[#00f3ff]/30 hover:-translate-y-2">

                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-[#00f3ff] text-sm border border-[#00f3ff]/20">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/80 backdrop-blur-sm p-4 rounded-full">
                          <ExternalLink className="w-8 h-8 text-[#00f3ff]" />
                        </div>
                      </div>
                    </div>

                    <div className="p-8 space-y-6">
                      <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[#00f3ff]">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-[#00f3ff]/10 rounded-full text-[#00f3ff] text-sm border border-[#00f3ff]/20 transition-all duration-300 hover:bg-[#00f3ff]/20 hover:border-[#00f3ff]/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Time Series & Analytics Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <TrendingUp className="w-8 h-8 text-[#9d00ff]" />
              <h3 className="text-3xl lg:text-4xl font-bold">
                <span className="bg-gradient-to-r from-[#9d00ff] via-[#00f3ff] to-[#9d00ff] bg-clip-text text-transparent">
                  Time Series & Analytics
                </span>
              </h3>
              <BarChart3 className="w-8 h-8 text-[#00f3ff]" />
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Advanced forecasting models and time series analysis implementations
            </p>
          </div>

          {/* Second Row - Time Series Projects */}
          <div className="relative">
            <button
              onClick={() => scrollTimeSeriesProjects('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 backdrop-blur-xl p-4 rounded-full text-[#9d00ff] border border-[#9d00ff]/20 shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#9d00ff]/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollTimeSeriesProjects('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 backdrop-blur-xl p-4 rounded-full text-[#9d00ff] border border-[#9d00ff]/20 shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#9d00ff]/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              ref={timeSeriesProjectsRef}
              className="flex overflow-x-auto hide-scrollbar gap-8 pb-8 px-12 scroll-smooth"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {timeSeriesProjects.map((project, index) => (
                <div
                  key={index}
                  className="flex-none w-[420px] cursor-pointer group"
                  style={{ scrollSnapAlign: 'start' }}
                  onClick={() => handleTimeSeriesProjectClick(project.url)}
                >
                  <div className="relative bg-gradient-to-br from-black/30 to-black/50 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-300 hover:border-[#9d00ff]/30 hover:-translate-y-2">

                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-[#9d00ff] text-sm border border-[#9d00ff]/20">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/80 backdrop-blur-sm p-4 rounded-full">
                          <ExternalLink className="w-8 h-8 text-[#9d00ff]" />
                        </div>
                      </div>
                    </div>

                    <div className="p-8 space-y-6">
                      <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[#9d00ff]">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-[#9d00ff]/10 rounded-full text-[#9d00ff] text-sm border border-[#9d00ff]/20 transition-all duration-300 hover:bg-[#9d00ff]/20 hover:border-[#9d00ff]/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 text-lg">
              Click on any project to explore detailed implementations on
              <span className="text-[#00f3ff] font-semibold ml-1">Kaggle or Web</span>
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#9d00ff] via-[#00f3ff] to-[#9d00ff] bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Technologies and frameworks I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="relative bg-black/30 backdrop-blur-2xl p-8 rounded-2xl border border-white/10 shadow-xl transition-all duration-300 hover:border-[#00f3ff]/30 hover:-translate-y-2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-[#00f3ff]/20 to-[#9d00ff]/20 rounded-xl">
                        <IconComponent className="w-8 h-8 text-[#00f3ff]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                        <span className="text-[#00f3ff] font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                    </div>

                    <div className="relative mb-6">
                      <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>

                    {/* Skill Details */}
                    {skill.details.length > 0 && (
                      <div className="space-y-2">
                        {skill.details.map((detail, i) => (
                          <div
                            key={i}
                            className={`text-sm ${
                              detail.startsWith('➤')
                                ? 'text-[#9d00ff] font-semibold mt-3'
                                : detail === ''
                                  ? 'h-2'
                                  : 'text-gray-400 ml-4'
                            }`}
                          >
                            {detail !== '' && (
                              <span className="flex items-center gap-2">
                                {!detail.startsWith('➤') && <span className="w-1 h-1 bg-[#00f3ff] rounded-full"></span>}
                                {detail}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Award className="w-10 h-10 text-[#00f3ff]" />
              <h2 className="text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-[#00f3ff] via-[#9d00ff] to-[#00f3ff] bg-clip-text text-transparent">
                  Certifications
                </span>
              </h2>
              <CheckCircle className="w-10 h-10 text-[#9d00ff]" />
            </div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Professional certifications and continuous learning achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer block"
              >
                <div className="relative bg-black/30 backdrop-blur-2xl p-6 rounded-2xl border border-white/10 shadow-xl transition-all duration-300 hover:border-[#00f3ff]/30 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-[#00f3ff]/20 to-[#9d00ff]/20 rounded-xl flex-shrink-0">
                      <Award className="w-6 h-6 text-[#00f3ff]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2 transition-colors duration-300 group-hover:text-[#00f3ff]">
                        {cert.title}
                      </h3>
                      <p className="text-[#9d00ff] font-semibold text-sm mb-3">
                        {cert.date}
                      </p>
                      <div className="flex items-center gap-2 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">View Certificate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="space-y-12">
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
                <a
                  key={index}
                  href={social.href}
                  target={social.icon !== Mail ? "_blank" : undefined}
                  rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
                  className="group relative"
                >
                  <div className="relative bg-black/30 backdrop-blur-2xl p-6 rounded-2xl border border-white/10 shadow-xl transition-all duration-300 hover:border-[#00f3ff]/30 hover:-translate-y-2">
                    <social.icon className="w-10 h-10 text-[#00f3ff] transition-colors duration-300 group-hover:text-white" />
                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-300">
                      {social.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <p className="text-gray-400 text-lg">
            © {new Date().getFullYear()} Muhammad Alvaro Khikman. Crafted with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
