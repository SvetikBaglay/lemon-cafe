

import '../App.css'
import './Main.css'
import './OrderPage.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function Delivery({ selectedItems }) {
  const navigate = useNavigate();
console.log('selectedItems ', selectedItems)

  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    console.log('Selected Items:', selectedItems)
    if (selectedItems) {
      const initialQuantities = selectedItems.reduce((acc, item) => {
        acc[item.name] = 1;
        return acc;
      }, {});
      setQuantities(initialQuantities);
    }
  }, [selectedItems]);

  const incrementQuantity = (itemName) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: prevQuantities[itemName] + 1,
    }));
  };

  const decrementQuantity = (itemName) => {
    setQuantities((prevQuantities) => {
      const newQuantity = prevQuantities[itemName] - 1;
      return {
        ...prevQuantities,
        [itemName]: newQuantity < 1 ? 1 : newQuantity,
      };
    });
  };

  const handleProceedToCheckout = () => {
    navigate('/confirm', {
      state: {
        selectedItems: selectedItems.map(item => ({
          ...item,
          quantity: quantities[item.name]
        }))
      }
    });
  };

  return (
    <div>
      <h1>This Page is a Work in Progress</h1>
      {/* <h1>Your Order</h1>
      <ul>
        {selectedItems && selectedItems.length > 0 ? (
          selectedItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)} x
              <button aria-label='Plus-To-Basket' onClick={() => decrementQuantity(item.name)}>-</button>
              {quantities[item.name]}
              <button aria-label='Minuse-To-Basket' onClick={() => incrementQuantity(item.name)}>+</button>
            </li>
          ))
        ) : (
          <li>No items in your order.</li>
        )}
      </ul>
      <button className='button button-primary' aria-label='Proceed' onClick={handleProceedToCheckout}>
        Proceed to Checkout
      </button> */}
    </div>
  );
}

export default Delivery;
