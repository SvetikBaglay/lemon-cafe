

import './App.css';
import './Main.css'
import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';

function Main() {
  return (
    <div className="App">
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </div>
   
  );
}

export default Main;
