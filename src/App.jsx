import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Privacy from './components/Privacy';
import DownloadSection from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <Privacy />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;