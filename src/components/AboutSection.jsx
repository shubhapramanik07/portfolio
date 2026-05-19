import React, { useState, useEffect } from 'react';
import { Briefcase, Code, User, Download, Calendar, Sparkles, Target, Github, Linkedin, Twitter, Mail, Star, GraduationCap, BookOpen, Award, MapPin, Building2, Trophy, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counter, setCounter] = useState(0);
  const [hoveredEdu, setHoveredEdu] = useState(null);
  const [hoveredExp, setHoveredExp] = useState(null);

  const stats = [
    { number: "20+", label: "Projects", icon: <Briefcase className="h-5 w-5" />, color: "from-blue-500 to-cyan-500" },
    { number: "1.5+", label: "Years Exp", icon: <Calendar className="h-5 w-5" />, color: "from-purple-500 to-pink-500" }
  ];

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institution: "Siliguri Institute of Technology",
      location: "Siliguri, West Bengal",
      year: "2024 - 2028",
      grade: "CGPA: 7.6/10",
      icon: <GraduationCap className="h-6 w-6" />,
      highlights: ["DSA","Communication Skills", "Team Projects"]
    },
    {
      degree: "Higher Secondary (12th)",
      field: "Science (PCM with Computer Science)",
      institution: "Balurghat L.M.A.U. Vidyalaya",
      location: "Balurghat, West Bengal",
      year: "2024",
      grade: "Percentage: 82.4%",
      icon: <BookOpen className="h-6 w-6" />,
      highlights: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
    },
    {
      degree: "Secondary (10th)",
      field: "General Studies",
      institution: "Bishrail High School(H.S.)",
      location: "Bishrail, West Bengal",
      year: "2022",
      grade: "Percentage: 89.7%",
      icon: <Award className="h-6 w-6" />,
      highlights: ["Science", "Mathematics", "English", "Social Studies"]
    }
  ];

  const experience = [

    {
      role: "Open Source Contributor",
      company: "Various Projects",
      location: "GitHub",
      duration: "2026",
      type: "Contributor",
      icon: <Github className="h-6 w-6" />,
      description: "Contributing to open source projects, fixing bugs, and adding new features to community-driven software.",
      skills: ["JavaScript", "TypeScript", "Python", "Documentation"],
      achievements: ["5+ contributions"]
    }
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/shubhapramanik07", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/shubhapramanik075/", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://www.instagram.com/shubhapramanik07/", label: "Instagram" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:shubhapramanik07@gmail.com", label: "Email" }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setCounter(prev => (prev + 1) % 4), 2000);
    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Shubha-resume.pdf';
    link.download = 'Shubha-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 ease-out hidden sm:block" style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }} />
        <div className="absolute w-60 sm:w-80 h-60 sm:h-80 bg-secondary/5 rounded-full blur-3xl transition-all duration-1500 ease-out hidden sm:block" style={{ transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)` }} />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-16 right-8 sm:top-20 sm:right-20 animate-float hidden sm:block"><div className="w-6 sm:w-8 h-6 sm:h-8 bg-primary/20 rounded-lg rotate-45" /></div>
        <div className="absolute bottom-32 left-8 sm:bottom-40 sm:left-20 animate-float animation-delay-2000 hidden sm:block"><div className="w-5 sm:w-6 h-5 sm:h-6 bg-secondary/20 rounded-full" /></div>
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 px-2 sm:px-6">
          <motion.div 
            className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 bg-primary rounded-full animate-ping" />
            </div>
            <span className="text-sm sm:text-base font-semibold text-primary tracking-wide">ABOUT ME</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
          >
            <span className="text-foreground">Know More </span>
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">About Me</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            My journey, experience, education ...
          </motion.p>
        </div>

        {/* Top Row - About & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Left Column - About Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/50 border border-border rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60 relative overflow-hidden group"
          >
            {/* Decorative Circles */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-secondary rounded-full -translate-x-16 translate-y-16" />
            </div>

            <div className="relative">
              <div className="flex flex-col items-center gap-6">
                {/* Profile Image */}
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl transition-all duration-500 group-hover:border-primary/40 group-hover:scale-105 relative">
                    <img src="/profile-logo.png" alt="Shubha Pramanik" className="w-full h-full object-cover" />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Personal Info & Stats */}
                <div className="text-center w-full">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Shubha Pramanik</h2>
                  <p className="text-primary text-base sm:text-lg font-semibold mb-4 sm:mb-6">Frontend Developer | AIML Developer</p>
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-6 sm:mb-8">
                    {stats.map((stat, index) => (
                      <motion.div 
                        key={index}
                        className={`p-2 sm:p-3 rounded-xl bg-background/50 border border-border transition-all duration-300 hover:scale-105 cursor-pointer ${counter === index ? 'border-primary/50 shadow-lg' : 'hover:border-primary/30'}`}
                        whileHover={{ y: -2 }}
                      >
                        <div className="flex items-center gap-2 justify-center">
                          <div className={`p-1.5 rounded-lg bg-gradient-to-r ${stat.color} text-white`}>
                            {stat.icon}
                          </div>
                          <div>
                            <div className="font-bold text-sm sm:text-lg">{stat.number}</div>
                            <div className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column - Experience Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/50 border border-border rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-green-500/40 hover:bg-card/60"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
              <div className="p-2.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white">
                <Briefcase className="h-5 sm:h-6 w-5 sm:w-6" />
              </div>
              Experience
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-3 sm:left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-emerald-500 to-teal-500" />
              
              <div className="space-y-5 sm:space-y-6">
                {experience.map((exp, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 sm:pl-12"
                    onMouseEnter={() => setHoveredExp(index)}
                    onMouseLeave={() => setHoveredExp(null)}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1.5 sm:left-3 top-2 w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 border-2 border-background z-10" />
                    
                    <motion.div 
                      className={`bg-background/50 border rounded-xl p-3 sm:p-5 transition-all duration-500 ${hoveredExp === index ? 'border-green-500/50 shadow-lg bg-green-500/5 scale-[1.02]' : 'border-border hover:border-green-500/30'}`}
                    >
                      <div className="flex items-start gap-2 mb-2">
                        <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white flex-shrink-0">
                          {exp.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm sm:text-base text-foreground">{exp.role}</h4>
                          <p className="text-xs text-green-500 font-medium">{exp.company}</p>
                        </div>
                      </div>
                      
                      <span className="inline-block text-[10px] sm:text-xs font-semibold bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full mb-2">
                        {exp.duration}
                      </span>
                      
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                        <MapPin className="h-3 w-3 flex-shrink-0" />
                        <span>{exp.location}</span>
                        <span className="text-green-500 ml-1">• {exp.type}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-2">
                        {exp.skills.slice(0, 3).map((skill, sIndex) => (
                          <span key={sIndex} className="text-[10px] px-2 py-0.5 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <AnimatePresence>
                        {hoveredExp === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 pt-3 border-t border-border"
                          >
                            <p className="text-xs text-muted-foreground mb-2">{exp.description}</p>
                            <div className="space-y-1">
                              {exp.achievements.map((achievement, aIndex) => (
                                <div key={aIndex} className="flex items-center gap-2 text-xs text-foreground">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                                  {achievement}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education Section - Full Width Below */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 md:mt-12 bg-card/50 border border-border rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 flex items-center gap-3">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white">
              <GraduationCap className="h-6 sm:h-7 w-6 sm:w-7" />
            </div>
            <span>Education</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredEdu(index)}
                onMouseLeave={() => setHoveredEdu(null)}
                className="group"
              >
                <motion.div 
                  className={`h-full bg-background/50 border rounded-2xl p-4 sm:p-5 transition-all duration-500 relative overflow-hidden ${hoveredEdu === index ? 'border-primary/50 shadow-lg bg-primary/5 scale-[1.02]' : 'border-border hover:border-primary/30'}`}
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-blue-500 to-cyan-500 transition-opacity duration-500" />
                  
                  <div className="relative">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white flex-shrink-0">
                        {edu.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm sm:text-base text-foreground leading-tight">{edu.degree}</h4>
                        <p className="text-xs text-primary font-medium mt-1">{edu.field}</p>
                      </div>
                    </div>
                    
                    {/* Year Badge */}
                    <span className="inline-block text-[10px] sm:text-xs font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full mb-3">
                      {edu.year}
                    </span>
                    
                    {/* Institution & Location */}
                    <div className="space-y-2 mb-3">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Building2 className="h-3.5 w-3.5 flex-shrink-0 text-blue-500/70" />
                        <span className="truncate">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-blue-500/70" />
                        <span className="truncate">{edu.location}</span>
                      </div>
                    </div>
                    
                    {/* Grade */}
                    <div className="flex items-center gap-2 text-xs mb-4 pb-4 border-b border-border">
                      <Trophy className="h-3.5 w-3.5 text-yellow-500 flex-shrink-0" />
                      <span className="font-semibold text-foreground">{edu.grade}</span>
                    </div>
                    
                    {/* Highlights */}
                    <AnimatePresence>
                      <motion.div
                        initial={hoveredEdu === index ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                        animate={hoveredEdu === index ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-wrap gap-2"
                      >
                        {edu.highlights.map((highlight, hIndex) => (
                          <motion.span 
                            key={hIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: hIndex * 0.05 }}
                            className="text-[10px] px-2.5 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full font-medium"
                          >
                            {highlight}
                          </motion.span>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Styles */}
      <style>
        {`
          @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
          .animate-float { animation: float 3s ease-in-out infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
        `}
      </style>
    </section>
  );
};
