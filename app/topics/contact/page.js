import NavBar from "../../components/NavBar";
import EmailSection from "../../components/EmailSection";
import Footer from "../../components/Footer";


export default function page() {
  return (
    <main className="flex min-h-screen flex-col bg-mainbg font-sans">
      <NavBar />
      <div className="container mt-24 mx-auto m-2">
      <EmailSection />
    </div>

    <Footer />
    </main>
    
  );
}