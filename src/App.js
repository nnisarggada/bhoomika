import Awards from "./components/Awards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Awards />
    </div>
  );
}

export default App;
