import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Awards from "./components/Awards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col bg-background min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Awards />
      <Footer />
    </div>
  );
}

export default App;
