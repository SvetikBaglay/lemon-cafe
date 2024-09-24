
import './App.css';

function Highlights() {
  return (
    <div className="flex-container">
      
      <div>
        <div>
          <h2>This weeks specials!</h2>
          <button className='btn'>Online Menu</button>
        </div>
        <div className='cards'>
          <div className='card'>
            <img className='image-food'></img>
            <div>
              <h4>Greek salad</h4>
              <label>$12.99</label>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
            </p>
            <div>
              <span>Order a delivery</span>
              <img className='icon-delivery'></img>
            </div>
          </div>
          <div className='card'>
            <img className='image-food'></img>
            <div>
              <h4>Greek salad</h4>
              <label>$12.99</label>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
            </p>
            <div>
              <span>Order a delivery</span>
              <img className='icon-delivery'></img>
            </div>
          </div>
          <div className='card'>
            <img className='image-food'></img>
            <div>
              <h4>Greek salad</h4>
              <label>$12.99</label>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
            </p>
            <div>
              <span>Order a delivery</span>
              <img className='icon-delivery'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default Highlights;
