import React from "react";
import { motion } from "framer-motion";

const milestones = [
  { num: 1, title: "PROBLEM IDENTIFIED", desc: "Observed autistic learners struggling with keyboard and mouse interfaces during internship", color: "#7c3aed", bg: "#f5f3ff" },
  { num: 2, title: "AI APPLICATION BUILT", desc: "Built gesture recognition system with MediaPipe & TensorFlow — camera captures hand gestures for learning responses", color: "#06d6a0", bg: "#f0fdf9" },
  { num: 3, title: "LEARNERS ENGAGED", desc: "One-on-one mentoring at HashHackCode internship and a 2-day online bootcamp for neurodiverse children", color: "#f72585", bg: "#fdf2f8" },
  { num: 4, title: "GLOBAL WORKSHOP", desc: "Conducted an international autism workshop connecting learners from around the world", color: "#f59e0b", bg: "#fffbeb" },
  { num: 5, title: "CENTRE CONTRIBUTION", desc: "Donated the complete AI application to an Autism Child Development Centre — officially certified", color: "#7c3aed", bg: "#f5f3ff" },
  { num: 6, title: "RESEARCH PUBLISHED", desc: "Published: A Conceptual Framework for Gesture-Based Learning Support in Autism Education", color: "#06d6a0", bg: "#f0fdf9" },
  { num: 7, title: "BEST PAPER AWARD", desc: "Recognised at ICAISI 2026 — International Conference on Artificial Intelligence and Sustainable Innovation", color: "#f59e0b", bg: "#fffbeb" },
  { num: 8, title: "GLOBAL EXPANSION", desc: "Seeking higher education to scale inclusive AI technology to autistic learners worldwide", color: "#f72585", bg: "#fdf2f8" },
];

export default function JourneySection() {
  return (
    <section id="journey" className="relative py-20 sm:py-28 px-5 sm:px-6 overflow-hidden" style={{ background: "#ffffff" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(247,37,133,0.3), transparent)" }} />

      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14 sm:mb-20">
          <div className="section-tag mx-auto" style={{ width: "fit-content" }}>TIMELINE</div>
          <h2 className="font-heading font-black leading-none" style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)", color: "#0f172a" }}>
            THE<span className="gradient-text"> JOURNEY</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-xl mx-auto px-2" style={{ color: "#64748b" }}>
            From a classroom observation to an award-winning AI system deployed in the real world.
          </p>
        </motion.div>

        <div className="relative">
          {/* Mobile: left-aligned vertical line. Desktop: center line */}
          <div className="absolute left-5 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, transparent, #e2d9f3 5%, #e2d9f3 95%, transparent)" }} />

          <div className="flex flex-col gap-6 sm:gap-8">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={m.num}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="relative flex items-center"
                >
                  {/* Mobile: always left-aligned with circle on left */}
                  {/* Desktop: alternating */}
                  <div className="pl-14 sm:pl-0 flex-1 sm:contents">
                    {/* Desktop left card placeholder */}
                    <div className={`hidden sm:flex flex-1 ${isLeft ? "justify-end pr-8" : ""}`}>
                      {isLeft && (
                        <div
                          className="p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 max-w-xs"
                          style={{ background: m.bg, border: `1.5px solid ${m.color}20`, boxShadow: `0 4px 24px ${m.color}0d`, width: "100%" }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${m.color}1a`; (e.currentTarget as HTMLElement).style.borderColor = `${m.color}35`; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 24px ${m.color}0d`; (e.currentTarget as HTMLElement).style.borderColor = `${m.color}20`; }}
                        >
                          <div className="text-xs font-black tracking-widest mb-2" style={{ color: `${m.color}aa` }}>STEP {String(m.num).padStart(2, "0")}</div>
                          <div className="font-black text-base sm:text-lg mb-2" style={{ color: "#0f172a" }}>{m.title}</div>
                          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#64748b" }}>{m.desc}</p>
                        </div>
                      )}
                    </div>

                    {/* Center circle — desktop */}
                    <div className="hidden sm:flex flex-shrink-0 relative z-10">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center font-black text-white text-sm" style={{ background: `linear-gradient(135deg, ${m.color}, ${m.color}cc)`, boxShadow: `0 0 0 4px white, 0 0 0 6px ${m.color}30, 0 8px 24px ${m.color}30` }}>
                        {m.num}
                      </div>
                    </div>

                    {/* Desktop right card */}
                    <div className={`hidden sm:flex flex-1 ${!isLeft ? "justify-start pl-8" : ""}`}>
                      {!isLeft && (
                        <div
                          className="p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 max-w-xs"
                          style={{ background: m.bg, border: `1.5px solid ${m.color}20`, boxShadow: `0 4px 24px ${m.color}0d`, width: "100%" }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${m.color}1a`; (e.currentTarget as HTMLElement).style.borderColor = `${m.color}35`; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 24px ${m.color}0d`; (e.currentTarget as HTMLElement).style.borderColor = `${m.color}20`; }}
                        >
                          <div className="text-xs font-black tracking-widest mb-2" style={{ color: `${m.color}aa` }}>STEP {String(m.num).padStart(2, "0")}</div>
                          <div className="font-black text-base sm:text-lg mb-2" style={{ color: "#0f172a" }}>{m.title}</div>
                          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#64748b" }}>{m.desc}</p>
                        </div>
                      )}
                    </div>

                    {/* Mobile layout: left circle + right card */}
                    <div className="sm:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-xs" style={{ background: `linear-gradient(135deg, ${m.color}, ${m.color}cc)`, boxShadow: `0 0 0 3px white, 0 0 0 5px ${m.color}30` }}>
                        {m.num}
                      </div>
                    </div>
                    <div
                      className="sm:hidden w-full p-4 rounded-2xl"
                      style={{ background: m.bg, border: `1.5px solid ${m.color}20`, boxShadow: `0 4px 24px ${m.color}0d` }}
                    >
                      <div className="text-xs font-black tracking-widest mb-1.5" style={{ color: `${m.color}aa` }}>STEP {String(m.num).padStart(2, "0")}</div>
                      <div className="font-black text-sm mb-1.5" style={{ color: "#0f172a" }}>{m.title}</div>
                      <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{m.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* End bloom */}
          <motion.div initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex flex-col items-center mt-14 gap-4">
            <div className="w-px h-10 sm:h-12" style={{ background: "linear-gradient(to bottom, #e2d9f3, #7c3aed)" }} />
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full flex flex-col items-center justify-center text-center p-4" style={{ background: "linear-gradient(135deg, #f5f3ff, #f0fdf9)", border: "2px dashed rgba(124,58,237,0.3)", boxShadow: "0 0 60px rgba(124,58,237,0.08)" }}>
              <div className="text-xs font-black tracking-widest mb-1" style={{ color: "#7c3aed" }}>NEXT CHAPTER</div>
              <div className="font-black text-xs sm:text-sm" style={{ color: "#0f172a" }}>THE JOURNEY CONTINUES</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
