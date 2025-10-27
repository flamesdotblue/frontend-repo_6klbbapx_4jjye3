import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import VibeSelector from "./components/VibeSelector";
import FeedPreview from "./components/FeedPreview";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a14] text-white selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <HeroSection />
      <VibeSelector />
      <FeedPreview />
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white/60 text-sm">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            VibedIn — Let’s vibe. Crafted for creators, members, and communities.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
