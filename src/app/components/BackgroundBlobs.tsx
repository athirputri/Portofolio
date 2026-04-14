import { motion } from "motion/react";

export function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat"
        }}
      />

      {/* Animated blobs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(138, 205, 215, 0.15) 0%, rgba(138, 205, 215, 0) 70%)",
          filter: "blur(60px)",
          top: "10%",
          left: "60%"
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255, 192, 217, 0.12) 0%, rgba(255, 192, 217, 0) 70%)",
          filter: "blur(80px)",
          top: "50%",
          right: "10%"
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255, 144, 188, 0.1) 0%, rgba(255, 144, 188, 0) 70%)",
          filter: "blur(70px)",
          bottom: "20%",
          left: "70%"
        }}
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute w-[550px] h-[550px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(138, 205, 215, 0.08) 0%, rgba(138, 205, 215, 0) 70%)",
          filter: "blur(90px)",
          top: "70%",
          left: "20%"
        }}
        animate={{
          x: [0, -70, 0],
          y: [0, 90, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
