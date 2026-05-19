import {
  ArrowUp,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  Mail,
  Phone,
  MapPin,
  Heart,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/shubhapramanik075/", label: "LinkedIn", color: "hover:bg-blue-600 hover:text-white" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/shubhapramanik07/", label: "Instagram", color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white" },
    { icon: <Github size={20} />, href: "https://github.com/shubhapramanik07", label: "GitHub", color: "hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900" },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shubhapramanik07@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+917547906062");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="px-4 sm:px-6 py-12 sm:py-16 mt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse hidden sm:block" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000 hidden sm:block" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Glass background container */}
        <motion.div 
          className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 rounded-3xl p-6 sm:p-10 border border-white/30 dark:border-gray-700/50 shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Top Section - Contact CTA */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Branding */}
            <motion.div variants={itemVariants} className="space-y-5 md:col-span-1">
              <motion.h3 
                className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                SHUBHA
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Frontend Developer & Designer creating meaningful digital experiences with modern technologies.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`p-2.5 sm:p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 transition-all duration-300 ${social.color}`}
                    whileHover={{ y: -5, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div variants={itemVariants}>
              <h4 className="text-gray-900 dark:text-white font-semibold mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a 
                      href={link.href} 
                      className="group flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 text-sm"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info with Copy Feature */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <h4 className="text-gray-900 dark:text-white font-semibold mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Get In Touch
              </h4>
              <div className="space-y-4">
                {/* Email */}
                <motion.div 
                  className="group flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
                      <a 
                        href="mailto:shubhapramanik07@gmail.com" 
                        className="text-gray-900 dark:text-white font-medium hover:text-primary transition-colors"
                      >
                        shubhapramanik07@gmail.com
                      </a>
                    </div>
                  </div>
                  <motion.button
                    onClick={handleCopyEmail}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check size={18} className="text-green-500" /> : <Copy size={18} className="text-gray-400" />}
                  </motion.button>
                </motion.div>

                {/* Phone */}
                <motion.div 
                  className="group flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Phone</p>
                      <a 
                        href="tel:+917547906062" 
                        className="text-gray-900 dark:text-white font-medium hover:text-primary transition-colors"
                      >
                        +91 7547906062
                      </a>
                    </div>
                  </div>
                  <motion.button
                    onClick={handleCopyPhone}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    title="Copy phone"
                  >
                    {copiedPhone ? <Check size={18} className="text-green-500" /> : <Copy size={18} className="text-gray-400" />}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div 
            className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700/50 flex flex-col items-center text-sm text-gray-600 dark:text-gray-400 space-y-4 sm:space-y-0 sm:flex-row sm:justify-between"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-1">
              <p>© {currentYear} Shubha Pramanik.</p>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
              </motion.span>
            </div>
            
            <div className="flex items-center space-x-6">
              <motion.a
                href="#hero"
                aria-label="Back to top"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-medium">Back to top</span>
                <ArrowUp size={16} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};