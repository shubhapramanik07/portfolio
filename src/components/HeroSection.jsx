import { Code, Download, Mail, Github, Linkedin, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/ShubhaPramanik_Resume.pdf';
    link.download = 'Shubha-Pramanik-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col px-4 sm:px-6 py-12 lg:px-12 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-primary/10 to-purple-600/10 blur-[100px] hidden sm:block" 
          animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }} 
          transition={{ duration: 15, repeat: Infinity }} 
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-400/10 to-emerald-500/10 blur-[100px] hidden sm:block" 
          animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }} 
          transition={{ duration: 20, repeat: Infinity, delay: 2 }} 
        />
      </div>

      {/* Main Content - Centered */}
      <div className="flex-1 flex items-center justify-center">
        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Side - Profile Image */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Profile Image */}
              <motion.div 
                className="w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 aspect-square rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/profile-logo.png" 
                  alt="Shubha Pramanik" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Status Badge */}
              <motion.div 
                className="absolute -bottom-3 sm:-bottom-2 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-foreground">Available for Work</span>
                </div>
              </motion.div>

              {/* Decorative Ring */}
              <motion.div 
                className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/20 hidden sm:block"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>


            {/* Social Links */}
            <motion.div 
              className="mt-6 flex gap-4 sm:gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a 
                href="https://github.com/shubhapramanik07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/50 border border-border hover:border-primary/50 hover:bg-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/shubhapramanik075/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="mailto:shubhapramanik07@gmail.com"
                className="p-3 rounded-full bg-background/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </motion.div>

          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Greeting */}
            <motion.p 
              className="text-lg sm:text-xl text-primary font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-foreground">Shubha </span>
              <motion.span 
                className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{ backgroundSize: '200% 100%' }}
              >
                Pramanik
              </motion.span>
            </motion.h1>

            {/* Role */}
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Frontend Developer | AIML Enthusiast
            </motion.h2>

            {/* Short Bio */}
            <motion.p 
              className="text-base sm:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span className="sm:hidden">
                B.Tech CSE student passionate about Frontend Development, Machine Learning, NLP, Deep Learning, and Generative AI. Building real-world projects and actively contributing to open source.
              </span>
              <span className="hidden sm:inline">
                Currently pursuing B.Tech in Computer Science Engineering, I build projects across frontend development, Machine Learning, NLP, DL and Generative AI while actively contributing to open source. Alongside development, I practice Data Structures & Algorithms and participate in hackathons to strengthen problem-solving and real-world engineering skills.
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.a 
                href="#about"
                className="px-6 sm:px-8 py-3.5 sm:py-4 w-full sm:w-auto rounded-xl font-semibold bg-gradient-to-r from-primary to-purple-600 text-primary-foreground shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code className="h-5 w-5" />
                <span>Know More About Me</span>
              </motion.a>
              
              <motion.button
                onClick={handleDownloadResume}
                className="px-6 sm:px-8 py-3.5 sm:py-4 w-full sm:w-auto rounded-xl font-semibold border border-primary/50 text-foreground hover:border-primary transition-all duration-300 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-5 w-5" />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        </div>
      </div>


    </section>
  );
};
