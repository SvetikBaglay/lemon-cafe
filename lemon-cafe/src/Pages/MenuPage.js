

import '../App.css'
import './Main.css'
import './MenuPage.css'

function MenuPage() {
  return (
    <div className="menu-container">
      <div className="row">
        <div className="col">
          <h1>Greek Salad</h1>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
            </p>
          <label htmlFor='greek-salad'>$12.99</label>
        </div>
        <div className="col">
          <img className='img-meal' alt='greek salad' src='../images/greek_salad.jpg'></img>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Brushetta</h1>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans,
              cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.
            </p>
          <label htmlFor='brushetta'>$7.99</label>
        </div>
        <div className="col">
          <img className='img-meal' alt='bruchetta' src='../images/bruchetta.png'></img>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Grilled Fish</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.
          </p>
          <label htmlFor='grill-fish'>$20.00</label>
        </div>
        <div className="col">
          <img className='img-meal' alt='bruchetta' src='../images/fish.png'></img>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Pasta</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.
          </p>
          <label htmlFor='pasta'>$18.99</label>
        </div>
        <div className="col">
          <img className='img-meal' alt='bruchetta' src='../images/pasta.png'></img>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Lemon Dessert</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.
          </p>
          <label htmlFor='lemon-dessert'>$8.99</label>
        </div>
        <div className="col">
          <img className='img-meal' alt='bruchetta' src='../images/lemon_dessert.jpg'></img>
        </div>
      </div>
    </div>
  );
}


export default MenuPage;
