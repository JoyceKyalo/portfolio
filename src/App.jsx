import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from './components/About'
import Experience from './components/Experience'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
      </main>
    </div>
  );
}

export default App;
