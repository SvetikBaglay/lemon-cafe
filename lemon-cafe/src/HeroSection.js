
import './App.css';

function HeroSection() {
  return (
    <div className="flex-container hero">
      <div className="flex-container hero-container">
        <div className="hero-description">
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="button button-primary " aria-label="Reserve-a-Table">Reserve a Table</button>
      </div>
        <img className="img-hero" src='images/restauranfood.jpg'></img>
      </div>

    </div>

  );
}

export default HeroSection;
