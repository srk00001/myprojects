import './App.css';
import Contact from './Components/Contact';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import NavbarComp from './Components/Navbar';
import Product from './Components/Product';

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Hero />
      <Features />
      <Product />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;