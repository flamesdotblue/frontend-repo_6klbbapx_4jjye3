import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OPTIONS = [
  { label: "Anime", emoji: "🗡️", color: "from-fuchsia-400 to-pink-500" },
  { label: "Tech", emoji: "🧪", color: "from-cyan-400 to-blue-500" },
  { label: "Fitness", emoji: "💪", color: "from-emerald-400 to-lime-400" },
  { label: "Music", emoji: "🎧", color: "from-violet-400 to-indigo-500" },
  { label: "Art", emoji: "🎨", color: "from-amber-300 to-orange-500" },
  { label: "Gaming", emoji: "🎮", color: "from-sky-400 to-cyan-500" },
];

export default function VibeSelector() {
  const [selected, setSelected] = useState(["Tech", "Music"]);

  const toggle = (label) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Pick your vibes</h2>
          <p className="text-white/70 text-sm sm:text-base mt-1">Quick select to tune your personalized feed.</p>
        </div>
        <button className="hidden sm:inline-flex rounded-xl px-4 py-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white text-sm">
          Surprise me ✨
        </button>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {OPTIONS.map((opt) => {
          const active = selected.includes(opt.label);
          return (
            <motion.button
              key={opt.label}
              onClick={() => toggle(opt.label)}
              whileTap={{ scale: 0.98 }}
              className={`relative overflow-hidden rounded-2xl p-3 text-left border transition-all ${
                active
                  ? "border-white/30 bg-white/10"
                  : "border-white/10 bg-white/5 hover:bg-white/10"
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-0 opacity-60 bg-gradient-to-br ${opt.color}`}
              />
              <div className="relative z-10 flex items-center justify-between">
                <div className="text-2xl leading-none">{opt.emoji}</div>
                <div className="text-sm font-semibold text-white drop-shadow-sm">{opt.label}</div>
              </div>
              <AnimatePresence>
                {active && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="relative z-10 mt-3 text-[11px] text-white/90 bg-black/30 rounded-lg px-2 py-1 w-max"
                  >
                    Added to your feed
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
