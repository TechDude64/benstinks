import Header from './components/Header';
import Navigation from './components/Navigation';
import Biography from './components/Biography';
import Achievements from './components/Achievements';
import OdorLog from './components/OdorLog';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Biography />
        <Achievements />
        <OdorLog />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default App;
