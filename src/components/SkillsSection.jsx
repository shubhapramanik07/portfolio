import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Zap, Terminal } from "lucide-react";

// Import your images
import htmlIcon from "@/assets/icons/html.png";
import cssIcon from "@/assets/icons/css.png";
import jsIcon from "@/assets/icons/javascript.png";
import reactIcon from "@/assets/icons/react.png";
import pythonIcon from "@/assets/icons/python.png";
import gitIcon from "@/assets/icons/git.png";
import githubIcon from "@/assets/icons/github.png";
import vscodeIcon from "@/assets/icons/vscode.png";

const skills = [
  // Frontend
  { name: "HTML5", category: "fullstack", icon: "html", color: "from-orange-500 to-red-500" },
  { name: "CSS3", category: "fullstack", icon: "css", color: "from-blue-500 to-cyan-500" },
  { name: "JavaScript", category: "fullstack", icon: "javascript", color: "from-yellow-400 to-yellow-600" },
  { name: "Bootstrap", category: "fullstack", icon: "bootstrap", color: "from-purple-600 to-purple-800" },
  { name: "React", category: "fullstack", icon: "react", color: "from-cyan-400 to-blue-500" },
  { name: "Tailwind CSS", category: "fullstack", icon: "tailwind", color: "from-cyan-500 to-blue-600" },

  // Backend (BaaS)
  { name: "Supabase", category: "fullstack", icon: "supabase", color: "from-green-500 to-emerald-600" },

  // ML & Data Science
  { name: "Python", category: "ml", icon: "python", color: "from-blue-500 to-yellow-500" },
  { name: "NumPy", category: "ml", icon: "numpy", color: "from-blue-600 to-cyan-500" },
  { name: "Pandas", category: "ml", icon: "pandas", color: "from-indigo-600 to-purple-600" },
  { name: "Matplotlib", category: "ml", icon: "matplotlib", color: "from-indigo-500 to-blue-500" },
  { name: "Seaborn", category: "ml", icon: "seaborn", color: "from-teal-500 to-blue-500" },
  { name: "Scikit-learn", category: "ml", icon: "scikitlearn", color: "from-orange-500 to-red-500" },
  { name: "PyTorch", category: "ml", icon: "pytorch", color: "from-red-600 to-orange-500" },
  { name: "LangChain", category: "ml", icon: "langchain", color: "from-blue-600 to-cyan-500" },
  { name: "Hugging Face", category: "ml", icon: "huggingface", color: "from-yellow-500 to-amber-600" },
  { name: "Streamlit", category: "ml", icon: "streamlit", color: "from-red-500 to-pink-500" },

  // Programming Languages
  { name: "C", category: "languages", icon: "c", color: "from-sky-600 to-blue-700" },
  { name: "C++", category: "languages", icon: "cpp", color: "from-blue-600 to-indigo-700" },
  { name: "Python", category: "languages", icon: "python", color: "from-blue-500 to-yellow-500" },

  // Tools & Platforms
  { name: "VS Code", category: "tools", icon: "vscode", color: "from-blue-500 to-cyan-400" },
  { name: "Git", category: "tools", icon: "git", color: "from-red-600 to-orange-500" },
  { name: "GitHub", category: "tools", icon: "github", color: "from-gray-700 to-gray-900" },
  { name: "Jupyter Notebook", category: "tools", icon: "jupyter", color: "from-orange-500 to-red-500" },
  { name: "Google Colab", category: "tools", icon: "googlecolab", color: "from-yellow-500 to-orange-500" },
  { name: "Netlify", category: "tools", icon: "netlify", color: "from-cyan-500 to-green-500" },
  { name: "Vercel", category: "tools", icon: "vercel", color: "from-gray-900 to-gray-700" },
];

