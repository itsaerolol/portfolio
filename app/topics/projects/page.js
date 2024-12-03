import NavBar from "../../components/NavBar";
import ProjectsSection from "../../components/ProjectsSection";
import Footer from "../../components/Footer";


export default function page() {
  return (
    <main className="flex min-h-screen flex-col bg-mainbg font-sans">
      <NavBar />
      <div className="container mt-24 mx-auto m-2">
      <ProjectsSection />
    </div>

    <Footer />
    </main>
    
  );
}