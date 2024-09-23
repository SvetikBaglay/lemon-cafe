
import './App.css';

function Hero() {
  return (
    <div className="flex-container hero">
      <div className="flex-container hero-container">
        <div className="hero-description">
        <h1>Little Lemon</h1>
        <h5>Chicago</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="btn">Reserve a Table</button>
      </div>  
        <img className="img-hero" src='images/restauranfood.jpg'></img>
      </div>
      
    </div>
   
  );
}

export default Hero;
