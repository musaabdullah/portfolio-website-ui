import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="app">
      <Router>
       <Navbar />
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
