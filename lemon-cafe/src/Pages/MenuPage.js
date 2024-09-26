

import '../App.css'
import './Main.css'
import './MenuPage.css'

function MenuPage() {
  return (
    <div className="menu-container">
      <div className="row">
        <div className="col">
          <h6>Greek Salad</h6>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
            </p>
          <label>$12.99</label>
        </div>
        <div className="col">
          <img className='img-meal' alt='greek salad' src='../images/greek_salad.jpg'></img>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h6>Brushetta</h6>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans,
              cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.
            </p>
          <label>$7.99</label>
        </div>
        <div className="col">
          <img className='img-meal' alt='bruchetta' src='../images/bruchetta.png'></img>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h6>Grilled Fish</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.
          </p>
          <label>$20.00</label>
        </div>
        <div className="col">
          <img className='img-meal' alt='bruchetta' src='../images/fish.png'></img>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h6>Pasta</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.
          </p>
          <label>$18.99</label>
        </div>
        <div className="col">
          <img className='img-meal' alt='bruchetta' src='../images/pasta.png'></img>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h6>Lemon Dessert</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.
          </p>
          <label>$8.99</label>
        </div>
        <div className="col">
          <img className='img-meal' alt='bruchetta' src='../images/lemon_dessert.jpg'></img>
        </div>
      </div>
    </div>
  );
}


export default MenuPage;
