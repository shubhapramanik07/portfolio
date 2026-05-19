import React, { useState } from 'react';
import { Trophy, Award, Medal, Star, Target, Zap, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AchievementsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredAchievement, setHoveredAchievement] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: 'all', label: 'All', icon: <Star className="h-4 w-4" /> },
    { id: 'competition', label: 'Competitions', icon: <Trophy className="h-4 w-4" /> },
    { id: 'certification', label: 'Certifications', icon: <Award className="h-4 w-4" /> },
  ];

  const achievements = [
    {
      id: 1,
      title: "Beginner's Champion",
      category: "competition",
      organization: "Hackaverse (College-Level Hackathon)",
      date: "2025",
      location: "College",
      description: "Built a solution under time constraints, focusing on practical implementation and teamwork.",
      icon: <Trophy className="h-6 w-6" />,
      color: "from-yellow-500 to-orange-500",
      link: "https://www.linkedin.com/posts/shubhapramanik075_hackaverse2025-beginnerschampion-theblackpearl-activity-7315680696134443009-yuvY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGhgWYBfezmErdSnVuXjXDuWNzPSIZnqOc",
      badge: "🥇 Winner"
    },
    {
      id: 2,
      title: "Hack4Bengal Participant",
      category: "competition",
      organization: "Hack4Bengal (State Level)",
      date: "2025",
      location: "West Bengal",
      description: "Worked on real-world problem statements, collaborated with diverse teams, led the team as Team Lead, and gained exposure to large-scale hackathon environments.",
      icon: <Medal className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      link: "https://www.linkedin.com/posts/shubhapramanik075_hack4bengal-paharika-hackathonjourney-activity-7328051426310402048-uDhk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGhgWYBfezmErdSnVuXjXDuWNzPSIZnqOc",
      badge: "🏆 State Level"
    },
    {
      id: 3,
      title: "SIH Internal Round",
      category: "competition",
      organization: "Smart India Hackathon",
      date: "2025",
      location: "College",
      description: "Secured 1st Runner Up position in the Smart India Hackathon internal round, demonstrating problem-solving skills and innovative thinking.",
      icon: <Award className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      link: "https://www.linkedin.com/posts/shubhapramanik075_sih2025-hackathon-innovation-activity-7374151358826033152-C1G8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGhgWYBfezmErdSnVuXjXDuWNzPSIZnqOc",
      badge: "1st Runner Up"
    },
    {
      id: 4,
      title: "Code@Frost Participant",
      category: "competition",
      organization: "AEC College",
      date: "2025",
      location: "AEC College",
      description: "Participated in Code@Frost hackathon organized by AEC College, gaining valuable experience in competitive coding and team collaboration.",
      icon: <Target className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      link: "https://www.linkedin.com/posts/shubhapramanik075_codefrost-hackathon-cybersecurity-activity-7411783480205967360-h6vU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGhgWYBfezmErdSnVuXjXDuWNzPSIZnqOc",
      badge: "Participant"
    },
    // Certifications
    {
      id: 5,
      title: "Roadmap to Programming",
      category: "certification",
      organization: "Online Course",
      date: "2025",
      location: "Online",
      description: "Completed comprehensive programming roadmap certification covering fundamental to advanced concepts.",
      icon: <Award className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      link: "#",
      badge: "Certified",
      image: "/certificates/roadmap2programming.png"
    },
    {
      id: 6,
      title: "Version Control",
      category: "certification",
      organization: "Online Course",
      date: "2025",
      location: "Online",
      description: "Mastered version control systems including Git and GitHub for collaborative software development.",
      icon: <Award className="h-6 w-6" />,
      color: "from-blue-500 to-indigo-500",
      link: "#",
      badge: "Certified",
      image: "/certificates/Version_control.png"
    },
    {
      id: 7,
      title: "Hackaverse Certificate",
      category: "certification",
      organization: "Hackaverse Hackathon",
      date: "2025",
      location: "College",
      description: "Certificate of participation and achievement in Hackaverse college-level hackathon.",
      icon: <Award className="h-6 w-6" />,
      color: "from-yellow-500 to-orange-500",
      link: "#",
      badge: "Certified",
      image: "/certificates/hackaverse.png"
    },
    {
      id: 8,
      title: "Hack4Bengal Certificate",
      category: "certification",
      organization: "Hack4Bengal",
      date: "2025",
      location: "West Bengal",
      description: "Certificate of participation in Hack4Bengal state-level hackathon.",
      icon: <Award className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      link: "#",
      badge: "Certified",
      image: "/certificates/hack4bengal.png"
    },
    {
      id: 9,
      title: "SIH Certificate",
      category: "certification",
      organization: "Smart India Hackathon",
      date: "2025",
      location: "College",
      description: "Certificate for 1st Runner Up position in Smart India Hackathon internal round.",
      icon: <Award className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      link: "#",
      badge: "Certified",
      image: "/certificates/sih.png"
    },
    {
      id: 10,
      title: "Code@Frost Certificate",
      category: "certification",
      organization: "AEC College",
      date: "2025",
      location: "AEC College",
      description: "Certificate of participation in Code@Frost hackathon organized by AEC College.",
      icon: <Award className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      link: "#",
      badge: "Certified",
      image: "/certificates/code@frost.png"
    },
  ];

  const filteredAchievements = activeCategory === 'all' 
    ? achievements 
    : achievements.filter(a => a.category === activeCategory);

  // Show only first 6 items (2 rows) unless showAll is true
  const displayedAchievements = showAll ? filteredAchievements : filteredAchievements.slice(0, 6);
  const hasMoreItems = filteredAchievements.length > 6;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="achievements" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        <motion.div 
          className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 blur-[100px] hidden sm:block" 
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }} 
          transition={{ duration: 15, repeat: Infinity }} 
        />
        <motion.div 
          className="absolute bottom-1/4 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-[100px] hidden sm:block" 
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }} 
          transition={{ duration: 20, repeat: Infinity, delay: 2 }} 
        />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 mb-6">
            <div className="relative">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 bg-yellow-500 rounded-full animate-ping" />
            </div>
            <span className="text-sm sm:text-base font-semibold text-yellow-600 dark:text-yellow-400 tracking-wide">ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-foreground">My </span>
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Milestones, certifications, and recognitions that mark my journey
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex gap-2 overflow-x-auto no-scrollbar px-1 sm:justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setShowAll(false);
                }}
                className={`flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-base font-medium transition-all duration-300 shrink-0 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg shadow-yellow-500/25'
                    : 'bg-card border border-border text-foreground hover:border-yellow-500/50 hover:bg-yellow-500/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon}
                <span className="text-xs sm:text-base whitespace-nowrap">{category.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {displayedAchievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group"
                onMouseEnter={() => setHoveredAchievement(achievement.id)}
                onMouseLeave={() => setHoveredAchievement(null)}
              >
                <motion.div 
                  className={`relative h-full bg-card/50 backdrop-blur-xl border rounded-2xl p-4 sm:p-5 transition-all duration-500 overflow-hidden ${
                    hoveredAchievement === achievement.id 
                      ? 'border-yellow-500/50 shadow-xl shadow-yellow-500/10' 
                      : 'border-border hover:border-yellow-500/30'
                  }`}
                  whileHover={{ y: -5 }}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Certificate Image */}
                  {achievement.image && (
                    <div className="mb-3 rounded-xl overflow-hidden border border-border">
                      <img 
                        src={achievement.image} 
                        alt={achievement.title}
                        className="w-full h-28 sm:h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-white`}>
                      {achievement.badge}
                    </span>
                  </div>

                  {/* Icon - only show if no image */}
                  {!achievement.image && (
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${achievement.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {achievement.icon}
                    </div>
                  )}

                  {/* Content */}
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-3">
                    {achievement.organization}
                  </p>

                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {achievement.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{achievement.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{achievement.location}</span>
                    </div>
                  </div>

                  {/* View Link - only show for non-certificate items */}
                  {!achievement.image && (
                    <motion.a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative z-10 inline-flex items-center gap-2 text-xs sm:text-sm font-medium bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer`}
                      whileHover={{ x: 5 }}
                    >
                      View Details
                      <ExternalLink className="h-3.5 w-3.5 text-yellow-500" />
                    </motion.a>
                  )}

                  {/* Decorative Corner */}
                  <div className={`absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-r ${achievement.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* See More Button */}
        {hasMoreItems && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-8 py-3 rounded-full font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? 'Show Less' : 'See More'}
              <motion.span
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ↓
              </motion.span>
            </motion.button>
          </motion.div>
        )}

      </div>
    </section>
  );
};
