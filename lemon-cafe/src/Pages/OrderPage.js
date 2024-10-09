

import '../App.css'
import './Main.css'
import './OrderPage.css'
import Delivery from './Delivery';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function OrderPage() {
  const navigate = useNavigate();

  const [selectedItems, setSelectedItems] = useState([]);
  const [showDelivery, setShowDelivery] = useState(false);


  const handleAddToBasket = (item) => {
    console.log('dish:', item)
    setSelectedItems((prevItems) => [...prevItems, item]);
    setShowDelivery(true);

    navigate('/delivery');
  };

  return (
    <div className="menu-container">
      {console.log('Selected Items in OrderPage:', selectedItems)}
      {showDelivery ? (
        <Delivery  />
      ) :(
      <>
        <div className="row">
        <div className="col">
          <h1>Greek Salad</h1>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
            </p>
          <div className='order-content'>
            <label htmlFor='greek-salad'>$12.99</label>
            {/* <button aria-label='Add-to-Basket' className='button button-secondary'

            >
              Add to Basket</button> */}
            <button className='button button-secondary'
            onClick={() => handleAddToBasket({ name: 'Greek Salad', price: 12.99 })}
            >
              Add to Basket</button>
          </div>
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
            <div className='order-content'>
              <label htmlFor='brushetta'>$7.99</label>
              {/* <button aria-label='Add-to-Basket' className='button button-secondary'

            >
              Add to Basket</button> */}
              <button className='button button-secondary'
              onClick={() => handleAddToBasket({ name: 'Bruschetta', price: 7.99 })}
              >
                Add to Basket</button>
            </div>

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
          <div className='order-content'>
            <label htmlFor='grill-fish'>$20.00</label>
            {/* <button aria-label='Add-to-Basket'  className='button button-secondary'

            >
              Add to Basket</button> */}
            <button className='button button-secondary'
            onClick={() => handleAddToBasket({ name: 'Grilled Fish', price: 20.00 })}
            >
              Add to Basket</button>
          </div>
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
          <div className='order-content'>
            <label htmlFor='pasta'>$18.99</label>
            {/* <button aria-label='Add-to-Basket'  className='button button-secondary'

            >
              Add to Basket</button> */}
            <button className='button button-secondary'
            onClick={() => handleAddToBasket({ name: 'Pasta', price: 18.99 })}
            >
              Add to Basket</button>
          </div>
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
          <div className='order-content'>
            <label htmlFor='lemon-dessert'>$8.99</label>
            {/* <button aria-label='Add-to-Basket'  className='button button-secondary'

            >
              Add to Basket</button> */}
            <button className='button button-secondary'
            onClick={() => handleAddToBasket({ name: 'Lemon Dessert', price: 8.99 })}
            >
              Add to Basket</button>
          </div>
        </div>
        <div className="col">
          <img className='img-meal' alt='bruchetta' src='../images/lemon_dessert.jpg'></img>
        </div>
      </div>
      </>
      )}
    </div>
  );
}


export default OrderPage;
