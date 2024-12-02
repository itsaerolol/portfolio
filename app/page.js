import IntroSection from "./components/IntroSection";
import NavBar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";

import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-mainbg">
      <NavBar />
      <div className="container mt-24 mx-auto m-2">
        <IntroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>

      <footer className="footer bg-[#131313] z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <div className="container p-4 flex justify-between font-mono">
          <span>A 2024 Web Class Project.</span>
          <p className="text-right text-slate-600">All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

// Last Timestamp: 0:54:15
