import { motion } from "motion/react";

export function FloatingObjects() {
  const shapes = [
    { size: 40, color: "#8ACDD7", top: "15%", left: "20%", duration: 15, delay: 0 },
    { size: 30, color: "#FFC0D9", top: "25%", left: "75%", duration: 18, delay: 2 },
    { size: 50, color: "#FF90BC", top: "45%", left: "10%", duration: 20, delay: 1 },
    { size: 35, color: "#8ACDD7", top: "65%", left: "85%", duration: 16, delay: 3 },
    { size: 45, color: "#FFC0D9", top: "80%", left: "30%", duration: 22, delay: 1.5 },
    { size: 25, color: "#FF90BC", top: "35%", left: "50%", duration: 17, delay: 2.5 },
    { size: 55, color: "#8ACDD7", top: "55%", left: "60%", duration: 19, delay: 0.5 },
    { size: 38, color: "#FFC0D9", top: "20%", left: "90%", duration: 21, delay: 1.8 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[5]">
      {shapes.map((shape, index) => {
        const shapeType = index % 3;

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              top: shape.top,
              left: shape.left,
              width: shape.size,
              height: shape.size,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shape.delay,
            }}
          >
            {shapeType === 0 && (
              <div
                className="w-full h-full rounded-full opacity-20"
                style={{ backgroundColor: shape.color }}
              />
            )}
            {shapeType === 1 && (
              <div
                className="w-full h-full opacity-20"
                style={{
                  backgroundColor: shape.color,
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                }}
              />
            )}
            {shapeType === 2 && (
              <div
                className="w-full h-full opacity-20"
                style={{
                  backgroundColor: shape.color,
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
