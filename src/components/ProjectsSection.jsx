import { ArrowRight, ExternalLink, Github, ChevronUp, Star, Code, ChevronDown, MoveRight, Filter, Sparkles, Award, Zap, Play, Eye, Calendar, Users, X } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 15,
    title: "RAG PDF Q&A Assistant",
    category: "Artificial Intelligence",
    description: "AI-powered Retrieval-Augmented Generation (RAG) application enabling intelligent PDF-based question answering.",
    image: "/projects/project15.png",
    tags: ["LangChain", "ChromaDB", "Hugging Face Embeddings", "RAG", "PyMuPDF"],
    demoUrl: "https://www.linkedin.com/posts/shubhapramanik075_ai-generativeai-rag-ugcPost-7460305190156673024-Evbr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGhgWYBfezmErdSnVuXjXDuWNzPSIZnqOc",
    githubUrl: "https://github.com/shubhapramanik07/RAG_project.git",
    accentColor: "from-cyan-500 to-blue-600",
    status: "Not Deployed",
    highlights: ["PDF Document Q&A", "Semantic Search with Embeddings", "MMR Retrieval", "ChromaDB Vector Storage"]
  },
  {
    id: 7,
    title: "FlickPick - Movie Recommendation System",
    category: "Artificial Intelligence",
    description: "AI-powered movie recommendation system using TF-IDF algorithm for content-based filtering. Real-time TMDB API integration, and personalized movie recommendations.",
    image: "/projects/project7.png",
    tags: ["Python", "Streamlit", "FastAPI", "Pandas", "Scikit-learn", "TF-IDF", "TMDB API"],
    demoUrl: "https://movierecommendationsp075.streamlit.app/",
    githubUrl: "https://github.com/shubhapramanik07/movie_recommendation.git",
    accentColor: "from-violet-500 to-orange-600",
    status: "Live",
    highlights: ["TF-IDF Content-Based Filtering", "Real-time TMDB Data", "Cosine Similarity Search"]
  },
  {
    id: 13,
    title: "InstaShare",
    category: "Web Dev",
    description: "Real-time instant messaging platform built to solve everyday communication needs. Chat with anyone, anywhere, instantly.",
    image: "/projects/project13.png",
    tags: ["React", "Supabase", "Real-time DB"],
    demoUrl: "https://www.instashare.me/",
    githubUrl: "https://github.com/souravxbera/instashare.git",
    accentColor: "from-cyan-500 to-blue-600",
    status: "Live",
    highlights: ["Real-time Messaging", "Supabase Backend", "Collaborative Project"]
  },
  {
    id: 12,
    title: "Paharika",
    category: "Hackathon",
    description: "A creative hackathon project showcasing responsive design principles and interactive web elements.And also used Gemini api for the Itinerary generation.This was my first hackathon project and I had a great learning experience building it.",
    image: "/projects/project11.png",
    video: "/projects/pahar.mp4",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://velvety-dieffenbachia-bfb0f4.netlify.app/",
    githubUrl: "https://github.com/shubhapramanik07/paharika.git",
    accentColor: "from-violet-500 to-purple-600",
    status: "Live",
    highlights: ["Responsive Design", "Interactive UI", "Clean Layout"]
  },
  {
    id: 8,
    title: "LangChain AI Agent - LinkedIn Project",
    category: "Artificial Intelligence",
    description: "Advanced LangChain-based AI agent project showcasing machine learning capabilities. Integrated with LLM frameworks for intelligent automation.It's not deployed. Check out the LinkedIn post for details and demo.",
    image: "/projects/project8.png",
    tags: ["Machine Learning", "AI", "Python", "LLM"],
    demoUrl: "https://www.linkedin.com/posts/shubhapramanik075_ai-machinelearning-langchain-activity-7456748000258826240-BgI4?utm_source=share&utm_medium=member_desktop",
    githubUrl: "https://github.com/shubhapramanik07/GEN_AI.git",
    accentColor: "from-indigo-500 to-purple-600",
    status: "Not Deployed",
    highlights: ["LangChain", "Mistral AI", "AI/ML Integration"]
  },
  {
    id: 11,
    title: "Independence Day 2K25",
    category: "Web Dev",
    description: "Celebratory website for Independence Day with dynamic content powered by Supabase backend integration.",
    image: "/projects/project12.png",
    tags: ["HTML", "CSS", "JS", "Supabase"],
    demoUrl: "https://independence-day-2k25.netlify.app/",
    githubUrl: "https://github.com/souravxbera/Independence-Day-2025.git",
    accentColor: "from-orange-500 to-green-600",
    status: "Live",
    highlights: ["Dynamic Content", "Patriotic Theme", "Backend Integration"]
  },
  {
    id: 10,
    title: "TechNova Academy",
    category: "Web Dev",
    description: "Fully responsive educational platform website guiding learning through research, design, and development.",
    image: "/projects/project10.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://guileless-haupia-90e879.netlify.app/",
    githubUrl: "https://github.com/shubhapramanik07/tech-nova-academy.git",
    accentColor: "from-blue-500 to-indigo-600",
    status: "Live",
    highlights: ["Fully Responsive", "Modern UI/UX", "Educational Platform"]
  },
  {
    id: 9,
    title: "Bootstrap Website",
    category: "Web Dev",
    description: "My first Bootstrap project - a responsive website showcasing Bootstrap framework fundamentals and grid system.",
    image: "/projects/project9.png",
    tags: ["HTML", "CSS", "Bootstrap"],
    demoUrl: "https://luminous-sunburst-539da2.netlify.app/",
    accentColor: "from-purple-500 to-pink-600",
    status: "Live",
    highlights: ["Bootstrap Grid", "Responsive Layout", "Component-based"]
  },

  {
    id: 14,
    title: "ASTRA",
    category: "Hackathon",
    description: "Security threat aggregator built at CODE@FROST hackathon. Collects threats from multiple sources and uses NLP for entity extraction with 98.55% accuracy.",
    image: "/projects/project14.png",
    tags: ["React", "Node.js", "Supabase", "Tailwind", "NLP"],
    demoUrl: "https://astra-live.vercel.app/",
    featured: true,
    accentColor: "from-red-500 to-orange-600",
    status: "Live",
    highlights: ["NLP Entity Extraction", "Multi-source Threat Data", "Real-time Alerts"]
  },

  
];

