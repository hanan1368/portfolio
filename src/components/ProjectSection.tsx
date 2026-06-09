import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { GitFork, Star, Play, ArrowRight } from "lucide-react";

const steps = [
  { num: "01", label: "Hand Gesture", desc: "Student shows fingers to camera", color: "#7c3aed" },
  { num: "02", label: "Camera Capture", desc: "Webcam streams frames to AI", color: "#06d6a0" },
  { num: "03", label: "AI Detection", desc: "MediaPipe + TensorFlow identify gesture", color: "#f72585" },
  { num: "04", label: "Answer Mapped", desc: "Gesture mapped to learning response", color: "#f59e0b" },
  { num: "05", label: "Feedback Shown", desc: "Immediate visual feedback displayed", color: "#7c3aed" },
];

function FingerCard({ num }: { num: number }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      className="flex flex-col items-center gap-2 p-3 rounded-2xl cursor-default select-none"
      style={{
        background: hovered ? "rgba(124,58,237,0.07)" : "rgba(255,255,255,0.8)",
        border: hovered ? "1.5px solid rgba(124,58,237,0.3)" : "1.5px solid rgba(124,58,237,0.1)",
        boxShadow: hovered ? "0 12px 32px rgba(124,58,237,0.15)" : "0 4px 16px rgba(0,0,0,0.04)",
        width: 64,
        minHeight: 88,
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-6px) scale(1.05)" : "none",
      }}
    >
      <div className="flex items-end gap-0.5" style={{ height: 32 }}>
        {Array.from({ length: 5 }).map((_, fi) => (
          <div key={fi} className="w-2 rounded-full" style={{ height: fi < num ? (hovered ? 28 : 22) : (hovered ? 10 : 8), background: fi < num ? "linear-gradient(to top, #7c3aed, #06d6a0)" : "rgba(0,0,0,0.1)", boxShadow: fi < num && hovered ? "0 0 6px rgba(124,58,237,0.5)" : "none", transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)", transitionDelay: `${fi * 40}ms` }} />
        ))}
      </div>
      <span className="text-xs font-black" style={{ color: hovered ? "#7c3aed" : "#94a3b8" }}>{num}</span>
    </div>
  );
}

export default function ProjectSection() {
  return (
    <section id="project" className="relative py-20 sm:py-28 px-5 sm:px-6 overflow-hidden" style={{ background: "linear-gradient(180deg, #faf8ff 0%, #ffffff 100%)" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)" }} />

      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 sm:mb-16">
          <div className="section-tag">THE AI APPLICATION</div>
          <h2 className="font-heading font-black leading-none" style={{ fontSize: "clamp(2rem, 7vw, 5rem)", color: "#0f172a" }}>
            AI-POWERED<br />
            <span className="gradient-text">GESTURE LEARNING</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-xl" style={{ color: "#64748b" }}>
            An intelligent system that lets autistic learners respond through natural hand gestures — no keyboard, no mouse, no friction.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: pipeline + finger cards */}
          <div className="flex flex-col gap-8 sm:gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.09 } } }} className="flex flex-col gap-2.5">
              <div className="text-xs font-black tracking-widest mb-1" style={{ color: "#94a3b8" }}>HOW IT WORKS</div>
              {steps.map((step, i) => (
                <React.Fragment key={step.num}>
                  <motion.div
                    variants={{ hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } }}
                    className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl group"
                    style={{ background: "rgba(255,255,255,0.9)", border: "1.5px solid rgba(124,58,237,0.08)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                    whileHover={{ scale: 1.02, boxShadow: `0 8px 30px ${step.color}18`, borderColor: `${step.color}30` }}
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-black text-xs text-white flex-shrink-0" style={{ background: step.color }}>{step.num}</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-sm" style={{ color: "#0f172a" }}>{step.label}</div>
                      <div className="text-xs" style={{ color: "#94a3b8" }}>{step.desc}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: step.color }} />
                  </motion.div>
                  {i < steps.length - 1 && <div className="w-px h-2.5 ml-5" style={{ background: "linear-gradient(to bottom, rgba(124,58,237,0.2), transparent)" }} />}
                </React.Fragment>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-xs font-black tracking-widest mb-3" style={{ color: "#94a3b8" }}>GESTURE RECOGNITION — TAP TO SIMULATE</div>
              <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-1">
                {[1, 2, 3, 4, 5].map((n) => <FingerCard key={n} num={n} />)}
              </div>
            </motion.div>
          </div>

          {/* Right: GitHub + YouTube */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <motion.a
              href="https://github.com/hanan1368/Gesture-Based-Learning-Application"
              target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="block card-3d rounded-3xl overflow-hidden group"
              style={{ background: "#f6f8fa", border: "1.5px solid #d0d7de" }}
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaGithub className="text-2xl sm:text-3xl" style={{ color: "#24292f" }} />
                  <div className="min-w-0">
                    <div className="text-xs" style={{ color: "#57606a" }}>hanan1368 /</div>
                    <div className="font-bold text-base sm:text-lg truncate" style={{ color: "#0969da" }}>Gesture-Based-Learning-App</div>
                  </div>
                </div>
                <p className="text-sm mb-5" style={{ color: "#57606a", lineHeight: 1.6 }}>
                  AI hand gesture recognition for autistic learners — MediaPipe + TensorFlow enabling natural finger-based interaction.
                </p>
                <div className="flex items-center gap-4 mb-6 flex-wrap">
                  <div className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "#57606a" }}><Star className="w-4 h-4" style={{ fill: "#e3a008", color: "#e3a008" }} />24</div>
                  <div className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "#57606a" }}><GitFork className="w-4 h-4" />8</div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: "#fff8c5", color: "#7d4e00" }}>Python</span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: "#ddf4ff", color: "#0550ae" }}>AI / ML</span>
                </div>
                <div className="btn-primary self-start text-sm" style={{ pointerEvents: "none" }}>OPEN REPOSITORY</div>
              </div>
              <div className="h-1.5 w-0 group-hover:w-full transition-all duration-700" style={{ background: "linear-gradient(90deg, #7c3aed, #06d6a0)" }} />
            </motion.a>

            <motion.a
              href="https://youtu.be/dRw6ml8MmV4?si=WCh2ul7pYwH343uA"
              target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="block rounded-3xl overflow-hidden group card-3d"
              style={{ background: "#0f0f0f" }}
            >
              <div className="relative flex items-center justify-center overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <div className="absolute inset-0 opacity-20" style={{ background: "linear-gradient(135deg, #7c3aed, #06d6a0)" }} />
                <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ background: "#ff0000", boxShadow: "0 0 40px rgba(255,0,0,0.5)" }}>
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white" style={{ marginLeft: 3, fill: "white" }} />
                </div>
                <div className="absolute bottom-3 left-4 text-xs font-bold tracking-widest text-white/60">LIVE DEMONSTRATION</div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="text-sm font-bold mb-1 text-white/60 tracking-widest">YOUTUBE</div>
                <div className="font-bold text-base sm:text-lg text-white mb-1">Watch the AI gesture recognition in action</div>
                <div className="flex items-center gap-2 mt-3 font-bold text-sm group-hover:gap-3 transition-all" style={{ color: "#ff4444" }}>WATCH DEMO <ArrowRight className="w-4 h-4" /></div>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
