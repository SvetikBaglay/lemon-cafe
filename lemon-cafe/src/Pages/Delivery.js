

import '../App.css'
import './Main.css'
import './OrderPage.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function Delivery({ selectedItems }) {
  const navigate = useNavigate();
  
 
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
      <h1>Your Order</h1>
      <ul>
        {selectedItems && selectedItems.length > 0 ? (
          selectedItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)} x 
              <button onClick={() => decrementQuantity(item.name)}>-</button>
              {quantities[item.name]}
              <button onClick={() => incrementQuantity(item.name)}>+</button>
            </li>
          ))
        ) : (
          <li>No items in your order.</li>
        )}
      </ul>
      <button className='button button-primary' onClick={handleProceedToCheckout}>
        Proceed to Checkout
      </button>
    </div>
  ); 
}

export default Delivery;
