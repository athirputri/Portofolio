import { motion } from "motion/react";
import { useState } from "react";

interface FlipCardProps {
  title: string;
  description: string;
  technologies: string[];
  delay?: number;
}

export function FlipCard({ title, description, technologies, delay = 0 }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-[280px] w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-white/70 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center border border-[#8ACDD7]/20 shadow-sm">
          <h3 className="text-center text-[#FF90BC]">{title}</h3>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full backface-hidden bg-[#8ACDD7] rounded-2xl p-8 flex flex-col justify-between"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div>
            <h3 className="mb-3 text-white">{title}</h3>
            <p className="text-sm text-white/90 mb-4">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white/20 rounded-full text-xs text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
