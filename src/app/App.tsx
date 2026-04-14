import { motion } from "motion/react";
import { FlipCard } from "./components/FlipCard";
import { BackgroundBlobs } from "./components/BackgroundBlobs";
import { FloatingObjects } from "./components/FloatingObjects";
import { RotatingRole } from "./components/RotatingRole";
import { Navbar } from "./components/Navbar";
import { Mail, Github, Linkedin, Briefcase } from "lucide-react";

export default function App() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce platform with shopping cart, payment system, and product management features.",
      technologies: ["React", "Node.js", "PHP"]
    },
    {
      title: "Task Management App",
      description: "Task management application with drag-and-drop interface and real-time collaboration.",
      technologies: ["React", "PHP"]
    },
    {
      title: "Company Profile",
      description: "Interactive company profile website with dynamic content and responsive design.",
      technologies: ["React", "PHP", "MySQL"]
    }
  ];

  const experiences = [
    {
      role: "Ambassador",
      organization: "Ambassador Program",
      period: "2023 - 2024",
      description: "Representing the organization at various events, managing social media, and building community engagement."
    },
    {
      role: "Intern",
      organization: "Lunar Interactive",
      period: "2025",
      description: "Internship at Lunar Interactive as a frontend developer, working on various interactive web projects."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F9E0] relative">
      <BackgroundBlobs />
      <FloatingObjects />
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-12 md:px-20 lg:px-32 py-20 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-2xl mb-4 text-[#2d3748]/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, there! I am,
            </motion.p>
            <motion.h1
              className="mb-8 text-[#FF90BC]"
              style={{ fontSize: "4.5rem", fontWeight: 700, lineHeight: 1.1 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              PUTRI ATHIRA ZAHRA
            </motion.h1>
            <motion.div
              className="text-2xl text-[#2d3748]/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <RotatingRole />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white/50 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-[#FF90BC]">My Projects</h2>
            <p className="text-[#2d3748]/70">Hover to see project details</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <FlipCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-[#FFC0D9]/20 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-[#FF90BC]">Experience</h2>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.organization}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-[#8ACDD7]/20 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8ACDD7] rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 text-[#FF90BC]">{exp.role}</h3>
                    <p className="text-[#2d3748] mb-2">{exp.organization}</p>
                    <p className="text-sm text-[#2d3748]/60 mb-3">{exp.period}</p>
                    <p className="text-[#2d3748]/80">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-10 px-6 bg-[#FF90BC] relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-white">Let's Work Together</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Interested in collaborating or want to know more about me?
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="mailto:putriathiraaww@gmail.com"
                className="px-8 py-3 bg-white text-[#FF90BC] rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a
                href="https://github.com/athirputri"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors inline-flex items-center gap-2 border border-white/20"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/putri-athira-zahra-15835a32b/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors inline-flex items-center gap-2 border border-white/20"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 px-6 bg-[#F9F9E0] relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-[#2d3748]/60">
            © 2026 Portfolio. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}