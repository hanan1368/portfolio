import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const lines = [
  { text: "ONE PROJECT", delay: 0 },
  { text: "REAL IMPACT", delay: 0.35 },
  { text: "GLOBAL POTENTIAL", delay: 0.7 },
];

export default function ClosingSection() {
  return (
    <section
      id="closing"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-white"
      style={{ background: "linear-gradient(135deg, #3b0764 0%, #6d28d9 25%, #0f766e 60%, #064e3b 100%)" }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div style={{ position: "absolute", width: "clamp(300px,60vw,700px)", height: "clamp(300px,60vw,700px)", borderRadius: "50%", top: "-15%", left: "-10%", background: "radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)", filter: "blur(40px)", animation: "orbMove 20s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: "clamp(200px,45vw,500px)", height: "clamp(200px,45vw,500px)", borderRadius: "50%", bottom: "-10%", right: "-8%", background: "radial-gradient(circle, rgba(6,214,160,0.3) 0%, transparent 70%)", filter: "blur(40px)", animation: "orbMove 24s ease-in-out infinite reverse" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} style={{ position: "absolute", width: 3 + (i % 4) * 2, height: 3 + (i % 4) * 2, borderRadius: "50%", background: ["rgba(255,255,255,0.4)", "rgba(124,58,237,0.7)", "rgba(6,214,160,0.6)", "rgba(247,37,133,0.5)"][i % 4], top: `${5 + (i * 5.7) % 88}%`, left: `${3 + (i * 6.3) % 93}%`, animation: `floatA ${5 + (i % 5) * 1.4}s ease-in-out infinite`, animationDelay: `${(i * 0.6) % 3.5}s` }} />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-5 sm:px-6 max-w-5xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black tracking-widest mb-12 sm:mb-16" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(12px)" }}>
          <span className="w-2 h-2 rounded-full bg-white animate-pulse flex-shrink-0" />
          THE IMPACT SUMMARY
        </motion.div>

        <div className="flex flex-col items-center gap-4 sm:gap-5 mb-12 sm:mb-14 w-full">
          {lines.map((line, i) => (
            <React.Fragment key={line.text}>
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: line.delay, ease: [0.23, 1, 0.32, 1] }}
                className="font-heading font-black leading-none tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 9vw, 7.5rem)", textShadow: "0 4px 40px rgba(0,0,0,0.2)" }}
              >
                {line.text}
              </motion.div>
              {i < 2 && (
                <motion.div
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: line.delay + 0.4 }}
                  style={{ width: 2, height: 36, background: "linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.2))", transformOrigin: "top" }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 1.1 }} className="flex flex-col items-center gap-5">
          <a
            href="https://github.com/hanan1368/Gesture-Based-Learning-Application"
            target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black text-sm sm:text-base tracking-widest transition-all duration-300 hover:-translate-y-2"
            style={{ background: "rgba(255,255,255,1)", color: "#3b0764", boxShadow: "0 8px 40px rgba(0,0,0,0.25)" }}
          >
            THE NEXT STEP
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
          </a>
          <p className="text-xs sm:text-sm font-medium px-4 text-center" style={{ color: "rgba(255,255,255,0.45)" }}>
            HANAN H · AI RESEARCHER · BUILDING INCLUSIVE FUTURES
          </p>
        </motion.div>
      </div>
    </section>
  );
}
