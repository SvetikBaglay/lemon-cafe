

import '../App.css'
import './Main.css'
import './OrderPage.css'
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Confirm() {
  const location = useLocation();
  const { selectedItems } = location.state || { selectedItems: [] }; // Отримуємо вибрані страви з state

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Оплата успішно виконана!');
  };

  return (

    <div>
      <h1>Підтвердження платежу</h1>
      <h2>Ваше замовлення:</h2>
      <ul>
        {selectedItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)} x {item.quantity}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='number-card'>Number Card:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='validity-period'>Validity period (MM/YY):</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='cvv-cod'>CVV:</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='button button-primary' aria-label='Pay'>Оплатити</button>
      </form>
    </div>
  );
}

export default Confirm;
