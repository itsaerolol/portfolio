import IntroSection from "./components/IntroSection";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import AchievementsSection from "./components/AchievementsSection";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-mainbg font-sans">
      <NavBar />
      <div className="container mt-24 mx-auto m-2">
        <IntroSection />
        <AchievementsSection />
      </div>
    <Footer />
    </main>
  );
}
