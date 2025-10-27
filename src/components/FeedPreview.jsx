import { motion } from "framer-motion";

const MOCK = [
  {
    id: 1,
    tag: "Tech",
    title: "AI Co-host just summarized our 2hr room!",
    emoji: "🤖",
    color: "from-cyan-400/40 to-blue-500/40",
  },
  {
    id: 2,
    tag: "Music",
    title: "Drop your track for feedback 🎶",
    emoji: "🎧",
    color: "from-fuchsia-400/40 to-violet-500/40",
  },
  {
    id: 3,
    tag: "Fitness",
    title: "7-day streak unlocked – show up challenge",
    emoji: "🔥",
    color: "from-emerald-400/40 to-lime-400/40",
  },
];

function Card({ item, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.05, duration: 0.4 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur group"
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.color}`} />
      <div className="relative z-10 flex items-center gap-2 text-xs text-white/80">
        <span className="inline-flex items-center gap-1 rounded-full bg-black/30 px-2 py-1 border border-white/10">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {item.tag}
        </span>
        <span className="text-white/50">•</span>
        <span className="text-white/70">Swipe to react</span>
      </div>

      <div className="relative z-10 mt-4 flex items-center gap-3">
        <div className="text-4xl">{item.emoji}</div>
        <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug">
          {item.title}
        </h3>
      </div>

      <div className="relative z-10 mt-6 flex items-center gap-3">
        {"😍🔥👍🎯".split("").map((r, idx) => (
          <motion.button
            key={idx}
            whileTap={{ scale: 0.9 }}
            className="rounded-2xl bg-white/10 border border-white/15 px-3 py-2 text-lg hover:bg-white/15"
          >
            {r}
          </motion.button>
        ))}
      </div>

      <motion.div
        initial={{ x: 0 }}
        whileHover={{ x: 6 }}
        className="relative z-10 mt-6 text-sm text-white/80"
      >
        Auto-translate ready • Comments live
      </motion.div>
    </motion.div>
  );
}

export default function FeedPreview() {
  return (
    <section id="feed" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Your swipe feed</h2>
          <p className="text-white/70 text-sm sm:text-base mt-1">A quick look at what your communities are posting.</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-white/70">
          <span className="text-xs">Powered by fluid scroll</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {MOCK.map((m, i) => (
          <Card key={m.id} item={m} i={i} />
        ))}
      </div>
    </section>
  );
}
