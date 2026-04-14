import { motion } from "motion/react";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="bg-white/80 backdrop-blur-md rounded-full px-8 py-4 shadow-lg border border-[#8ACDD7]/20">
        <ul className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative block"
                  onClick={() => setActiveSection(item.href.substring(1))}
                >
                  <motion.span
                    className="relative z-10 text-sm transition-colors"
                    style={{
                      color: isActive ? "#FF90BC" : "#2d3748",
                      fontWeight: isActive ? 600 : 500,
                    }}
                    animate={{
                      scale: isActive ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.span>

                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#FFC0D9]/30 rounded-full -z-0"
                      style={{ margin: "-8px -16px", padding: "8px 16px" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
}