const categoryColors = {
  "Healthcare SaaS": "from-emerald-500/20 to-teal-600/20 text-emerald-600 border-emerald-500/30",
  "E-commerce": "from-purple-500/20 to-indigo-600/20 text-purple-600 border-purple-500/30",
  "Real-time Communication": "from-blue-500/20 to-cyan-600/20 text-blue-600 border-blue-500/30",
  "Artificial Intelligence": "from-amber-500/20 to-orange-600/20 text-amber-600 border-amber-500/30",
  "FinTech": "from-rose-500/20 to-pink-600/20 text-rose-600 border-rose-500/30",
  "Food Tech": "from-violet-500/20 to-purple-600/20 text-violet-600 border-violet-500/30",
  "HR Tech": "from-orange-500/20 to-red-600/20 text-orange-600 border-orange-500/30"
};

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.1]);

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const categories = ["All", "Artificial Intelligence", "Web Dev", "Hackathon"];

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setShowAll(false);
    setIsMobileFilterOpen(false);
  };

  const ProjectHighlights = ({ highlights }) => (
    <div className="space-y-2">
      {highlights.map((highlight, index) => (
        <div key={index} className="flex items-center gap-2 text-xs sm:text-sm">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          <span className="text-muted-foreground">{highlight}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
      ref={sectionRef}
    >
      {/* Clean Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 bg-primary rounded-full animate-ping" />
            </div>
            <span className="text-sm sm:text-base font-semibold text-primary tracking-wide">MY PROJECTS</span>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A collection of projects I've built to showcase my skills in the field of AI/ML, data science and Fullstack.
          </motion.p>
        </motion.div>

        {/* Simple Filter */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleFilterChange(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {category === "Artificial Intelligence" ? "AI/ML" : category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative bg-background border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  {/* Image/Video Section */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                        project.status === "Live"
                          ? "bg-emerald-500/20 text-emerald-600 border border-emerald-500/30"
                          : "bg-amber-500/20 text-amber-600 border border-amber-500/30"
                      }`}>
                        {project.status}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${categoryColors[project.category]}`}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <motion.div
                          className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/20 text-amber-600 text-xs font-medium border border-amber-500/30"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          <Star size={12} className="fill-amber-500" />
                          Featured
                        </motion.div>
                      )}
                    </div>

                    <p className="text-muted-foreground text-xs sm:text-sm mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <ProjectHighlights highlights={project.highlights} />
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + tagIndex * 0.05 + 0.4 }}
                          className="px-2 py-0.5 rounded-lg bg-primary/10 text-primary text-[10px] sm:text-xs font-medium border border-primary/20"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2.5 pt-3 border-t border-border">
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                          project.demoUrl === "#"
                            ? "bg-muted text-muted-foreground cursor-not-allowed border border-border"
                            : "bg-primary text-primary-foreground hover:bg-primary/90"
                        }`}
                        onClick={(e) => project.demoUrl === "#" && e.preventDefault()}
                      >
                        <Eye size={16} />
                        {project.demoUrl === "#" ? "Coming Soon" : "Live Demo"}
                      </motion.a>

                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs sm:text-sm font-medium border transition-all duration-300 ${
                          project.githubUrl === "#"
                            ? "bg-muted text-muted-foreground cursor-not-allowed border-border"
                            : "bg-background text-foreground border-border hover:border-primary hover:bg-primary/5"
                        }`}
                        onClick={(e) => project.githubUrl === "#" && e.preventDefault()}
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                    </div>
                  </div>

                  {/* Accent Border */}
                  <div className={`h-1 bg-gradient-to-r ${project.accentColor}`} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        {filteredProjects.length > 3 && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-medium transition-all duration-300 ${
                showAll
                  ? "bg-muted text-foreground border border-border"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              {showAll ? (
                <>
                  <ChevronUp size={18} />
                  Show Less
                </>
              ) : (
                <>
                  View More Projects
                  <ArrowRight size={18} />
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};