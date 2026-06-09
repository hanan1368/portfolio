import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "PROJECT", href: "#project" },
  { label: "IMPACT", href: "#impact" },
  { label: "RESEARCH", href: "#research" },
  { label: "JOURNEY", href: "#journey" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl"
      >
        <div
          className="flex items-center justify-between gap-4 px-5 py-3 rounded-full transition-all duration-500"
          style={{
            background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.82)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(124,58,237,0.15)",
            boxShadow: scrolled
              ? "0 8px 40px rgba(124,58,237,0.14)"
              : "0 4px 20px rgba(124,58,237,0.08)",
          }}
        >
          <a
            href="#hero"
            className="font-heading font-black text-sm tracking-wider whitespace-nowrap gradient-text flex-shrink-0"
          >
            HANAN H
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="px-3 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all duration-200 hover:bg-purple-50"
                style={{ color: "#475569", letterSpacing: "0.1em" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#7c3aed"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#475569"; }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200"
            style={{ background: open ? "rgba(124,58,237,0.1)" : "transparent" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open
              ? <X className="w-4 h-4" style={{ color: "#7c3aed" }} />
              : <Menu className="w-4 h-4" style={{ color: "#7c3aed" }} />
            }
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-3xl overflow-hidden md:hidden"
            style={{
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(124,58,237,0.15)",
              boxShadow: "0 20px 60px rgba(124,58,237,0.14)",
            }}
          >
            <div className="p-4 flex flex-col gap-1">
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="px-5 py-3.5 rounded-2xl text-sm font-black tracking-wider transition-all duration-200"
                  style={{ color: "#0f172a" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.07)";
                    (e.currentTarget as HTMLElement).style.color = "#7c3aed";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "#0f172a";
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
