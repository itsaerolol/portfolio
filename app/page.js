import IntroSection from './components/IntroSection';
import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import Image from 'next/image';
import SplashScreen from './components/SplashScreen';

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col bg-[#181818]">
      <div className="container mt-24 mx-auto p-12">
        <NavBar />
        <IntroSection />
        <SplashScreen />
      </div>
    </main>
  );
}



// Last Timestamp: 0:42:50