import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ExternalLink, X } from "lucide-react";

import workshopImg from "../assets/workshop.jpg";
import contributionImg from "../assets/contribution.jpg";
import concerImg from "../assets/concer.jpg";

const impactCards = [
  {
    img: workshopImg,
    tag: "GLOBAL WORKSHOP",
    accent: "#06d6a0",
    caption:
      "Conducted an international autism workshop connecting learners worldwide",
    description:
      "I organized and conducted an international autism awareness workshop that brought together participants from different regions. The session focused on inclusive technology, assistive learning methods, and practical demonstrations of how digital tools can improve accessibility. The workshop encouraged collaboration, discussion, and knowledge sharing among educators, learners, and community members.",
  },
  {
    img: contributionImg,
    tag: "CONTRIBUTION",
    accent: "#f72585",
    caption:
      "Contributed the complete AI learning app to an Autism Child Development Centre",
    description:
      "I designed, developed, and donated a complete AI-powered gesture learning application to support autistic children's education. The system uses intelligent recognition and interactive learning techniques to improve engagement and communication skills. The contribution was officially recognized by the Autism Child Development Centre and continues to support educational activities.",
  },
];

export default function ImpactSection() {
  const [selectedCard, setSelectedCard] = useState<
    (typeof impactCards)[0] | null
  >(null);

  return (
    <>
      <section
        id="impact"
        className="relative py-20 sm:py-28 px-5 sm:px-6 overflow-hidden"
        style={{ background: "#ffffff" }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(6,214,160,0.4), transparent)",
          }}
        />

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <div
              className="section-tag"
              style={{
                color: "#06d6a0",
                background: "rgba(6,214,160,0.08)",
                border: "1px solid rgba(6,214,160,0.2)",
              }}
            >
              REAL-WORLD DEPLOYMENT
            </div>

            <h2
              className="font-heading font-black leading-none"
              style={{
                fontSize: "clamp(2rem, 7vw, 5rem)",
                color: "#0f172a",
              }}
            >
              FROM DEVELOPMENT
              <br />
              <span className="gradient-text">TO REAL IMPACT</span>
            </h2>
          </motion.div>

          {/* Changed sm:grid-cols-3 to sm:grid-cols-2 to fit 2 cards perfectly */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-5 sm:mb-6">
            {impactCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setSelectedCard(card)}
                className="cursor-pointer relative rounded-3xl overflow-hidden"
                style={{
                  aspectRatio: "3/4",
                  boxShadow: `0 20px 60px ${card.accent}18`,
                  border: `1.5px solid ${card.accent}15`,
                }}
              >
                <img
                  src={card.img}
                  alt={card.caption}
                  className="w-full h-full object-cover"
                />

                <div
                  className="absolute inset-0 flex items-end p-5"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 18%, rgba(0,0,0,0.25) 35%, transparent 55%)",
                  }}
                >
                  <div>
                    <span
                      className="text-xs font-black tracking-widest mb-2 inline-block px-3 py-1 rounded-full"
                      style={{
                        background: card.accent,
                        color: "white",
                      }}
                    >
                      {card.tag}
                    </span>

                    <p
                      className="text-white font-bold text-sm sm:text-base"
                      style={{
                        textShadow: "0 2px 8px rgba(0,0,0,0.9)",
                      }}
                    >
                      {card.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden"
              style={{ aspectRatio: "16/9" }}
            >
              <img
                src={concerImg}
                alt="Contribution at Autism Centre"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
              style={{
                background:
                  "linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)",
                border: "1.5px solid rgba(6,214,160,0.25)",
              }}
            >
              <div>
                <div className="flex items-start gap-3 mb-5">
                  <CheckCircle
                    className="w-7 h-7"
                    style={{ color: "#059669" }}
                  />

                  <div>
                    <div
                      className="text-xs font-black tracking-widest"
                      style={{ color: "#059669" }}
                    >
                      OFFICIALLY VERIFIED
                    </div>

                    <div className="font-black text-lg">
                      Contribution Certificate
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-600">
                  Official certificate recognising the donation of the complete
                  AI-powered gesture learning application.
                </p>
              </div>

              <a
                href="/certificates/contribution-certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-white mt-6"
                style={{
                  background:
                    "linear-gradient(135deg, #06d6a0, #059669)",
                }}
              >
                <ExternalLink className="w-4 h-4" />
                VIEW CERTIFICATE
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl overflow-hidden w-full max-w-6xl max-h-[90vh] grid md:grid-cols-2"
            >
              <div className="bg-black flex items-center justify-center">
                <img
                  src={selectedCard.img}
                  alt={selectedCard.caption}
                  className="max-h-[90vh] w-full object-contain"
                />
              </div>

              <div className="p-8 overflow-y-auto relative">
                <button
                  onClick={() => setSelectedCard(null)}
                  className="absolute top-5 right-5"
                >
                  <X size={28} />
                </button>

                <div
                  className="inline-block px-4 py-2 rounded-full text-white font-bold mb-4"
                  style={{ background: selectedCard.accent }}
                >
                  {selectedCard.tag}
                </div>

                <h3 className="text-3xl font-black text-slate-900 mb-6">
                  {selectedCard.caption}
                </h3>

                <p className="text-slate-600 leading-8 text-lg">
                  {selectedCard.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}