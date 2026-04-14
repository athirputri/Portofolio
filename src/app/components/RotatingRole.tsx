import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const roles = [
  "UI/UX Designer",
  "Content Creator",
  "Frontend Developer",
  "Creative Problem Solver"
];

export function RotatingRole() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[1.5em] relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute"
        >
          {roles[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
