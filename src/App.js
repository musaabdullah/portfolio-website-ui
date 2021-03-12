import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {useState}  from 'react';
function App() {

  const [home, setHome] = useState(true);
  const [testimonial, settestimonial] = useState(false);
  const [contact, setcontact] = useState(false);
  const [portfolio, setportfolio] = useState(false);
  const [about, setabout] = useState(false);

  
  const handleTestimonial = () => {
    settestimonial(true);
    setHome(false);
    setcontact(false);
    setportfolio(false);
    setabout(false);
  }
  const handleContact = () => {
    settestimonial(false);
    setHome(false);
    setcontact(true);
    setportfolio(false);
    setabout(false);
  }
  const handlePortfolio = () => {
    settestimonial(false);
    setHome(false);
    setcontact(false);
    setportfolio(true);
    setabout(false);
  }
  const handleHome = () => {
    settestimonial(false);
    setHome(true);
    setcontact(false);
    setportfolio(false);
    setabout(false);
  }
  const handleAbout = () => {
    settestimonial(false);
    setHome(false);
    setcontact(false);
    setportfolio(false);
    setabout(true);
  } 

  return (
    <div className="app">
      <Router>
       <Navbar handPortfolio={handlePortfolio} handleAbout={handleAbout} handleHome={handleHome} handleContact={handleContact} handleTestimonial={handleTestimonial} testimonial={testimonial} about={about} contact={contact} home={home} portfolio={portfolio} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/testimonial" component={Testimonial} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/about" component={About} />
       {/* <Home /> */}
       {/* <Testimonial /> */}
       {/* <Contact /> */}
       {/* <About /> */}
       {/* <Portfolio /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
