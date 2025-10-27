import { Rocket, Star, User, Home } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 dark:bg-black/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-emerald-400 shadow-lg shadow-fuchsia-500/20 flex items-center justify-center">
            <Rocket size={18} className="text-white" />
          </div>
          <span className="text-xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-sky-400 to-emerald-300">
            VibedIn
          </span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#home" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <Home size={16} /> Home
          </a>
          <a href="#feed" className="text-white/80 hover:text-white transition-colors">Feed</a>
          <a href="#rooms" className="text-white/80 hover:text-white transition-colors">Rooms</a>
          <a href="#shop" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <Star size={16} /> Shop
          </a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-white/10 hover:bg-white/15 text-white/90 border border-white/10 shadow-sm transition-colors">
          <User size={16} /> Let’s vibe
        </button>
      </div>
    </header>
  );
}
