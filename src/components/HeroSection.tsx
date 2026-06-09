import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, ExternalLink } from "lucide-react";

const skills = [
  { label: "AI / Machine Learning", color: "#7c3aed", bg: "#f5f3ff" },
  { label: "Computer Vision", color: "#06d6a0", bg: "#f0fdf9" },
  { label: "TensorFlow", color: "#f72585", bg: "#fdf2f8" },
  { label: "MediaPipe", color: "#7c3aed", bg: "#f5f3ff" },
  { label: "Python", color: "#f59e0b", bg: "#fffbeb" },
  { label: "Research", color: "#06d6a0", bg: "#f0fdf9" },
  { label: "Web Development", color: "#f72585", bg: "#fdf2f8" },
  { label: "Leadership", color: "#7c3aed", bg: "#f5f3ff" },
  { label: "Community Engagement", color: "#f59e0b", bg: "#fffbeb" },
];

function useCounter(target: number, duration = 1600) {
  const [count, setCount] = useState(0);
  const triggered = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          let start = 0;
          const step = Math.ceil(target / (duration / 16));
          const t = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(t); }
            else setCount(start);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function MiniGeometricArt() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 110, height: 110 }}>
      <style>{`
        @keyframes miniOrbit1 { from{transform:rotate(0deg) translateX(38px) rotate(0deg)} to{transform:rotate(360deg) translateX(38px) rotate(-360deg)} }
        @keyframes miniOrbit2 { from{transform:rotate(120deg) translateX(50px) rotate(-120deg)} to{transform:rotate(480deg) translateX(50px) rotate(-480deg)} }
        @keyframes miniOrbit3 { from{transform:rotate(240deg) translateX(62px) rotate(-240deg)} to{transform:rotate(600deg) translateX(62px) rotate(-600deg)} }
        @keyframes miniRotSelf { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes miniRotSelfR { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
        @keyframes miniPulseSoft { 0%,100%{transform:scale(1)} 50%{transform:scale(1.04)} }
      `}</style>
      
      {[100, 76, 52].map((d, i) => (
        <div key={d} className="absolute rounded-full border" style={{ width: d, height: d, borderColor: ["rgba(124,58,237,0.15)", "rgba(6,214,160,0.2)", "rgba(247,37,133,0.15)"][i], borderStyle: i === 1 ? "dashed" : "solid", animation: `${i % 2 === 0 ? "miniRotSelf" : "miniRotSelfR"} ${20 + i * 8}s linear infinite` }} />
      ))}
      
      <div className="absolute w-10 h-10 rounded-[10px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(6,214,160,0.08))", border: "1.5px solid rgba(124,58,237,0.2)", animation: "miniPulseSoft 4s ease-in-out infinite", boxShadow: "0 0 20px rgba(124,58,237,0.1)" }}>
        <span className="font-heading font-black text-xl" style={{ background: "linear-gradient(135deg, #7c3aed, #06d6a0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>H</span>
      </div>
      
      {[
        { animation: "miniOrbit1 8s linear infinite", bg: "#7c3aed", size: 6 },
        { animation: "miniOrbit2 12s linear infinite", bg: "#06d6a0", size: 5 },
        { animation: "miniOrbit3 16s linear infinite", bg: "#f72585", size: 4 },
        { animation: "miniOrbit1 10s linear infinite reverse", bg: "#f59e0b", size: 5 },
      ].map((dot, i) => (
        <div key={i} className="absolute rounded-full" style={{ width: dot.size, height: dot.size, background: dot.bg, animation: dot.animation, boxShadow: `0 0 ${dot.size * 2}px ${dot.bg}80` }} />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const { count: countInternships, ref: refInternships } = useCounter(7);
  const { count: countStudents, ref: refStudents } = useCounter(50);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #faf8ff 0%, #f0fdf9 50%, #fdf4ff 100%)" }}
    >
      {/* Background Orbs & Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full" style={{ width: "clamp(260px,55vw,520px)", height: "clamp(260px,55vw,520px)", top: "-80px", right: "-60px", background: "radial-gradient(circle at 35% 35%, rgba(124,58,237,0.18), rgba(124,58,237,0.04))", animation: "orbMove 18s ease-in-out infinite" }} />
        <div className="absolute rounded-full" style={{ width: "clamp(180px,40vw,380px)", height: "clamp(180px,40vw,380px)", bottom: "-40px", left: "-40px", background: "radial-gradient(circle at 35% 35%, rgba(6,214,160,0.15), rgba(6,214,160,0.03))", animation: "orbMove 22s ease-in-out infinite reverse" }} />
        <div className="absolute rounded-full" style={{ width: "clamp(80px,15vw,160px)", height: "clamp(80px,15vw,160px)", top: "40%", left: "5%", background: "radial-gradient(circle, rgba(247,37,133,0.12), transparent)", animation: "floatB 12s ease-in-out infinite" }} />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle, rgba(124,58,237,0.25) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
        {[220, 380, 540].map((d, i) => (
          <div key={d} className="absolute rounded-full border hidden sm:block" style={{ width: d, height: d, top: "50%", left: "72%", marginLeft: -d / 2, marginTop: -d / 2, borderColor: ["rgba(124,58,237,0.18)", "rgba(6,214,160,0.14)", "rgba(247,37,133,0.1)"][i], borderStyle: "solid", animation: `${i % 2 === 0 ? "spinSlow" : "spinRev"} ${24 + i * 10}s linear infinite` }} />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="absolute rounded-full" style={{ width: 4 + (i % 3) * 3, height: 4 + (i % 3) * 3, background: ["#7c3aed", "#06d6a0", "#f72585"][i % 3], opacity: 0.25 + (i % 4) * 0.08, top: `${10 + (i * 8) % 80}%`, left: `${5 + (i * 9) % 88}%`, animation: `floatA ${5 + (i % 5) * 1.5}s ease-in-out infinite`, animationDelay: `${(i * 0.7) % 4}s` }} />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center min-h-[80vh]">

          {/* LEFT SIDE: Hero Text */}
          <div className="flex flex-col items-start text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="section-tag mb-6">
              <span className="w-2 h-2 rounded-full animate-pulse flex-shrink-0" style={{ background: "#06d6a0" }} />
              <span></span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="font-heading font-black tracking-tighter leading-[0.87]" style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}>
              BUILDING AI
              <br />
              <span style={{ background: "linear-gradient(135deg,#7c3aed 0%,#06d6a0 60%,#7c3aed 100%)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", animation: "gradientShift 5s linear infinite" }}>
                FOR AUTISM
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="text-lg sm:text-xl mt-6 max-w-2xl" style={{ color: "#64748b" }}>
              Artificial Intelligence × Autism Education × Real-World Impact
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4 mt-10">
              <a href="#project" className="btn-primary">VIEW PROJECT</a>
              <a href="#impact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-white transition-all duration-300 hover:-translate-y-1" style={{ background: "linear-gradient(135deg,#06d6a0,#059669)", boxShadow: "0 4px 20px rgba(6,214,160,0.3)" }}>
                VIEW IMPACT
              </a>
              <a href="#research" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-white transition-all duration-300 hover:-translate-y-1" style={{ background: "linear-gradient(135deg,#f72585,#c0007c)", boxShadow: "0 4px 20px rgba(247,37,133,0.3)" }}>
                VIEW RESEARCH
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Profile Card */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="hidden lg:block">
            <div className="rounded-[36px] p-8" style={{ background: "rgba(255,255,255,0.82)", backdropFilter: "blur(24px)", border: "1px solid rgba(124,58,237,0.15)", boxShadow: "0 30px 90px rgba(124,58,237,0.15)" }}>
              
              <div className="text-xs font-black tracking-widest mb-4" style={{ color: "#94a3b8" }}>
                THE PERSON BEHIND THE WORK
              </div>

              <h2 className="font-heading font-black leading-none mb-4" style={{ fontSize: "clamp(3rem,5vw,4.5rem)", color: "#0f172a" }}>
                HANAN H
              </h2>

              <div className="inline-flex px-4 py-2 rounded-full text-sm font-bold mb-8" style={{ background: "rgba(124,58,237,0.07)", border: "1.5px solid rgba(124,58,237,0.18)", color: "#7c3aed" }}>
                BCA · Women's Christian College · CGPA 8.0
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {skills.map(({ label, color, bg }) => (
                  <div key={label} className="px-3 py-2 rounded-full text-xs font-bold transition-all duration-300 hover:-translate-y-1" style={{ background: bg, border: `1.5px solid ${color}25`, color }}>
                    {label}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div ref={refInternships} className="rounded-2xl p-5" style={{ background: "#ffffff", border: "1px solid rgba(124,58,237,0.08)" }}>
                  <div className="text-4xl font-black" style={{ color: "#7c3aed" }}>{countInternships}</div>
                  <div className="text-sm text-slate-500 mt-1">Internships</div>
                </div>

                <div ref={refStudents} className="rounded-2xl p-5" style={{ background: "#ffffff", border: "1px solid rgba(6,214,160,0.08)" }}>
                  <div className="text-4xl font-black" style={{ color: "#06d6a0" }}>{countStudents}+</div>
                  <div className="text-sm text-slate-500 mt-1">Students Mentored</div>
                </div>
              </div>

              {/* Resume Links & Mini Animation mapped exactly to screenshot */}
              <div className="flex items-end justify-between mt-2">
                <div className="flex flex-col gap-5">
                  <a
                    href="/certificates/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-start gap-1 text-xs font-bold tracking-widest text-slate-800 hover:text-purple-600 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-purple-600 transition-colors" />
                    VIEW RESUME
                  </a>

                  <a
                    href="/certificates/resume.pdf"
                    download="Hanan_H_Resume.pdf"
                    className="group flex flex-col items-start gap-1 text-xs font-bold tracking-widest text-slate-800 hover:text-purple-600 transition-colors"
                  >
                    <Download className="w-5 h-5 text-slate-600 group-hover:text-purple-600 transition-colors" />
                    DOWNLOAD RESUME
                  </a>
                </div>

                <div className="flex-shrink-0 flex justify-center items-center">
                  <MiniGeometricArt />
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      <motion.a href="#project" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.8 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer">
        <span className="text-xs font-bold tracking-widest" style={{ color: "#94a3b8" }}>SCROLL</span>
        <div className="animate-bounce p-2 rounded-full" style={{ background: "rgba(124,58,237,0.08)" }}>
          <ChevronDown className="w-5 h-5" style={{ color: "#7c3aed" }} />
        </div>
      </motion.a>
    </section>
  );
}