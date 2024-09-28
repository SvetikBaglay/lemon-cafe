

import '../App.css';
import './Main.css'
import './BookingForm.css'
import React, { useState } from 'react';


function BookingForm({ availableTimes }) {
  const [resDate, setResDate] = useState('');
  const [resTime, setResTime] = useState('17:00');
  const [numberGuests, setNumberGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');


  function handleChangeResDate(e) {
    setResDate(e.target.value);
    console.log('selected date:', e.target.value);
  }

  function handleChangeNumberGuests(e) {
    setNumberGuests(e.target.value);
    console.log('number  guests:', e.target.value);
  }

  function handleSelect(e) {
    setResTime(e.target.value);
    console.log('selected time:', e.target.value);
  }

  function handleOccasion(e) {
    setOccasion(e.target.value)
    console.groupCollapsed('selected Occasion', e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      date: resDate,
      time: resTime,
      guests: numberGuests,
      occasion: occasion,
    };
    console.log('formData', formData);
  }

  return (
    <div className='booking-container'>
      <form onSubmit={handleSubmit} className='booking-form'>
        <div className='info-block'>
          <label htmlFor='res-date'>Choose date</label>
          <input onChange={handleChangeResDate} value={resDate} type='date' name='date' id='date' />
          
          <label htmlFor='res-time'>Choose time</label>
          <select value={resTime} onChange={handleSelect} id='resTime' name='resTime'>
            {availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
          
          <label htmlFor='guests'>Number of guests</label>
          <input onChange={handleChangeNumberGuests} value={numberGuests} type='number' name='numberGuests' id='numberGuests' min='1' max='10' />
        </div>
        
        <label htmlFor='occasion'>Occasion</label>
        <div className='seat-block'>
          <select value={occasion} onChange={handleOccasion} id='occasion' name='occasion'>
            <option value='Birthday'>Birthday</option>
            <option value='Anniversary'>Anniversary</option>
          </select>
          
          <input className='button button-secondary' name='reservations' id='reservations' 
            type='submit' value='Make Your reservation' />
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
