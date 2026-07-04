import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Award } from "lucide-react";

import coverImg from "../assets/cover.jpg";

const PAPER_URL =
  "https://drive.google.com/file/d/1H6av76QWmwo7xlBvQtnkvtDdH712znU2/view?usp=sharing";

export default function ResearchSection() {
  return (
    <section
      id="research"
      className="relative py-20 sm:py-28 px-5 sm:px-6 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #faf8ff 0%, #f5f3ff 100%)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <div className="section-tag">
            PEER-REVIEWED PUBLICATION
          </div>

          <h2
            className="font-heading font-black leading-none"
            style={{
              fontSize: "clamp(2rem, 7vw, 5rem)",
              color: "#0f172a",
            }}
          >
            AWARD-WINNING
            <br />
            <span className="gradient-text-rose">
              RESEARCH
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Paper Cover */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-6 sm:gap-8"
          >
            <a
              href={PAPER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative w-full max-w-xs sm:max-w-sm mx-auto"
            >
              <div
                className="absolute -inset-4 sm:-inset-6 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,214,160,0.1))",
                  filter: "blur(20px)",
                }}
              />

              <div
                className="relative rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02]"
                style={{
                  aspectRatio: "3/4",
                  transform:
                    "perspective(900px) rotateY(-5deg) rotateX(3deg)",
                  boxShadow:
                    "20px 32px 80px rgba(124,58,237,0.18), -4px -4px 24px rgba(0,0,0,0.05), 0 0 0 1px rgba(124,58,237,0.1)",
                }}
              >
                <img
                  src={coverImg}
                  alt="Research Paper Cover"
                  className="w-full h-full object-cover"
                />
              </div>
            </a>

            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {["READ PAPER", "VIEW RESEARCH"].map((label) => (
                <a
                  key={label}
                  href={PAPER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full border-2 font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: "rgba(124,58,237,0.3)",
                    color: "#7c3aed",
                  }}
                  onMouseEnter={(e) => {
                    Object.assign(
                      (e.currentTarget as HTMLElement).style,
                      {
                        background: "#7c3aed",
                        color: "white",
                        borderColor: "#7c3aed",
                        boxShadow:
                          "0 8px 24px rgba(124,58,237,0.3)",
                      }
                    );
                  }}
                  onMouseLeave={(e) => {
                    Object.assign(
                      (e.currentTarget as HTMLElement).style,
                      {
                        background: "transparent",
                        color: "#7c3aed",
                        borderColor:
                          "rgba(124,58,237,0.3)",
                        boxShadow: "none",
                      }
                    );
                  }}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Award Section */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden p-6 sm:p-8"
              style={{
                background:
                  "linear-gradient(135deg, #92400e 0%, #b45309 30%, #d97706 60%, #f59e0b 100%)",
                boxShadow:
                  "0 24px 64px rgba(245,158,11,0.35)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-60"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                }}
              />

              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full"
                style={{
                  background:
                    "rgba(255,255,255,0.08)",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background:
                        "rgba(255,255,255,0.2)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <Award className="w-7 h-7 sm:w-9 sm:h-9 text-white" />
                  </div>

                  <div>
                    <div className="text-white/70 text-xs font-black tracking-widest mb-0.5">
                      RECOGNITION
                    </div>

                    <div className="text-white font-black text-xl sm:text-2xl leading-tight">
                      BEST PAPER AWARD
                    </div>
                  </div>
                </div>

                <div
                  className="rounded-2xl p-4 sm:p-5 mb-4"
                  style={{
                    background:
                      "rgba(255,255,255,0.18)",
                    backdropFilter: "blur(8px)",
                    border:
                      "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  <div className="text-white font-black text-sm sm:text-base mb-1">
                    ICAISI 2026
                  </div>

                  <div className="text-white/80 text-xs sm:text-sm leading-relaxed">
                    International Conference on Artificial
                    Intelligence and Sustainable Innovation
                  </div>
                </div>

                <div className="flex gap-2 mb-5 flex-wrap">
                  <span
                    className="px-3 py-1.5 rounded-full text-xs font-black text-white/90"
                    style={{
                      background:
                        "rgba(255,255,255,0.25)",
                      border:
                        "1px solid rgba(255,255,255,0.3)",
                    }}
                  >
                    2nd Place
                  </span>

                  <span
                    className="px-3 py-1.5 rounded-full text-xs font-black text-white/90"
                    style={{
                      background:
                        "rgba(255,255,255,0.25)",
                      border:
                        "1px solid rgba(255,255,255,0.3)",
                    }}
                  >
                    Paper Presentation
                  </span>
                </div>

                <a
                  href={PAPER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-black text-xs sm:text-sm tracking-wide transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "#ffffff",
                    color: "#92400e",
                    boxShadow:
                      "0 8px 24px rgba(0,0,0,0.2)",
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  VIEW CERTIFICATE
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {[
                {
                  label: "Published",
                  value: "2026",
                  color: "#7c3aed",
                  bg: "#f5f3ff",
                },
                {
                  label: "Topic",
                  value: "Gesture-Based Learning",
                  color: "#06d6a0",
                  bg: "#f0fdf9",
                },
                {
                  label: "Field",
                  value: "Autism & AI",
                  color: "#f72585",
                  bg: "#fdf2f8",
                },
                {
                  label: "Co-Authors",
                  value: "4 Researchers",
                  color: "#f59e0b",
                  bg: "#fffbeb",
                },
              ].map(({ label, value, color, bg }) => (
                <div
                  key={label}
                  className="rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: bg,
                    border: `1.5px solid ${color}25`,
                    boxShadow: `0 4px 16px ${color}0d`,
                  }}
                >
                  <div
                    className="text-xs font-black tracking-widest mb-1.5"
                    style={{ color: `${color}99` }}
                  >
                    {label.toUpperCase()}
                  </div>

                  <div
                    className="font-black text-base sm:text-lg leading-tight"
                    style={{ color }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}