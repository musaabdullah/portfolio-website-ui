import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
function App() {
  return (
    <div className="app">
       <Navbar />
       {/* <Home /> */}
       {/* <Testimonial /> */}
       {/* <Contact /> */}
       {/* <About /> */}
       <Portfolio />
    </div>
  );
}

export default App;
