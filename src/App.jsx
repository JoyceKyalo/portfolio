import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from './components/About'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
