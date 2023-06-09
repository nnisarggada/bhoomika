import Awards from "./components/Awards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Awards />
      <Footer />
    </div>
  );
}

export default App;
