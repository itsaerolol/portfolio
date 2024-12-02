import IntroSection from "./components/IntroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import Image from "next/image";
import SplashScreen from "./components/SplashScreen";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-mainbg">
      <div className="container mt-24 mx-auto m-2">
        <NavBar />
        <IntroSection />
        <AboutSection />
      </div>
    </main>
  );
}

// Last Timestamp: 0:54:15
