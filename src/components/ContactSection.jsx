import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Github,
  Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Name is required",
        variant: "destructive"
      });
      return false;
    }
    
    if (!formData.email.trim()) {
      toast({
        title: "Email is required",
        variant: "destructive"
      });
      return false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast({
        title: "Invalid email format",
        variant: "destructive"
      });
      return false;
    }
    
    if (!formData.message.trim() || formData.message.length < 10) {
      toast({
        title: "Message must be at least 10 characters",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    toast({
      title: "Message sent! 🎉",
      description: "I'll get back to you within 24 hours.",
      className: "bg-green-600 text-white border border-green-700 shadow-lg"
    });
    setFormData({ name: "", email: "", message: "" });

  } catch (error) {
    toast({
      title: "Oops! Something went wrong",
      description: "Please try again or email me directly at shubhapramanik07@gmail.com",
      variant: "destructive"
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="py-10 sm:py-16 md:py-20 px-3 sm:px-6 relative bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
            <div className="relative">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 bg-primary rounded-full animate-ping" />
            </div>
            <span className="text-xs sm:text-base font-semibold text-primary tracking-wide">LET'S CONNECT</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-2xl bg-gradient-to-br from-secondary/20 to-background border border-border">
            <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-2.5 sm:w-4 h-2.5 sm:h-4 rounded-full bg-primary"></span>
              <span className="hidden sm:inline">Contact Details</span>
              <span className="sm:hidden">Details</span>
            </h3>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 p-2 sm:p-4 hover:bg-accent/30 rounded-lg transition-all duration-300">
                <div className="p-1.5 sm:p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0 mt-0.5 sm:mt-0">
                  <Mail className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0 flex-1 overflow-hidden">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <a
                    href="mailto:shubhapramanik07@gmail.com"
                    className="text-[13px] sm:text-base font-medium hover:text-primary transition-colors break-all max-w-full"
                  >
                    shubhapramanik07@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start sm:items-center gap-3 p-2 sm:p-4 hover:bg-accent/30 rounded-lg transition-all duration-300">
                <div className="p-1.5 sm:p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0 mt-0.5 sm:mt-0">
                  <Phone className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <a
                    href="tel:+917547906062"
                    className="text-xs sm:text-base font-medium hover:text-primary transition-colors"
                  >
                    +91 7547906062
                  </a>
                </div>
              </div>
              
              <div className="flex items-start sm:items-center gap-3 p-2 sm:p-4 hover:bg-accent/30 rounded-lg transition-all duration-300">
                <div className="p-1.5 sm:p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0 mt-0.5 sm:mt-0">
                  <MapPin className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-muted-foreground">Location</p>
                  <span className="text-xs sm:text-base font-medium">
                    Siliguri, India
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 sm:pt-6">
              <h4 className="font-medium mb-3 text-xs text-muted-foreground uppercase tracking-wide">Find me on</h4>
              <div className="flex gap-2">
                {[
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    url: "https://www.linkedin.com/in/shubhapramanik075/",
                  },
                  {
                    icon: Twitter,
                    label: "Facebook",
                    url: "https://www.facebook.com/subha.pramanik.35110/",
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    url: "https://github.com/shubhapramanik07",
                  },
                  {
                    icon: Instagram,
                    label: "Instagram",
                    url: "https://www.instagram.com/shubhapramanik07/",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-2.5 rounded-lg bg-accent hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-2xl bg-card border border-border shadow-sm">
            <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-2.5 sm:w-4 h-2.5 sm:h-4 rounded-full bg-primary"></span>
              <span className="hidden sm:inline">Send Me a Message</span>
              <span className="sm:hidden">Message</span>
            </h3>

            <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 rounded-lg sm:rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 rounded-lg sm:rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 sm:px-4 py-2 rounded-lg sm:rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none text-sm"
                  placeholder="Hey, I'd love to collaborate..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-lg bg-gradient-to-r from-primary to-purple-600 text-white font-medium text-sm sm:text-base hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20",
                  isSubmitting && "opacity-80 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="hidden sm:inline">Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="hidden sm:inline">Send Message</span>
                    <span className="sm:hidden">Send</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};