import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[72vh] w-full overflow-hidden rounded-b-[2rem] bg-gradient-to-br from-[#0b0b1f] via-[#120f2f] to-[#061a2d]">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Light glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-[80px]" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/30 blur-[80px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Live communities are vibing now
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-black tracking-tight leading-tight text-white">
            Create, join, and vibe together
          </h1>
          <p className="mt-5 text-white/80 text-base sm:text-lg">
            Neon gradients. Fluid motion. Real-time energy. Build communities around
            your passions with AI co-hosts, streaks, and swipeable feeds.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl px-5 py-3 bg-gradient-to-r from-fuchsia-500 via-sky-500 to-emerald-400 text-black font-medium shadow-lg shadow-fuchsia-500/25">
              Join the wave 🌊
            </button>
            <button className="rounded-2xl px-5 py-3 bg-white/10 hover:bg-white/15 border border-white/15 text-white">
              Build a community ⚡
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
