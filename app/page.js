import IntroSection from './components/IntroSection';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#181818]">
      <NavBar />
      <div className="container mt-24 mx-auto p-12">
        <IntroSection />
      </div>
    </main>
  );
}



// Last Timestamp: 0:42:50