const categories = [
  { id: "fullstack", label: "Full-Stack", icon: <Code2 className="h-5 w-5" />, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
  { id: "ml", label: "AI/ML & Data", icon: <Zap className="h-5 w-5" />, color: "bg-gradient-to-r from-indigo-500 to-violet-500" },
  { id: "tools", label: "Tools", icon: <Code2 className="h-5 w-5" />, color: "bg-gradient-to-r from-orange-500 to-yellow-500" },
  { id: "languages", label: "Languages", icon: <Terminal className="h-5 w-5" />, color: "bg-gradient-to-r from-rose-500 to-pink-500" },
];

const iconImages = {
  html: htmlIcon,
  css: cssIcon,
  javascript: jsIcon,
  react: reactIcon,
  python: pythonIcon,
  git: gitIcon,
  github: githubIcon,
  vscode: vscodeIcon,
};

// CDN fallback icons for skills without local PNG files
const cdnIcons = {
  supabase: "https://cdn.simpleicons.org/supabase",
  c: "https://cdn.simpleicons.org/c",
  cpp: "https://cdn.simpleicons.org/cplusplus",
  bootstrap: "https://cdn.simpleicons.org/bootstrap",
  tailwind: "https://cdn.simpleicons.org/tailwindcss",
  numpy: "https://cdn.simpleicons.org/numpy",
  pandas: "https://cdn.simpleicons.org/pandas",
  scikitlearn: "https://cdn.simpleicons.org/scikitlearn",
  jupyter: "https://cdn.simpleicons.org/jupyter",
  googlecolab: "https://cdn.simpleicons.org/googlecolab",
  matplotlib: "https://cdn.simpleicons.org/plotly", // Using Plotly as Matplotlib isn't in SimpleIcons
  seaborn: "https://cdn.simpleicons.org/python", // Using Python as Seaborn isn't in SimpleIcons
  pytorch: "https://cdn.simpleicons.org/pytorch",
  langchain: "https://cdn.simpleicons.org/langchain",
  huggingface: "https://cdn.simpleicons.org/huggingface",
  streamlit: "https://cdn.simpleicons.org/streamlit",
  netlify: "https://cdn.simpleicons.org/netlify",
  vercel: "https://cdn.simpleicons.org/vercel",
};

// Helper function to get icon source
const getIconSrc = (iconKey) => {
  if (iconImages[iconKey]) return iconImages[iconKey];
  if (cdnIcons[iconKey]) return cdnIcons[iconKey];
  return pythonIcon; // Default fallback
};



const SkillCard = ({ skill, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ delay: index * 0.05, duration: 0.3 }}
    whileHover={{ y: -4 }}
    className="group relative overflow-hidden"
  >
    <div className="relative h-full">
      {/* Card Content */}
      <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 sm:p-6 h-full flex flex-col items-center justify-center gap-3 hover:border-primary/40 transition-all duration-300 shadow-md hover:shadow-lg">
        {/* Icon Container */}
        <div
          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${skill.color} p-0.5`}
        >
          <div className="w-full h-full rounded-xl bg-background/95 flex items-center justify-center">
            <img
              src={getIconSrc(skill.icon)}
              alt={skill.name}
              className="w-9 h-9 object-contain"
            />
          </div>
        </div>

        {/* Skill Name */}
        <div className="text-center">
          <h3 className="font-semibold text-sm sm:text-base text-foreground transition-colors">
            {skill.name}
          </h3>
        </div>
      </div>
    </div>
  </motion.div>
);


export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("fullstack");
  const filteredSkills = skills.filter(skill => 
    skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-28 px-4 bg-gradient-to-br from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        <motion.div 
          className="absolute top-20 right-20 w-72 h-72 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-[100px] hidden sm:block" 
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }} 
          transition={{ duration: 15, repeat: Infinity }} 
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-[100px] hidden sm:block" 
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }} 
          transition={{ duration: 20, repeat: Infinity, delay: 2 }} 
        />
      </div>
      
      <div className="container mx-auto max-w-7xl relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 bg-primary rounded-full animate-ping" />
            </div>
            <span className="text-sm sm:text-base font-semibold text-primary tracking-wide">TECH STACK</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">My </span>
            <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            A diverse toolkit of technologies I leverage to build exceptional solutions
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex gap-2 overflow-x-auto no-scrollbar px-1 sm:justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-base font-medium border transition-all duration-300 shrink-0 ${
                  activeCategory === category.id
                    ? `${category.color} text-white shadow-lg shadow-primary/25 border-transparent`
                    : "bg-card border-border text-foreground hover:border-primary/50 hover:bg-primary/5"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {category.icon}
                <span className="whitespace-nowrap">{category.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};